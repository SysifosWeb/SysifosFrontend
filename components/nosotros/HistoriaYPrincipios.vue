<script setup>
import team from "@/assets/img/node_architect_sys.png";
import { Target, Eye, ShieldCheck } from 'lucide-vue-next'
</script>

<template>
  <section class="relative bg-section-dark pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
    
    <!-- Glows decorativos -->
    <div class="section-glow-purple glow-top-left"></div>
    <div class="section-glow-cyan glow-center-right"></div>

    <div class="section-container flex flex-col gap-16 lg:gap-24">
      
      <!-- PARTE 1: HISTORIA -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-20">
        
        <!-- Bloque de Texto -->
        <div class="flex flex-col z-20">
          <div class="eyebrow-badge mb-6 w-fit">
            <span class="eyebrow-badge__dot"></span>
            <span class="eyebrow-badge__text">Nuestra historia</span>
          </div>

          <h2 class="section-title text-4xl md:text-5xl lg:text-6xl mb-8">
            Nuestra <br />
            <span class="text-accent">Historia.</span>
          </h2>
          
          <div class="space-y-6 card-text text-base md:text-[17px] leading-relaxed border-l-2 border-accent/30 pl-6 lg:pl-10">
            <p>
              Fundada en 2024, SysifosWeb nace con una misión muy clara: democratizar y simplificar la arquitectura tecnológica de vanguardia para asegurar la escalabilidad de tu negocio.
            </p>
            <p>
              Inspirados en el mito de Sísifo, reflejamos perseverancia técnica y precisión. Convertimos cada desafío en una oportunidad para diseñar e implementar soluciones de alto rendimiento que marquen una diferencia real y medible.
            </p>
          </div>
        </div>

        <!-- Bloque de Imagen -->
        <div class="relative group z-20">
          <div class="card-elevated p-2 overflow-hidden shadow-2xl">
            <img :src="team" alt="SysifosWeb Arquitecto" class="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-md" loading="lazy" />
          </div>
        </div>
      </div>

      <!-- PARTE 2: PRINCIPIOS -->
      <div class="relative w-full z-10">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <!-- Misión -->
            <div class="card-border bg-section-surface p-8 lg:p-10 flex flex-col group relative overflow-hidden">
                <Target class="absolute top-6 right-6 w-16 h-16 text-white/5 group-hover:text-accent/10 transition-colors duration-500" />
                <h3 class="card-title text-xl lg:text-2xl mb-4 flex gap-3 items-center">
                    <span class="text-accent text-sm">01.</span> MISIÓN
                </h3>
                <p class="card-text text-sm leading-relaxed">
                    Empoderar corporaciones mediante arquitecturas tecnológicas robustas e innovadoras que aceleren su crecimiento y maximicen su competitividad.
                </p>
                <div class="card-hover-glow"></div>
            </div>

            <!-- Visión -->
            <div class="card-border bg-section-surface p-8 lg:p-10 flex flex-col group relative overflow-hidden md:mt-8">
                <Eye class="absolute top-6 right-6 w-16 h-16 text-white/5 group-hover:text-purple/10 transition-colors duration-500" />
                <h3 class="card-title text-xl lg:text-2xl mb-4 flex gap-3 items-center">
                    <span class="text-purple text-sm">02.</span> VISIÓN
                </h3>
                <p class="card-text text-sm leading-relaxed">
                    Ser el clúster de desarrollo de software más confiable de la región, distinguidos por nuestra excelencia técnica inquebrantable.
                </p>
                <div class="card-hover-glow"></div>
            </div>

            <!-- Valores -->
            <div class="card-border bg-section-surface p-8 lg:p-10 flex flex-col group relative overflow-hidden md:mt-16">
                <ShieldCheck class="absolute top-6 right-6 w-16 h-16 text-white/5 group-hover:text-accent/10 transition-colors duration-500" />
                <h3 class="card-title text-xl lg:text-2xl mb-4 flex gap-3 items-center">
                    <span class="text-accent text-sm">03.</span> VALORES
                </h3>
                <p class="card-text text-sm leading-relaxed">
                    Innovación pragmática, calidad sistemática y transparencia operacional. La ingeniería sólida crea futuros sustentables.
                </p>
                <div class="card-hover-glow"></div>
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
  max-width: 1340px;
  margin: 0 auto;
}

.glow-top-left {
  width: 400px;
  height: 400px;
  top: -100px;
  left: -100px;
}

.glow-center-right {
  width: 500px;
  height: 500px;
  top: 50%;
  right: -200px;
  transform: translateY(-50%);
}
</style>
