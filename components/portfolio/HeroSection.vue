<script setup>
</script>

<template>
  <section class="relative bg-[#05080a] pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-white/5">
    <!-- ESTRUCTURA HUD DE FONDO -->
    <div class="absolute inset-0 z-0 pointer-events-none select-none">
        <!-- Rejilla de perspectiva 3D -->
        <div class="absolute inset-0 perspective-grid opacity-10"></div>
    </div>
    
    <div class="relative z-20 text-center flex flex-col items-center max-w-5xl mx-auto px-4">
        <div class="flex items-center gap-6 mb-6">
          <div class="h-[1px] w-12 bg-accent/30"></div>
          <span class="text-[11px] uppercase tracking-[0.8em] font-mono text-accent font-bold">Historial de Ejecución</span>
          <div class="h-[1px] w-12 bg-accent/30"></div>
        </div>

        <h1 class="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
          Casos de <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">Éxito.</span>
        </h1>

        <div class="relative max-w-xl bg-[#0a0e17]/60 backdrop-blur-md border border-white/10 p-6 lg:p-8">
            <div class="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent"></div>
            <div class="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent"></div>
            
            <p class="text-gray-400 font-mono text-xs md:text-sm leading-relaxed relative z-10">
                Matriz de soluciones implementadas. Cada nodo representa un hito en ingeniería de software y arquitectura escalable.
            </p>
        </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-grid {
    background-image: linear-gradient(rgba(0, 242, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 242, 255, 0.1) 1px, transparent 1px);
    background-size: 60px 60px;
    transform: perspective(1000px) rotateX(60deg) translateY(-100px);
    mask-image: linear-gradient(to bottom, transparent, black);
}
</style>

