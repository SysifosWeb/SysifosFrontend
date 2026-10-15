<script setup>
</script>

<template>
  <section class="relative bg-section-dark pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-line">
    
    <div class="absolute rounded-full pointer-events-none blur-[120px] w-[600px] h-[600px] bg-accent opacity-[0.03] top-0 left-1/2 -translate-x-1/2"></div>
    
    <div class="relative z-20 w-[90%] max-w-[1000px] mx-auto text-center flex flex-col items-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-panel mb-8 backdrop-blur-sm" v-reveal data-delay="0">
          <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          <span class="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-subdued">Iniciemos una colaboración</span>
        </div>
        
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.05] tracking-tight text-content" v-reveal data-delay="100">
          Hablemos de tu <br class="md:hidden"/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-heading-start to-heading-end">próximo proyecto.</span>
        </h1>
        
        <div class="relative max-w-xl mx-auto" v-reveal data-delay="200">
            <p class="text-lg text-subdued leading-relaxed font-medium">
                Nos apasiona resolver desafíos técnicos complejos. Cuéntanos qué quieres construir y nuestro equipo evaluará la arquitectura óptima para escalar tu idea.
            </p>
        </div>
    </div>
  </section>
</template>
