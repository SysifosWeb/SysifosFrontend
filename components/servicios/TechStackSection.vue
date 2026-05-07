<script setup>
</script>

<template>
  <section class="relative bg-section-surface py-20 lg:py-28 overflow-hidden border-b border-white/5">
    
    <!-- Glows -->
    <div class="section-glow-cyan glow-center"></div>

    <div class="section-container relative z-20 text-center mb-16 flex flex-col items-center">
        <div class="eyebrow-badge mx-auto mb-6">
          <span class="eyebrow-badge__dot"></span>
          <span class="eyebrow-badge__text">Tech Stack</span>
        </div>
        <h2 class="section-title text-3xl md:text-5xl mb-4">
          Arsenal <span class="text-accent">Tecnológico.</span>
        </h2>
    </div>

    <div class="section-container grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        
        <!-- Frontend -->
        <div>
            <h3 class="text-sm uppercase tracking-widest mb-6 flex items-center gap-3 font-semibold text-main">
                <span class="w-1.5 h-1.5 rounded-full bg-accent"></span> FRONTEND
            </h3>
            <div class="space-y-4">
                <div class="card-border bg-section-dark p-5 flex justify-between items-center group hover:border-accent/30 transition-colors">
                    <span class="card-title text-sm m-0">Vue.js / Nuxt</span>
                    <div class="w-32 lg:w-48 h-[3px] rounded-full bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full rounded-full bg-accent w-[95%]"></div>
                    </div>
                </div>
                <div class="card-border bg-section-dark p-5 flex justify-between items-center group hover:border-accent/30 transition-colors">
                    <span class="card-title text-sm m-0">React / Next.js</span>
                    <div class="w-32 lg:w-48 h-[3px] rounded-full bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full rounded-full bg-accent w-[85%]"></div>
                    </div>
                </div>
                <div class="card-border bg-section-dark p-5 flex justify-between items-center group hover:border-accent/30 transition-colors">
                    <span class="card-title text-sm m-0">TypeScript</span>
                    <div class="w-32 lg:w-48 h-[3px] rounded-full bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full rounded-full bg-accent w-[90%]"></div>
                    </div>
                </div>
                <div class="card-border bg-section-dark p-5 flex justify-between items-center group hover:border-accent/30 transition-colors">
                    <span class="card-title text-sm m-0">TailwindCSS</span>
                    <div class="w-32 lg:w-48 h-[3px] rounded-full bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full rounded-full bg-accent w-[98%]"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Backend -->
        <div>
            <h3 class="text-sm uppercase tracking-widest mb-6 flex items-center gap-3 font-semibold text-main">
                <span class="w-1.5 h-1.5 rounded-full bg-purple"></span> BACKEND
            </h3>
            <div class="space-y-4">
                <div class="card-border bg-section-dark p-5 flex justify-between items-center group hover:border-purple/30 transition-colors">
                    <span class="card-title text-sm m-0">Laravel / PHP</span>
                    <div class="w-32 lg:w-48 h-[3px] rounded-full bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full rounded-full bg-purple w-[95%]"></div>
                    </div>
                </div>
                <div class="card-border bg-section-dark p-5 flex justify-between items-center group hover:border-purple/30 transition-colors">
                    <span class="card-title text-sm m-0">Node.js</span>
                    <div class="w-32 lg:w-48 h-[3px] rounded-full bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full rounded-full bg-purple w-[80%]"></div>
                    </div>
                </div>
                <div class="card-border bg-section-dark p-5 flex justify-between items-center group hover:border-purple/30 transition-colors">
                    <span class="card-title text-sm m-0">PostgreSQL / MySQL</span>
                    <div class="w-32 lg:w-48 h-[3px] rounded-full bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full rounded-full bg-purple w-[90%]"></div>
                    </div>
                </div>
                <div class="card-border bg-section-dark p-5 flex justify-between items-center group hover:border-purple/30 transition-colors">
                    <span class="card-title text-sm m-0">REST API / GraphQL</span>
                    <div class="w-32 lg:w-48 h-[3px] rounded-full bg-white/5 relative overflow-hidden">
                        <div class="absolute top-0 left-0 h-full rounded-full bg-purple w-[85%]"></div>
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

.text-main { color: var(--text-main); }
.bg-purple { background-color: var(--purple); }
.text-purple { color: var(--purple); }
.hover\:border-purple\/30:hover { border-color: rgba(99, 102, 241, 0.3); }
</style>
