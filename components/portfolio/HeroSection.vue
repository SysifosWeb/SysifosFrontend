<script setup>
</script>

<template>
  <section class="relative bg-section-dark pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden border-b border-white/5">
    
    <!-- Glows -->
    <div class="section-glow-purple glow-center"></div>
    
    <div class="section-container relative z-20 text-center flex flex-col items-center">
        
        <div class="eyebrow-badge mx-auto mb-6">
          <span class="eyebrow-badge__dot"></span>
          <span class="eyebrow-badge__text">Historial de Ejecución</span>
        </div>

        <h1 class="section-title text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
          Casos de <br class="md:hidden"/>
          <span class="text-accent">Éxito.</span>
        </h1>

        <div class="relative max-w-xl mx-auto">
            <p class="section-subtitle">
                Explora nuestra matriz de soluciones implementadas. Cada proyecto representa un hito en ingeniería de software y arquitectura escalable, diseñado para generar resultados reales.
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
