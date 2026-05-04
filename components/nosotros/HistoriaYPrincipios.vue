<script setup>
import team from "@/assets/img/node_architect_sys.png";
import { Target, Eye, ShieldCheck } from 'lucide-vue-next'
</script>

<template>
  <section class="relative bg-[#05080a] pt-24 pb-32 lg:pt-32 lg:pb-40 border-b border-white/5 overflow-hidden">
    <!-- Fondo azul marino oscuro profundo uniformizado -->
    <div class="absolute inset-0 bg-[#05080a] z-0"></div>

    <div class="max-w-[1400px] w-[92%] mx-auto relative z-10 flex flex-col gap-10 lg:gap-16">
      
      <!-- PARTE 1: HISTORIA (EL KERNEL) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-20">
        
        <!-- Bloque de Texto (Izquierda) -->
        <div class="lg:col-span-6 flex flex-col z-20">
          <div class="flex items-center gap-4 mb-6">
            <span class="w-1.5 h-1.5 bg-[#4a4a4a]"></span>
            <span class="text-[10px] lg:text-[15px] uppercase tracking-[0.4em] font-mono text-gray-300">SYSWEB // KERNEL CORE PROTOCOL</span>
          </div>

          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold font-tech text-white uppercase tracking-tighter mb-10 leading-none">
            Nuestra <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Historia.</span>
          </h2>
          
          <div class="space-y-6 text-gray-300 font-sans text-base md:text-[17px] leading-relaxed border-l-2 border-white/10 pl-6 lg:pl-10 relative">
            <div class="absolute top-0 -left-[2px] w-[2px] h-10 bg-[#00f2ff] shadow-[0_0_10px_#00f2ff] animate-[scan_4s_ease-in-out_infinite]"></div>

            <p class="font-mono text-gray-300">
              Fundada en 2024, SysifosWeb nace con una directriz táctica muy clara: democratizar y simplificar la arquitectura tecnológica de vanguardia para asegurar escalabilidad en cualquier modelo de negocio.
            </p>
            <p class="font-mono text-gray-300">
              Nuestro identificativo, inspirado en el protocolo mitológico de Sísifo, refleja firmemente nuestra ingeniería corporativa: mantenemos un esquema de iteración, perseverancia técnica y precisión. Convertimos cada bloque de fricción crítico en una oportunidad sistemática para diseñar e implementar soluciones de alto rendimiento que marquen una diferencia profunda en los datos.
            </p>
          </div>
        </div>

        <!-- Bloque de Imagen (Derecha) -->
        <div class="lg:col-span-6 relative group z-20">
          <!-- Marco Técnico Trasero -->
          <div class="absolute inset-0 border border-[#00f2ff]/20 translate-x-4 translate-y-4 transition-transform duration-700 ease-out z-0"></div>
          
          <!-- Contenedor Principal de la Foto -->
          <div class="relative bg-[#0a0e17] border border-[#00f2ff]/30 p-2 overflow-hidden z-10 transition-colors duration-500 shadow-[0_0_20px_rgba(0,242,255,0.05)]">
            <!-- Interfaz Superpuesta (HUD) -->
            <div class="absolute top-4 left-4 z-20 flex flex-col gap-1">
               <div class="w-3 h-1 bg-[#00f2ff]/80"></div>
               <div class="w-6 h-1 bg-[#00f2ff]/40"></div>
            </div>
            
            <div class="absolute bottom-4 right-4 z-20 text-[15px] font-mono text-[#00f2ff]/90 tracking-widest bg-[#0a0e17]/80 px-2 py-1 border border-[#00f2ff]/40 backdrop-blur-md">
               NODE_ARCHITECT_SYS.JPG
            </div>

            <!-- Overlay azul monocromático constante -->
            <div class="absolute inset-0 bg-[#001428] mix-blend-color opacity-60 z-20 pointer-events-none"></div>

            <img :src="team" alt="SysifosWeb Arquitecto" class="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover filter brightness-[0.8] contrast-125 z-0" loading="lazy" />
          </div>
          
          <!-- EL ORIGEN DEL PIPELINE: Nace de la esquina inferior derecha -->
          <!-- Línea vertical que baja desde el marco trasero inferior derecho conectando exactamente al eje central horizontal -->
          <div class="absolute hidden lg:block -bottom-[64px] right-0 translate-x-4 w-[2px] h-[64px] bg-gradient-to-b from-[#00f2ff] to-transparent z-0 opacity-40"></div>
        </div>
      </div>

      <!-- PARTE 2: PRINCIPIOS (NODOS INTERCONECTADOS) -->
      <div class="relative w-full z-10">
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            
            <!-- Bento Box 01: MISIÓN -->
            <div class="relative w-full h-[280px] lg:h-[320px] rounded-lg bg-white/[0.02] backdrop-blur-xl border border-[#00f2ff]/50 shadow-[0_0_30px_rgba(0,242,255,0.1)] p-8 lg:p-10 flex flex-col justify-center group overflow-hidden transition-all duration-700 hover:border-[#00f2ff] hover:shadow-[0_0_40px_rgba(0,242,255,0.2)]">
                <!-- Marca de agua gigante y sutil en el fondo -->
                <div class="absolute -right-2 top-0 text-[180px] lg:text-[220px] font-mono font-bold leading-none select-none text-[#00f2ff]/5 group-hover:text-[#00f2ff]/10 transition-colors duration-700 pointer-events-none z-0">01</div>
                <Target class="absolute top-8 right-8 w-32 h-32 text-[#00f2ff]/[0.03] group-hover:text-[#00f2ff]/[0.08] transition-colors duration-700 z-0 pointer-events-none" stroke-width="1" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#05080a]/80 to-transparent z-0 pointer-events-none"></div>

                <div class="relative z-10 w-full flex flex-col mt-4">
                    <h3 class="text-xl lg:text-2xl font-bold font-mono text-white tracking-widest mb-4 flex gap-3 items-center whitespace-nowrap">
                        <span class="text-[#00f2ff]/80 text-sm">01.</span> MISIÓN
                    </h3>
                    
                    <!-- Separador de código / Línea Cyan -->
                    <div class="w-8 h-[1px] bg-[#00f2ff]/60 mb-5 group-hover:w-full transition-all duration-1000 ease-out shadow-[0_0_5px_#00f2ff]"></div>

                    <p class="text-gray-300 font-mono text-[14px] lg:text-[15px] leading-relaxed text-left">
                        Empoderar corporaciones mediante arquitecturas tecnológicas robustas e innovadoras que aceleren su crecimiento y maximicen su índice de competitividad.
                    </p>
                </div>
            </div>

            <!-- Bento Box 02: VISIÓN -->
            <div class="relative w-full h-[280px] lg:h-[320px] rounded-lg bg-white/[0.02] backdrop-blur-xl border border-[#00f2ff]/30 shadow-[0_0_20px_rgba(0,242,255,0.05)] p-8 lg:p-10 flex flex-col justify-center group overflow-hidden transition-all duration-700 hover:border-[#00f2ff]/80 hover:shadow-[0_0_40px_rgba(0,242,255,0.15)] md:mt-10 lg:mt-16">
                <div class="absolute -right-2 top-0 text-[180px] lg:text-[220px] font-mono font-bold leading-none select-none text-[#00f2ff]/5 group-hover:text-[#00f2ff]/10 transition-colors duration-700 pointer-events-none z-0">02</div>
                <Eye class="absolute top-8 right-8 w-32 h-32 text-[#00f2ff]/[0.03] group-hover:text-[#00f2ff]/[0.08] transition-colors duration-700 z-0 pointer-events-none" stroke-width="1" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#05080a]/80 to-transparent z-0 pointer-events-none"></div>

                <div class="relative z-10 w-full flex flex-col mt-4">
                    <h3 class="text-xl lg:text-2xl font-bold font-mono text-white tracking-widest mb-4 flex gap-3 items-center whitespace-nowrap">
                        <span class="text-[#00f2ff]/80 text-sm">02.</span> VISIÓN
                    </h3>
                    
                    <div class="w-8 h-[1px] bg-[#00f2ff]/60 mb-5 group-hover:w-full transition-all duration-1000 ease-out shadow-[0_0_5px_#00f2ff]"></div>

                    <p class="text-gray-300 font-mono text-[14px] lg:text-[15px] leading-relaxed text-left">
                        Funcionar como el clúster de desarrollo de software más confiable de la región, distinguidos por nuestra excelencia técnica inquebrantable.
                    </p>
                </div>
            </div>

            <!-- Bento Box 03: VALORES -->
            <div class="relative w-full h-[280px] lg:h-[320px] rounded-lg bg-white/[0.02] backdrop-blur-xl border border-[#00f2ff]/15 shadow-[0_0_10px_rgba(0,242,255,0.02)] p-8 lg:p-10 flex flex-col justify-center group overflow-hidden transition-all duration-700 hover:border-[#00f2ff]/60 hover:shadow-[0_0_40px_rgba(0,242,255,0.1)] md:mt-20 lg:mt-32">
                <div class="absolute -right-2 top-0 text-[180px] lg:text-[220px] font-mono font-bold leading-none select-none text-[#00f2ff]/5 group-hover:text-[#00f2ff]/10 transition-colors duration-700 pointer-events-none z-0">03</div>
                <ShieldCheck class="absolute top-8 right-8 w-32 h-32 text-[#00f2ff]/[0.03] group-hover:text-[#00f2ff]/[0.08] transition-colors duration-700 z-0 pointer-events-none" stroke-width="1" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#05080a]/80 to-transparent z-0 pointer-events-none"></div>
                
                <div class="relative z-10 w-full flex flex-col mt-4">
                    <h3 class="text-xl lg:text-2xl font-bold font-mono text-white tracking-widest mb-4 flex gap-3 items-center whitespace-nowrap">
                        <span class="text-[#00f2ff]/80 text-sm">03.</span> VALORES
                    </h3>
                    
                    <div class="w-8 h-[1px] bg-[#00f2ff]/60 mb-5 group-hover:w-full transition-all duration-1000 ease-out shadow-[0_0_5px_#00f2ff]"></div>

                    <p class="text-gray-300 font-mono text-[14px] lg:text-[15px] leading-relaxed text-left">
                        Innovación pragmática, calidad sistemática y transparencia operacional. Nuestra base asume que la ingeniería sólida crea futuros sustentables.
                    </p>
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

@keyframes scan {
  0% { transform: translateY(0); }
  50% { transform: translateY(150px); }
  100% { transform: translateY(0); }
}

@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(700%); }
}
</style>
