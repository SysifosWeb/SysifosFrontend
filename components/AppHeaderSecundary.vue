<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <header class="secondary-header-container bg-section-dark relative overflow-hidden flex items-center">
        
        <!-- Gradientes premium sutiles -->
        <div class="absolute inset-0 pointer-events-none z-0">
            <!-- Glow morado -->
            <div class="section-glow-purple glow-top-left"></div>
            <!-- Glow cyan -->
            <div class="section-glow-cyan glow-bottom-right"></div>
            <!-- Gradiente superior -->
            <div class="absolute top-0 left-0 right-0 h-px"
                 style="background: linear-gradient(to right, transparent, rgba(var(--decoration-rgb), 0.15), transparent);"></div>
        </div>
        
        <div class="relative z-10 site-container flex items-center">
            <!-- Presentación del equipo -->
            <div class="flex flex-col items-center text-center w-full">
                <div class="eyebrow-badge mb-6">
                    <span class="eyebrow-badge__dot"></span>
                    <span class="eyebrow-badge__text">{{ title }}</span>
                </div>
                <h1 class="display-title about-headline font-extrabold text-content mb-8">
                  Tecnología con propósito. <span class="display-accent">Un equipo cercano.</span>
                </h1>
                <p class="about-description text-lead text-subdued">
                  Somos un equipo de desarrollo en Coquimbo. Trabajamos contigo para convertir las necesidades de tu negocio en soluciones digitales claras y útiles.
                </p>
            </div>
        </div>
    </header>
</template>

<style scoped>
.secondary-header-container {
  border-bottom: 1px solid var(--border);
    padding: clamp(8rem, 14vw, 12rem) 0 clamp(3.5rem, 7vw, 6rem);
}

.about-headline { max-width: 22ch; text-wrap: balance; }
.about-description { max-width: 42rem; line-height: var(--lh-lead); }

.glow-top-left {
    width: 600px;
    height: 600px;
    top: -300px;
    left: -200px;
    opacity: 0.15;
}

.glow-bottom-right {
    width: 500px;
    height: 500px;
    bottom: -200px;
    right: -100px;
    opacity: 0.1;
}
</style>