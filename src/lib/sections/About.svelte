<script>
  export let timeline = [];
</script>

<div class="flex flex-col md:flex-row gap-8">
  <div class="flex-1 relative">
    <div class="clearfix">
      <div
        class="float-left mr-6 mb-4 relative w-48 h-48 rounded-full overflow-hidden border-4 border-gray-700 bg-gray-900"
      >
        <img
          src="/images/me.png"
          alt=""
          class="w-full h-full object-contain object-center transform -translate-x-4 translate-y-14 scale-150"
        />
      </div>

      <p class="text-gray-300">
        Hello, I'm Marc Frankfurter, a passionate front-end developer and
        designer who's been captivated by technology since childhood.<br /><br
        />
        I graduated in computer engineering from Ulm, specializing in usability engineering
        and UI development.<br /><br />
        Initially working as a UX designer, I eventually shifted towards a more technical
        role due to my love for development. I thrive on the intricate process of
        combining individual elements in both programming and designing.
      </p>
      <div class="mt-6">
        <a
          href="/cv/marc_frankfurter_cv_de.pdf"
          download
          class="inline-block border-2 border-gray-700 text-white px-4 py-2 rounded-lg mr-4"
        >
          🇩🇪 Download CV (German)
        </a>
        <a
          href="/cv/marc_frankfurter_cv_en.pdf"
          download
          class="inline-block border-2 border-gray-700 text-white px-4 py-2 rounded-lg"
        >
          🇬🇧 Download CV (English)
        </a>
      </div>
    </div>
  </div>
  <div class="flex-1">
    {#each timeline as item}
      <div class="relative pl-6 border-l-2 border-blue-500 mb-8">
        <div class="mb-1">
          <span class="font-semibold text-white">{item.company}</span>
          <span class="text-sm text-gray-400 ml-2">{item.date}</span>
        </div>
        <div class="text-blue-300 mb-1">{item.role}</div>
        <p class="text-gray-400 text-sm">{item.description}</p>
      </div>
    {/each}
  </div>
</div>
