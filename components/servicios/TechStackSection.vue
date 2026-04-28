<script setup>
</script>

<template>
  <section class="relative bg-[#0a0e17] py-24 overflow-hidden border-b border-white/5">
    <CircuitBackground />
    <div class="relative z-20 text-center mb-20 flex flex-col items-center">
        <div class="flex items-center gap-4 mb-4">
          <span class="w-1.5 h-1.5 bg-[#4a4a4a]"></span>
          <span class="text-[14px] uppercase tracking-[0.5em] font-mono text-gray-300">SYS_UNIT // TECH_STACK_MATRIX</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold font-tech text-white uppercase tracking-tighter mb-4">
          Arsenal <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Tecnológico.</span>
        </h2>
    </div>

    <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        
        <!-- Frontend -->
        <div>
            <h3 class="text-white font-mono text-[14px] uppercase tracking-widest mb-8 flex items-center gap-3">
                <span class="text-[#00f2ff] animate-pulse">■</span> FRONT_END_MODULES
            </h3>
            <div class="space-y-4">
                <div class="bg-white/[0.02] border border-white/[0.05] p-5 flex justify-between items-center group hover:border-[#00f2ff]/30 transition-all duration-500">
                    <span class="text-gray-300 font-mono text-[15px]">Vue.js / Nuxt.js</span>
                    <div class="w-32 lg:w-48 h-[2px] bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full bg-[#00f2ff] w-[95%] shadow-[0_0_8px_#00f2ff]"></div>
                    </div>
                </div>
                <div class="bg-white/[0.02] border border-white/[0.05] p-5 flex justify-between items-center group hover:border-[#00f2ff]/30 transition-all duration-500">
                    <span class="text-gray-300 font-mono text-[15px]">React / Next.js</span>
                    <div class="w-32 lg:w-48 h-[2px] bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full bg-[#00f2ff] w-[85%] shadow-[0_0_8px_#00f2ff]"></div>
                    </div>
                </div>
                <div class="bg-white/[0.02] border border-white/[0.05] p-5 flex justify-between items-center group hover:border-[#00f2ff]/30 transition-all duration-500">
                    <span class="text-gray-300 font-mono text-[15px]">TypeScript</span>
                    <div class="w-32 lg:w-48 h-[2px] bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full bg-[#00f2ff] w-[90%] shadow-[0_0_8px_#00f2ff]"></div>
                    </div>
                </div>
                <div class="bg-white/[0.02] border border-white/[0.05] p-5 flex justify-between items-center group hover:border-[#00f2ff]/30 transition-all duration-500">
                    <span class="text-gray-300 font-mono text-[15px]">TailwindCSS</span>
                    <div class="w-32 lg:w-48 h-[2px] bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full bg-[#00f2ff] w-[98%] shadow-[0_0_8px_#00f2ff]"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Backend -->
        <div>
            <h3 class="text-white font-mono text-[14px] uppercase tracking-widest mb-8 flex items-center gap-3">
                <span class="text-[#00f2ff] animate-pulse">■</span> BACK_END_MODULES
            </h3>
            <div class="space-y-4">
                <div class="bg-white/[0.02] border border-white/[0.05] p-5 flex justify-between items-center group hover:border-[#00f2ff]/30 transition-all duration-500">
                    <span class="text-gray-300 font-mono text-[15px]">Laravel / PHP</span>
                    <div class="w-32 lg:w-48 h-[2px] bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full bg-[#00f2ff] w-[95%] shadow-[0_0_8px_#00f2ff]"></div>
                    </div>
                </div>
                <div class="bg-white/[0.02] border border-white/[0.05] p-5 flex justify-between items-center group hover:border-[#00f2ff]/30 transition-all duration-500">
                    <span class="text-gray-300 font-mono text-[15px]">Node.js</span>
                    <div class="w-32 lg:w-48 h-[2px] bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full bg-[#00f2ff] w-[80%] shadow-[0_0_8px_#00f2ff]"></div>
                    </div>
                </div>
                <div class="bg-white/[0.02] border border-white/[0.05] p-5 flex justify-between items-center group hover:border-[#00f2ff]/30 transition-all duration-500">
                    <span class="text-gray-300 font-mono text-[15px]">PostgreSQL / MySQL</span>
                    <div class="w-32 lg:w-48 h-[2px] bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full bg-[#00f2ff] w-[90%] shadow-[0_0_8px_#00f2ff]"></div>
                    </div>
                </div>
                <div class="bg-white/[0.02] border border-white/[0.05] p-5 flex justify-between items-center group hover:border-[#00f2ff]/30 transition-all duration-500">
                    <span class="text-gray-300 font-mono text-[15px]">REST API / GraphQL</span>
                    <div class="w-32 lg:w-48 h-[2px] bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full bg-[#00f2ff] w-[85%] shadow-[0_0_8px_#00f2ff]"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  </section>
</template>
