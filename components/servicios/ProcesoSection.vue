<script setup>
</script>

<template>
  <section class="relative bg-section-dark py-20 lg:py-28 overflow-hidden border-b border-white/5">
    
    <!-- Glows -->
    <div class="section-glow-purple glow-center"></div>

    <div class="section-container relative z-20 text-center mb-16 flex flex-col items-center">
        <div class="eyebrow-badge mx-auto mb-6">
          <span class="eyebrow-badge__dot"></span>
          <span class="eyebrow-badge__text">Pipeline Operativo</span>
        </div>
        <h2 class="section-title text-3xl md:text-5xl mb-4">
          Nuestro <span class="text-accent">Proceso.</span>
        </h2>
    </div>

    <div class="section-container relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <!-- Step 1 -->
            <div class="process-card card-border bg-section-surface p-8 group relative flex flex-col">
                <div class="absolute top-4 right-6 text-4xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">01</div>
                <h3 class="card-title text-lg uppercase tracking-widest mb-3 mt-4">Análisis</h3>
                <p class="card-text text-sm leading-relaxed mb-6">Extracción de requerimientos, auditoría de viabilidad y definición de la arquitectura de software.</p>
                <div class="w-full h-px bg-white/5 mt-auto relative overflow-hidden">
                    <div class="absolute top-0 left-0 h-full bg-accent w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
            </div>

            <!-- Step 2 -->
            <div class="process-card card-border bg-section-surface p-8 group relative flex flex-col">
                <div class="absolute top-4 right-6 text-4xl font-bold text-purple/10 group-hover:text-purple/20 transition-colors">02</div>
                <h3 class="card-title text-lg uppercase tracking-widest mb-3 mt-4">Diseño UI/UX</h3>
                <p class="card-text text-sm leading-relaxed mb-6">Creación de wireframes y prototipado visual enfocado en rendimiento de interfaz y experiencia de usuario.</p>
                <div class="w-full h-px bg-white/5 mt-auto relative overflow-hidden">
                    <div class="absolute top-0 left-0 h-full bg-purple w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
            </div>

            <!-- Step 3 -->
            <div class="process-card card-border bg-section-surface p-8 group relative flex flex-col">
                <div class="absolute top-4 right-6 text-4xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">03</div>
                <h3 class="card-title text-lg uppercase tracking-widest mb-3 mt-4">Desarrollo</h3>
                <p class="card-text text-sm leading-relaxed mb-6">Ingeniería del código, ensamblaje de componentes dinámicos e integración de bases de datos seguras.</p>
                <div class="w-full h-px bg-white/5 mt-auto relative overflow-hidden">
                    <div class="absolute top-0 left-0 h-full bg-accent w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
            </div>

            <!-- Step 4 -->
            <div class="process-card card-border bg-section-surface p-8 group relative flex flex-col">
                <div class="absolute top-4 right-6 text-4xl font-bold text-purple/10 group-hover:text-purple/20 transition-colors">04</div>
                <h3 class="card-title text-lg uppercase tracking-widest mb-3 mt-4">Lanzamiento</h3>
                <p class="card-text text-sm leading-relaxed mb-6">Despliegue en servidores en la nube, optimización de caché, pruebas de estrés y monitoreo activo.</p>
                <div class="w-full h-px bg-white/5 mt-auto relative overflow-hidden">
                    <div class="absolute top-0 left-0 h-full bg-purple w-0 group-hover:w-full transition-all duration-500"></div>
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

.glow-center {
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.05;
}

.process-card {
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.process-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.15);
}

.text-purple { color: var(--purple); }
.bg-purple { background-color: var(--purple); }
</style>
