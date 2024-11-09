<script>
  import { onMount } from "svelte";
  let projects = [];

  onMount(async () => {
    try {
      const response = await fetch("/data/projects.json");
      projects = await response.json();
    } catch (error) {
      console.error("Error loading projects:", error);
      projects = [];
    }
  });

  $: years = [...new Set(projects.map((p) => p.year))].sort().reverse();
</script>

{#each years as year}
  <div class="mb-16">
    <h2 class="text-2xl font-semibold mb-8 text-gray-400">{year}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each projects.filter((p) => p.year === year) as project}
        <div
          class="group bg-gray-800/30 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <a href={`/project/${project.id}`} class="block">
            <div class="relative">
              <img
                src={project.previewImage}
                class="w-full h-56 object-cover transition-all duration-300 group-hover:brightness-110"
                alt={project.title}
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"
              ></div>
            </div>
            <div class="p-6">
              <h5 class="text-xl font-semibold mb-3 text-white">
                {project.title}
              </h5>
              <p class="text-gray-400 mb-4">{project.description}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  class="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >{project.type}</span
                >
                <span
                  class="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >{project.year}</span
                >
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
{/each}
