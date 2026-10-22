<script setup>
import team from "@/assets/img/saas_product_visual-optimized.webp";
import { Medal } from "lucide-vue-next";
</script>

<template>
  <section class="relative bg-section-dark py-16 lg:py-20 overflow-hidden">
    
    <div class="relative z-10 w-[90%] max-w-[1340px] mx-auto flex flex-col gap-24">
      
      <!-- ═══ NARRATIVE SPLIT ═══ -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <!-- Left: Editorial copy -->
        <div class="flex flex-col gap-0">
          <!-- Overline -->
          <p class="text-small text-accent mb-7" v-reveal data-delay="0">Fundada en 2024, Coquimbo, Chile</p>

          <h2 class="text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.08] tracking-tight text-content mb-8" v-reveal data-delay="100">
            Arquitectura que
            <em class="not-italic text-accent">resiste la escala.</em>
          </h2>

          <div class="flex flex-col gap-4 mb-10" v-reveal data-delay="200">
            <p class="text-body text-subdued">
              SysifosWeb nace con una convicción: la tecnología de vanguardia no debería ser un privilegio de las grandes corporaciones. La democratizamos.
            </p>
            <p class="text-body text-subdued">
              Inspirados en el mito de Sísifo — perseverancia, precisión, esfuerzo sostenido — convertimos cada desafío técnico en una solución de alto rendimiento con impacto medible en tu negocio.
            </p>
          </div>

          <!-- Stats & Awards -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6" v-reveal data-delay="300">
            <!-- Founding stat -->
            <div class="inline-flex items-center gap-4">
              <span class="text-2xl font-extrabold tracking-tight text-content">2024</span>
              <span class="text-small font-medium text-subdued">Año de fundación</span>
            </div>

            <!-- Award stat -->
            <div class="award-panel inline-flex items-center gap-3 bg-panel px-4 py-3 rounded-[var(--radius-sm)]">
              <Medal class="w-5 h-5 text-accent" />
              <span class="text-small font-semibold text-content">
                Tercer lugar en Desafío Genia: Mujeres que Avanzan 2025
              </span>
            </div>
          </div>
        </div>

        <!-- Right: Image with editorial frame -->
        <div class="relative group" v-reveal data-delay="200">
          <div class="relative rounded-[var(--radius-lg)] overflow-hidden bg-panel">
            <img :src="team" alt="SysifosWeb, arquitecto de nodo" class="w-full h-[480px] object-cover object-center block brightness-[0.88] contrast-[1.04] transition-[filter,transform] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:brightness-[0.96] group-hover:contrast-[1.02] group-hover:scale-[1.02]" loading="lazy" />
            <!-- Overlay caption -->
            <div class="impulso-closing absolute bottom-0 inset-x-0 py-4 px-6 bg-section-dark flex items-center gap-2.5 text-small font-medium text-subdued">
              <span class="w-[5px] h-[5px] rounded-full bg-accent opacity-70"></span>
              <span>Node Architecture · v2.4</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ═══ MANIFESTO STRIP ═══ -->
      <div id="principios" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="principle-panel" v-reveal data-delay="0">
          <div>
            <h3 class="text-h3 text-content mb-3">Misión</h3>
            <p class="text-body text-subdued">Empoderar corporaciones mediante arquitecturas robustas que aceleren su crecimiento y maximicen su competitividad global.</p>
          </div>
        </div>

        <div class="principle-panel" v-reveal data-delay="150">
          <div>
            <h3 class="text-h3 text-content mb-3">Visión</h3>
            <p class="text-body text-subdued">Ser el referente de desarrollo de software más confiable de la región, distinguidos por excelencia técnica inquebrantable.</p>
          </div>
        </div>

        <div class="principle-panel" v-reveal data-delay="300">
          <div>
            <h3 class="text-h3 text-content mb-3">Valores</h3>
            <p class="text-body text-subdued">Innovación pragmática, calidad sistemática, transparencia operacional. La ingeniería sólida construye futuros sustentables.</p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.principle-panel { background: var(--bg-surface); border-radius: var(--radius-md); padding: clamp(1.75rem, 4vw, 2.5rem); }

.principle-panel, .award-panel {
  border: 1px solid var(--border);
  transition: opacity 1.2s ease, transform 1.2s cubic-bezier(0.16,1,0.3,1), translate 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .principle-panel:hover, .award-panel:hover {
    translate: 0 -4px;
    border-color: var(--border-accent);
    box-shadow: 0 12px 28px rgba(16,43,70,0.08);
  }
}
</style>
