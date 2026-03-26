export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el, binding) {
      // Setup initial hidden state based on custom delay if provided
      el.classList.add('reveal-element', 'reveal-hidden');
      
      if (binding.value && binding.value.delay) {
        el.style.transitionDelay = `${binding.value.delay}ms`;
      }

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add visibility class and remove hidden class
              entry.target.classList.add('reveal-visible');
              entry.target.classList.remove('reveal-hidden');
              // Unobserve after the first reveal so it only happens once
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -10% 0px"
        }
      );

      observer.observe(el);
    }
  });
});
