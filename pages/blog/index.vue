<script setup>
import { ref, computed } from 'vue'

definePageMeta({
  layout: 'hero',
  title: 'Blog & Insights'
})

const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl

// SEO Configuration
const { setMeta, setSchema } = useSEO()
setMeta({
  title: 'Blog | Tecnología, Desarrollo Web y Negocios Digitales — SysifosWeb',
  description: 'Artículos sobre desarrollo web, software, ecommerce, SEO y estrategias digitales para empresas. Aprende cómo escalar tu negocio con tecnología de parte del equipo de SysifosWeb.',
  keywords: 'blog desarrollo web chile, artículos tecnología empresas, tips ecommerce chile, arquitectura de software, marketing digital pymes, SEO para negocios, digitalización empresas',
  image: '/img/og-blog.png'
})

// Obtener posts reales desde la API (sin await para navegación cliente)
const route = useRoute()
const router = useRouter()

const currentPage = computed({
  get: () => Number(route.query.page) || 1,
  set: (val) => {
    router.push({ query: { ...route.query, page: val } })
    if (process.client) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
})

// Fetch ALL posts to allow frontend filtering and pagination
const { data: allFetchedPosts, pending } = useAsyncData('all-blog-posts', async () => {
  const firstPage = await $fetch(`${apiUrl}blog?page=1`)
  let posts = firstPage.data || []
  const lastPage = firstPage.last_page || 1
  
  if (lastPage > 1) {
    const promises = []
    for (let i = 2; i <= lastPage; i++) {
      promises.push($fetch(`${apiUrl}blog?page=${i}`))
    }
    const results = await Promise.all(promises)
    results.forEach(res => {
      posts = posts.concat(res.data || [])
    })
  }
  return posts
})

const allPosts = computed(() => {
  const posts = allFetchedPosts.value || []
  return posts.map(p => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    category: p.category || { name: 'Blog', slug: 'blog' },
    reading_time: (p.reading_time || 1) + ' min',
    date: new Date(p.published_at || p.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
    author: p.user?.name || 'Sysifos Team',
    image: p.featured_image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
    featured: !!p.featured
  }))
})

// Categorías dinámicas desde TODOS los posts
const categories = computed(() => {
  const catMap = new Map()
  catMap.set('all', { id: 'all', name: 'Todos' })
  allPosts.value.forEach(p => {
    if (p.category?.slug && !catMap.has(p.category.slug)) {
      catMap.set(p.category.slug, { id: p.category.slug, name: p.category.name })
    }
  })
  return Array.from(catMap.values())
})

const selectedCategory = ref('all')
const searchQuery = ref('')
const itemsPerPage = 10

const featuredPost = computed(() => {
  if (selectedCategory.value !== 'all' || searchQuery.value.trim() !== '' || currentPage.value !== 1) return null
  return allPosts.value.find(p => p.featured) || allPosts.value[0] || null
})

// Frontend filtering
const filteredPostsAll = computed(() => {
  let posts = allPosts.value
  
  if (featuredPost.value) {
    posts = posts.filter(p => p.id !== featuredPost.value.id)
  }

  if (selectedCategory.value !== 'all') {
    posts = posts.filter(p => p.category?.slug === selectedCategory.value)
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase()
    posts = posts.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt?.toLowerCase().includes(q)
    )
  }

  return posts
})

const totalPages = computed(() => {
  return Math.ceil(filteredPostsAll.value.length / itemsPerPage) || 1
})

// Reset to page 1 when filters change
watch([selectedCategory, searchQuery], () => {
  if (currentPage.value !== 1) {
    currentPage.value = 1
  }
})

// Paginated posts for the current view
const filteredPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredPostsAll.value.slice(start, end)
})
</script>

<template>
  <div class="bg-section-dark min-h-screen">
    <BlogHeroSection />

    <!-- Search and Filters (SaaS Minimalist) -->
    <BlogFiltersSection v-model="selectedCategory" :categories="categories" v-model:searchQuery="searchQuery" />

    <!-- Featured Article -->
    <BlogFeaturedPost v-if="selectedCategory === 'all' && featuredPost" :post="featuredPost" />

    <!-- Articles Grid -->
    <BlogPostGrid :posts="filteredPosts" />

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex justify-center items-center gap-4 py-12 bg-section-dark">
      <button 
        @click="currentPage > 1 ? currentPage-- : null"
        :disabled="currentPage === 1"
        class="px-5 py-2.5 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        &larr; Anterior
      </button>
      
      <div class="flex items-center gap-2">
        <span class="text-white/80 text-sm font-medium">Página {{ currentPage }} de {{ totalPages }}</span>
      </div>
      
      <button 
        @click="currentPage < totalPages ? currentPage++ : null"
        :disabled="currentPage === totalPages"
        class="px-5 py-2.5 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        Siguiente &rarr;
      </button>
    </div>

    <!-- Newsletter -->
    <!-- <BlogNewsletterSection /> -->

    <NosotrosCtaSection />
  </div>
</template>