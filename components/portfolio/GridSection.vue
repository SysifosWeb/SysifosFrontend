<script setup>
import faremin from '@/assets/img/faremin.gif';
import webImage from '@/assets/img/web.webp';
import { ExternalLink, Lock } from 'lucide-vue-next';
</script>

<template>
  <section class="relative bg-[#0a0e17] py-24 overflow-hidden border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-16 flex flex-col items-center">
          <div class="flex items-center gap-4 mb-4">
            <span class="w-1.5 h-1.5 bg-[#4a4a4a]"></span>
            <span class="text-[14px] uppercase tracking-[0.5em] font-mono text-gray-300">SYS_UNIT // ARCHIVO_SECTORIAL</span>
          </div>
          <h2 class="text-3xl font-bold font-tech text-white uppercase tracking-tighter mb-4">
            Proyectos por <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Industria.</span>
          </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Faremin (Terminado) -->
          <div class="relative group bg-[#0c121e] border border-white/5 hover:border-[#00f2ff]/30 transition-all duration-500 flex flex-col h-full shadow-lg">
              <div class="relative h-48 border-b border-white/5 overflow-hidden bg-black">
                  <div class="absolute top-2 left-2 z-20 bg-[#0c121e]/80 backdrop-blur-sm border border-[#00f2ff]/20 px-2 py-1 text-[15px] font-mono text-[#00f2ff] uppercase">DESPLIEGUE_ACTIVO</div>
                  <img :src="faremin" alt="Faremin" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
              </div>
              <div class="p-6 flex-grow flex flex-col">
                  <h3 class="text-xl font-bold text-white uppercase tracking-widest mb-3">Maestranza Faremin</h3>
                  <p class="text-gray-300 font-mono text-[14px] leading-relaxed mb-6 flex-grow">
                      Sitio web corporativo desarrollado a medida, enfocado en destacar servicios, experiencia técnica y capacidades en la industria metalmecánica.
                  </p>
                  <div class="flex gap-2 mb-6">
                      <span class="px-2 py-1 bg-white/5 text-gray-300 text-[14px] font-mono">VUE.JS</span>
                      <span class="px-2 py-1 bg-white/5 text-gray-300 text-[14px] font-mono">LARAVEL</span>
                  </div>
                  <a href="#" class="inline-flex items-center gap-2 text-[15px] font-mono text-[#00f2ff] hover:text-white transition-colors mt-auto">
                      VISITAR_ENLACE <ExternalLink class="w-3 h-3" />
                  </a>
              </div>
          </div>

          <!-- StahlForm (En Desarrollo) -->
          <div class="relative group bg-[#0c121e] border border-white/5 hover:border-yellow-500/30 transition-all duration-500 flex flex-col h-full shadow-lg">
              <div class="relative h-48 border-b border-white/5 overflow-hidden bg-black">
                  <div class="absolute top-2 left-2 z-20 bg-[#0c121e]/80 backdrop-blur-sm border border-yellow-500/20 px-2 py-1 text-[15px] font-mono text-yellow-500 uppercase">EN_COMPILACION</div>
                  <img :src="webImage" alt="StahlForm" class="w-full h-full object-cover opacity-60 transition-all duration-700" />
              </div>
              <div class="p-6 flex-grow flex flex-col">
                  <h3 class="text-xl font-bold text-white uppercase tracking-widest mb-3">StahlForm</h3>
                  <p class="text-gray-300 font-mono text-[14px] leading-relaxed mb-6 flex-grow">
                      Landing Page de alta conversión en desarrollo. Interfaz de alto impacto visual orientada al sector industrial, con estética minimalista y técnica.
                  </p>
                  <div class="flex gap-2 mb-6">
                      <span class="px-2 py-1 bg-white/5 text-gray-300 text-[14px] font-mono">VUE.JS</span>
                      <span class="px-2 py-1 bg-white/5 text-gray-300 text-[14px] font-mono">TAILWIND</span>
                  </div>
                  <span class="inline-flex items-center gap-2 text-[15px] font-mono text-gray-300 mt-auto cursor-not-allowed">
                      ACCESO_RESTRINGIDO <Lock class="w-3 h-3" />
                  </span>
              </div>
          </div>

          <!-- CTA Card -->
          <div class="relative group bg-[#0a0e17] border border-[#00f2ff]/20 hover:border-[#00f2ff] transition-all duration-500 flex flex-col h-full p-8 justify-center items-center text-center shadow-lg">
              <div class="absolute inset-0 bg-[#00f2ff]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 class="text-2xl font-bold text-white uppercase tracking-widest mb-4">MÓDULO VACÍO</h3>
              <p class="text-gray-300 font-mono text-[14px] mb-8 relative z-10">
                  Reserva este espacio para el ensamblaje de tu próximo proyecto digital.
              </p>
              <NuxtLink to="/contacto" class="relative z-10 px-6 py-3 border border-[#00f2ff] text-[#00f2ff] font-mono text-[15px] uppercase tracking-widest hover:bg-[#00f2ff] hover:text-[#0a0e17] transition-colors shadow-[0_0_15px_rgba(0,242,255,0.2)]">
                  INICIALIZAR_PROYECTO
              </NuxtLink>
          </div>

      </div>
    </div>
  </section>
</template>
