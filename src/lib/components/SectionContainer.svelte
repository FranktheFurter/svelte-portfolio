<script>
  export let id = "";
</script>

<section {id} class="container mx-auto scroll-mt-16">
  <h1 class="text-4xl first-letter:uppercase mb-12">{id}</h1>
  <slot></slot>
</section>
