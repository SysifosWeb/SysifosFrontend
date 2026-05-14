<script setup>
</script>

<template>
  <section class="hero-section bg-section-dark pt-32 lg:pt-48 pb-16 lg:pb-24">

    <!-- Ambient Glow -->
    <div class="section-glow-cyan glow-center"></div>

    <div class="section-container text-center flex flex-col items-center">
        
        <div class="eyebrow-badge mx-auto mb-8" v-reveal data-delay="0">
          <span class="eyebrow-badge__dot"></span>
          <span class="eyebrow-badge__text">Soluciones Digitales</span>
        </div>

        <h1 class="hero-headline mb-8" v-reveal data-delay="100">
          Construido para escalar.<br/>
          <span class="hero-accent">Diseñado para liderar.</span>
        </h1>

        <div class="relative max-w-2xl mx-auto mb-10" v-reveal data-delay="200">
            <p class="hero-subtitle">
                Brindamos la tecnología, el diseño y la infraestructura que tu empresa necesita para moverse rápido, captar más clientes y operar sin fricción.
            </p>
        </div>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto" v-reveal data-delay="300">
            <NuxtLink to="/contacto" class="cta-primary-btn w-full sm:w-auto justify-center">
                Iniciar un proyecto
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
            </NuxtLink>
            <NuxtLink to="/portfolio" class="cta-ghost w-full sm:w-auto justify-center">
                Ver casos de éxito
            </NuxtLink>
        </div>
        
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.section-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
}

.glow-center {
  width: 800px;
  height: 800px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.06;
}

.hero-headline {
  font-family: 'Inter', sans-serif;
  font-size: clamp(3rem, 6.5vw, 5.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: #ffffff;
}

.hero-accent {
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.3) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: var(--text-secondary);
  font-weight: 400;
}
</style>
