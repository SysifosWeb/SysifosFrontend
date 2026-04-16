<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import logoBlanco from "@/assets/img/logo-blanco.webp"

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isMounted = ref(false)
const route = useRoute()

const currentRoute = computed(() => route.path)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  isMounted.value = true
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-[1002] bg-transparent transition-all duration-500" :class="{ 'bg-[#05070a]/90 backdrop-blur-xl': isScrolled }">
    <div class="max-w-[1400px] w-[92%] mx-auto border-b border-white/10">
      <div class="flex items-center justify-between py-10 lg:py-12">
        <!-- LOGO -->
        <NuxtLink to="/" class="flex items-center">
          <img :src="logoBlanco" alt="SysifosWeb Logo" class="h-8 md:h-10 w-auto object-contain" />
        </NuxtLink>

        <!-- MENÚ DESKTOP -->
        <div class="hidden lg:flex items-center">
          <ul class="flex items-center gap-12">
            <li v-for="item in [
              { to: '/', label: 'Inicio' },
              { to: '/nosotros', label: 'Nosotros' },
              { to: '/servicios', label: 'Servicios' },
              { to: '/portfolio', label: 'Portfolio' }
            ]" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="nav-link text-[11px] tracking-widest font-bold text-gray-400 hover:text-white transition-all font-tech uppercase"
                :class="{ 'text-accent': currentRoute === item.to }"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contacto" class="ml-6 px-8 py-3 bg-accent text-[#0a0e17] font-bold text-[11px] uppercase tracking-widest rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,242,255,0.3)]">
                Contacto
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- BOTÓN HAMBURGUESA -->
        <button
          class="lg:hidden text-accent focus:outline-none"
          @click="toggleMenu"
          aria-label="Menu"
        >
          <div class="space-y-1.5">
             <div class="w-5 h-[1px] bg-accent transition-all" :class="{ 'rotate-45 translate-y-2': isMenuOpen }"></div>
             <div class="w-5 h-[1px] bg-accent transition-all" :class="{ 'opacity-0': isMenuOpen }"></div>
             <div class="w-5 h-[1px] bg-accent transition-all" :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"></div>
          </div>
        </button>
      </div>
    </div>

    <!-- MENÚ MÓVIL (remains similar) -->
    <Transition name="fade">
      <div v-if="isMounted && isMenuOpen" class="fixed inset-0 z-[2000] bg-[#05070a] flex flex-col p-10 overflow-hidden">
        <div class="absolute inset-0 technical-grid opacity-5"></div>
        <div class="flex items-center justify-between mb-24">
           <NuxtLink to="/" @click="closeMenu" class="flex items-center">
             <img :src="logoBlanco" alt="SysifosWeb Logo" class="h-8 w-auto object-contain" />
           </NuxtLink>
           <button @click="closeMenu" class="text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="square" stroke-width="0.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
           </button>
        </div>
        <ul class="flex-grow flex flex-col space-y-10">
          <li v-for="item in [
            { to: '/', label: 'Inicio' },
            { to: '/nosotros', label: 'Nosotros' },
            { to: '/servicios', label: 'Servicios' },
            { to: '/portfolio', label: 'Portfolio' },
            { to: '/contacto', label: 'Contacto' }
          ]" :key="item.to">
            <NuxtLink :to="item.to" class="text-2xl font-bold tracking-widest text-white font-tech uppercase" @click="closeMenu">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.font-tech {
  font-family: var(--font-tech);
}
.technical-grid {
    background-image: radial-gradient(rgba(0, 242, 255, 0.1) 1px, transparent 0);
    background-size: 40px 40px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>