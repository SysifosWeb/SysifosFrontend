<script setup>
import { TerminalSquare, Database, Smartphone } from 'lucide-vue-next'
import diego from '@/assets/img/Diego.png'
import karen from '@/assets/img/Karen.png'
import osman from '@/assets/img/Osman.png'
</script>

<template>
  <section class="relative bg-section-dark py-20 lg:py-28 overflow-hidden">
    
    <!-- Glow de fondo -->
    <div class="section-glow-cyan glow-center"></div>
    
    <!-- Header -->
    <div class="section-container text-center mb-20 flex flex-col items-center">
        <div class="eyebrow-badge mx-auto mb-6">
          <span class="eyebrow-badge__dot"></span>
          <span class="eyebrow-badge__text">Nuestro Equipo</span>
        </div>
        <h2 class="section-title text-4xl md:text-5xl">
          Conoce a las mentes<br/>
          <span class="text-accent">detrás del código.</span>
        </h2>
    </div>

    <div class="section-container relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-16">
            
            <!-- DIEGO -->
            <div class="team-card relative w-full h-[520px] lg:h-[550px] group flex flex-col items-center">
                <div class="team-card-inner card-elevated p-6 lg:p-8 flex flex-col justify-end w-full">
                    <h3 class="card-title text-xl uppercase tracking-widest mb-4">Diego Araya</h3>
                    <div class="inline-flex items-center gap-2 mb-4">
                        <TerminalSquare class="w-4 h-4 text-accent" />
                        <span class="text-sm font-semibold text-accent tracking-wider">FULL STACK DEV</span>
                    </div>
                    <p class="card-text text-sm leading-relaxed">
                        Desarrollador matriz especializado en estructurar y diseñar módulos escalables para aplicaciones web integrales.
                    </p>
                </div>
                <div class="team-photo">
                    <img :src="diego" alt="Diego Araya" class="w-full h-full object-cover object-[center_top] grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
                </div>
            </div>

            <!-- KAREN -->
            <div class="team-card relative w-full h-[520px] lg:h-[550px] group flex flex-col items-center lg:-mt-8">
                <div class="team-card-inner card-elevated p-6 lg:p-8 flex flex-col justify-end w-full">
                    <h3 class="card-title text-xl uppercase tracking-widest mb-4">Karen Godoy</h3>
                    <div class="inline-flex items-center gap-2 mb-4">
                        <Database class="w-4 h-4 text-purple" />
                        <span class="text-sm font-semibold text-purple tracking-wider">DBA & FRONTEND</span>
                    </div>
                    <p class="card-text text-sm leading-relaxed">
                        Control estructural enfocado en optimización de bases de datos relacionales con eficiencia visual ininterrumpida.
                    </p>
                </div>
                <div class="team-photo">
                    <img :src="karen" alt="Karen Godoy" class="w-full h-full object-cover object-[center_top] grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
                </div>
            </div>

            <!-- OSMAN -->
            <div class="team-card relative w-full h-[520px] lg:h-[550px] group flex flex-col items-center">
                <div class="team-card-inner card-elevated p-6 lg:p-8 flex flex-col justify-end w-full">
                    <h3 class="card-title text-xl uppercase tracking-widest mb-4">Osman Ahumada</h3>
                    <div class="inline-flex items-center gap-2 mb-4">
                        <Smartphone class="w-4 h-4 text-accent" />
                        <span class="text-sm font-semibold text-accent tracking-wider">WEB & MOBILE DEV</span>
                    </div>
                    <p class="card-text text-sm leading-relaxed">
                        Gestión fluida en compilación cross-platform. Especialista arquitectónico en ecosistemas híbridos Flutter.
                    </p>
                </div>
                <div class="team-photo">
                    <img :src="osman" alt="Osman Ahumada" class="w-full h-full object-cover object-[center_top] grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
                </div>
            </div>

        </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.glow-center {
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.team-card-inner {
  position: absolute;
  inset-x: 0;
  bottom: 0;
  top: 150px;
  transition: all 0.4s ease;
}

.team-card:hover .team-card-inner {
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  transform: translateY(-4px);
}

.team-photo {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  height: 320px;
  pointer-events: none;
  z-index: 10;
  transition: transform 0.5s ease;
  mask-image: linear-gradient(to top, transparent 0%, black 20%, black 100%);
  -webkit-mask-image: linear-gradient(to top, transparent 0%, black 20%, black 100%);
}

.team-card:hover .team-photo {
  transform: translate(-50%, -10px);
}
</style>
