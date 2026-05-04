<script setup>
import { ExternalLink, Database, Cpu, ShieldCheck } from 'lucide-vue-next'
import ansar from '@/assets/img/ansar.gif';
</script>

<template>
  <section class="relative bg-[#05080a] py-32 overflow-hidden border-b border-white/5">
    <div class="max-w-[1400px] w-[92%] mx-auto relative z-10">
      
      <!-- Encabezado de Sección -->
      <div class="mb-20 flex flex-col items-start relative">
          <div class="flex items-center gap-3 mb-4 font-mono text-accent text-sm tracking-[0.3em]">
              <span class="w-8 h-[1px] bg-accent"></span>
              CASE_STUDY // PROJECT_FEATURED_01
          </div>
          <h2 class="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Ansar <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Automotriz.</span>
          </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          <!-- PANEL DE ANÁLISIS (Izquierda) -->
          <div class="lg:col-span-5 flex flex-col space-y-8">
              
              <!-- Desafío Module -->
              <div class="relative p-8 bg-[#0a0e17]/40 border border-white/5 backdrop-blur-sm group hover:border-accent/30 transition-all duration-500">
                  <div class="absolute top-0 right-0 p-2 font-mono text-[10px] text-accent/20 group-hover:text-accent/50 transition-colors">ERR_PROB: 0%</div>
                  <h3 class="text-accent font-mono text-[12px] uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                      <Database class="w-4 h-4" /> 01_DESAFÍO_TÉCNICO
                  </h3>
                  <p class="text-gray-300 font-mono text-sm leading-relaxed">
                      Sincronización masiva de inventario en tiempo real con motor de tasación algorítmico integrado para el mercado automotriz premium.
                  </p>
              </div>

              <!-- Solución Module -->
              <div class="relative p-8 bg-[#0a0e17]/40 border border-white/5 backdrop-blur-sm group hover:border-accent/30 transition-all duration-500">
                  <h3 class="text-accent font-mono text-[12px] uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                      <Cpu class="w-4 h-4" /> 02_SOLUCIÓN_INGENIERÍA
                  </h3>
                  <p class="text-gray-300 font-mono text-sm leading-relaxed">
                      Desarrollo de una arquitectura Cloud-Native con balanceo de carga dinámico y un CMS Headless optimizado para la gestión de activos multimedia de alta resolución.
                  </p>
              </div>

              <!-- Stats Matrix -->
              <div class="grid grid-cols-3 gap-1 bg-[#0a0e17]/80 border border-white/5 p-1">
                  <div class="bg-[#05080a] p-6 text-center">
                      <div class="text-2xl font-bold text-white mb-1">98<span class="text-accent">%</span></div>
                      <div class="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Perf_Score</div>
                  </div>
                  <div class="bg-[#05080a] p-6 text-center">
                      <div class="text-2xl font-bold text-white mb-1">50<span class="text-accent">+</span></div>
                      <div class="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Nodes_Sync</div>
                  </div>
                  <div class="bg-[#05080a] p-6 text-center">
                      <div class="text-2xl font-bold text-white mb-1">30<span class="text-accent">%</span></div>
                      <div class="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Conv_Rate</div>
                  </div>
              </div>
              
              <!-- CTA -->
              <a href="https://ansarautomotriz.com/" target="_blank" class="flex items-center justify-center gap-4 py-4 border border-accent/20 text-accent font-mono text-sm uppercase tracking-[0.4em] hover:bg-accent hover:text-[#05080a] transition-all group">
                  EXPLORAR_DESPLIEGUE_ACTIVO <ExternalLink class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
          </div>

          <!-- PROYECCIÓN VISUAL (Derecha) -->
          <div class="lg:col-span-7 relative group">
              <!-- HUD Overlays -->
              <div class="absolute inset-0 z-20 pointer-events-none border border-accent/20 group-hover:border-accent/50 transition-colors">
                  <!-- Crosshairs -->
                  <div class="absolute top-4 left-4 w-10 h-10 border-t border-l border-accent/40"></div>
                  <div class="absolute top-4 right-4 w-10 h-10 border-t border-r border-accent/40"></div>
                  <div class="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-accent/40"></div>
                  <div class="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-accent/40"></div>
                  
                  <!-- Scanning Beam -->
                  <div class="absolute top-0 left-0 w-full h-[1px] bg-accent/40 shadow-[0_0_15px_#00f2ff] animate-[scan_4s_ease-in-out_infinite]"></div>
                  
                  <!-- Data Readout -->
                  <div class="absolute top-10 left-10 font-mono text-[9px] text-accent/60 uppercase">
                      Stream_Live: OK<br/>FPS: 60.0<br/>BITRATE: 4500kbps
                  </div>
              </div>

              <!-- Main Visual -->
              <div class="relative overflow-hidden h-full min-h-[400px] bg-[#0a0e17] border border-white/5">
                  <NuxtImg :src="ansar" alt="Demostración Ansar" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" loading="lazy" />
                  
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-[#05080a] via-transparent to-transparent opacity-80"></div>
              </div>

              <!-- Tech Stack Floating -->
              <div class="absolute -bottom-4 -left-4 flex gap-2 z-30">
                  <span class="px-4 py-1 bg-accent text-[#05080a] font-mono text-[10px] font-bold uppercase shadow-[4px_4px_0px_#0088ff]">Laravel</span>
                  <span class="px-4 py-1 bg-[#0a0e17] text-white border border-white/10 font-mono text-[10px] uppercase">Vue.js</span>
                  <span class="px-4 py-1 bg-[#0a0e17] text-white border border-white/10 font-mono text-[10px] uppercase">MySQL</span>
              </div>
          </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scan {
  0%, 100% { transform: translateY(0); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
}
</style>

