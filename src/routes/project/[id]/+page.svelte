<script>
  export let data;
  const { project } = data;
  let selectedImage = null;

  import SectionContainer from "$lib/components/SectionContainer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar />
{#if project}
  <SectionContainer id={project.title}>
    <p class="text-gray-400 mb-8 text-lg">
      {project.type} • {project.category} • {project.year}
    </p>

    <!-- Image Gallery -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {#each project.images || [project.previewImage] as image}
        <div
          class="rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          on:click={() => (selectedImage = image)}
          on:keydown={(e) => e.key === "Enter" && (selectedImage = image)}
          role="button"
          tabindex="0"
        >
          <img
            src={image}
            class="w-full h-64 object-cover"
            alt={project.title}
          />
        </div>
      {/each}
    </div>

    <!-- Fullscreen Image Modal -->
    {#if selectedImage}
      <div
        class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm"
        on:click={() => (selectedImage = null)}
      >
        <button
          on:click={() => (selectedImage = null)}
          class="absolute top-6 right-6 text-white bg-gray-800 hover:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <img
          src={selectedImage}
          class="max-h-[90vh] max-w-[90vw] object-contain"
          on:click|stopPropagation
          alt={project.title}
        />
      </div>
    {/if}

    <p class="text-gray-300 text-lg mb-8 leading-relaxed">
      {project.details}
    </p>

    <!-- Technologies -->
    <div class="flex flex-wrap gap-2 mb-8">
      {#each project.technologies as tech}
        <span
          class="bg-theme-900/50 text-theme-300 px-4 py-2 rounded-full text-sm"
        >
          {tech}
        </span>
      {/each}
    </div>

    <!-- Links -->
    {#if project.links && project.links.length > 0}
      <div class="mb-8">
        {#each project.links as link}
          <a
            href={link.url}
            class="inline-flex items-center gap-2 text-theme-400 hover:text-theme-300 mr-4 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {#if link.icon}<i class={link.icon}></i>{/if}
            <span>{link.description}</span>
          </a>
        {/each}
      </div>
    {/if}

    <!-- Objective & Project Details -->
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-gray-800/50 rounded-xl p-6">
        <h2 class="text-2xl font-semibold mb-4 text-white">
          Objective Details
        </h2>
        <ul class="space-y-2 text-gray-300">
          {#each project.objectiveDetails as objective}
            <li class="flex items-start gap-2">
              <span class="text-theme-400">•</span>
              <span>{objective}</span>
            </li>
          {/each}
        </ul>
      </div>

      <div class="bg-gray-800/50 rounded-xl p-6">
        <h2 class="text-2xl font-semibold mb-4 text-white">Project Details</h2>
        <ul class="space-y-2 text-gray-300">
          {#each project.projectDetails as detail}
            <li class="flex items-start gap-2">
              <span class="text-theme-400">•</span>
              <span>{detail}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </SectionContainer>
{:else}
  <div class="bg-red-900/50 text-red-300 p-6 rounded-xl">Project not found</div>
{/if}
