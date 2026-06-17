<script setup>
import { computed, ref, watch, onMounted } from 'vue'

definePageMeta({
    layout: 'hero'
})

const route = useRoute()
const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl

// Usar el slug como key para que useFetch se invalide automáticamente al cambiar de ruta
const slug = computed(() => route.params.slug)

const {
    data: postResponse,
    pending: postPending,
    error: postError,
    refresh: refreshPost
} = await useFetch(() => `${apiUrl}blog/${slug.value}`, {
    key: () => `post-${slug.value}`,
    watch: [slug]
})

const postData = computed(() => postResponse.value?.data || postResponse.value || null)

const post = computed(() => {
    if (!postData.value) return null
    return {
        id: postData.value.id,
        title: postData.value.title,
        category: postData.value.category?.name || 'Blog',
        date: new Date(postData.value.published_at || postData.value.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
        readingTime: (postData.value.reading_time || 1) + ' min de lectura',
        author: {
            name: postData.value.user?.name || 'Sysifos Team',
            role: 'Autor',
            avatar: postData.value.user?.name ? postData.value.user.name.substring(0, 2).toUpperCase() : 'SE'
        },
        image: postData.value.featured_image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
        content: postData.value.content ? (postData.value.content.includes('<') ? postData.value.content : '<p>' + postData.value.content.replace(/\n\n/g, '</p><p>') + '</p>') : '',
        tags: postData.value.meta_keywords || []
    }
})

// Watch adicional como respaldo: si el slug cambia y el fetch no se actualizó, forzar refresh
watch(slug, async (newSlug, oldSlug) => {
    if (newSlug && newSlug !== oldSlug) {
        await refreshPost()
    }
})

// Incrementar vistas al cargar el artículo
onMounted(async () => {
    if (postData.value?.id) {
        try {
            await $fetch(`${apiUrl}blog/${postData.value.id}/increment-views`, { method: 'POST' })
        } catch {
            // Silencioso - no bloquear la experiencia del usuario
        }
    }
})

// Share functionality
const shareUrl = computed(() => {
    if (typeof window !== 'undefined') {
        return window.location.href
    }
    return `https://www.sysifosweb.cl/blog/${slug.value}`
})

const shareOnTwitter = () => {
    if (!post.value) return
    const url = encodeURIComponent(shareUrl.value)
    const text = encodeURIComponent(`Interesante artículo: ${post.value.title}`)
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
}

const shareOnLinkedIn = () => {
    const url = encodeURIComponent(shareUrl.value)
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
}

const shareOnFacebook = () => {
    // Nota: Facebook lee los metadatos (OG tags) de la URL pública.
    // Si usas localhost, Facebook no mostrará el contenido. Usaremos la URL de producción como fallback.
    const urlToShare = typeof window !== 'undefined' && window.location.hostname.includes('localhost')
        ? `https://www.sysifosweb.cl/blog/${slug.value}`
        : shareUrl.value

    const url = encodeURIComponent(urlToShare)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
}

const shareOnWhatsApp = () => {
    // WhatsApp usa únicamente el parámetro 'text' para prellenar el mensaje, por lo que incluimos la URL dentro del texto.
    const urlToShare = typeof window !== 'undefined' && window.location.hostname.includes('localhost')
        ? `https://www.sysifosweb.cl/blog/${slug.value}`
        : shareUrl.value

    const text = encodeURIComponent(`¡Mira este artículo!: ${post.value?.title}\n\n${urlToShare}`)
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank')
}

const showToast = ref(false)

const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(shareUrl.value)
        showToast.value = true
        setTimeout(() => {
            showToast.value = false
        }, 3000)
    } catch (err) {
        console.error('Error al copiar', err)
    }
}

useSeoMeta({
    title: () => post.value ? `${post.value.title} | Blog` : 'Artículo no encontrado',
    description: () => postData.value?.excerpt || 'Lee nuestro último artículo.',
    ogImage: () => post.value?.image || ''
})

const { data: relatedResponse } = await useFetch(`${apiUrl}blog`, {
    key: 'blog-list'
})
const relatedPosts = computed(() => {
    const posts = relatedResponse.value?.data || []
    return posts.filter(p => p.id !== post.value?.id).slice(0, 2).map(p => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        category: p.category?.name || 'Blog',
        reading_time: (p.reading_time || 1) + ' min',
        image: p.featured_image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
    }))
})
</script>

