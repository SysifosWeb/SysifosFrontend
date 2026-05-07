<script setup>
</script>

<template>
  <section class="relative bg-section-dark pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden border-b border-white/5">
    
    <div class="section-glow-cyan glow-center"></div>
    
    <div class="section-container relative z-20 text-center flex flex-col items-center">
        <div class="eyebrow-badge mx-auto mb-6">
          <span class="eyebrow-badge__dot"></span>
          <span class="eyebrow-badge__text">Hablemos</span>
        </div>
        
        <h1 class="section-title text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
          Enlace de <br class="md:hidden"/>
          <span class="text-accent">Contacto.</span>
        </h1>
        
        <div class="relative max-w-xl mx-auto">
            <p class="section-subtitle">
                Cuéntanos sobre tu proyecto. Nuestro equipo técnico evaluará tu arquitectura y te entregará una propuesta eficiente y escalable.
            </p>
        </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
}

.glow-center {
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
}
</style>
