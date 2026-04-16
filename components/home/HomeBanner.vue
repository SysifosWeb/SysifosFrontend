<template>
  <section class="relative w-full py-32 flex items-center justify-center overflow-hidden bg-[#0a0e17] border-t border-white/5 group/banner">
    
    <!-- Visualización "Data Portal" (Fondo Tenue) -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20">
        <svg viewBox="0 0 1000 1000" class="w-full h-full">
          <g class="portal-lines transition-all duration-1000 group-hover/banner:scale-95 group-hover/banner:opacity-35" stroke="#00f2ff" stroke-width="0.3">
            <line x1="500" y1="500" v-for="n in 36" :key="'line-'+n" 
                  :x2="500 + Math.cos(n * 10 * Math.PI/180) * 800" 
                  :y2="500 + Math.sin(n * 10 * Math.PI/180) * 800" 
                  class="transition-all duration-700 portal-ray" />
            <circle cx="500" cy="500" r="150" fill="none" stroke-dasharray="4 8" />
            <circle cx="500" cy="500" r="300" fill="none" stroke-dasharray="2 10" />
          </g>
        </svg>
      </div>
    </div>

    <div class="max-w-[1400px] w-[92%] mx-auto relative z-10 text-center">
      <h2 class="text-2xl md:text-5xl font-medium text-white uppercase tracking-[0.2em] leading-tight max-w-5xl mx-auto font-tech mb-20 whitespace-pre-line">
        ¿LISTO PARA ELEVAR SU <span class="text-accent italic">INFRAESTRUCTURA</span> AL SIGUIENTE NIVEL?
      </h2>

      <div class="flex items-center justify-center gap-6 md:gap-12">
        <!-- Control de Interfaz: Ejecutar -->
        <span class="hidden md:block text-[9px] font-mono text-gray-600 tracking-[0.4em] uppercase select-none">
          [ EJECUTAR ]
        </span>

        <!-- Botón Prohibido Principal -->
        <NuxtLink to="/contacto" 
                  class="relative px-12 py-5 border border-accent/40 rounded-sm overflow-hidden group/btn hover:border-accent hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all duration-500">
          <span class="relative z-10 text-[10px] md:text-[11px] font-mono text-accent uppercase tracking-[0.6em] transition-all">
            Iniciar Protocolo de Evaluación
          </span>
          <!-- Efecto de Barrido Interno -->
          <div class="absolute inset-0 bg-accent/5 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
        </NuxtLink>

        <!-- Control de Interfaz: Cancelar -->
        <span class="hidden md:block text-[9px] font-mono text-gray-600 tracking-[0.4em] uppercase select-none">
          [ CANCELAR ]
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-tech {
  font-family: 'Space Grotesk', sans-serif;
}

.portal-ray {
  transition: all 1s ease-in-out;
}

.group\/banner:hover .portal-ray {
  stroke-dashoffset: 100;
  stroke-width: 0.8;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.portal-lines {
  transform-origin: center;
  animation: spin 60s linear infinite;
}
</style>
