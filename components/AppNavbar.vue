<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isMounted = ref(false)
const menuRef = ref(null)
let lastFocused = null
const route = useRoute()

const currentRoute = computed(() => route.path)

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Atrapa el foco dentro del menú móvil y cierra con Escape
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeMenu()
    return
  }
  if (event.key !== 'Tab' || !menuRef.value) return

  const nodes = Array.from(menuRef.value.querySelectorAll(FOCUSABLE))
    .filter((el) => el.offsetParent !== null || el === document.activeElement)
  if (!nodes.length) return

  const first = nodes[0]
  const last = nodes[nodes.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

const lockBodyScroll = (lock) => {
  document.body.style.overflow = lock ? 'hidden' : ''
}

onMounted(() => {
  isMounted.value = true
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleKeydown)
  lockBodyScroll(false)
})

// Gestiona foco, bloqueo de scroll y ciclo de tabulación del menú móvil
watch(isMenuOpen, async (open) => {
  if (open) {
    lastFocused = document.activeElement
    lockBodyScroll(true)
    document.addEventListener('keydown', handleKeydown)
    await nextTick()
    const nodes = menuRef.value?.querySelectorAll(FOCUSABLE)
    if (nodes && nodes.length) nodes[0].focus()
  } else {
    lockBodyScroll(false)
    document.removeEventListener('keydown', handleKeydown)
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus()
  }
})

// Cerrar el menú automáticamente al cambiar de ruta
watch(() => route.fullPath, () => {
  closeMenu()
})
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-[1002] bg-transparent transition-all duration-500"
    :class="{ 'nav-scrolled backdrop-blur-xl': isScrolled }">
    <div class="site-container border-b border-[var(--border)]">
      <div class="flex items-center justify-between py-10 lg:py-12">
        <!-- LOGO -->
        <NuxtLink to="/" class="flex items-center">
          <BrandLogo class="h-8 md:h-10 w-auto aspect-[403/80]" />
        </NuxtLink>

        <!-- MENÚ DESKTOP -->
        <div class="hidden lg:flex items-center">
          <ul class="flex items-center gap-12">
            <li v-for="item in [
              { to: '/', label: 'Inicio' },
              { to: '/nosotros', label: 'Nosotros' },
              { to: '/servicios', label: 'Servicios' },
              { to: '/portfolio', label: 'Portfolio' },
              { to: '/blog', label: 'Blog' }
            ]" :key="item.to">
              <NuxtLink :to="item.to"
                class="nav-link text-[15px] tracking-widest font-bold text-[var(--text-secondary)] hover:text-[var(--text-main)] transition-all font-tech uppercase"
                :class="{ 'text-accent': currentRoute === item.to }">
                {{ item.label }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contacto"
                class="btn btn-primary ml-6 text-[13px] uppercase tracking-widest font-tech">
                Contacto
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- BOTÓN HAMBURGUESA -->
        <button
          class="lg:hidden text-accent rounded-sm"
          @click="toggleMenu" :aria-expanded="isMenuOpen" aria-controls="mobile-menu"
          :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'">
          <div class="space-y-1.5" aria-hidden="true">
            <div class="w-5 h-[1px] bg-accent transition-all" :class="{ 'rotate-45 translate-y-2': isMenuOpen }"></div>
            <div class="w-5 h-[1px] bg-accent transition-all" :class="{ 'opacity-0': isMenuOpen }"></div>
            <div class="w-5 h-[1px] bg-accent transition-all" :class="{ '-rotate-45 -translate-y-2': isMenuOpen }">
            </div>
          </div>
        </button>
      </div>
    </div>

    <!-- MENÚ MÓVIL -->
    <Transition name="fade">
      <div v-if="isMenuOpen" id="mobile-menu" ref="menuRef" role="dialog" aria-modal="true"
        aria-label="Menú de navegación" tabindex="-1"
        class="fixed inset-0 z-[2000] bg-[var(--bg-dark)] flex flex-col p-10 overflow-y-auto">
        <div class="absolute inset-0 technical-grid opacity-5 pointer-events-none" aria-hidden="true"></div>
        <div class="flex items-center justify-between mb-24">
          <NuxtLink to="/" @click="closeMenu" class="flex items-center">
            <BrandLogo class="h-8 md:h-10 w-auto aspect-[403/80]" />
          </NuxtLink>
          <button @click="closeMenu" class="text-accent rounded-sm" aria-label="Cerrar menú">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="square" stroke-width="0.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav aria-label="Menú principal móvil">
          <ul class="flex-grow flex flex-col space-y-10">
            <li v-for="item in [
              { to: '/', label: 'Inicio' },
              { to: '/nosotros', label: 'Nosotros' },
              { to: '/servicios', label: 'Servicios' },
              { to: '/portfolio', label: 'Portfolio' },
              { to: '/blog', label: 'Blog' },
              { to: '/contacto', label: 'Contacto' }
            ]" :key="item.to">
              <NuxtLink :to="item.to"
                class="text-2xl font-bold tracking-widest text-[var(--text-main)] font-tech uppercase transition-colors hover:text-accent">
                {{ item.label }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.font-tech {
  font-family: var(--font-tech);
}

.technical-grid {
  background-image: radial-gradient(rgba(var(--decoration-rgb), 0.1) 1px, transparent 0);
  background-size: 40px 40px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<style scoped>
.nav-scrolled { background-color: var(--surface); }
</style>
