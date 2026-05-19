<script setup>
import { ArrowRight, Sparkles } from 'lucide-vue-next'
</script>

<template>
  <section class="relative py-20 lg:py-32 overflow-hidden bg-section-dark">

    <!-- Cinematic Ambient Light -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="section-container relative z-10 flex flex-col items-center text-center">

      <!-- Eyebrow -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8" v-reveal data-delay="0">
        <Sparkles class="w-4 h-4 text-accent" />
        <span class="text-xs font-bold tracking-widest text-white/80 uppercase">Únete a la nueva era digital</span>
      </div>

      <!-- Headline -->
      <h2 class="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1] text-white mb-8" v-reveal data-delay="100">
        Tu empresa está lista para escalar.<br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-blue-500">Tu tecnología también debería estarlo.</span>
      </h2>
      
      <!-- Subtext -->
      <p class="text-lg md:text-2xl text-white/50 font-medium leading-relaxed max-w-3xl mb-12" v-reveal data-delay="200">
        Deja de perder ingresos por culpa de sistemas lentos o estáticos. Asóciate con nosotros y transformemos tu operación en una máquina de crecimiento, ventas y eficiencia automatizada.
      </p>
      
      <!-- Actions -->
      <div class="flex flex-col sm:flex-row items-center gap-6" v-reveal data-delay="300">
        <!-- Botón Principal (Primary) -->
        <a href="https://wa.me/56949109970?text=Hola,%20busco%20un%20partner%20tecnológico%20para%20escalar%20mi%20empresa." target="_blank" class="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg hover:bg-accent hover:text-white transition-all duration-500 hover:scale-105">
          Empezar la Transformación
          <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <!-- Micro-Trust text -->
      <div class="mt-8 flex items-center gap-4 text-sm font-medium text-white/40" v-reveal data-delay="400">
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
</style>
