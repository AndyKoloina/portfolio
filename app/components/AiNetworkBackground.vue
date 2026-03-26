<template>
  <canvas ref="canvasRef" class="fixed inset-0 z-0 pointer-events-none opacity-30"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref(null);
let animationFrameId;
let particles = [];
let ctx;

class Particle {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2 + 1;
  }

  update(width, height) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx = -this.vx;
    if (this.y < 0 || this.y > height) this.vy = -this.vy;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#64FFDA';
    ctx.fill();
  }
}

const resizeCanvas = () => {
  if (canvasRef.value) {
    canvasRef.value.width = window.innerWidth;
    canvasRef.value.height = window.innerHeight;
    initParticles();
  }
};

const initParticles = () => {
  if (!canvasRef.value) return;
  const width = canvasRef.value.width;
  const height = canvasRef.value.height;
  
  // Responsive particle count (more on big screens, fewer on mobile)
  const particleCount = Math.floor((width * height) / 15000); 
  particles = [];
  
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(width, height));
  }
};

const animate = () => {
  if (!canvasRef.value) return;
  const width = canvasRef.value.width;
  const height = canvasRef.value.height;

  ctx.clearRect(0, 0, width, height);

  // Update and draw particles
  for (let i = 0; i < particles.length; i++) {
    particles[i].update(width, height);
    particles[i].draw(ctx);

    // Draw synapses (connections)
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(100, 255, 218, ${1 - distance / 150})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  animationFrameId = requestAnimationFrame(animate);
};

onMounted(() => {
  if (!import.meta.client) return;
  
  ctx = canvasRef.value.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  animate();
});

onUnmounted(() => {
  if (!import.meta.client) return;
  
  window.removeEventListener('resize', resizeCanvas);
  cancelAnimationFrame(animationFrameId);
});
</script>
