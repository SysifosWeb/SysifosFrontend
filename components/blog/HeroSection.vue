<script setup>
</script>

<template>
  <section class="relative bg-[#0a0e17] pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
    <div class="absolute inset-0 z-0 pointer-events-none opacity-20 select-none">
        <div class="absolute top-20 left-10 font-mono text-[14px] text-[#00f2ff]/30 leading-none">
            SYS_INIT: OK<br/>MODULE: BLOG_DB<br/>STATUS: SYNCED
        </div>
        <div class="absolute top-[40%] right-0 w-1/2 h-[1px] bg-gradient-to-l from-[#00f2ff]/10 to-transparent"></div>
    </div>
    
    <div class="relative z-20 text-center flex flex-col items-center max-w-4xl mx-auto px-4">
        <div class="flex items-center gap-4 mb-6">
          <span class="w-1.5 h-1.5 bg-[#4a4a4a]"></span>
          <span class="text-[14px] uppercase tracking-[0.5em] font-mono text-gray-300">SYS_UNIT // REGISTROS_INFORMATIVOS</span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold font-sans text-white uppercase tracking-tighter drop-shadow-md mb-8">
          Data <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#0088ff] drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">Logs.</span>
        </h1>
        <p class="text-gray-300 font-mono text-sm md:text-base leading-relaxed border-x border-white/10 px-8 py-4 relative bg-white/[0.01]">
            <span class="absolute top-0 -left-[1px] w-[2px] h-4 bg-[#00f2ff]/50"></span>
            <span class="absolute bottom-0 -right-[1px] w-[2px] h-4 bg-[#00f2ff]/50"></span>
            Artículos, tutoriales y novedades técnicas. Base de conocimiento abierta extraída de nuestro mainframe operativo.
        </p>
    </div>
  </section>
</template>
