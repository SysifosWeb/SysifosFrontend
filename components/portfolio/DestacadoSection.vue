<script setup>
import { ExternalLink, Database, Cpu } from 'lucide-vue-next'
import ansar from '@/assets/img/ansar.gif';
</script>

<template>
  <section class="relative bg-section-surface py-20 lg:py-28 overflow-hidden border-b border-white/5">
    
    <div class="section-glow-purple glow-center-left"></div>

    <div class="section-container relative z-10">
      
      <!-- Encabezado de Sección -->
      <div class="mb-16 flex flex-col items-start">
          <div class="eyebrow-badge mb-4">
            <span class="eyebrow-badge__dot"></span>
            <span class="eyebrow-badge__text">Proyecto Destacado</span>
          </div>
          <h2 class="section-title text-4xl md:text-5xl lg:text-6xl">
            Ansar <span class="text-accent">Automotriz.</span>
          </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          <!-- PANEL DE ANÁLISIS (Izquierda) -->
          <div class="lg:col-span-5 flex flex-col gap-6">
              
              <!-- Desafío Module -->
              <div class="card-border bg-section-dark p-8 flex flex-col group transition-colors hover:border-accent/20">
                  <h3 class="text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2 text-muted">
                      <Database class="w-4 h-4 text-accent" /> DESAFÍO TÉCNICO
                  </h3>
                  <p class="card-text text-sm leading-relaxed">
                      Sincronización masiva de inventario en tiempo real con motor de tasación algorítmico integrado para el mercado automotriz premium.
                  </p>
              </div>

              <!-- Solución Module -->
              <div class="card-border bg-section-dark p-8 flex flex-col group transition-colors hover:border-accent/20">
                  <h3 class="text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2 text-muted">
                      <Cpu class="w-4 h-4 text-accent" /> SOLUCIÓN INGENIERÍA
                  </h3>
                  <p class="card-text text-sm leading-relaxed">
                      Desarrollo de una arquitectura Cloud-Native con balanceo de carga dinámico y un CMS Headless optimizado para la gestión de activos multimedia de alta resolución.
                  </p>
              </div>

              <!-- Stats Matrix -->
              <div class="grid grid-cols-3 gap-4 mt-2">
                  <div class="card-border bg-section-dark p-5 flex flex-col items-center justify-center text-center">
                      <div class="text-2xl font-bold text-white mb-1">98<span class="text-accent">%</span></div>
                      <div class="text-[10px] font-semibold text-muted uppercase tracking-wider">Performance</div>
                  </div>
                  <div class="card-border bg-section-dark p-5 flex flex-col items-center justify-center text-center">
                      <div class="text-2xl font-bold text-white mb-1">50<span class="text-accent">+</span></div>
                      <div class="text-[10px] font-semibold text-muted uppercase tracking-wider">Nodos Sync</div>
                  </div>
                  <div class="card-border bg-section-dark p-5 flex flex-col items-center justify-center text-center">
                      <div class="text-2xl font-bold text-white mb-1">30<span class="text-accent">%</span></div>
                      <div class="text-[10px] font-semibold text-muted uppercase tracking-wider">Conversión</div>
                  </div>
              </div>
              
              <!-- CTA -->
              <div class="mt-4">
                  <a href="https://ansarautomotriz.com/" target="_blank" class="cta-primary-btn w-full justify-center">
                      Explorar Proyecto <ExternalLink class="w-4 h-4" />
                  </a>
              </div>
          </div>

          <!-- PROYECCIÓN VISUAL (Derecha) -->
          <div class="lg:col-span-7 relative group flex flex-col">
              
              <!-- Main Visual -->
              <div class="relative overflow-hidden h-full min-h-[400px] rounded-2xl border border-white/10 shadow-2xl bg-section-dark">
                  <NuxtImg :src="ansar" alt="Demostración Ansar" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  
                  <!-- Gradient Overlay Bottom -->
                  <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/40 to-transparent opacity-90"></div>

                  <!-- Tech Stack Floating inside image -->
                  <div class="absolute bottom-6 left-6 flex flex-wrap gap-2 z-30">
                      <span class="px-3 py-1.5 rounded-lg bg-accent text-[#0a0e17] text-[11px] font-bold uppercase tracking-wider">Laravel</span>
                      <span class="px-3 py-1.5 rounded-lg bg-[#0a0e17] text-white border border-white/10 text-[11px] font-semibold uppercase tracking-wider">Vue.js</span>
                      <span class="px-3 py-1.5 rounded-lg bg-[#0a0e17] text-white border border-white/10 text-[11px] font-semibold uppercase tracking-wider">MySQL</span>
                  </div>
              </div>
              
          </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1340px;
  margin: 0 auto;
}

.glow-center-left {
  width: 500px;
  height: 500px;
  top: 50%;
  left: -200px;
  transform: translateY(-50%);
}
</style>
