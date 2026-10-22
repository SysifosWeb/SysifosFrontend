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
                    :to="`/blog/${post.slug}`"
                    class="blog-zoom-card group relative flex flex-col rounded-2xl border border-line bg-panel overflow-hidden"
                >
                    <div class="relative overflow-hidden bg-panel" style="aspect-ratio: 16/10">
                        <NuxtImg :src="post.image" width="600" height="375" sizes="100vw sm:50vw lg:33vw" format="webp" :alt="post.title" loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover " />
                    </div>
                    <div class="p-6 lg:p-8 flex flex-col flex-grow">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-[0.65rem] font-bold uppercase tracking-wider text-accent">{{ post.category.name }}</span>
                            <span class="text-[0.65rem] font-medium text-subdued">{{ post.reading_time }}</span>
                        </div>
                        
                        <h3 class="text-xl font-bold text-content mb-3 leading-snug line-clamp-2 break-words">
                            {{ post.title }}
                        </h3>
                        
                        <p class="text-sm text-subdued mb-6 flex-grow line-clamp-3 leading-relaxed break-words">{{ post.excerpt }}</p>
                        
                        <div class="flex items-center justify-between pt-6 border-t border-line mt-auto">
                            <span class="text-xs text-subdued">{{ post.date }}</span>
                            <span class="text-xs font-bold text-content">Leer &rarr;</span>
                        </div>
                    </div>
                </NuxtLink>
            </div>
            
            <div v-if="posts.length === 0" class="text-center py-20 border border-line rounded-2xl bg-panel">
                <h3 class="text-lg font-bold text-content mb-2">No hay artículos aquí</h3>
                <p class="text-sm text-subdued">Pronto publicaremos contenido en esta categoría.</p>
            </div>
        </div>
    </section>
</template>
