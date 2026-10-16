<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section id="conversemos" class="nosotros-cta relative py-20 lg:py-32 overflow-hidden bg-section-dark impulso-closing">

    <div class="section-container relative z-10 flex flex-col items-center text-center">

      <!-- Headline -->
      <h2 class="section-title cta-title text-content mb-8" v-reveal
        data-delay="100">
        <span class="cta-title__intro">Tu empresa está lista para escalar.</span>
        <span class="cta-title__accent">Tu tecnología también debería estarlo.</span>
      </h2>

      <!-- Subtext -->
      <p class="text-lead text-subdued max-w-3xl mb-12" v-reveal
        data-delay="200">
        Deja de perder ingresos por culpa de sistemas lentos o estáticos. Asóciate con nosotros y transformemos tu
        operación en una máquina de crecimiento, ventas y eficiencia automatizada.
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row items-center gap-6" v-reveal data-delay="300">
        <!-- Botón Principal (Primary) -->
        <a href="https://wa.me/56985021549?text=Hola,%20busco%20un%20partner%20tecnológico%20para%20escalar%20mi%20empresa."
          target="_blank"
          class="btn btn-primary px-8 py-4 text-body">
          Empezar la Transformación
          <ArrowRight class="w-5 h-5" />
        </a>
      </div>

      <!-- Micro-Trust text -->
      <div class="mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-small font-medium text-subdued" v-reveal data-delay="400">
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          Disponibilidad inmediata
        </div>
        <span class="hidden sm:inline" aria-hidden="true">•</span>
        <span>Partnership Estratégico</span>
        <span class="hidden sm:inline" aria-hidden="true">•</span>
        <span>Cero plantillas</span>
      </div>

    </div>
  </section>
</template>

<style scoped>
.section-container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.cta-title {
  width: 100%;
  max-width: none;
  font-size: clamp(2.25rem, 1.1rem + 5.5vw, 5.5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: var(--ls-hero);
  text-wrap: balance;
}
.cta-title__intro, .cta-title__accent { display: block; margin-inline: auto; text-wrap: balance; }
.cta-title__intro { max-width: 22ch; }
.cta-title__accent { max-width: 24ch; color: #9DCBF5; }
.nosotros-cta .text-lead { font-size: clamp(1.125rem, 1rem + .65vw, 1.5rem); line-height: 1.5; }
</style>
