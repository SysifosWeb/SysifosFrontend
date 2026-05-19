<script setup>
import team from "@/assets/img/saas_product_visual.png";
</script>

<template>
  <section class="relative bg-section-dark py-16 lg:py-20 overflow-hidden">
    
    <!-- Ambient light — restrained, not cyberpunk -->
    <div class="absolute rounded-full pointer-events-none blur-[120px] w-[480px] h-[480px] bg-indigo-500 opacity-5 -top-20 -left-30"></div>
    <div class="absolute rounded-full pointer-events-none blur-[120px] w-[360px] h-[360px] bg-sky-400 opacity-5 top-[40%] -right-24"></div>

    <div class="relative z-10 w-[90%] max-w-[1340px] mx-auto flex flex-col gap-24">
      
      <!-- ═══ NARRATIVE SPLIT ═══ -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <!-- Left: Editorial copy -->
        <div class="flex flex-col gap-0">
          <!-- Overline -->
          <p class="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-white/50 mb-7" v-reveal data-delay="0">Fundada en 2024 · Coquimbo, Chile</p>

          <h2 class="text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.08] tracking-tight text-white mb-8" v-reveal data-delay="100">
            Arquitectura que<br/>
            <em class="not-italic text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">resiste la escala.</em>
          </h2>

          <div class="flex flex-col gap-4 pl-5 border-l border-sky-400/20 mb-10" v-reveal data-delay="200">
            <p class="text-base leading-relaxed text-white/70">
              SysifosWeb nace con una convicción: la tecnología de vanguardia no debería ser un privilegio de las grandes corporaciones. La democratizamos.
            </p>
            <p class="text-base leading-relaxed text-white/70">
              Inspirados en el mito de Sísifo — perseverancia, precisión, esfuerzo sostenido — convertimos cada desafío técnico en una solución de alto rendimiento con impacto medible en tu negocio.
            </p>
          </div>

          <!-- Founding stat -->
          <div class="inline-flex items-center gap-4" v-reveal data-delay="300">
            <span class="text-2xl font-extrabold tracking-tight text-white">2024</span>
            <span class="w-8 h-px bg-white/10"></span>
            <span class="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-white/50">Año de fundación</span>
          </div>
        </div>

        <!-- Right: Image with editorial frame -->
        <div class="relative group" v-reveal data-delay="200">
          <div class="relative rounded-[20px] overflow-hidden border border-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_40px_80px_rgba(0,0,0,0.5)]">
            <img :src="team" alt="SysifosWeb — Arquitecto de nodo" class="w-full h-[480px] object-cover object-center block brightness-[0.88] contrast-[1.04] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:brightness-[0.96] group-hover:contrast-[1.02] group-hover:scale-[1.02]" loading="lazy" />
            <!-- Overlay caption -->
            <div class="absolute bottom-0 inset-x-0 pt-10 pb-5 px-6 bg-gradient-to-t from-[#0b1222]/95 to-transparent flex items-center gap-2.5 text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-white/35">
              <span class="w-[5px] h-[5px] rounded-full bg-accent opacity-70"></span>
              <span>Node Architecture · v2.4</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ MANIFESTO STRIP ═══ -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/5">
        
        <div class="py-10 pr-8 md:py-12 md:pr-10 border-b md:border-b-0 md:border-r border-white/5 transition-colors duration-300 hover:bg-white/[0.015]" v-reveal data-delay="0">
          <span class="block text-[0.65rem] font-bold tracking-[0.2em] text-accent mb-4 opacity-70">01</span>
          <div class="w-6 h-px bg-accent opacity-30 mb-5"></div>
          <div>
            <h3 class="text-sm font-bold tracking-[0.08em] uppercase text-white mb-3">Misión</h3>
            <p class="text-sm leading-relaxed text-white/70">Empoderar corporaciones mediante arquitecturas robustas que aceleren su crecimiento y maximicen su competitividad global.</p>
          </div>
        </div>

        <div class="py-10 pr-8 md:py-12 md:px-10 border-b md:border-b-0 md:border-r border-white/5 transition-colors duration-300 hover:bg-white/[0.015]" v-reveal data-delay="150">
          <span class="block text-[0.65rem] font-bold tracking-[0.2em] text-indigo-400 mb-4 opacity-70">02</span>
          <div class="w-6 h-px bg-indigo-400 opacity-30 mb-5"></div>
          <div>
            <h3 class="text-sm font-bold tracking-[0.08em] uppercase text-white mb-3">Visión</h3>
            <p class="text-sm leading-relaxed text-white/70">Ser el referente de desarrollo de software más confiable de la región, distinguidos por excelencia técnica inquebrantable.</p>
          </div>
        </div>

        <div class="py-10 pr-8 md:py-12 md:pl-10 border-b md:border-b-0 border-white/5 transition-colors duration-300 hover:bg-white/[0.015]" v-reveal data-delay="300">
          <span class="block text-[0.65rem] font-bold tracking-[0.2em] text-accent mb-4 opacity-70">03</span>
          <div class="w-6 h-px bg-accent opacity-30 mb-5"></div>
          <div>
            <h3 class="text-sm font-bold tracking-[0.08em] uppercase text-white mb-3">Valores</h3>
            <p class="text-sm leading-relaxed text-white/70">Innovación pragmática, calidad sistemática, transparencia operacional. La ingeniería sólida construye futuros sustentables.</p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
