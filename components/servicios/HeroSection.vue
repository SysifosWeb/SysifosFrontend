<script setup>
</script>

<template>
  <section class="hero-section bg-section-dark">

    <!-- Línea decorativa top -->
    <div class="section-line-top"></div>

    <!-- Glows -->
    <div class="section-glow-cyan glow-center"></div>

    <div class="section-container text-center flex flex-col items-center">
        
        <div class="eyebrow-badge mx-auto mb-6">
          <span class="eyebrow-badge__dot"></span>
          <span class="eyebrow-badge__text">Protocolos de Servicio</span>
        </div>

        <h1 class="section-title text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
          Arquitectura <br/>
          <span class="text-accent">Digital.</span>
        </h1>

        <div class="relative max-w-2xl mx-auto">
            <p class="section-subtitle">
                Desplegamos ecosistemas digitales de alto rendimiento mediante ingeniería de precisión. Soluciones escalables diseñadas para optimizar la eficiencia operativa y la conversión transaccional.
            </p>
        </div>
        
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  padding: 8rem 0 6rem;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}

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
