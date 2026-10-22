<script setup>
import { ArrowRight } from 'lucide-vue-next'

import imgAnalysis from '@/assets/img/Estrategia-optimized.webp'
import imgDesign from '@/assets/img/design-optimized.webp'
import imgDev from '@/assets/img/arquitectura-optimized.webp'
import imgDeploy from '@/assets/img/despliege-optimized.webp'

const steps = [
  {
    id: '01',
    title: 'Diagnóstico & Estrategia',
    description: 'No escribimos una línea de código sin entender tu negocio. Auditamos tus flujos actuales, identificamos cuellos de botella y diseñamos la arquitectura exacta para escalar tus métricas.',
    image: imgAnalysis,
    align: 'right'
  },
  {
    id: '02',
    title: 'Diseño Orientado a Conversión',
    description: 'La estética sin resultados es inútil. Creamos interfaces de usuario (UI/UX) de clase mundial con un único objetivo: guiar la psicología del usuario hacia la compra o registro.',
    image: imgDesign,
    align: 'left'
  },
  {
    id: '03',
    title: 'Ingeniería de Software',
    description: 'Construimos el motor. Usamos tecnologías modernas y arquitecturas cloud preparadas para soportar picos masivos de tráfico sin sudar. Código limpio, seguro y mantenible.',
    image: imgDev,
    align: 'right'
  },
  {
    id: '04',
    title: 'Despliegue & Crecimiento',
    description: 'Lanzamos tu producto al mercado con monitoreo en tiempo real. Pero el lanzamiento es solo el inicio; analizamos los datos y optimizamos continuamente para multiplicar tu ROI.',
    image: imgDeploy,
    align: 'left'
  }
]
</script>

<template>
  <section class="services-process relative bg-section-dark pb-16 lg:pb-24 overflow-hidden">

    <div class="section-container relative z-20 text-center mb-16 lg:mb-24">
      <p class="section-eyebrow mb-6" v-reveal data-delay="0">El camino al resultado</p>
      <h2 class="section-title process-title mx-auto" v-reveal data-delay="100">
        No hacemos webs. Construimos imperios.
      </h2>
    </div>

    <div class="section-container relative z-10">
      <div class="flex flex-col gap-32 lg:gap-48">

        <div v-for="(step, index) in steps" :key="step.id"
          class="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative" v-reveal :data-delay="200">

          <!-- Text Content -->
          <div class="flex-1 w-full" :class="{ 'lg:order-2': step.align === 'left' }">
            <h3 class="text-h2 text-content mb-6">{{ step.title }}</h3>
            <p class="text-lead text-subdued max-w-lg">{{ step.description }}</p>
          </div>

          <!-- Visual Content -->
          <div class="flex-1 w-full relative" :class="{ 'lg:order-1': step.align === 'left' }">
            <div class="relative rounded-2xl overflow-hidden bg-panel border border-line aspect-[4/3] group">
              <img :src="step.image" :alt="step.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy" />
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  width: 90%;
  max-width: 1300px;
  margin-inline: auto;
}

.services-process {
  padding-top: clamp(1.5rem, 3vw, 3rem);
}

.process-title {
  max-width: 20ch;
}
</style>
