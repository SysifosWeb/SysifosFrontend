<script setup>
definePageMeta({
  layout: false
})

const props = defineProps({
  error: Object
})

useSeoMeta({
  title: () => `Error ${props.error?.statusCode || ''} | SysifosWeb`,
  description: 'Página no encontrada o error inesperado en SysifosWeb.'
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="relative min-h-screen bg-[#05070a] flex items-center justify-center p-4 overflow-hidden">
    <!-- Background effects -->
    <div class="absolute rounded-full pointer-events-none blur-[200px] w-[600px] h-[600px] bg-sky-500 opacity-[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sky-900/10 pointer-events-none"></div>

    <div class="relative z-10 text-center max-w-lg">
      <!-- Error code -->
      <div class="mb-6">
        <span class="text-[8rem] md:text-[10rem] font-black text-white/5 select-none leading-none">
          {{ error?.statusCode || '?' }}
        </span>
      </div>

      <!-- Icon -->
      <div class="mb-8 flex justify-center">
        <div class="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <svg class="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      <!-- Title -->
      <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
        <template v-if="error?.statusCode === 404">
          Página no encontrada
        </template>
        <template v-else>
          Error inesperado
        </template>
      </h1>

      <!-- Description -->
      <p class="text-white/50 text-sm md:text-base leading-relaxed mb-10">
        <template v-if="error?.statusCode === 404">
          La ruta que buscas no existe o fue movida. Mientras tanto, puedes volver al inicio.
        </template>
        <template v-else>
          Algo salió mal. Nuestro equipo ha sido notificado y lo resolveremos pronto.
        </template>
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button @click="handleError"
          class="px-8 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Volver al inicio
        </button>

        <NuxtLink to="/contacto"
          class="px-8 py-3.5 rounded-xl border border-white/10 text-white/70 font-medium text-sm hover:bg-white/5 hover:text-white transition-colors inline-flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contactar soporte
        </NuxtLink>
      </div>

      <!-- Small error detail -->
      <p v-if="error?.message && error?.statusCode !== 404" class="mt-10 text-xs text-white/20 font-mono">
        {{ error.message }}
      </p>
    </div>
  </div>
</template>
