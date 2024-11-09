<script>
  export let id = "";
</script>

<section {id} class="container mx-auto scroll-mt-16 px-6">
  <h1 class="text-4xl first-letter:uppercase mb-12 text-theme-500/50">{id}</h1>
  <slot></slot>
</section>
