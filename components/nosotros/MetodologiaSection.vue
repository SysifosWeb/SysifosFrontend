<script setup>
import { Box, Radio, ShieldCheck } from 'lucide-vue-next';
</script>

<template>
  <section class="relative bg-[#05080a] pt-24 pb-32 lg:pt-32 lg:pb-40 border-b border-white/5 overflow-hidden">
    <!-- Grid de fondo abstracto -->
    <div class="absolute inset-0 pointer-events-none opacity-30 select-none">
        <div class="w-full h-[1px] absolute top-1/4 left-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div class="w-full h-[1px] absolute top-3/4 left-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div class="w-[1px] h-full absolute top-0 left-1/4 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div class="w-[1px] h-full absolute top-0 left-3/4 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <!-- Luz suave central -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
    </div>

    <div class="max-w-[1400px] w-[92%] mx-auto relative z-10 flex flex-col items-center">
      
      <!-- Encabezado de Sección -->
      <div class="text-center mb-20 w-full">
        <div class="flex items-center justify-center gap-4 mb-4">
          <span class="w-1.5 h-1.5 bg-[#4a4a4a]"></span>
          <span class="text-[9px] uppercase tracking-[0.5em] font-tech text-[#4a4a4a]">SYS_WORKFLOW // PIPELINES</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold font-tech text-white uppercase tracking-tighter mb-4">
          Operativa <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Metodológica.</span>
        </h2>
        <p class="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
          Ejecución estandarizada mediante protocolos ágiles, garantizando precisión funcional, tiempos de entrega predecibles y un código altamente mantenible.
        </p>
      </div>

      <!-- Contenedor Principal en 2 Columnas -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full">
        
        <!-- Bloque Izquierdo: Metodología Agil -->
        <div class="flex flex-col gap-10">
            <h3 class="font-tech text-xl text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-2 flex justify-between items-end">
                <span>Protocolos de Desarrollo</span>
                <span class="text-[10px] text-accent/50 tracking-widest">[ METODOLOGÍA ÁGIL ]</span>
            </h3>

            <!-- Item 1 -->
            <div class="group flex items-start gap-6 relative">
                <div class="absolute -left-12 top-6 w-8 h-[1px] bg-accent/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                <div class="relative w-14 h-14 bg-[#05070a] border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:border-accent/50">
                    <div class="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <Box class="w-6 h-6 text-gray-500 group-hover:text-accent relative z-10 transition-colors duration-500" />
                </div>
                <div>
                    <h4 class="text-lg font-bold font-tech text-white uppercase tracking-wider mb-2 flex items-center gap-3">
                        <span class="text-accent text-sm">01.</span> Scrum Framework
                    </h4>
                    <p class="text-gray-400 text-[15px] font-sans leading-relaxed group-hover:text-gray-300 transition-colors">
                        Sprints delimitados en iteraciones de 2 semanas con métricas de entrega incrementales y ventanas de feedback continuo.
                    </p>
                </div>
            </div>

            <!-- Item 2 -->
            <div class="group flex items-start gap-6 relative">
                <div class="absolute -left-12 top-6 w-8 h-[1px] bg-accent/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                <div class="relative w-14 h-14 bg-[#05070a] border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:border-accent/50">
                    <div class="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <Radio class="w-6 h-6 text-gray-500 group-hover:text-accent relative z-10 transition-colors duration-500" />
                </div>
                <div>
                    <h4 class="text-lg font-bold font-tech text-white uppercase tracking-wider mb-2 flex items-center gap-3">
                        <span class="text-accent text-sm">02.</span> Telemetría Transparente
                    </h4>
                    <p class="text-gray-400 text-[15px] font-sans leading-relaxed group-hover:text-gray-300 transition-colors">
                        Sincronización mediante stand-ups diarios, demos de avance y retrospectivas para mantener una alineación estratégica y táctica.
                    </p>
                </div>
            </div>

            <!-- Item 3 -->
            <div class="group flex items-start gap-6 relative">
                <div class="absolute -left-12 top-6 w-8 h-[1px] bg-accent/30 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                <div class="relative w-14 h-14 bg-[#05070a] border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:border-accent/50">
                    <div class="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <ShieldCheck class="w-6 h-6 text-gray-500 group-hover:text-accent relative z-10 transition-colors duration-500" />
                </div>
                <div>
                    <h4 class="text-lg font-bold font-tech text-white uppercase tracking-wider mb-2 flex items-center gap-3">
                        <span class="text-accent text-sm">03.</span> QA & Estabilidad
                    </h4>
                    <p class="text-gray-400 text-[15px] font-sans leading-relaxed group-hover:text-gray-300 transition-colors">
                        Testing unitario, code reviews estrictos y asimilación de clean-code para garantizar arquitecturas limpias antes del deploy a producción.
                    </p>
                </div>
            </div>
        </div>

        <!-- Bloque Derecho: Stack Tecnológico (Orgánico y Alineado a la Derecha) -->
        <div class="relative p-0 pt-0 group flex flex-col justify-end text-right h-full border-r border-white/5 pr-8">
            <div class="relative z-10 lg:mt-auto space-y-12 w-full max-w-sm ml-auto">
                
                <h3 class="font-tech text-xl text-white uppercase tracking-widest border-b border-accent/20 pb-4 flex justify-between items-end flex-row-reverse">
                    <span>Stack Tecnológico</span>
                    <span class="text-[9px] text-[#4a4a4a] tracking-widest">[ CAPACIDAD_SYS ]</span>
                </h3>

                <div class="space-y-10">
                    <!-- Frontend -->
                    <div class="group/bar">
                        <div class="flex flex-col items-end mb-3 gap-1">
                            <span class="text-white font-tech uppercase tracking-wider text-sm flex items-center gap-2 flex-row-reverse">
                                <span class="w-1 h-1 bg-accent/50 group-hover/bar:bg-accent transition-colors"></span> Frontend_Core
                            </span>
                            <span class="text-[11px] font-mono text-gray-500 group-hover/bar:text-gray-400 transition-colors">Vue.js / Nuxt / React / Angular</span>
                        </div>
                        <div class="w-full bg-transparent border-b border-white/10 h-3 overflow-hidden flex justify-end">
                            <div class="bg-gradient-to-l from-accent to-transparent h-[1px] w-[95%] mt-auto group-hover/bar:shadow-[0_-5px_15px_rgba(0,242,255,0.4)] transition-all duration-700"></div>
                        </div>
                    </div>

                    <!-- Backend -->
                    <div class="group/bar">
                        <div class="flex flex-col items-end mb-3 gap-1">
                            <span class="text-white font-tech uppercase tracking-wider text-sm flex items-center gap-2 flex-row-reverse">
                                <span class="w-1 h-1 bg-blue-500/50 group-hover/bar:bg-blue-500 transition-colors"></span> Backend_Core
                            </span>
                            <span class="text-[11px] font-mono text-gray-500 group-hover/bar:text-gray-400 transition-colors">Laravel / Node.js / Python</span>
                        </div>
                        <div class="w-full bg-transparent border-b border-white/10 h-3 overflow-hidden flex justify-end">
                            <div class="bg-gradient-to-l from-blue-500 to-transparent h-[1px] w-[90%] mt-auto group-hover/bar:shadow-[0_-5px_15px_rgba(59,130,246,0.4)] transition-all duration-700"></div>
                        </div>
                    </div>

                    <!-- Mobile -->
                    <div class="group/bar">
                        <div class="flex flex-col items-end mb-3 gap-1">
                            <span class="text-white font-tech uppercase tracking-wider text-sm flex items-center gap-2 flex-row-reverse">
                                <span class="w-1 h-1 bg-purple-500/50 group-hover/bar:bg-purple-500 transition-colors"></span> Mobile_Core
                            </span>
                            <span class="text-[11px] font-mono text-gray-500 group-hover/bar:text-gray-400 transition-colors">Flutter / React Native</span>
                        </div>
                        <div class="w-full bg-transparent border-b border-white/10 h-3 overflow-hidden flex justify-end">
                            <div class="bg-gradient-to-l from-purple-500 to-transparent h-[1px] w-[85%] mt-auto group-hover/bar:shadow-[0_-5px_15px_rgba(168,85,247,0.4)] transition-all duration-700"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.font-tech {
    font-family: var(--font-tech);
}
</style>
