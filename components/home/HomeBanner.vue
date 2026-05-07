<template>
  <section class="relative w-full py-32 flex items-center justify-center overflow-hidden group/banner bg-section-dark">
    
    <!-- Visualización "Data Portal" (Fondo Tenue) -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20">
        <svg viewBox="0 0 1000 1000" class="w-full h-full">
          <g class="portal-lines transition-all duration-1000 group-hover/banner:scale-95 group-hover/banner:opacity-35" stroke="#00f2ff" stroke-width="0.3">
            <line x1="500" y1="500" v-for="n in 36" :key="'line-'+n" 
                  :x2="500 + Math.cos(n * 10 * Math.PI/180) * 800" 
                  :y2="500 + Math.sin(n * 10 * Math.PI/180) * 800" 
                  class="transition-all duration-700 portal-ray" />
            <circle cx="500" cy="500" r="150" fill="none" stroke-dasharray="4 8" />
            <circle cx="500" cy="500" r="300" fill="none" stroke-dasharray="2 10" />
          </g>
        </svg>
      </div>
    </div>

    <div class="max-w-[1400px] w-[92%] mx-auto relative z-10 text-center">
      <p class="text-sm font-medium mb-4" style="color: var(--text-muted);">Empieza hoy</p>
      <h2 class="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto mb-6" style="color: var(--text-main); letter-spacing: -0.025em;">
        ¿Listo para hacer crecer<br class="hidden md:block"/> tu negocio?
      </h2>
      <p class="text-lg mb-12 max-w-xl mx-auto" style="color: var(--text-secondary);">
        Agenda una llamada de 30 minutos sin costo. Te escuchamos y te decimos honestamente cómo podemos ayudarte.
      </p>

      <div class="flex flex-col items-center gap-5">
        <NuxtLink to="/contacto" 
                  class="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style="background: var(--accent); color: #0b0f1c; box-shadow: 0 0 24px rgba(56,189,248,0.2);">
          Agenda tu asesoría gratuita
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>
        <p class="text-xs" style="color: var(--text-muted);">Sin compromisos &middot; Sin contratos largos &middot; Respuesta en 24 horas</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-tech {
  font-family: 'Space Grotesk', sans-serif;
}

.portal-ray {
  transition: all 1s ease-in-out;
}

.group\/banner:hover .portal-ray {
  stroke-dashoffset: 100;
  stroke-width: 0.8;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.portal-lines {
  transform-origin: center;
  animation: spin 60s linear infinite;
}
</style>
