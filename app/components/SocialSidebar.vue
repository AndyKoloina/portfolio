<template>
  <div class="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 items-center hidden md:flex">
    
    <a href="https://github.com/AndyKoloina" target="_blank" @mousedown="createRipple" class="social-btn relative overflow-hidden w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 pointer-events-auto" style="color:#8892b0;" onmouseover="this.style.color='#64FFDA'; this.style.transform='translateY(-4px)'" onmouseout="this.style.color='#8892b0'; this.style.transform='translateY(0)'">
      <Github class="w-5 h-5 pointer-events-none" />
    </a>
    
    <a href="https://www.linkedin.com/in/andy-ranaivo-02684112b/" target="_blank" @mousedown="createRipple" class="social-btn relative overflow-hidden w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 pointer-events-auto" style="color:#8892b0;" onmouseover="this.style.color='#64FFDA'; this.style.transform='translateY(-4px)'" onmouseout="this.style.color='#8892b0'; this.style.transform='translateY(0)'">
      <Linkedin class="w-5 h-5 pointer-events-none" />
    </a>
    
    <a href="mailto:andyranaivo22@gmail.com" @mousedown="createRipple" class="social-btn relative overflow-hidden w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 pointer-events-auto" style="color:#8892b0;" onmouseover="this.style.color='#64FFDA'; this.style.transform='translateY(-4px)'" onmouseout="this.style.color='#8892b0'; this.style.transform='translateY(0)'">
      <Mail class="w-5 h-5 pointer-events-none" />
    </a>
    
    <!-- Decorative vertical line -->
    <div class="w-px h-24 mt-2 bg-gradient-to-b from-slate-400 to-transparent opacity-50"></div>
  </div>
</template>

<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'

const createRipple = (event) => {
  const button = event.currentTarget
  const circle = document.createElement('span')
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2
  
  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`
  circle.classList.add('ripple-overlay')
  
  const existingRipple = button.getElementsByClassName('ripple-overlay')[0]
  if (existingRipple) { existingRipple.remove() }
  
  button.appendChild(circle)
}
</script>

<style>
/* Global ripple animation used inside SocialSidebar */
.ripple-overlay {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 600ms linear;
  background-color: rgba(100, 255, 218, 0.5); /* Teal glow */
  pointer-events: none;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
