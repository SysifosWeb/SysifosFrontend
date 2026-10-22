<script setup>
defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <section class="py-16 lg:py-24 bg-section-dark relative z-10">
        <div class="max-w-[1200px] w-[90%] mx-auto">
            <NuxtLink :to="`/blog/${post.slug}`"
                class="blog-zoom-card group relative block rounded-[2rem] border border-line bg-panel overflow-hidden flex flex-col lg:flex-row shadow-2xl">
                <div class="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                    <div class="flex items-center gap-3 mb-6">
                        <span
                            class="px-2.5 py-1 rounded-md bg-panel text-[0.65rem] font-bold uppercase tracking-wider text-content">{{
                                post.category.name }}</span>
                        <span class="text-xs text-subdued">{{ post.date }}</span>
                    </div>

                    <h3
                        class="text-3xl lg:text-5xl font-extrabold text-content mb-6 leading-tight tracking-tight transition-all line-clamp-2 break-words">
                        {{ post.title }}
                    </h3>

                    <p class="text-subdued text-lg leading-relaxed mb-10 line-clamp-3 break-words">{{ post.excerpt }}
                    </p>

                    <div class="flex items-center justify-between mt-auto">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-accent to-accent p-[2px]">
                                <div
                                    class="w-full h-full bg-section-dark rounded-full flex items-center justify-center">
                                    <span class="text-sm font-bold text-content">{{ post.author ? post.author.substring(0,
                                        2).toUpperCase() : 'SE' }}</span>
                                </div>
                            </div>
                            <div>
                                <p class="text-xs font-bold text-content">{{ post.author }}</p>
                                <p class="text-[0.65rem] text-subdued uppercase tracking-widest mt-0.5">{{
                                    post.reading_time }}</p>
                            </div>
                        </div>
                        <span
                            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-action">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="lg:w-1/2 relative overflow-hidden" style="min-height: 300px">
                    <NuxtImg :src="post.image" width="900" height="600" sizes="100vw lg:50vw" format="webp" :alt="post.title" loading="lazy" decoding="async"
                        class="absolute inset-0 w-full h-full object-cover " />
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-panel via-transparent to-transparent hidden lg:block">
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent lg:hidden block">
                    </div>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>
