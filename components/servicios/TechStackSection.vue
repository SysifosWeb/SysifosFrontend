<script setup>
</script>

<template>
  <section class="relative bg-section-dark py-12 lg:py-20 overflow-hidden">
    
    <div class="section-container relative z-20 text-center mb-20 flex flex-col items-center">
        <p class="section-eyebrow mb-4" v-reveal data-delay="0">Infraestructura tecnológica</p>
        <h2 class="section-title tech-title mb-2" v-reveal data-delay="100">
           Tecnología orientada a resultados.
        </h2>
        <p class="text-subdued text-lead max-w-2xl mt-6" v-reveal data-delay="200">
          Elegimos nuestro stack tecnológico no por estar a la moda, sino porque garantizan el rendimiento, seguridad y escala que tu empresa requiere.
        </p>
    </div>

    <div class="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        
        <!-- Rendimiento & Frontend -->
        <div>
            <h3 class="text-h3 mb-6 flex items-center gap-3 text-main">
                Experiencia y velocidad
            </h3>
            <div class="space-y-4">
                <div class="tech-card card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-accent/30" v-reveal data-delay="0">
                    <div class="flex flex-wrap justify-between items-start gap-3 mb-4">
                        <span class="card-title m-0 font-bold text-content">Velocidad Extrema & Mejor SEO</span>
                         <span class="text-small font-semibold text-accent">VUE / NUXT</span>
                    </div>
                    <p class="text-body text-subdued">Tiempos de carga casi instantáneos que reducen la tasa de rebote y te posicionan más alto en Google.</p>
                </div>
                
                <div class="tech-card card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-accent/30" v-reveal data-delay="100">
                    <div class="flex flex-wrap justify-between items-start gap-3 mb-4">
                        <span class="card-title m-0 font-bold text-content">Interfaces Inmersivas</span>
                         <span class="text-small font-semibold text-accent">REACT / NEXT.JS</span>
                    </div>
                    <p class="text-body text-subdued">Desarrollo de aplicaciones fluidas, reactivas y modernas que aumentan la retención del usuario.</p>
                </div>

                <div class="tech-card card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-accent/30" v-reveal data-delay="200">
                    <div class="flex flex-wrap justify-between items-start gap-3 mb-4">
                        <span class="card-title m-0 font-bold text-content">Diseño Pixel-Perfect</span>
                         <span class="text-small font-semibold text-accent">TAILWINDCSS</span>
                    </div>
                    <p class="text-body text-subdued">Estética hiper-personalizada sin plantillas, garantizando que tu marca se vea única y premium en cualquier pantalla.</p>
                </div>
            </div>
        </div>

        <!-- Arquitectura & Backend -->
        <div>
            <h3 class="text-h3 mb-6 flex items-center gap-3 text-main">
                Estabilidad y escala
            </h3>
            <div class="space-y-4">
                <div class="tech-card card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-purple/30" v-reveal data-delay="0">
                    <div class="flex flex-wrap justify-between items-start gap-3 mb-4">
                        <span class="card-title m-0 font-bold text-content">Arquitectura Escalable</span>
                         <span class="text-small font-semibold text-purple">LARAVEL / NODE</span>
                    </div>
                    <p class="text-body text-subdued">Motores de negocio construidos para soportar miles de transacciones concurrentes sin caerse.</p>
                </div>

                <div class="tech-card card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-purple/30" v-reveal data-delay="100">
                    <div class="flex flex-wrap justify-between items-start gap-3 mb-4">
                        <span class="card-title m-0 font-bold text-content">Seguridad de Datos</span>
                         <span class="text-small font-semibold text-purple">POSTGRESQL</span>
                    </div>
                    <p class="text-body text-subdued">Bases de datos estructuradas con encriptación de nivel bancario para proteger tu información más valiosa.</p>
                </div>

                <div class="tech-card card-border bg-panel border border-line p-6 flex flex-col gap-2 group hover:border-purple/30" v-reveal data-delay="200">
                    <div class="flex flex-wrap justify-between items-start gap-3 mb-4">
                        <span class="card-title m-0 font-bold text-content">Estabilidad a Largo Plazo</span>
                         <span class="text-small font-semibold text-purple">TYPESCRIPT</span>
                    </div>
                    <p class="text-body text-subdued">Código altamente tipado que previene errores críticos antes de que lleguen a producción, garantizando disponibilidad 24/7.</p>
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
  margin-inline: auto;
}

.text-main { color: var(--text-main); }
.bg-purple { background-color: var(--purple); }
.text-purple { color: var(--purple); }
.hover\:border-purple\/30:hover { border-color: rgba(var(--decoration-rgb), 0.3); }
.tech-title { max-width: 22ch; }

.tech-card {
  transition: opacity 1.2s ease, transform 1.2s ease, translate .25s ease,
    box-shadow .25s ease, border-color .25s ease;
}
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .tech-card:hover {
    translate: 0 -4px;
    box-shadow: 0 12px 28px rgba(16, 43, 70, .1);
  }
}
</style>
