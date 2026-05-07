<script setup>
</script>

<template>
  <section class="cta-section bg-section-dark">
    
    <!-- Glows sutiles de fondo -->
    <div class="section-glow-cyan glow-center"></div>

    <div class="section-container text-center">
      
      <!-- Eyebrow -->
      <div class="eyebrow-badge mx-auto mb-6">
        <span class="eyebrow-badge__dot"></span>
        <span class="eyebrow-badge__text">Empieza hoy</span>
      </div>

      <!-- Título principal -->
      <h2 class="section-title cta-title mb-6">
        ¿Listo para hacer crecer<br class="hidden md:block"/> tu negocio?
      </h2>
      
      <!-- Texto -->
      <p class="section-subtitle max-w-xl mx-auto mb-10">
        Agenda una llamada de 30 minutos sin costo. Te escuchamos y te decimos honestamente cómo podemos ayudarte a escalar tu plataforma.
      </p>
      
      <!-- Botón de Acción -->
      <div class="flex flex-col items-center gap-5">
        <NuxtLink to="/contacto" class="cta-primary-btn shadow-glow">
          Agenda tu asesoría gratuita
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </NuxtLink>
        <p class="text-xs text-muted">Sin compromisos &middot; Sin contratos largos &middot; Respuesta en 24 horas</p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.cta-section {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  border-top: 1px solid var(--border);
}

.section-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.glow-center {
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.05;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.1;
}

.shadow-glow {
  box-shadow: 0 0 24px rgba(56,189,248,0.2);
}
</style>
