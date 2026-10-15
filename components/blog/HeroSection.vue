<script setup>
</script>

<template>
  <section class="relative bg-section-dark pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b border-line">
    
    <div class="absolute rounded-full pointer-events-none blur-[120px] w-[600px] h-[600px] bg-accent opacity-[0.04] top-0 left-1/2 -translate-x-1/2"></div>
    
    <div class="relative z-20 w-[90%] max-w-[1000px] mx-auto text-center flex flex-col items-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-panel mb-8 backdrop-blur-sm" v-reveal data-delay="0">
          <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          <span class="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-subdued">Journal & Insights</span>
        </div>
        
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.05] tracking-tight text-content" v-reveal data-delay="100">
          Ideas, tecnología y <br class="md:hidden"/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-heading-start to-heading-end">crecimiento digital.</span>
        </h1>
        
        <div class="relative max-w-xl mx-auto" v-reveal data-delay="200">
            <p class="text-lg text-subdued leading-relaxed font-medium">
                Explora nuestros artículos sobre arquitectura de software, escalabilidad, diseño de producto y las estrategias tecnológicas que están transformando negocios.
            </p>
        </div>
    </div>
  </section>
</template>
