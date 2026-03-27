<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import logoBlanco from "@/assets/img/logo-blanco.webp";

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

const handleScroll = () => {
    // Detectar si el usuario ha hecho scroll más allá del banner (aproximadamente 400px)
    isScrolled.value = window.scrollY > 200;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    // Verificar el scroll inicial
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Portfolio', path: '/portfolio' },
  // { name: 'Blog', path: '/blog' },
  // { name: 'Contacto', path: '/contacto' }
]
</script>
<template>
  <header  class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        :class="[
            isScrolled
                ? 'bg-blue-900/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
        ]">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/"  class="flex items-center space-x-3 flex-shrink-0">
          <img :src="logoBlanco" alt="SysifosWeb Logo" class="h-8 w-auto drop-shadow-lg" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.path"
            :to="item.path"
            class="text-dark-700 hover:text-primary-600 font-medium transition-colors duration-200 text-white"
            active-class="text-primary-600"
          >
            {{ item.name }}
          </NuxtLink>
          <NuxtLink to="/contacto" class="px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg bg-cyan-400 text-blue-900 hover:bg-cyan-300 hover:scale-105">
            Contacto
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t">
          <div class="flex flex-col space-y-4">
            <NuxtLink 
              v-for="item in navigation" 
              :key="item.path"
              :to="item.path"
              @click="mobileMenuOpen = false"
              class="text-dark-700 hover:text-primary-600 font-medium transition-colors duration-200 px-4 py-2"
              active-class="text-primary-600 bg-primary-50 rounded-lg"
            >
              {{ item.name }}
            </NuxtLink>
            <NuxtLink 
              to="/contacto" 
              @click="mobileMenuOpen = false"
              class="btn-primary mx-4"
            >
              Cotizar Proyecto
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

