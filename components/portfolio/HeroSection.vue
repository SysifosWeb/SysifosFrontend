<script setup>
</script>

<template>
  <section class="relative bg-section-dark pt-32 pb-10 lg:pt-48 lg:pb-16 overflow-hidden">
    
    <!-- Glows -->
    <div class="section-glow-purple glow-center"></div>
    
    <div class="section-container relative z-20 text-center flex flex-col items-center">
        
        <div class="eyebrow-badge mx-auto mb-6" v-reveal data-delay="0">
          <span class="eyebrow-badge__dot"></span>
          <span class="eyebrow-badge__text">Impacto y Resultados</span>
        </div>

        <h1 class="section-title text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight" v-reveal data-delay="100">
          Plataformas que <br class="md:hidden"/>
          <span class="text-accent">Escalan Negocios.</span>
        </h1>

        <div class="relative max-w-xl mx-auto" v-reveal data-delay="200">
            <p class="section-subtitle text-lg text-white/70 font-medium">
                No construimos simples webs; desarrollamos infraestructuras digitales de alto rendimiento. Descubre cómo ayudamos a empresas a optimizar sus procesos, multiplicar su conversión y liderar su sector mediante ingeniería de software premium.
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
