<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import SectionContainer from "$lib/components/SectionContainer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  let project = null;

  onMount(async () => {
    try {
      const response = await fetch("/data/projects.json");
      const projects = await response.json();
      project = projects.find((p) => p.id === $page.params.id);
    } catch (error) {
      console.error("Error loading project:", error);
    }
  });
</script>

{#if project}
  <Navbar />
  <SectionContainer id={project.title}>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <img
          src={project.previewImage}
          alt={project.title}
          class="rounded-xl w-full"
        />
      </div>
      <div>
        <p class="text-gray-300 mb-4">{project.details}</p>
        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-3 text-white">Technologies</h2>
          <div class="flex flex-wrap gap-2">
            {#each project.technologies as tech}
              <span class="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">
                {tech}
              </span>
            {/each}
          </div>
        </div>
        {#if project.links && project.links.length > 0}
          <div>
            <h2 class="text-2xl font-semibold mb-3 text-white">Links</h2>
            <div class="flex flex-wrap gap-4">
              {#each project.links as link}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <span>{link.description}</span>
                </a>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>

    <div class="mb-8">
      <h2 class="text-2xl font-semibold mb-3 text-white">Objective</h2>
      {#each project.objectiveDetails as detail}
        <p class="text-gray-300 mb-2">{detail}</p>
      {/each}
    </div>

    <div>
      <h2 class="text-2xl font-semibold mb-3 text-white">Project Details</h2>
      {#each project.projectDetails as detail}
        <p class="text-gray-300 mb-2">{detail}</p>
      {/each}
    </div>
  </SectionContainer>
{:else}
  <div class="container mx-auto px-4 py-12">
    <p class="text-gray-300">Project not found.</p>
  </div>
{/if}
