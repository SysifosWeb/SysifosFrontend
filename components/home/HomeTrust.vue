<template>
  <section class="py-24 bg-[#05070a] border-y border-white/5 overflow-hidden relative">
    <div class="w-full relative z-20">
      <div class="flex flex-col lg:flex-row items-center">
        
        <!-- Bloque de Texto Izquierda -->
        <div class="w-full lg:w-[450px] shrink-0 pl-[4%] lg:pl-[8%] mb-16 lg:mb-0 z-30 bg-[#05070a]/80 backdrop-blur-sm py-4">
          <h4 class="text-[15px] font-bold text-gray-300 uppercase tracking-[0.8em] font-mono mb-6">STACK _ TECNOLÓGICO</h4>
          <div class="flex flex-col leading-none">
            <span class="text-white text-3xl lg:text-4xl font-medium uppercase tracking-tighter font-tech mb-2">DOMINIO DE</span>
            <span class="text-accent text-4xl lg:text-5xl font-medium uppercase tracking-tighter font-tech">VANGUARDIA DIGITAL</span>
          </div>
        </div>

        <!-- Carrusel Infinito (Estilo Marquee Maravilloso) -->
        <div ref="carouselContainer" class="relative flex-grow overflow-hidden py-32">
          <!-- El contenedor track debe tener ancho max-content para no colapsar y evitar saltos -->
          <div class="flex flex-nowrap w-max animate-slow-marquee hover:[animation-play-state:paused]" ref="carouselTrack">
            <!-- Dos sets idénticos son suficientes para un desplazamiento del -50% -->
            <div v-for="set in 2" :key="'set-'+set" class="flex flex-nowrap">
               <div v-for="(tech, index) in technologies" 
                    :key="index + '-' + set" 
                    class="tech-item relative shrink-0 flex flex-col items-center justify-center w-[160px] lg:w-[240px] transition-all duration-300">
                  
                  <img :src="tech.logo" 
                       :alt="tech.name" 
                       class="tech-logo h-12 lg:h-16 w-auto object-contain transition-all duration-300" />
                  
                  <div class="tech-name absolute -bottom-12 left-1/2 -translate-x-1/2 text-[14px] font-bold text-accent opacity-0 transition-opacity tracking-[0.4em] font-mono text-center whitespace-nowrap uppercase">
                    {{ tech.name }}
                  </div>
               </div>
            </div>
          </div>
          
          <!-- Degradados laterales para inmersión (Solo el derecho, el izquierdo lo tapa el texto) -->
          <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#05070a] to-transparent z-10 pointer-events-none"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const technologies = [
  { name: 'NUXT', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg' },
  { name: 'VUE', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
  { name: 'REACT', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'NODE', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'TYPESCRIPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'TAILWIND', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'LARAVEL', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' }
]

const carouselContainer = ref(null)
const carouselTrack = ref(null)
let rafId = null

const updateSpotlight = () => {
  if (!carouselContainer.value) return

  const spotlightX = window.innerWidth / 2
  const items = carouselContainer.value.querySelectorAll('.tech-item')
  
  items.forEach(item => {
    const rect = item.getBoundingClientRect()
    const itemCenterX = rect.left + rect.width / 2
    const distanceToCenter = Math.abs(spotlightX - itemCenterX)
    
    // Umbral de activación
    const threshold = 120
    const logo = item.querySelector('.tech-logo')
    const name = item.querySelector('.tech-name')
    
    if (distanceToCenter < threshold) {
      const power = 1 - (distanceToCenter / threshold) 
      const scale = 1 + (0.35 * power)
      
      item.style.transform = `scale(${scale})`
      item.style.zIndex = '30'
      item.style.opacity = '1'
      
      // RESTAURAR COLOR ORIGINAL Y AGREGAR SOMBRA CIAN (GLOW)
      logo.style.filter = `grayscale(0) brightness(1) drop-shadow(0 0 ${25 * power}px rgba(0, 242, 255, 0.9))`
      logo.style.opacity = '1'
      
      name.style.opacity = power > 0.7 ? '1' : '0'
      name.style.transform = `translate(-50%, -${8 * power}px)`
    } else {
      item.style.transform = `scale(0.85)`
      item.style.zIndex = '1'
      item.style.opacity = '0.4'
      logo.style.filter = 'grayscale(1) brightness(1.1)'
      logo.style.opacity = '0.3'
      name.style.opacity = '0'
      name.style.transform = 'translate(-50%, 0)'
    }
  })

  rafId = requestAnimationFrame(updateSpotlight)
}

onMounted(() => {
  updateSpotlight()
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
@keyframes slow-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-slow-marquee {
  animation: slow-marquee 30s linear infinite;
}

.font-tech {
  font-family: 'Space Grotesk', sans-serif;
}

.tech-item {
  will-change: transform, opacity;
}
</style>
