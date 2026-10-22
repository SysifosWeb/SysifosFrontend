<script setup>
</script>

<template>
  <section class="hero-section bg-section-dark pt-32 lg:pt-48 pb-16 lg:pb-24">

    <div class="section-container text-center flex flex-col items-center">
        
        <p class="section-eyebrow mb-6" v-reveal data-delay="0">Soluciones digitales</p>

        <h1 class="hero-headline mb-8" v-reveal data-delay="100">
          Páginas web, ecommerce <span class="display-accent">y software a medida.</span>
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
                Ver proyectos
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

.hero-headline {
  font-family: var(--font-heading);
  font-size: var(--fs-page-hero);
  font-weight: var(--fw-hero);
  line-height: var(--lh-hero);
  letter-spacing: var(--ls-hero);
  color: var(--text-main);
  max-inline-size: 21ch;
  text-wrap: balance;
}

.hero-subtitle {
  font-size: var(--fs-lead);
  line-height: var(--lh-lead);
  color: var(--text-secondary);
  font-weight: 400;
}

@media (max-width: 480px) {
  .hero-headline {
    max-inline-size: none;
  }
}
</style>
