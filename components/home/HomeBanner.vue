<template>
  <section class="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden bg-section-dark impulso-closing">
    
    <!-- Marco técnico discreto: evita competir con el mensaje final. -->
    <div class="absolute inset-0 pointer-events-none z-0 opacity-10">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        <svg viewBox="0 0 1000 1000" class="w-full h-full">
          <g class="portal-lines" stroke="var(--accent)" stroke-width="0.3">
            <line x1="500" y1="500" v-for="n in 36" :key="'line-'+n" 
                  :x2="500 + Math.cos(n * 10 * Math.PI/180) * 800" 
                  :y2="500 + Math.sin(n * 10 * Math.PI/180) * 800" 
                  class="portal-ray" />
            <circle cx="500" cy="500" r="150" fill="none" stroke-dasharray="4 8" />
            <circle cx="500" cy="500" r="300" fill="none" stroke-dasharray="2 10" />
          </g>
        </svg>
      </div>
    </div>

    <div class="max-w-[1000px] w-[88%] mx-auto relative z-10 text-center">
      <p class="section-eyebrow mb-4" v-reveal data-delay="0">Empieza hoy</p>
      <h2 class="section-title banner-title mx-auto mb-6" v-reveal data-delay="100">
        ¿Listo para hacer crecer tu negocio?
      </h2>
      <p class="text-lg mb-12 max-w-xl mx-auto" style="color: var(--text-secondary);" v-reveal data-delay="200">
        Agenda una llamada de 30 minutos sin costo. Te escuchamos y te decimos honestamente cómo podemos ayudarte.
      </p>

      <div class="flex flex-col items-center gap-5" v-reveal data-delay="300">
        <NuxtLink to="/contacto" 
                  class="btn btn-primary px-10 py-4">
          Agenda tu asesoría gratuita
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>
        <p class="text-small" style="color: var(--text-muted);">Sin compromisos &middot; Sin contratos largos &middot; Respuesta en 24 horas</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portal-ray {
  opacity: 0.45;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.portal-lines {
  transform-origin: center;
  animation: spin 90s linear infinite;
}

.banner-title { max-width: 19ch; }
</style>
