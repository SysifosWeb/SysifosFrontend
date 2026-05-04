<script setup>
</script>

<template>
  <section class="relative bg-[#05080a] pt-40 pb-20 lg:pt-56 lg:pb-40 overflow-hidden border-b border-white/5">
    <CircuitBackground />
    <!-- HUD BACKGROUND ELEMENTS -->
    <div class="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden">
        <!-- Grid Central -->
        <div class="absolute inset-0 technical-grid opacity-[0.15]"></div>
        
        <!-- Círculos de datos animados -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#00f2ff]/5 rounded-full animate-[spin_60s_linear_infinite]">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00f2ff]/30 rounded-full shadow-[0_0_10px_#00f2ff]"></div>
        </div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#00f2ff]/10 border-dashed rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

        <!-- Terminal Logs -->
        <div class="absolute top-24 left-10 font-mono text-[11px] text-[#00f2ff]/40 leading-tight hidden lg:block">
            [SYS_LOG] INITIALIZING_CORE_SERVICES...<br/>
            [SYS_LOG] LOADING_HUD_INTERFACE_V2.0<br/>
            [SYS_LOG] ENCRYPTING_DATA_NODES: OK<br/>
            [SYS_LOG] STATUS: OPERATIONAL
        </div>

        <div class="absolute bottom-24 right-10 font-mono text-[11px] text-[#00f2ff]/40 leading-tight text-right hidden lg:block">
            LOC: COQUIMBO_CL_SRV_01<br/>
            TZ: UTC-4_PROT_SECURE<br/>
            REF: 29.9533_71.3436<br/>
            VER: 8.4.2_STABLE
        </div>

        <!-- Línea de escaneo vertical -->
        <div class="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#00f2ff]/20 to-transparent animate-[scanning_8s_ease-in-out_infinite]"></div>
    </div>
    
    <div class="relative z-20 text-center flex flex-col items-center max-w-5xl mx-auto px-4">
        <div class="flex items-center gap-4 mb-8">
          <div class="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#00f2ff]/50"></div>
          <span class="text-[10px] lg:text-[13px] uppercase tracking-[0.6em] font-mono text-accent font-bold">Protocolos de Servicio</span>
          <div class="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#00f2ff]/50"></div>
        </div>

        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-10 leading-[0.9]">
          Arquitectura <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#0088ff] to-blue-600 drop-shadow-[0_0_25px_rgba(0,242,255,0.2)]">Digital.</span>
        </h1>

        <div class="relative max-w-2xl">
            <div class="absolute -inset-4 bg-accent/5 blur-xl rounded-full"></div>
            <p class="relative text-gray-300 font-mono text-sm md:text-base leading-relaxed border border-white/10 bg-black/40 backdrop-blur-md px-10 py-6">
                <span class="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent"></span>
                <span class="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent"></span>
                <span class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent"></span>
                <span class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent"></span>
                Desplegamos ecosistemas digitales de alto rendimiento mediante ingeniería de precisión. Soluciones escalables diseñadas para optimizar la eficiencia operativa y la conversión transaccional.
            </p>
        </div>
        
        <!-- Indicador de Scroll Decorativo -->
        <div class="mt-20 flex flex-col items-center gap-4 animate-bounce opacity-40">
            <span class="text-[10px] font-mono text-[#00f2ff] tracking-[0.3em] uppercase">Iniciar_Exploración</span>
            <div class="w-[1px] h-12 bg-gradient-to-b from-[#00f2ff] to-transparent"></div>
        </div>
    </div>
  </section>
</template>

<style scoped>
.technical-grid {
    background-image: linear-gradient(rgba(0, 242, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 242, 255, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
}

@keyframes scanning {
    0%, 100% { transform: translateX(-45vw); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateX(45vw); opacity: 0; }
}
</style>
