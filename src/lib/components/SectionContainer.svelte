<script>
  export let id = "";
</script>

<section {id} class="container mx-auto p-4">
  <h1 class="text-4xl first-letter:uppercase">{id}</h1>
  <slot></slot>
</section>
