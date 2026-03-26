<template>
  <div style="background-color:#060e1a; color:#a8b2d8; min-height:100vh; font-family:'Inter',system-ui,sans-serif; position:relative;">

    <!-- Subtle background grid -->
    <div class="fixed inset-0 z-0 pointer-events-none bg-grid"></div>

    <!-- AI Neural Network Interactive Canvas -->
    <AiNetworkBackground />

    <!-- Ambient glows -->
    <div class="fixed top-1/4 -left-32 w-96 h-96 rounded-full blur-[200px] pointer-events-none z-0" style="background-color:#64FFDA; opacity:0.04;"></div>
    <div class="fixed bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[200px] pointer-events-none z-0" style="background-color:#64FFDA; opacity:0.04;"></div>

    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 backdrop-blur-xl border-b h-[70px] flex items-center px-8 justify-between" style="background-color:rgba(6,14,26,0.92); border-color:rgba(255,255,255,0.05);">
      <a href="/" class="flex items-center">
        <NuxtImg src="/img/logos.svg" height="35" class="h-[35px] w-auto" alt="Andy Ranaivo Logo" />
      </a>
      <div class="hidden md:flex items-center gap-8 text-sm font-mono">
        <button @click="scrollToSection('about')"
          :style="activeSection === 'about' ? 'color:#64FFDA' : 'color:#8892b0'"
          class="hover:text-teal transition-colors flex items-center gap-1.5">
          <span style="color:#64FFDA; font-size:11px;">01.</span> À propos
        </button>
        <button @click="scrollToSection('skills')"
          :style="activeSection === 'skills' ? 'color:#64FFDA' : 'color:#8892b0'"
          class="transition-colors flex items-center gap-1.5">
          <span style="color:#64FFDA; font-size:11px;">02.</span> Compétences
        </button>
        <button @click="scrollToSection('experience')"
          :style="activeSection === 'experience' ? 'color:#64FFDA' : 'color:#8892b0'"
          class="transition-colors flex items-center gap-1.5">
          <span style="color:#64FFDA; font-size:11px;">03.</span> Expérience
        </button>
        <button @click="scrollToSection('projets')"
          :style="activeSection === 'projets' ? 'color:#64FFDA' : 'color:#8892b0'"
          class="transition-colors flex items-center gap-1.5">
          <span style="color:#64FFDA; font-size:11px;">04.</span> Projets
        </button>
        <a href="/ANDY_RANAIVO_CV_2026.pdf" download target="_blank"
          class="px-4 py-2 rounded font-mono text-sm transition-colors"
          style="border:1px solid #64FFDA; color:#64FFDA;"
          onmouseover="this.style.background='rgba(100,255,218,0.1)'"
          onmouseout="this.style.background='transparent'">
          Télécharger CV
        </a>
      </div>
    </nav>

    <!-- Social Sidebar fixed to right -->
    <SocialSidebar />

    <main class="relative z-10">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const { scrollToSection, activeSection } = useSmoothScroll()
</script>