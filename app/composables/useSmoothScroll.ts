import { useState, onMounted, onUnmounted } from '#imports'

export const useSmoothScroll = () => {
  const activeSection = useState<string>('activeSection', () => 'hero')

  const scrollToSection = (id: string) => {
    // Force active state immediately on click for better UX
    activeSection.value = id
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const initScrollSpy = () => {
    if (import.meta.client) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      }, { threshold: 0.2, rootMargin: "-80px 0px -40% 0px" })

      document.querySelectorAll('section[id], header[id]').forEach((el) => {
        observer.observe(el)
      })

      onUnmounted(() => observer.disconnect())
    }
  }

  return {
    activeSection,
    scrollToSection,
    initScrollSpy
  }
}
