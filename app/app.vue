<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const { activeSection, scrollToSection, initScrollSpy } = useSmoothScroll()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const handleNavClick = (sectionId: string) => {
  isMenuOpen.value = false
  document.body.style.overflow = 'auto'
  scrollToSection(sectionId)
}

onMounted(() => {
  initScrollSpy()
})
</script>

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
    <nav class="fixed top-0 w-full z-50 backdrop-blur-xl border-b h-[70px] flex items-center px-6 md:px-12 justify-between gap-4" style="background-color:rgba(6,14,26,0.92); border-color:rgba(255,255,255,0.05);">
      <a href="/" class="flex items-center flex-shrink-0">
        <NuxtImg src="/img/logos.svg" height="35" class="h-[30px] md:h-[35px] w-auto" alt="Andy Ranaivo Logo" />
      </a>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-8 text-sm font-mono flex-shrink-0 ml-auto">
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
          class="px-4 py-2 rounded font-mono text-sm transition-colors ml-4"
          style="border:1px solid #64FFDA; color:#64FFDA;"
          onmouseover="this.style.background='rgba(100,255,218,0.1)'"
          onmouseout="this.style.background='transparent'">
          Télécharger CV
        </a>
      </div>

      <!-- Mobile Menu Button with Raw SVG -->
      <button @click="toggleMenu" class="md:hidden flex-shrink-0 p-2 z-[60] relative" style="color:#64FFDA;" aria-label="Toggle Menu">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
      </button>
    </nav>

    <!-- Mobile Navigation Overlay -->
    <div 
      class="fixed inset-0 z-[100] md:hidden transition-all duration-300"
      :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="absolute inset-0 bg-[#0a192f] backdrop-blur-xl"></div>
      
      <div class="relative h-full flex flex-col items-center justify-center gap-8 font-mono p-8 text-center">
        <button @click="handleNavClick('about')" class="text-3xl flex flex-col items-center gap-1" :style="activeSection === 'about' ? 'color:#64FFDA' : 'color:#8892b0'">
          <span class="text-teal text-[11px] uppercase tracking-widest opacity-70">01.</span>
          <span>À propos</span>
        </button>
        <button @click="handleNavClick('skills')" class="text-3xl flex flex-col items-center gap-1" :style="activeSection === 'skills' ? 'color:#64FFDA' : 'color:#8892b0'">
          <span class="text-teal text-[11px] uppercase tracking-widest opacity-70">02.</span>
          <span>Compétences</span>
        </button>
        <button @click="handleNavClick('experience')" class="text-3xl flex flex-col items-center gap-1" :style="activeSection === 'experience' ? 'color:#64FFDA' : 'color:#8892b0'">
          <span class="text-teal text-[11px] uppercase tracking-widest opacity-70">03.</span>
          <span>Expérience</span>
        </button>
        <button @click="handleNavClick('projets')" class="text-3xl flex flex-col items-center gap-1" :style="activeSection === 'projets' ? 'color:#64FFDA' : 'color:#8892b0'">
          <span class="text-teal text-[11px] uppercase tracking-widest opacity-70">04.</span>
          <span>Projets</span>
        </button>
        <a href="/ANDY_RANAIVO_CV_2026.pdf" download target="_blank"
          class="mt-8 px-12 py-5 rounded font-mono text-xl transition-colors"
          style="border:1px solid #64FFDA; color:#64FFDA;">
          Télécharger CV
        </a>
      </div>
    </div>

    <!-- Social Sidebar - Hidden on extreme small mobiles -->
    <SocialSidebar class="hidden xs:flex" />

    <main class="relative z-10">
      <NuxtPage />
    </main>
  </div>
</template>