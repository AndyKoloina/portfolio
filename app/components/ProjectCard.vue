<template>
  <div class="group rounded-xl overflow-hidden flex flex-col transition-all duration-300"
    style="background-color:rgba(10,22,40,0.8); border:1px solid rgba(255,255,255,0.07);"
    onmouseover="this.style.borderColor='rgba(100,255,218,0.25)'"
    onmouseout="this.style.borderColor='rgba(255,255,255,0.07)'">
    <!-- Project image -->
    <div :class="isMobile ? 'max-w-[180px] mx-auto mt-6' : 'w-full'" class="aspect-video overflow-hidden relative" style="background-color:#0a1628;">
      <NuxtImg :src="image" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style="opacity:0.75;" onerror="this.style.display='none'" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#060e1a] to-transparent opacity-60"></div>
      <!-- Client badge -->
      <div v-if="client" class="absolute top-3 left-3 font-mono text-xs px-2 py-1 rounded" style="background-color:rgba(6,14,26,0.8); color:#64FFDA; border:1px solid rgba(100,255,218,0.3);">
        {{ client }}
      </div>
    </div>
    <!-- Content -->
    <div class="p-6 flex flex-col flex-grow gap-3">
      <h3 class="font-bold text-xl transition-colors" style="color:#e6f1ff;">{{ title }}</h3>
      <p class="text-sm leading-relaxed flex-grow" style="color:#8892b0;">{{ description }}</p>
      <!-- Stack tags -->
      <div class="flex flex-wrap gap-2">
        <span v-for="s in stack" :key="s" class="font-mono text-[11px] px-2 py-0.5 rounded"
          style="color:rgba(100,255,218,0.85); background-color:rgba(100,255,218,0.07);">
          {{ s }}
        </span>
      </div>
      <!-- External link -->
      <a v-if="link" :href="link" target="_blank" rel="noopener"
        class="mt-2 w-full flex items-center justify-center gap-2 py-2 rounded font-mono text-sm transition-all duration-200"
        style="border:1px solid rgba(100,255,218,0.25); color:#64FFDA;"
        onmouseover="this.style.backgroundColor='rgba(100,255,218,0.08)'; this.style.borderColor='rgba(100,255,218,0.5)'"
        onmouseout="this.style.backgroundColor='transparent'; this.style.borderColor='rgba(100,255,218,0.25)'">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Voir le site
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps(['title', 'description', 'stack', 'image', 'isMobile', 'client', 'link'])
</script>
