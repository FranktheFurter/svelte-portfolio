<script>
  import Hero from "$lib/sections/Hero.svelte";
  import About from "$lib/sections/About.svelte";
  import Projects from "$lib/sections/Projects.svelte";
  import Contact from "$lib/sections/Contact.svelte";

  import SectionContainer from "../lib/components/SectionContainer.svelte";
</script>

<Hero />

<SectionContainer id="about">
  <About />
</SectionContainer>

<SectionContainer id="projects">
  <Projects />
</SectionContainer>

<SectionContainer id="contact">
  <Contact />
</SectionContainer>
