<script setup lang="ts">
import { cvData } from '~/data/cv'
import { Download, ArrowRight } from 'lucide-vue-next'
import Typed from 'typed.js'

const { scrollToSection, initScrollSpy } = useSmoothScroll()
const typedElement = ref(null)

const showAllProjects = ref(false)
const displayedProjects = computed(() => {
  return showAllProjects.value ? cvData.projects : cvData.projects.slice(0, 4)
})

onMounted(() => {
  initScrollSpy()
  
  if (typedElement.value) {
    new Typed(typedElement.value, {
      strings: [
        'Je transforme la donnée en intelligence stratégique.',
        'Je construis des interfaces web ultra-performantes.',
        'Je donne vie à vos architectures complexes.'
      ],
      typeSpeed: 40,
      backSpeed: 25,
      backDelay: 2500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    })
  }
})

useHead({
  title: `${cvData.profile.name} | ${cvData.profile.title}`,
  meta: [{ name: 'description', content: cvData.profile.bio }]
})
</script>

<template>
  <div class="max-w-5xl mx-auto px-8 md:px-16">
    
    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex flex-col justify-center py-32">
      <p v-reveal class="font-mono mb-4 text-sm" style="color:#64FFDA;">Bonjour, je suis</p>
      <h1 v-reveal="{ delay: 100 }" class="text-5xl md:text-7xl font-bold leading-tight mb-4" style="color:#e6f1ff;">
        Andy Ranaivo.
      </h1>
      <h2 v-reveal="{ delay: 200 }" class="text-2xl md:text-5xl font-bold mb-8 min-h-[80px]" style="color:#8892b0;">
        <span ref="typedElement"></span>
      </h2>
      <p v-reveal="{ delay: 300 }" class="max-w-xl text-lg leading-relaxed mb-12" style="color:#8892b0;">
        {{ cvData.profile.shortBio }}
      </p>
      <div v-reveal="{ delay: 400 }" class="flex flex-wrap gap-4">
        <button @click="scrollToSection('projets')" class="group flex items-center gap-3 px-6 py-3 border rounded font-mono text-sm transition-all duration-200" style="border-color:#64FFDA; color:#64FFDA;" onmouseover="this.style.backgroundColor='rgba(100,255,218,0.1)'" onmouseout="this.style.backgroundColor='transparent'">
          Voir mes projets <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <a href="/ANDY_RANAIVO_CV_2026.pdf" download target="_blank" class="flex items-center gap-3 px-6 py-3 border rounded font-mono text-sm transition-all duration-200" style="border-color:rgba(100,255,218,0.3); background-color:rgba(100,255,218,0.1); color:#64FFDA;" onmouseover="this.style.backgroundColor='rgba(100,255,218,0.2)'" onmouseout="this.style.backgroundColor='rgba(100,255,218,0.1)'">
          <Download class="w-4 h-4" /> Télécharger CV
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24">
      <div v-reveal class="mb-10">
        <p class="font-mono text-sm mb-2" style="color:#64FFDA;">01. À propos</p>
        <h2 class="text-3xl font-bold" style="color:#ccd6f6;">À propos de moi</h2>
        <div class="mt-3 w-16 h-0.5" style="background-color:#64FFDA;"></div>
      </div>
      <div v-reveal="{ delay: 200 }" class="grid md:grid-cols-3 gap-10 text-base leading-relaxed" style="color:#8892b0;">
        <div class="md:col-span-2 space-y-4">
          <p>{{ cvData.profile.bio }}</p>
          <p>Mon expertise s'étend de l'ingénierie des données massives à la conception d'interfaces (Nuxt/Vue) performantes pour restituer l'information. Habitué aux architectures Big Data complexes et environnements innovants.</p>
          <div class="pt-4 grid grid-cols-2 gap-2 font-mono text-sm">
            <div class="flex items-center gap-2"><span style="color:#64FFDA;">▹</span> {{ cvData.profile.email }}</div>
            <div class="flex items-center gap-2"><span style="color:#64FFDA;">▹</span> {{ cvData.profile.location }}</div>
            <div class="flex items-center gap-2"><span style="color:#64FFDA;">▹</span> {{ cvData.profile.phone }}</div>
            <div class="flex items-center gap-2"><span style="color:#64FFDA;">▹</span> Madagascar</div>
          </div>
        </div>
        <div class="space-y-3 text-sm font-mono">
          <p class="text-teal uppercase tracking-widest text-xs mb-4">Contact rapide</p>
          <a :href="'mailto:' + cvData.profile.email" class="flex items-center gap-2 text-slate-400 hover:text-teal transition-colors">
            <span class="text-teal">▹</span> {{ cvData.profile.email }}
          </a>
          <a href="https://linkedin.com/in/andy-ranaivo" target="_blank" class="flex items-center gap-2 text-slate-400 hover:text-teal transition-colors">
            <span class="text-teal">▹</span> LinkedIn
          </a>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-24 border-t border-white/5">
      <SkillsSection />
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-24 border-t border-white/5">
      <div v-reveal class="mb-10">
        <p class="font-mono text-teal text-sm mb-2">03. Expérience</p>
        <h2 class="text-3xl font-bold text-slate-200">Mon parcours</h2>
        <div class="mt-3 w-16 h-0.5 bg-teal"></div>
      </div>
      <div class="space-y-10">
        <div v-for="(exp, index) in cvData.experiences" :key="exp.company" v-reveal="{ delay: index * 100 }" class="group grid md:grid-cols-[200px_1fr] gap-6 relative">
          <div class="text-sm font-mono text-slate-500 pt-1">{{ exp.period }}</div>
          <div class="border-l border-white/5 pl-6 pb-10 group-last:pb-0 group-last:border-l-0">
            <div class="absolute left-[200px] top-1.5 w-2 h-2 rounded-full bg-teal hidden md:block"></div>
            <h3 class="font-bold text-slate-200 text-lg group-hover:text-teal transition-colors">{{ exp.role }}</h3>
            <p class="text-teal font-mono text-sm mb-3">@ {{ exp.company }}</p>
            <p class="text-slate-400 text-sm leading-relaxed">{{ exp.details }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projets" class="py-24 border-t border-white/5">
      <div v-reveal class="mb-10">
        <p class="font-mono text-teal text-sm mb-2">04. Projets</p>
        <h2 class="text-3xl font-bold text-slate-200">Réalisations</h2>
        <div class="mt-3 w-16 h-0.5 bg-teal"></div>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <ProjectCard v-for="(project, index) in displayedProjects" :key="project.title" v-bind="project" v-reveal="{ delay: index * 150 }" />
      </div>
      
      <div v-if="cvData.projects.length > 4" class="mt-12 flex justify-center" v-reveal>
        <button 
          @click="showAllProjects = !showAllProjects" 
          class="px-10 py-4 border rounded font-mono text-sm transition-all duration-300"
          style="border-color:rgba(100,255,218,0.4); color:#64FFDA;"
          onmouseover="this.style.backgroundColor='rgba(100,255,218,0.1)'; this.style.borderColor='#64FFDA';"
          onmouseout="this.style.backgroundColor='transparent'; this.style.borderColor='rgba(100,255,218,0.4)';"
        >
          {{ showAllProjects ? 'Voir moins' : 'Afficher plus' }}
        </button>
      </div>
    </section>

    <!-- Contact / Footer -->
    <section id="contact" class="py-32 border-t border-white/5" v-reveal>
      <ContactSection />
    </section>
    
  </div>
</template>
