<template>
  <section class="w-full bg-[#0a0e17] border-b border-white/5 overflow-hidden">
    <div class="relative w-full flex flex-col pt-48 lg:pt-64 pb-20 lg:pb-40 min-h-[70vh] justify-center items-center">
      
      <!-- Immersive Background Mesh & Particles -->
      <div class="absolute inset-0 pointer-events-none">
         
         <!-- Floating Particles Layer -->
         <div class="absolute inset-0 overflow-hidden">
            <div v-for="n in 12" :key="'p-'+n" class="floating-point" :style="generateRandomPos(n)"></div>
         </div>

         <div class="absolute inset-0 flex items-center justify-center opacity-70">
            <svg viewBox="0 0 800 600" class="w-[130%] h-[130%] transform scale-110">
               <defs>
                 <radialGradient id="meshRadial" cx="50%" cy="50%" r="50%">
                   <stop offset="0%" style="stop-color:#00f2ff;stop-opacity:1" />
                   <stop offset="100%" style="stop-color:#0033ff;stop-opacity:0" />
                 </radialGradient>
               </defs>
               <g class="mesh-anim">
                  <path v-for="i in 30" :key="i" 
                        :d="generateTerrainPath(i)" 
                        fill="none" 
                        stroke="url(#meshRadial)" 
                        :stroke-width="0.3 + (i/40)" 
                        class="terrain-line"
                        :style="{ animationDelay: (i * 0.1) + 's' }" />
               </g>
            </svg>
         </div>
         <div class="absolute inset-0 bg-gradient-to-b from-[#0a0e17] via-transparent to-[#0a0e17]"></div>
      </div>

      <!-- Centered Content -->
      <div class="max-w-[1400px] w-[92%] mx-auto relative z-10 text-center flex flex-col items-center">
        
        <div class="inline-flex items-center gap-2 mb-12 opacity-30">
          <span class="w-1 h-1 rounded-full bg-accent animate-pulse"></span>
          <span class="text-[8px] uppercase tracking-[0.6em] font-tech text-white">SYS_ENGINE // CENTERED_DEPLOIMENT</span>
        </div>

        <h1 class="text-4xl md:text-7xl lg:text-8xl font-medium font-tech uppercase tracking-tighter leading-tight mb-12 text-white">
          Ingeniería Digital<br/>
          para tu <span class="text-accent italic text-shadow-glow">Negocio.</span>
        </h1>

        <p class="text-xs md:text-sm text-gray-500 uppercase tracking-[0.5em] font-medium mb-20 opacity-80 max-w-2xl leading-relaxed mx-auto">
          Análisis riguroso para una presencia digital escalable.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-16 lg:gap-24">
          <NuxtLink to="/contacto" class="group relative px-12 py-5 bg-white/5 border border-accent/30 text-white font-bold uppercase tracking-[0.3em] text-[10px] overflow-hidden transition-all hover:bg-accent hover:text-[#0a0e17] hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] font-tech">
            <span class="relative z-10">Iniciar Proyecto</span>
            <div class="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </NuxtLink>
          <NuxtLink to="/servicios" class="relative py-2 text-white/50 font-bold uppercase tracking-[0.3em] text-[10px] hover:text-white transition-all font-tech group">
            Explorar Soluciones
            <div class="absolute -bottom-1 left-0 w-8 h-[1px] bg-accent transition-all group-hover:w-full"></div>
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const generateTerrainPath = (i) => {
  const yBase = 80 + (i * 18);
  let path = `M 0 ${yBase} `;
  for (let x = 0; x <= 800; x += 35) {
    const yRand = yBase + Math.sin(x/120 + i) * 80 + Math.cos(x/40) * 30;
    path += `L ${x} ${yRand} `;
  }
  return path;
}

const generateRandomPos = (n) => {
  return {
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
    animationDelay: (Math.random() * 10) + 's',
    opacity: (Math.random() * 0.5 + 0.1)
  }
}
</script>

<style scoped>
.fine-dotted-grid {
  background-image: radial-gradient(rgba(0, 242, 255, 0.4) 0.5px, transparent 0);
  background-size: 40px 40px;
}

.floating-point {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #00f2ff;
  border-radius: 50%;
  box-shadow: 0 0 10px #00f2ff;
  animation: float-around 20s infinite ease-in-out;
}

@keyframes float-around {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(30px, -50px); }
  66% { transform: translate(-20px, 40px); }
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

h1 {
  letter-spacing: -0.04em;
  text-shadow: 0 0 100px rgba(0, 242, 255, 0.08);
}

.text-shadow-glow {
  text-shadow: 0 0 20px rgba(0, 242, 255, 0.6), 0 0 40px rgba(0, 242, 255, 0.4);
}
</style>
