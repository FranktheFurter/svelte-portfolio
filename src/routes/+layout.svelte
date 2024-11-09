<script>
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  export let data;
</script>

<div class="bg-gray-900 text-gray-10">
  <slot />
</div>
<Footer />
