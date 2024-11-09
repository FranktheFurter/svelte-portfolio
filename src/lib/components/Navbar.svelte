<!-- Navbar.svelte -->
<script>
  // Remove the import and use direct path from static folder
</script>

<nav class="sticky top-0 bg-gray-900 shadow-lg z-50">
  <div class="container mx-auto px-4 max-w-7xl">
    <div class="flex items-center justify-start space-x-8 py-4">
      <a href="#home" class="flex items-center">
        <div
          class="w-8 h-8 overflow-hidden bg-gray-900 flex items-center justify-center"
        >
          <img
            src="/logo/fr-logo.png"
            alt="Logo"
            class="w-full h-full object-contain"
          />
        </div>
      </a>
      <a href="#about" class="text-gray-300 hover:text-white transition-colors"
        >About</a
      >
      <a
        href="#projects"
        class="text-gray-300 hover:text-white transition-colors">Projects</a
      >
      <a
        href="#contact"
        class="text-gray-300 hover:text-white transition-colors">Contact</a
      >
    </div>
  </div>
</nav>
