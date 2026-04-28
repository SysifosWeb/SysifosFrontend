<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})

const generateTerrainPath = (i) => {
  const yBase = 20 + (i * 12);
  let path = `M 0 ${yBase} `;
  for (let x = 0; x <= 800; x += 35) {
    const yRand = yBase + Math.sin(x/120 + i) * 60 + Math.cos(x/40) * 20;
    path += `L ${x} ${yRand} `;
  }
  return path;
}
</script>

<template>
    <header class="secondary-header-container relative overflow-hidden flex items-center bg-[#0a0e17] font-sans border-b border-white/5">
        <!-- Abstract Technical Background -->
        <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div class="absolute inset-0 technical-bg-layer opacity-20"></div>
            <div class="tech-rays opacity-30"></div>
            <!-- Efecto de Lineas (Terrain Grid) -->
             <div class="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
                <svg viewBox="0 0 800 400" class="w-[120%] h-[120%] transform scale-110">
                   <defs>
                     <radialGradient id="meshRadialSecondary" cx="50%" cy="50%" r="50%">
                       <stop offset="0%" style="stop-color:#00f2ff;stop-opacity:1" />
                       <stop offset="100%" style="stop-color:#0033ff;stop-opacity:0" />
                     </radialGradient>
                   </defs>
                   <g class="mesh-anim">
                      <path v-for="i in 25" :key="i" 
                            :d="generateTerrainPath(i)" 
                            fill="none" 
                            stroke="url(#meshRadialSecondary)" 
                            :stroke-width="0.3 + (i/40)" 
                            class="terrain-line"
                            :style="{ animationDelay: (i * 0.1) + 's' }" />
                   </g>
                </svg>
             </div>
        </div>
        
        <div class="w-full relative z-10 custom-container flex items-center">
            <!-- Left Text Block -->
            <div class="border-l-2 border-[#00f2ff] pl-10 py-4 max-w-4xl">
                <h5 class="text-[15px] font-bold uppercase tracking-[0.6em] text-[#00f2ff]/60 mb-4 font-tech">
                    SYSIFOSWEB | PROTOCOLOS DE INGENIERÍA
                </h5>
                <h1 class="text-3xl md:text-6xl font-bold text-white uppercase tracking-tighter leading-none font-tech">
                  {{ title }}
                </h1>
            </div>
        </div>
    </header>
</template>

<style scoped>
.secondary-header-container {
    height: 400px;
    padding-top: 100px;
}

.font-tech {
    font-family: var(--font-tech);
}

.technical-bg-layer {
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10l80 80M90 10L10 90' stroke='%2300f2ff' stroke-opacity='0.1' stroke-width='0.5' fill='none'/%3E%3C/svg%3E");
    background-size: 200px 200px;
}

.technical-grid {
    background-image: radial-gradient(#00f2ff 1px, transparent 0);
    background-size: 50px 50px;
}

.tech-rays {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 10% 80%, rgba(0, 242, 255, 0.1) 0%, transparent 60%);
}

.terrain-line {
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
  animation: draw 15s ease-in-out infinite alternate;
}

@keyframes draw {
  to { stroke-dashoffset: 0; }
}

.mesh-anim {
  animation: drift 60s linear infinite;
  transform-origin: center;
}

@keyframes drift {
  0% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(5deg); }
  100% { transform: scale(1) rotate(0deg); }
}
</style>