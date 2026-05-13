<script setup>
</script>

<template>
  <section class="relative bg-section-dark py-12 lg:py-20 overflow-hidden">
    
    <!-- Glows -->
    <div class="section-glow-cyan glow-center"></div>

    <div class="section-container relative z-20 text-center mb-20 flex flex-col items-center">
        <div class="eyebrow-badge mx-auto mb-6" v-reveal data-delay="0">
          <span class="eyebrow-badge__dot"></span>
          <span class="eyebrow-badge__text">Infraestructura Tecnológica</span>
        </div>
        <h2 class="section-title text-3xl md:text-5xl mb-2" v-reveal data-delay="100">
          Tecnología orientada a <span class="text-accent">Resultados.</span>
        </h2>
        <p class="text-white/60 text-lg max-w-2xl mt-6" v-reveal data-delay="200">
          Elegimos nuestro stack tecnológico no por estar a la moda, sino porque garantizan el rendimiento, seguridad y escala que tu empresa requiere.
        </p>
    </div>

    <div class="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        
        <!-- Rendimiento & Frontend -->
        <div>
            <h3 class="text-sm uppercase tracking-widest mb-6 flex items-center gap-3 font-semibold text-main">
                <span class="w-1.5 h-1.5 rounded-full bg-accent"></span> EXPERIENCIA & VELOCIDAD
            </h3>
            <div class="space-y-4">
                <div class="card-border bg-white/[0.02] border border-white/5 p-6 flex flex-col gap-2 group hover:border-accent/30 transition-colors" v-reveal data-delay="0">
                    <div class="flex justify-between items-center mb-4">
                        <span class="card-title text-base m-0 font-bold text-white">Velocidad Extrema & Mejor SEO</span>
                        <span class="text-[10px] font-bold tracking-widest text-accent uppercase bg-accent/10 border border-accent/20 px-2 py-1 rounded">VUE / NUXT</span>
                    </div>
                    <p class="text-sm text-white/50">Tiempos de carga casi instantáneos que reducen la tasa de rebote y te posicionan más alto en Google.</p>
                </div>
                
                <div class="card-border bg-white/[0.02] border border-white/5 p-6 flex flex-col gap-2 group hover:border-accent/30 transition-colors" v-reveal data-delay="100">
                    <div class="flex justify-between items-center mb-4">
                        <span class="card-title text-base m-0 font-bold text-white">Interfaces Inmersivas</span>
                        <span class="text-[10px] font-bold tracking-widest text-accent uppercase bg-accent/10 border border-accent/20 px-2 py-1 rounded">REACT / NEXT.JS</span>
                    </div>
                    <p class="text-sm text-white/50">Desarrollo de aplicaciones fluidas, reactivas y modernas que aumentan la retención del usuario.</p>
                </div>

                <div class="card-border bg-white/[0.02] border border-white/5 p-6 flex flex-col gap-2 group hover:border-accent/30 transition-colors" v-reveal data-delay="200">
                    <div class="flex justify-between items-center mb-4">
                        <span class="card-title text-base m-0 font-bold text-white">Diseño Pixel-Perfect</span>
                        <span class="text-[10px] font-bold tracking-widest text-accent uppercase bg-accent/10 border border-accent/20 px-2 py-1 rounded">TAILWINDCSS</span>
                    </div>
                    <p class="text-sm text-white/50">Estética hiper-personalizada sin plantillas, garantizando que tu marca se vea única y premium en cualquier pantalla.</p>
                </div>
            </div>
        </div>

        <!-- Arquitectura & Backend -->
        <div>
            <h3 class="text-sm uppercase tracking-widest mb-6 flex items-center gap-3 font-semibold text-main">
                <span class="w-1.5 h-1.5 rounded-full bg-purple"></span> ESTABILIDAD & ESCALA
            </h3>
            <div class="space-y-4">
                <div class="card-border bg-white/[0.02] border border-white/5 p-6 flex flex-col gap-2 group hover:border-purple/30 transition-colors" v-reveal data-delay="0">
                    <div class="flex justify-between items-center mb-4">
                        <span class="card-title text-base m-0 font-bold text-white">Arquitectura Escalable</span>
                        <span class="text-[10px] font-bold tracking-widest text-purple uppercase bg-purple/10 border border-purple/20 px-2 py-1 rounded">LARAVEL / NODE</span>
                    </div>
                    <p class="text-sm text-white/50">Motores de negocio construidos para soportar miles de transacciones concurrentes sin caerse.</p>
                </div>

                <div class="card-border bg-white/[0.02] border border-white/5 p-6 flex flex-col gap-2 group hover:border-purple/30 transition-colors" v-reveal data-delay="100">
                    <div class="flex justify-between items-center mb-4">
                        <span class="card-title text-base m-0 font-bold text-white">Seguridad de Datos</span>
                        <span class="text-[10px] font-bold tracking-widest text-purple uppercase bg-purple/10 border border-purple/20 px-2 py-1 rounded">POSTGRESQL</span>
                    </div>
                    <p class="text-sm text-white/50">Bases de datos estructuradas con encriptación de nivel bancario para proteger tu información más valiosa.</p>
                </div>

                <div class="card-border bg-white/[0.02] border border-white/5 p-6 flex flex-col gap-2 group hover:border-purple/30 transition-colors" v-reveal data-delay="200">
                    <div class="flex justify-between items-center mb-4">
                        <span class="card-title text-base m-0 font-bold text-white">Estabilidad a Largo Plazo</span>
                        <span class="text-[10px] font-bold tracking-widest text-purple uppercase bg-purple/10 border border-purple/20 px-2 py-1 rounded">TYPESCRIPT</span>
                    </div>
                    <p class="text-sm text-white/50">Código altamente tipado que previene errores críticos antes de que lleguen a producción, garantizando disponibilidad 24/7.</p>
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

.text-main { color: var(--text-main); }
.bg-purple { background-color: var(--purple); }
.text-purple { color: var(--purple); }
.hover\:border-purple\/30:hover { border-color: rgba(99, 102, 241, 0.3); }
</style>
