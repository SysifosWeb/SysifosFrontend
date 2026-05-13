export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el, binding) {
      // Configuramos las clases base
      el.classList.add('reveal-item')
      
      // Si el usuario pasa una dirección como v-reveal="'left'" o v-reveal="'scale'"
      if (binding.value) {
        el.classList.add(`reveal-${binding.value}`)
      }

      // Intersection Observer para detectar cuando entra en pantalla
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Añadimos un pequeño delay si es especificado en el dataset (data-delay="200")
              const delay = el.dataset.delay || 0;
              setTimeout(() => {
                el.classList.add('is-revealed')
              }, delay);
              
              // Dejamos de observar para que la animación suceda solo una vez
              obs.unobserve(el)
            }
          })
        },
        {
          root: null,
          threshold: 0.1, // Se activa cuando el 10% del elemento es visible
          rootMargin: '0px 0px -50px 0px' // Ligeramente antes de llegar al fondo
        }
      )
      
      observer.observe(el)
    }
  })
})
