<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <header class="secondary-header-container bg-section-dark relative overflow-hidden flex items-center border-b border-white/5">
        
        <!-- Gradientes premium sutiles -->
        <div class="absolute inset-0 pointer-events-none z-0">
            <!-- Glow morado -->
            <div class="section-glow-purple glow-top-left"></div>
            <!-- Glow cyan -->
            <div class="section-glow-cyan glow-bottom-right"></div>
            <!-- Gradiente superior -->
            <div class="absolute top-0 left-0 right-0 h-px"
                 style="background: linear-gradient(to right, transparent, rgba(56,189,248,0.15), transparent);"></div>
        </div>
        
        <div class="w-full relative z-10 custom-container flex items-center pt-20">
            <!-- Left Text Block -->
            <div class="flex flex-col items-center md:items-start text-center md:text-left w-full">
                <div class="eyebrow-badge mb-6">
                    <span class="eyebrow-badge__dot"></span>
                    <span class="eyebrow-badge__text">SysifosWeb</span>
                </div>
                <h1 class="section-title text-4xl md:text-5xl lg:text-6xl text-white">
                  {{ title }}<span class="text-accent">.</span>
                </h1>
            </div>
        </div>
    </header>
</template>

<style scoped>
.secondary-header-container {
    height: 350px;
}

.custom-container {
    width: 90%;
    max-width: 1340px;
    margin: 0 auto;
}

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