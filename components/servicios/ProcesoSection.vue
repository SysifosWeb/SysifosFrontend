<script setup>
</script>

<template>
  <section class="relative bg-[#0a0e17] py-24 overflow-hidden border-b border-white/5">
    <!-- HUD BACKGROUND -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div class="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent"></div>
    </div>
    
    <div class="relative z-20 text-center mb-16 flex flex-col items-center">
        <div class="flex items-center gap-4 mb-4">
          <span class="w-1.5 h-1.5 bg-[#4a4a4a]"></span>
          <span class="text-[14px] uppercase tracking-[0.5em] font-mono text-gray-300">SYS_UNIT // PIPELINE_OPERATIVO</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold font-tech text-white uppercase tracking-tighter mb-4">
          Nuestro <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Proceso.</span>
        </h2>
    </div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <!-- Step 1 -->
            <div class="relative group p-8 border border-white/[0.03] bg-[#0a0e17]/60 backdrop-blur-sm hover:border-[#00f2ff]/30 transition-all duration-500 hover:-translate-y-2">
                <div class="text-[#00f2ff] font-mono text-5xl font-bold opacity-10 absolute top-4 right-6 group-hover:opacity-30 transition-opacity">01</div>
                <h3 class="text-white font-bold uppercase tracking-widest mb-3 mt-6">Análisis</h3>
                <p class="text-gray-300 font-mono text-[15px] leading-relaxed">Extracción de requerimientos, auditoría de viabilidad y definición de la arquitectura de software.</p>
                <div class="w-full h-[1px] bg-white/5 mt-8 relative">
                    <div class="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-[#00f2ff] to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
            </div>

            <!-- Step 2 -->
            <div class="relative group p-8 border border-white/[0.03] bg-[#0a0e17]/60 backdrop-blur-sm hover:border-[#00f2ff]/30 transition-all duration-500 hover:-translate-y-2">
                <div class="text-[#00f2ff] font-mono text-5xl font-bold opacity-10 absolute top-4 right-6 group-hover:opacity-30 transition-opacity">02</div>
                <h3 class="text-white font-bold uppercase tracking-widest mb-3 mt-6">Diseño UI/UX</h3>
                <p class="text-gray-300 font-mono text-[15px] leading-relaxed">Creación de wireframes y prototipado visual enfocado en rendimiento de interfaz y experiencia de usuario.</p>
                <div class="w-full h-[1px] bg-white/5 mt-8 relative">
                    <div class="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-[#00f2ff] to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
            </div>

            <!-- Step 3 -->
            <div class="relative group p-8 border border-white/[0.03] bg-[#0a0e17]/60 backdrop-blur-sm hover:border-[#00f2ff]/30 transition-all duration-500 hover:-translate-y-2">
                <div class="text-[#00f2ff] font-mono text-5xl font-bold opacity-10 absolute top-4 right-6 group-hover:opacity-30 transition-opacity">03</div>
                <h3 class="text-white font-bold uppercase tracking-widest mb-3 mt-6">Desarrollo</h3>
                <p class="text-gray-300 font-mono text-[15px] leading-relaxed">Ingeniería del código, ensamblaje de componentes dinámicos e integración de bases de datos seguras.</p>
                <div class="w-full h-[1px] bg-white/5 mt-8 relative">
                    <div class="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-[#00f2ff] to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
            </div>

            <!-- Step 4 -->
            <div class="relative group p-8 border border-white/[0.03] bg-[#0a0e17]/60 backdrop-blur-sm hover:border-[#00f2ff]/30 transition-all duration-500 hover:-translate-y-2">
                <div class="text-[#00f2ff] font-mono text-5xl font-bold opacity-10 absolute top-4 right-6 group-hover:opacity-30 transition-opacity">04</div>
                <h3 class="text-white font-bold uppercase tracking-widest mb-3 mt-6">Lanzamiento</h3>
                <p class="text-gray-300 font-mono text-[15px] leading-relaxed">Despliegue en servidores en la nube, optimización de caché, pruebas de estrés y monitoreo activo.</p>
                <div class="w-full h-[1px] bg-white/5 mt-8 relative">
                    <div class="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-[#00f2ff] to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
            </div>

        </div>
    </div>
  </section>
</template>