<template>
    <div class="bg-section-dark min-h-screen pb-0">

        <!-- Skeleton Loader mientras carga el artículo -->
        <div v-if="postPending" class="animate-pulse">
            <section class="relative pt-32 lg:pt-48 pb-16 overflow-hidden">
                <div class="max-w-[800px] w-[90%] mx-auto relative z-20">
                    <div class="w-28 h-4 bg-white/10 rounded mb-10"></div>
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-5 bg-white/10 rounded"></div>
                        <div class="w-32 h-4 bg-white/10 rounded"></div>
                    </div>
                    <div class="w-full h-14 bg-white/10 rounded-xl mb-4"></div>
                    <div class="w-3/4 h-14 bg-white/10 rounded-xl mb-10"></div>
                    <div class="flex items-center gap-4 pt-8 border-t border-white/10">
                        <div class="w-12 h-12 rounded-full bg-white/10"></div>
                        <div>
                            <div class="w-24 h-4 bg-white/10 rounded mb-2"></div>
                            <div class="w-16 h-3 bg-white/10 rounded"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="max-w-[1000px] w-[90%] mx-auto mb-16 lg:mb-24">
                <div class="w-full h-[300px] md:h-[500px] rounded-3xl bg-white/10"></div>
            </section>
            <section class="max-w-[700px] w-[90%] mx-auto">
                <div class="space-y-4">
                    <div class="w-full h-4 bg-white/10 rounded"></div>
                    <div class="w-full h-4 bg-white/10 rounded"></div>
                    <div class="w-5/6 h-4 bg-white/10 rounded"></div>
                    <div class="w-full h-4 bg-white/10 rounded"></div>
                    <div class="w-4/6 h-4 bg-white/10 rounded"></div>
                </div>
            </section>
        </div>

        <!-- Contenido del artículo (solo cuando hay datos) -->
        <div v-else-if="post">

        <!-- Article Hero -->
        <section class="relative pt-32 lg:pt-48 pb-16 overflow-hidden">
            <div
                class="absolute rounded-full pointer-events-none blur-[150px] w-[800px] h-[800px] bg-sky-500 opacity-[0.03] top-[-20%] left-1/2 -translate-x-1/2">
            </div>

            <div class="max-w-[800px] w-[90%] mx-auto relative z-20">
                <!-- Back Button -->
                <NuxtLink to="/blog"
                    class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors mb-10">
                    &larr; Volver al Journal
                </NuxtLink>

                <div class="flex items-center gap-4 mb-6">
                    <span
                        class="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[0.65rem] font-bold uppercase tracking-wider text-sky-400">
                        {{ post.category }}
                    </span>
                    <span class="text-xs text-white/40 font-medium">{{ post.date }} • {{ post.readingTime }}</span>
                </div>

                <h1
                    class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-10">
                    {{ post.title }}
                </h1>

                <div class="flex items-center gap-4 pt-8 border-t border-white/10">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 p-[2px]">
                        <div class="w-full h-full bg-section-dark rounded-full flex items-center justify-center">
                            <span class="text-sm font-bold text-white">{{ post.author.avatar }}</span>
                        </div>
                    </div>
                    <div>
                        <p class="text-sm font-bold text-white">{{ post.author.name }}</p>
                        <p class="text-xs text-white/50">{{ post.author.role }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Cover Image -->
        <section class="max-w-[1000px] w-[90%] mx-auto mb-16 lg:mb-24 relative z-20">
            <div class="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img :src="post.image" :alt="post.title"
                    class="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 opacity-80" />
            </div>
        </section>

        <!-- Article Content -->
        <section class="max-w-[700px] w-[90%] mx-auto relative z-20">
            <div class="prose prose-invert prose-lg max-w-none text-white/70" v-if="post" v-html="post.content">
            </div>

            <!-- Share & Tags -->
            <div
                class="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-xs text-white/40 uppercase tracking-widest font-bold mr-2">Tags:</span>
                    <span v-for="tag in post.tags" :key="tag"
                        class="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60 capitalize">{{ tag }}</span>
                    <span v-if="post.tags.length === 0"
                        class="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60">{{ post.category }}</span>
                </div>

                <div class="flex items-center gap-3">
                    <span class="text-xs text-white/40 uppercase tracking-widest font-bold mr-2">Compartir:</span>
                    <button @click="shareOnTwitter"
                        class="w-8 h-8 rounded-full bg-white/5 hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] flex items-center justify-center transition-colors group">
                        <svg class="w-4 h-4 text-white group-hover:text-[#1DA1F2] transition-colors" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </button>
                    <button @click="shareOnLinkedIn"
                        class="w-8 h-8 rounded-full bg-white/5 hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] flex items-center justify-center transition-colors group">
                        <svg class="w-4 h-4 text-white group-hover:text-[#0A66C2] transition-colors" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </button>
                    <button @click="shareOnFacebook"
                        class="w-8 h-8 rounded-full bg-white/5 hover:bg-[#1877F2]/20 hover:text-[#1877F2] flex items-center justify-center transition-colors group">
                        <svg class="w-4 h-4 text-white group-hover:text-[#1877F2] transition-colors" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </button>
                    <button @click="shareOnWhatsApp"
                        class="w-8 h-8 rounded-full bg-white/5 hover:bg-[#25D366]/20 hover:text-[#25D366] flex items-center justify-center transition-colors group">
                        <svg class="w-4 h-4 text-white group-hover:text-[#25D366] transition-colors" fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.994 9.994 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2zm5.882 14.161c-.247.696-1.432 1.34-1.97 1.455-.494.106-1.139.222-3.418-.72-2.73-1.127-4.498-3.92-4.636-4.103-.137-.184-1.109-1.474-1.109-2.812s.696-2.001.942-2.278c.246-.277.534-.347.712-.347.177 0 .356.004.512.011.168.008.396-.067.621.474.233.56.793 1.933.864 2.076.071.144.119.313.028.497-.092.184-.139.299-.277.456-.139.157-.291.341-.416.471-.138.143-.284.298-.124.573.16.276.711 1.173 1.528 1.905 1.053.945 1.93 1.238 2.205 1.382.276.143.438.118.601-.067.163-.186-.71-8.23-8.23-1.107.123-.277.167-.456.123-.655-.044-.199-.163-.318-.44-.456z" />
                        </svg>
                    </button>
                    <button @click="copyToClipboard"
                        class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-colors">
                        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Author Box -->
            <div
                class="mt-12 p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center md:items-start gap-6">
                <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 p-[2px] flex-shrink-0">
                    <div class="w-full h-full bg-section-dark rounded-full flex items-center justify-center">
                        <span class="text-lg font-bold text-white">{{ post.author.avatar }}</span>
                    </div>
                </div>
                <div class="text-center md:text-left">
                    <p class="text-[0.65rem] font-bold uppercase tracking-widest text-sky-400 mb-1">Escrito por</p>
                    <h4 class="text-lg font-bold text-white mb-2">{{ post.author.name }}</h4>
                    <p class="text-sm text-white/60 leading-relaxed">Equipo de ingenieros y arquitectos cloud de
                        SysifosWeb. Apasionados por el performance, sistemas distribuidos y la construcción de productos
                        digitales escalables.</p>
                </div>
            </div>
        </section>

        <!-- Related Articles -->
        <section class="py-24 bg-section-dark relative z-10 border-t border-white/5 mt-16">
            <div class="max-w-[1200px] w-[90%] mx-auto">
                <h3 class="text-2xl font-bold text-white mb-10">Lecturas Recomendadas</h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <NuxtLink v-for="relPost in relatedPosts" :key="relPost.id" :to="`/blog/${relPost.slug}`"
                        class="group relative flex flex-col lg:flex-row rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 overflow-hidden">
                        <div class="relative h-48 lg:h-auto lg:w-2/5 overflow-hidden bg-[#0a0f18]">
                            <img :src="relPost.image" :alt="relPost.title"
                                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal" />
                        </div>
                        <div class="p-6 lg:p-8 flex flex-col justify-center lg:w-3/5">
                            <div class="flex items-center gap-3 mb-3">
                                <span class="text-[0.65rem] font-bold uppercase tracking-wider text-sky-400">{{
                                    relPost.category }}</span>
                            </div>
                            <h4
                                class="text-lg font-bold text-white mb-3 leading-snug group-hover:text-sky-400 transition-colors">
                                {{ relPost.title }}
                            </h4>
                            <p class="text-sm text-white/50 line-clamp-2">{{ relPost.excerpt }}</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <NosotrosCtaSection />

        <!-- Toast Notification -->
        <div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out"
            :class="showToast ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'">
            <div
                class="flex items-center gap-3 bg-[#0f1522] border border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.15)] px-5 py-3.5 rounded-full backdrop-blur-2xl">
                <div class="w-6 h-6 rounded-full bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                    <svg class="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <span class="text-sm font-medium text-white/90">Enlace copiado exitosamente</span>
            </div>
        </div>
        </div>
    </div>
</template>
