<script setup lang="ts">
const skillGroups = [
  {
    label: 'Data Science & IA',
    skills: [
      { name: 'Python',       icon: 'python',       color: '3776AB' },
      { name: 'Apache Spark', icon: 'apachespark',  color: 'E25A1C' },
      { name: 'Hadoop',       icon: 'apachehadoop', color: '66CC00' },
      { name: 'TensorFlow',   icon: 'tensorflow',   color: 'FF6F00' },
      { name: 'Keras',        icon: 'keras',        color: 'D00000' },
      { name: 'Pandas',       icon: 'pandas',       color: '150458' },
      { name: 'Scikit-Learn', icon: 'scikitlearn',  color: 'F7931E' },
      { name: 'NumPy',        icon: 'numpy',        color: '013243' },
      { name: 'Power BI',     icon: 'powerbi',      color: 'F2C811' },
    ]
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'JavaScript',  icon: 'javascript',  color: 'F7DF1E' },
      { name: 'TypeScript',  icon: 'typescript',  color: '3178C6' },
      { name: 'Vue.js',      icon: 'vuedotjs',    color: '4FC08D' },
      { name: 'React',       icon: 'react',       color: '61DAFB' },
      { name: 'Nuxt',        icon: 'nuxtdotjs',   color: '00DC82' },
      { name: 'Next.js',     icon: 'nextdotjs',   color: 'FFFFFF' },
      { name: 'HTML5',       icon: 'html5',       color: 'E34F26' },
      { name: 'CSS3',        icon: 'css3',        color: '1572B6' },
      { name: 'Tailwind CSS',icon: 'tailwindcss', color: '06B6D4' },
    ]
  },
  {
    label: 'Backend & Frameworks',
    skills: [
      { name: 'Node.js',    icon: 'nodedotjs',  color: '339933' },
      { name: 'Django',     icon: 'django',     color: '092E20' },
      { name: 'GraphQL',    icon: 'graphql',    color: 'E10098' },
      { name: 'Vuex',       icon: 'vuedotjs',   color: '4FC08D' },
      { name: 'Pinia',      icon: 'pinia',      color: 'FFD859' },
      { name: 'Redux',      icon: 'redux',      color: '764ABC' },
    ]
  },
  {
    label: 'Bases de données & Outils',
    skills: [
      { name: 'MySQL',       icon: 'mysql',       color: '4479A1' },
      { name: 'PostgreSQL',  icon: 'postgresql',  color: '4169E1' },
      { name: 'Oracle',      icon: 'oracle',      color: 'F80000' },
      { name: 'Docker',      icon: 'docker',      color: '2496ED' },
      { name: 'Git',         icon: 'git',         color: 'F05032' },
      { name: 'Cypress',     icon: 'cypress',     color: '69D3A7' },
    ]
  },
]
</script>

<template>
  <div>
    <div class="mb-12">
      <p class="font-mono text-sm mb-2" style="color:#64FFDA;">02. Compétences</p>
      <h2 class="text-3xl font-bold" style="color:#ccd6f6;">
        Technologies que j'utilise
      </h2>
      <div class="mt-3 w-16 h-0.5" style="background-color:#64FFDA;"></div>
    </div>

    <div class="space-y-12">
      <div v-for="(group, index) in skillGroups" :key="group.label" v-reveal="{ delay: index * 100 }">
        <h3 class="font-mono text-xs uppercase tracking-widest mb-5" style="color:rgba(100,255,218,0.6);">{{ group.label }}</h3>
        <div class="flex flex-wrap gap-3">
          <div 
            v-for="skill in group.skills" 
            :key="skill.name"
            class="flex items-center gap-2.5 px-4 py-2.5 rounded-lg border transition-all duration-200 cursor-default group"
            style="border-color:rgba(100,255,218,0.15); background-color:rgba(10,22,40,0.8);"
            onmouseover="this.style.borderColor='rgba(100,255,218,0.5)'; this.style.backgroundColor='rgba(100,255,218,0.05)'"
            onmouseout="this.style.borderColor='rgba(100,255,218,0.15)'; this.style.backgroundColor='rgba(10,22,40,0.8)'"
          >
            <img 
              :src="`https://cdn.simpleicons.org/${skill.icon}/${skill.color}`"
              :alt="skill.name"
              class="w-5 h-5 flex-shrink-0"
              loading="lazy"
            />
            <span class="text-sm font-mono" style="color:#a8b2d8;">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

