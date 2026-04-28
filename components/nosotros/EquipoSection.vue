<script setup>
import { TerminalSquare, Database, Smartphone } from 'lucide-vue-next'
import diego from '@/assets/img/Diego.png'
import karen from '@/assets/img/Karen.png'
import osman from '@/assets/img/Osman.png'
import CircuitBackground from '@/components/CircuitBackground.vue'
</script>

<template>
  <section class="relative bg-[#0a0e17] py-32 overflow-hidden border-b border-white/5">
    <!-- Fondo de Circuito -->
    <CircuitBackground />
    
    <!-- HUD BACKGROUND ELEMENTS (Para llenar el espacio vacío) -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-20 select-none">
        <div class="absolute top-20 left-10 font-mono text-[14px] text-[#00f2ff]/30 leading-none">
            LAT: 23.5921<br/>LONG: -46.6642<br/>STATUS: SYNCED
        </div>
        <div class="absolute bottom-20 right-10 font-mono text-[14px] text-[#00f2ff]/30 text-right leading-none">
            KERNEL_REV: 8.2.1<br/>Uptime: 1024:12:05<br/>Node: SY_ALPHA
        </div>
        <!-- Líneas horizontales de barrido -->
        <div class="absolute top-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f2ff]/10 to-transparent"></div>
        <div class="absolute bottom-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f2ff]/10 to-transparent"></div>
    </div>
    
    <!-- Título de Sección -->
    <div class="relative z-20 text-center mb-20 flex flex-col items-center">
        <div class="flex items-center gap-4 mb-4">
          <span class="w-1.5 h-1.5 bg-[#4a4a4a]"></span>
          <span class="text-[14px] uppercase tracking-[0.5em] font-mono text-gray-300">SYS_UNIT // ROSTER OPERATIVO</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold font-tech text-white uppercase tracking-tighter mb-4">
          Nuestro <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Equipo.</span>
        </h2>
    </div>

    <div class="relative max-w-[1600px] w-[94%] mx-auto z-10 pt-10">
        
        <!-- Contenedor Maestro: Grid expandido para usar todo el ancho disponible -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-20 relative">
            
            <!-- TARJETA DIEGO -->
            <div class="relative w-full h-[520px] lg:h-[550px] group flex flex-col items-center mt-0 lg:mt-12">
                
                <!-- THE GLASS BOX (Base) -->
                <!-- La caja comienza a 1/3 del camino hacia abajo, el resto es para que la foto rompa el borde -->
                <div class="absolute inset-x-0 bottom-0 top-[120px] lg:top-[150px] bg-[#0a0e17]/80 backdrop-blur-[6px] border border-white/[0.03] group-hover:bg-[#0c121e]/90 group-hover:border-[#00f2ff]/30 shadow-2xl transition-all duration-700 ease-out p-6 lg:p-8 flex flex-col justify-end">
                    
                    <!-- HUD Background Element -->
                    <div class="absolute top-4 right-4 text-[14px] font-mono text-[#00f2ff]/20">[ S_UNIT_01 ]</div>
                    <!-- Línea decorativa superior -->
                    <div class="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-[#00f2ff] to-transparent opacity-40 group-hover:w-1/2 group-hover:opacity-100 transition-all duration-700"></div>

                    <!-- Información Textual -->
                    <div class="relative z-20">
                        <h3 class="text-2xl font-bold font-sans text-white uppercase tracking-widest mb-1">Diego Araya</h3>
                        
                        <!-- Separador Bento expansivo -->
                        <div class="w-8 h-[1px] bg-[#00f2ff]/50 my-4 shadow-[0_0_5px_#00f2ff] group-hover:w-full transition-all duration-[1s] ease-out"></div>
                        
                        <!-- Rol -->
                        <div class="inline-flex items-center gap-2 mb-4">
                            <TerminalSquare class="w-3.5 h-3.5 text-[#00f2ff]" />
                            <span class="text-[15px] lg:text-[14px] font-mono text-[#00f2ff] font-bold tracking-wider">> FULL_STACK_DEV</span>
                        </div>
                        
                        <!-- Párrafo -->
                        <p class="text-gray-300 font-mono text-[15px] lg:text-[14px] leading-relaxed line-clamp-3">
                            Desarrollador matriz especializado en estructurar y diseñar módulos escalables para aplicaciones web integrales.
                        </p>
                    </div>
                </div>

                <!-- THE BREAKOUT PHOTO -->
                <!-- Anclada por encima de la caja, difuminada por debajo -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[220px] lg:w-[260px] h-[340px] pointer-events-none z-10 transition-transform duration-[1s] group-hover:-translate-y-4">
                    <img :src="diego" alt="Diego Araya" class="w-full h-full object-cover object-[center_top] filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 [mask-image:linear-gradient(to_top,transparent_0%,black_30%,black_100%)]" />
                </div>
            </div>

            <!-- TARJETA KAREN (Elevada Asimétricamente) -->
            <div class="relative w-full h-[520px] lg:h-[550px] group flex flex-col items-center mt-0 lg:mt-0">
                
                <div class="absolute inset-x-0 bottom-[-30px] top-[90px] lg:top-[120px] bg-[#0a0e17]/80 backdrop-blur-[6px] border border-white/[0.03] group-hover:bg-[#0c121e]/90 group-hover:border-[#00f2ff]/30 shadow-2xl transition-all duration-700 ease-out p-6 lg:p-8 flex flex-col justify-end">
                    
                    <div class="absolute top-4 right-4 text-[14px] font-mono text-[#00f2ff]/20">[ S_UNIT_02 ]</div>
                    <!-- Línea decorativa superior central es simétrica -->
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent opacity-40 group-hover:w-full group-hover:opacity-100 transition-all duration-700"></div>

                    <div class="relative z-20">
                        <h3 class="text-2xl font-bold font-sans text-white uppercase tracking-widest mb-1">Karen Godoy</h3>
                        
                        <div class="w-8 h-[1px] bg-[#00f2ff]/50 my-4 shadow-[0_0_5px_#00f2ff] group-hover:w-full transition-all duration-[1s] ease-out"></div>
                        
                        <div class="inline-flex items-center gap-2 mb-4">
                            <Database class="w-3.5 h-3.5 text-[#00f2ff]" />
                            <span class="text-[15px] lg:text-[14px] font-mono text-[#00f2ff] font-bold tracking-wider">> DBA_FRONTEND_OPT</span>
                        </div>
                        
                        <p class="text-gray-300 font-mono text-[15px] lg:text-[14px] leading-relaxed line-clamp-3">
                            Control estructural enfocado en optimización de bases de datos relacionales con eficiencia visual ininterrumpida.
                        </p>
                    </div>
                </div>

                <div class="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[220px] lg:w-[260px] h-[340px] pointer-events-none z-10 transition-transform duration-[1s] group-hover:-translate-y-4">
                    <img :src="karen" alt="Karen Godoy" class="w-full h-full object-cover object-[center_top] filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 [mask-image:linear-gradient(to_top,transparent_0%,black_30%,black_100%)]" />
                </div>
            </div>

            <!-- TARJETA OSMAN -->
            <div class="relative w-full h-[520px] lg:h-[550px] group flex flex-col items-center mt-0 lg:mt-12">
                
                <div class="absolute inset-x-0 bottom-0 top-[120px] lg:top-[150px] bg-[#0a0e17]/80 backdrop-blur-[6px] border border-white/[0.03] group-hover:bg-[#0c121e]/90 group-hover:border-[#00f2ff]/30 shadow-2xl transition-all duration-700 ease-out p-6 lg:p-8 flex flex-col justify-end">
                    
                    <div class="absolute top-4 right-4 text-[14px] font-mono text-[#00f2ff]/20">[ S_UNIT_03 ]</div>
                    <!-- Línea decorativa superior invertida a la derecha -->
                    <div class="absolute top-0 right-0 w-1/3 h-[2px] bg-gradient-to-l from-[#00f2ff] to-transparent opacity-40 group-hover:w-1/2 group-hover:opacity-100 transition-all duration-700"></div>

                    <div class="relative z-20">
                        <h3 class="text-2xl font-bold font-sans text-white uppercase tracking-widest mb-1">Osman Ahumada</h3>
                        
                        <div class="w-8 h-[1px] bg-[#00f2ff]/50 my-4 shadow-[0_0_5px_#00f2ff] group-hover:w-full transition-all duration-[1s] ease-out"></div>
                        
                        <div class="inline-flex items-center gap-2 mb-4">
                            <Smartphone class="w-3.5 h-3.5 text-[#00f2ff]" />
                            <span class="text-[15px] lg:text-[14px] font-mono text-[#00f2ff] font-bold tracking-wider">> WEB_MOBILE_DEV</span>
                        </div>
                        
                        <p class="text-gray-300 font-mono text-[15px] lg:text-[14px] leading-relaxed line-clamp-3">
                            Gestión fluida en compilación cross-platform. Especialista arquitectónico en ecosistemas híbridos Flutter.
                        </p>
                    </div>
                </div>

                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[220px] lg:w-[260px] h-[340px] pointer-events-none z-10 transition-transform duration-[1s] group-hover:-translate-y-4">
                    <img :src="osman" alt="Osman Ahumada" class="w-full h-full object-cover object-[center_top] filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 [mask-image:linear-gradient(to_top,transparent_0%,black_30%,black_100%)]" />
                </div>
            </div>

        </div>
    </div>
  </section>
</template>

<style scoped>
</style>
