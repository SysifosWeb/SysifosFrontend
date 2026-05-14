<script setup>
defineProps({
    posts: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <section class="py-16 bg-section-dark relative z-10">
        <div class="max-w-[1200px] w-[90%] mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <NuxtLink
                    v-for="post in posts"
                    :key="post.id"
                    to="/blog/arquitectura-invisible"
                    class="group relative flex flex-col rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 overflow-hidden"
                >
                    <div class="relative h-56 overflow-hidden bg-[#0a0f18]">
                        <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal" />
                    </div>
                    <div class="p-6 lg:p-8 flex flex-col flex-grow">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-[0.65rem] font-bold uppercase tracking-wider text-sky-400">{{ post.category.name }}</span>
                            <span class="text-[0.65rem] font-medium text-white/40">{{ post.reading_time }}</span>
                        </div>
                        
                        <h3 class="text-xl font-bold text-white mb-3 leading-snug group-hover:text-sky-400 transition-colors">
                            {{ post.title }}
                        </h3>
                        
                        <p class="text-sm text-white/50 mb-6 flex-grow line-clamp-3 leading-relaxed">{{ post.excerpt }}</p>
                        
                        <div class="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                            <span class="text-xs text-white/40">{{ post.date }}</span>
                            <span class="text-xs font-bold text-white group-hover:translate-x-1 transition-transform">Leer &rarr;</span>
                        </div>
                    </div>
                </NuxtLink>
            </div>
            
            <div v-if="posts.length === 0" class="text-center py-20 border border-white/5 rounded-2xl bg-white/[0.01]">
                <h3 class="text-lg font-bold text-white mb-2">No hay artículos aquí</h3>
                <p class="text-sm text-white/50">Pronto publicaremos contenido en esta categoría.</p>
            </div>
        </div>
    </section>
</template>
