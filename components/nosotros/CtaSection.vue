<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="relative py-20 lg:py-32 overflow-hidden bg-section-dark impulso-closing">

    <div class="section-container relative z-10 flex flex-col items-center text-center">

      <!-- Headline -->
      <h2 class="section-title cta-title text-content mb-8" v-reveal
        data-delay="100">
        Tu empresa está lista para escalar.
      </h2>

      <!-- Subtext -->
      <p class="text-lead text-subdued max-w-3xl mb-12" v-reveal
        data-delay="200">
        Tu tecnología también debería estarlo. Deja de perder ingresos por culpa de sistemas lentos o estáticos. Asóciate con nosotros y transformemos tu
        operación en una máquina de crecimiento, ventas y eficiencia automatizada.
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row items-center gap-6" v-reveal data-delay="300">
        <!-- Botón Principal (Primary) -->
        <a href="https://wa.me/56985021549?text=Hola,%20busco%20un%20partner%20tecnológico%20para%20escalar%20mi%20empresa."
          target="_blank"
          class="btn btn-primary px-8 py-4 text-base">
          Empezar la Transformación
          <ArrowRight class="w-5 h-5" />
        </a>
      </div>

      <!-- Micro-Trust text -->
      <div class="mt-8 flex items-center gap-4 text-sm font-medium text-subdued" v-reveal data-delay="400">
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>
          Disponibilidad inmediata
        </div>
        <span>•</span>
        <span>Partnership Estratégico</span>
        <span>•</span>
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

.cta-title { max-width: 24ch; }
</style>
