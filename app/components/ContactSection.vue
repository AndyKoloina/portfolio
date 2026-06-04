<script setup lang="ts">
import { Mail, Linkedin, Github } from 'lucide-vue-next'
import { cvData } from '~/data/cv'
</script>

<template>
  <div class="text-center space-y-8 max-w-xl mx-auto">
    <p class="font-mono text-teal text-sm">05. Contact</p>
    <h2 class="text-4xl font-bold text-slate-100">Let's Connect</h2>
    <p class="text-slate-400 leading-relaxed">
      I'm open to work opportunities, freelance projects, or just a conversation.
      Feel free to reach out by clicking below.
    </p>
    <a
      :href="'mailto:' + cvData.profile.email"
      class="inline-flex items-center gap-3 px-8 py-4 border border-teal text-teal font-mono rounded hover:bg-teal/10 transition-colors text-sm"
    >
      <Mail class="w-4 h-4" /> Say Hello
    </a>
    <div class="flex items-center justify-center gap-6 pt-8 text-slate-400">
      <a :href="cvData.profile.linkedin" target="_blank" class="hover:text-teal transition-colors">
        <Linkedin class="w-5 h-5" />
      </a>
      <a :href="cvData.profile.github" target="_blank" class="hover:text-teal transition-colors">
        <Github class="w-5 h-5" />
      </a>
      <a :href="'mailto:' + cvData.profile.email" class="hover:text-teal transition-colors">
        <Mail class="w-5 h-5" />
      </a>
    </div>
    <p class="text-slate-500 text-xs font-mono pt-8 pb-4">
      © 2026 Andy Ranaivo — Built with Nuxt 4 & Tailwind CSS
    </p>
  </div>
</template>