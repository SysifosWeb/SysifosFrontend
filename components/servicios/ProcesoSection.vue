<script setup>
import { ArrowRight } from 'lucide-vue-next'

import imgAnalysis from '@/assets/img/network-bg.png'
import imgDesign from '@/assets/img/webDesign_min.webp'
import imgDev from '@/assets/img/node_architect_sys.png'
import imgDeploy from '@/assets/img/system_m_min.webp'

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
  <section class="relative bg-section-dark py-16 lg:py-24 overflow-hidden">
    
    <!-- Cinematic Lighting -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-accent/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

    <div class="section-container relative z-20 text-center mb-24 lg:mb-32">
        <div class="inline-flex items-center gap-3 mb-8" v-reveal data-delay="0">
          <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span class="text-sm font-extrabold tracking-[0.2em] text-white/50 uppercase">El Camino al Éxito</span>
          <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        </div>
        <h2 class="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.95] text-white" v-reveal data-delay="100">
          No hacemos webs. <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-blue-500">Construimos imperios.</span>
        </h2>
    </div>

    <div class="section-container relative z-10">
        <div class="flex flex-col gap-32 lg:gap-48">
            
            <div v-for="(step, index) in steps" :key="step.id" 
                 class="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative" v-reveal :data-delay="200">
                
                <!-- Line Connector for Desktop -->
                <div v-if="index !== steps.length - 1" class="hidden lg:block absolute left-1/2 top-full w-px h-48 bg-gradient-to-b from-white/10 to-transparent -translate-x-1/2 z-0"></div>

                <!-- Text Content -->
                <div class="flex-1 w-full" :class="{'lg:order-2': step.align === 'left'}">
                   <div class="flex items-center gap-6 mb-8">
                      <span class="text-7xl lg:text-8xl font-black text-transparent" style="-webkit-text-stroke: 1px rgba(255,255,255,0.15);">{{ step.id }}</span>
                      <div class="h-px w-24 bg-accent/50 hidden md:block"></div>
                   </div>
                   <h3 class="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">{{ step.title }}</h3>
                   <p class="text-lg lg:text-xl text-white/60 leading-relaxed font-medium max-w-lg">{{ step.description }}</p>
                </div>

                <!-- Visual Content -->
                <div class="flex-1 w-full relative" :class="{'lg:order-1': step.align === 'left'}">
                   <!-- Ambient Glow behind image -->
                   <div class="absolute inset-0 bg-accent/10 blur-[60px] rounded-full transform scale-90"></div>
                   
                   <div class="relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 aspect-[4/3] group shadow-2xl">
                       <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 mix-blend-multiply"></div>
                       <img :src="step.image" :alt="step.title" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100" loading="lazy" />
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
  margin: 0 auto;
}
</style>
