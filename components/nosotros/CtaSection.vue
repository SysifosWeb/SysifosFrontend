<script setup>
import { ChevronRight } from 'lucide-vue-next';
</script>

<template>
  <section class="relative bg-[#0a0e17] py-32 lg:py-40 overflow-hidden border-t border-white/5">
    
    <!-- Fondo animado: Rotating Data Core -->
    <div class="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none overflow-hidden">
        <!-- Resplandor central -->
        <div class="absolute w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]"></div>
        
        <!-- Anillos Concentricos Giratorios -->
        <!-- Exterior -->
        <div class="absolute w-[900px] h-[900px] rounded-full border border-accent/10 border-dashed animate-[spin_60s_linear_infinite]"></div>
        <div class="absolute w-[900px] h-[900px] rounded-full border-2 border-transparent border-t-accent/20 animate-[spin_40s_linear_infinite_reverse]"></div>
        
        <!-- Medio -->
        <div class="absolute w-[600px] h-[600px] rounded-full border border-accent/20 shadow-[inset_0_0_50px_rgba(0,242,255,0.05)] border-dashed animate-[spin_30s_linear_infinite_reverse]"></div>
        
        <!-- Interno -->
        <div class="absolute w-[300px] h-[300px] rounded-full border-2 border-transparent border-b-accent/40 animate-[spin_15s_linear_infinite]"></div>
        <div class="absolute w-[350px] h-[350px] rounded-full border border-accent/10 shadow-[0_0_30px_rgba(0,242,255,0.05)]"></div>
        
        <!-- Malla HUD estática (Radar Crosshair) superpuesto -->
        <div class="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
        <div class="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent"></div>
    </div>

    <div class="max-w-4xl mx-auto relative z-10 text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <!-- Etiqueta táctica superior -->
        <div class="flex items-center gap-4 mb-8">
          <span class="w-1.5 h-1.5 bg-[#4a4a4a]"></span>
          <span class="text-[9px] uppercase tracking-[0.5em] font-tech text-[#4a4a4a]">INICIAR_SECUENCIA_DE_CONTACTO</span>
        </div>

        <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold font-tech text-white uppercase tracking-tighter mb-8 leading-none">
            ¿Preparado para <br/> 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Escalar?</span>
        </h2>
        
        <p class="text-gray-400 font-mono text-base md:text-lg mb-14 max-w-2xl mx-auto border-x border-white/10 px-8 py-2 relative">
            <span class="absolute top-0 -left-[1px] w-[2px] h-4 bg-accent/50"></span>
            <span class="absolute bottom-0 -right-[1px] w-[2px] h-4 bg-accent/50"></span>
            Integremos sistemas. Conversemos sobre las especificaciones de tu proyecto y descubramos cómo nuestra arquitectura técnica puede resolver tus desafíos.
        </p>
        
        <!-- Botón de Acción Principal -->
        <NuxtLink to="/contacto" class="group relative inline-flex items-center gap-4 px-12 py-5 bg-white/5 border border-accent/30 text-white font-bold uppercase tracking-[0.3em] text-[11px] lg:text-[12px] overflow-hidden transition-all hover:bg-accent hover:text-[#0a0e17] hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] font-tech">
            <span class="relative z-10 flex items-center gap-2">
                Acordar Reunión Técnica <ChevronRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div class="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
            <!-- Brackets decorativos HUD del botón -->
            <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 group-hover:border-[#0a0e17] z-10 transition-colors"></div>
            <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 group-hover:border-[#0a0e17] z-10 transition-colors"></div>
        </NuxtLink>

    </div>
  </section>
</template>

<style scoped>
.font-tech {
    font-family: var(--font-tech);
}
</style>
