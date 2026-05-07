<script setup>
import { Box, Radio, ShieldCheck } from 'lucide-vue-next';
</script>

<template>
  <section class="relative bg-section-surface pt-20 pb-28 lg:pt-28 lg:pb-32 overflow-hidden border-t border-b border-white/5">
    
    <!-- Glow -->
    <div class="section-glow-purple glow-center"></div>

    <div class="section-container relative z-10 flex flex-col items-center">
      
      <!-- Encabezado -->
      <div class="text-center mb-20 w-full">
        <div class="eyebrow-badge mx-auto mb-6">
          <span class="eyebrow-badge__dot"></span>
          <span class="eyebrow-badge__text">Metodología de trabajo</span>
        </div>
        <h2 class="section-title text-3xl md:text-5xl mb-4">
          Operativa <span class="text-accent">Estandarizada.</span>
        </h2>
        <p class="section-subtitle max-w-2xl mx-auto">
          Ejecución eficiente mediante protocolos ágiles, garantizando precisión funcional, tiempos de entrega predecibles y un código mantenible.
        </p>
      </div>

      <!-- Contenedor Principal en 2 Columnas -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full">
        
        <!-- Izquierda: Metodología -->
        <div class="flex flex-col gap-10">
            <h3 class="card-title text-xl border-b border-white/10 pb-4 flex justify-between items-end">
                Protocolos de Desarrollo
            </h3>

            <!-- Item 1 -->
            <div class="flex items-start gap-6">
                <div class="w-14 h-14 bg-section-dark border border-white/10 flex-shrink-0 flex items-center justify-center rounded-xl">
                    <Box class="w-6 h-6 text-accent" />
                </div>
                <div>
                    <h4 class="card-title text-lg mb-2">Scrum Framework</h4>
                    <p class="card-text text-sm leading-relaxed">
                        Sprints delimitados en iteraciones de 2 semanas con métricas de entrega incrementales y ventanas de feedback continuo.
                    </p>
                </div>
            </div>

            <!-- Item 2 -->
            <div class="flex items-start gap-6">
                <div class="w-14 h-14 bg-section-dark border border-white/10 flex-shrink-0 flex items-center justify-center rounded-xl">
                    <Radio class="w-6 h-6 text-purple" />
                </div>
                <div>
                    <h4 class="card-title text-lg mb-2">Sincronización Continua</h4>
                    <p class="card-text text-sm leading-relaxed">
                        Mantenemos alineación estratégica mediante stand-ups diarios, demostraciones de avance y comunicación transparente.
                    </p>
                </div>
            </div>

            <!-- Item 3 -->
            <div class="flex items-start gap-6">
                <div class="w-14 h-14 bg-section-dark border border-white/10 flex-shrink-0 flex items-center justify-center rounded-xl">
                    <ShieldCheck class="w-6 h-6 text-accent" />
                </div>
                <div>
                    <h4 class="card-title text-lg mb-2">QA & Estabilidad</h4>
                    <p class="card-text text-sm leading-relaxed">
                        Testing unitario, code reviews estrictos y asimilación de clean-code para garantizar arquitecturas sólidas en producción.
                    </p>
                </div>
            </div>
        </div>

        <!-- Derecha: Stack Tecnológico -->
        <div class="flex flex-col gap-10">
            <h3 class="card-title text-xl border-b border-white/10 pb-4">
                Stack Tecnológico
            </h3>

            <div class="space-y-8">
                <!-- Frontend -->
                <div class="card-elevated p-6 flex items-center justify-between group">
                    <div>
                        <h4 class="card-title text-base mb-1">Frontend Core</h4>
                        <p class="text-xs text-muted">Interfaces de alto rendimiento</p>
                    </div>
                    <span class="text-sm font-semibold text-accent">Vue.js / Nuxt / React</span>
                </div>

                <!-- Backend -->
                <div class="card-elevated p-6 flex items-center justify-between group">
                    <div>
                        <h4 class="card-title text-base mb-1">Backend Core</h4>
                        <p class="text-xs text-muted">Lógica y bases de datos</p>
                    </div>
                    <span class="text-sm font-semibold text-purple">Laravel / Node.js</span>
                </div>

                <!-- Mobile -->
                <div class="card-elevated p-6 flex items-center justify-between group">
                    <div>
                        <h4 class="card-title text-base mb-1">Mobile Core</h4>
                        <p class="text-xs text-muted">Desarrollo multiplataforma</p>
                    </div>
                    <span class="text-sm font-semibold text-accent">Flutter / React Native</span>
                </div>
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
  opacity: 0.05;
}
</style>
