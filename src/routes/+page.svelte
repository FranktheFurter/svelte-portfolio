<script>
  import Hero from "$lib/sections/Hero.svelte";
  import About from "$lib/sections/About.svelte";
  import Projects from "$lib/sections/Projects.svelte";
  import Contact from "$lib/sections/Contact.svelte";

  import SectionContainer from "$lib/components/SectionContainer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<Hero />
<Navbar />

<SectionContainer id="about">
  <About />
</SectionContainer>

<SectionContainer id="projects">
  <Projects />
</SectionContainer>

<SectionContainer id="contact">
  <Contact />
</SectionContainer>
