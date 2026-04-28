<script setup>
import { ExternalLink } from 'lucide-vue-next'
import ansar from '@/assets/img/ansar.gif';
</script>

<template>
  <section class="relative bg-[#0a0e17] py-24 overflow-hidden border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="mb-16 flex items-center justify-between">
          <div class="flex flex-col">
              <div class="flex items-center gap-4 mb-2">
                  <span class="text-[14px] font-mono text-[#00f2ff]">> DESTACADO</span>
              </div>
              <h2 class="text-3xl font-bold font-tech text-white uppercase tracking-tighter mb-4">Ansar <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Automotriz.</span></h2>
          </div>
          <a href="https://ansarautomotriz.com/" target="_blank" class="hidden md:flex items-center gap-2 text-[#00f2ff] hover:text-white transition-colors font-mono text-[14px] uppercase">
              VISITAR_NODO_ACTIVO <ExternalLink class="w-4 h-4"/>
          </a>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Text Info -->
          <div class="order-2 lg:order-1 relative">
              <div class="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#00f2ff] via-[#00f2ff]/20 to-transparent"></div>
              
              <div class="mb-8">
                  <h3 class="text-white font-mono text-[15px] uppercase mb-2 tracking-widest text-gray-300">01 // DESAFÍO</h3>
                  <p class="text-gray-300 font-mono text-[15px] leading-relaxed">
                      Crear una plataforma robusta que permitiera a los usuarios comprar y vender su vehículo, incluyendo un cotizador automatizado para la tasación precisa en tiempo real.
                  </p>
              </div>

              <div class="mb-10">
                  <h3 class="text-white font-mono text-[15px] uppercase mb-2 tracking-widest text-[#00f2ff]">02 // SOLUCIÓN</h3>
                  <p class="text-gray-300 font-mono text-[15px] leading-relaxed">
                      Desarrollamos una aplicación web completa con un motor de tasación algorítmico integrado, un CMS para carga dinámica de vehículos, y sistemas de gestión de leads de alto valor.
                  </p>
              </div>

              <!-- Stats -->
              <div class="grid grid-cols-3 gap-4 mb-10 border-t border-white/5 pt-8">
                  <div>
                      <div class="text-2xl font-bold text-white mb-1">98<span class="text-[#00f2ff]">%</span></div>
                      <div class="text-[14px] font-mono text-gray-300 uppercase tracking-wider">Precisión ML</div>
                  </div>
                  <div>
                      <div class="text-2xl font-bold text-white mb-1">50<span class="text-[#00f2ff]">+</span></div>
                      <div class="text-[14px] font-mono text-gray-300 uppercase tracking-wider">Flota/Mes</div>
                  </div>
                  <div>
                      <div class="text-2xl font-bold text-white mb-1">30<span class="text-[#00f2ff]">%</span></div>
                      <div class="text-[14px] font-mono text-gray-300 uppercase tracking-wider">Ops_Compra</div>
                  </div>
              </div>

              <!-- Stack -->
              <div class="flex gap-3 mb-10">
                  <span class="px-3 py-1 border border-white/10 text-[14px] font-mono text-white">VUE.JS</span>
                  <span class="px-3 py-1 border border-[#00f2ff]/30 text-[14px] font-mono text-[#00f2ff]">LARAVEL</span>
                  <span class="px-3 py-1 border border-white/10 text-[14px] font-mono text-white">MYSQL</span>
              </div>
          </div>

          <!-- Image / GIF -->
          <div class="order-1 lg:order-2 relative group">
              <div class="absolute inset-0 bg-gradient-to-tr from-[#00f2ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
              <div class="absolute -inset-1 bg-gradient-to-r from-[#00f2ff]/50 to-transparent blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              <div class="relative border border-white/10 bg-[#0c121e] p-2">
                  <img :src="ansar" alt="Demostración Ansar" class="w-full h-auto object-cover transition duration-500" />
                  <!-- decorative corners -->
                  <div class="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#00f2ff]"></div>
                  <div class="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#00f2ff]"></div>
                  <div class="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#00f2ff]"></div>
                  <div class="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#00f2ff]"></div>
              </div>
          </div>
      </div>
    </div>
  </section>
</template>
