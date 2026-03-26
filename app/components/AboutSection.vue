<script setup lang="ts">
import { cvData } from '~/data/cv'
import { GraduationCap, Award, Briefcase } from 'lucide-vue-next'
</script>

<template>
  <div class="space-y-20 relative z-10">
    <div class="space-y-12">
      <h2 class="text-3xl font-black italic flex items-center gap-3">
        <Briefcase class="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" /> 
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">PARCOURS PROFESSIONNEL</span>
      </h2>
      <div class="border-l border-cyan-500/30 ml-4 space-y-12">
        <div v-for="exp in cvData.experiences" :key="exp.company" class="relative pl-10 group">
          <div class="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] group-hover:scale-150 transition-transform"></div>
          <div class="absolute -left-[1px] top-2 w-[1px] h-full bg-gradient-to-b from-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="bg-charcoal-900/60 border border-white/5 p-6 rounded-2xl backdrop-blur-md hover:bg-white/5 transition-colors shadow-lg">
            <div class="flex flex-wrap justify-between items-start gap-2 mb-4">
              <h4 class="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">{{ exp.company }}</h4>
              <span class="text-xs font-mono text-cyan-500/70 border border-cyan-500/20 px-2 py-1 rounded-full">{{ exp.period }}</span>
            </div>
            <p class="text-cyan-400 text-sm font-semibold mb-2 tracking-wide">{{ exp.role }}</p>
            <p class="text-gray-400 text-sm leading-relaxed">{{ exp.details }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-12 pt-10 border-t border-white/5">
      <div class="space-y-6">
        <h3 class="text-xl font-bold flex items-center gap-2"><GraduationCap class="text-violet-500 drop-shadow-[0_0_5px_rgba(139,92,246,0.6)]"/> FORMATION</h3>
        <div v-for="edu in cvData.education" :key="edu.degree" class="space-y-1 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-violet-500/30 transition-colors">
          <p class="text-white font-medium">{{ edu.degree }}</p>
          <p class="text-gray-500 text-sm">{{ edu.school }} — <span class="text-violet-400">{{ edu.year }}</span></p>
        </div>
      </div>
      <div class="space-y-6">
        <h3 class="text-xl font-bold flex items-center gap-2"><Award class="text-violet-500 drop-shadow-[0_0_5px_rgba(139,92,246,0.6)]"/> CERTIFICATIONS</h3>
        <ul class="text-sm text-gray-400 space-y-3">
          <li v-for="cert in cvData.certifications" :key="cert.name" class="flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
            <span class="text-violet-300">{{ cert.year }}</span> : {{ cert.name }} ({{ cert.issuer }})
          </li>
        </ul>
      </div>
    </div>

    <!-- Nouveaux blocs pour Compétences et Langues -->
    <div class="grid md:grid-cols-2 gap-12 pt-10 border-t border-white/5 relative">
      <div class="absolute -top-32 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="space-y-6">
        <h3 class="text-xl font-bold flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">COMPÉTENCES</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in cvData.skills" :key="skill" class="px-3 py-1.5 bg-cyan-950/30 border border-cyan-500/20 rounded-lg text-sm text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all cursor-default shadow-[0_0_10px_rgba(34,211,238,0.05)]">
            {{ skill }}
          </span>
        </div>
      </div>
      <div class="space-y-6">
        <h3 class="text-xl font-bold flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">LANGUES</h3>
        <ul class="space-y-3">
          <li v-for="lang in cvData.languages" :key="lang" class="text-gray-300 flex items-center gap-3">
            <span class="w-1 h-3 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500"></span>
            {{ lang }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>