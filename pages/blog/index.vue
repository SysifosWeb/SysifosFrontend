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
  image: '/img/og-blog.jpg'
})

// Obtener posts reales desde la API (sin await para navegación cliente)
const { data: blogResponse } = useFetch(`${apiUrl}blog`, {
  key: 'blog-index-list'
})

const allPosts = computed(() => {
  const posts = blogResponse.value?.data || []
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

// Categorías dinámicas desde los posts
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

const featuredPost = computed(() => allPosts.value.find(p => p.featured) || allPosts.value[0] || null)

const filteredPosts = computed(() => {
  let posts = allPosts.value.filter(p => p.id !== featuredPost.value?.id)

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

    <!-- Newsletter -->
    <!-- <BlogNewsletterSection /> -->

    <NosotrosCtaSection />
  </div>
</template>