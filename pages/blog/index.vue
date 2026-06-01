<script setup>
import { ref, computed } from 'vue'

definePageMeta({
  layout: 'hero',
  title: 'Blog & Insights'
})

// SEO Configuration
const { setMeta, setSchema } = useSEO()
setMeta({
  title: 'Blog & Insights | Tecnología y Crecimiento Digital',
  description: 'Explora nuestros artículos sobre arquitectura de software, escalabilidad, diseño de producto y estrategias tecnológicas.',
  keywords: 'blog tecnología, desarrollo web chile, arquitectura de software, UX/UI, SEO, performance',
  image: '/img/og-blog.jpg'
})

const config = useRuntimeConfig()
const apiUrl = config.public.apiUrl

const { data: categoriesResponse } = useFetch(`${apiUrl}category`)
const { data: postsResponse } = useFetch(`${apiUrl}blog`)

const categories = computed(() => {
  const cats = [{ id: 'all', name: 'Todos' }]
  if (categoriesResponse.value?.data) {
    categoriesResponse.value.data.forEach(c => {
      cats.push({ id: c.slug, name: c.name })
    })
  }
  return cats
})

const selectedCategory = ref('all')
const searchQuery = ref('')

const mappedPosts = computed(() => {
  if (!postsResponse.value?.data) return []
  return postsResponse.value.data.map(p => ({
    id: p.id,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category || { name: 'Sin categoría', slug: 'uncategorized' },
    reading_time: (p.reading_time || 1) + ' min',
    date: new Date(p.published_at || p.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' }),
    author: p.user?.name || 'Sysifos Engineering',
    image: p.featured_image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
    featured: p.featured,
    slug: p.slug
  }))
})

const featuredPost = computed(() => {
  const posts = mappedPosts.value
  return posts.find(p => p.featured) || posts[0]
})

const filteredPosts = computed(() => {
  let posts = mappedPosts.value
  
  if (!searchQuery.value && selectedCategory.value === 'all' && featuredPost.value) {
    posts = posts.filter(p => p.id !== featuredPost.value.id)
  }

  if (selectedCategory.value !== 'all') {
    posts = posts.filter(p => p.category?.slug === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    posts = posts.filter(p => 
      p.title.toLowerCase().includes(query) || 
      (p.excerpt && p.excerpt.toLowerCase().includes(query))
    )
  }
  
  return posts
})

</script>

<template>
  <div class="bg-section-dark min-h-screen">
    <BlogHeroSection />

    <!-- Search and Filters (SaaS Minimalist) -->
    <BlogFiltersSection v-model="selectedCategory" v-model:searchQuery="searchQuery" :categories="categories" />

    <!-- Featured Article -->
    <BlogFeaturedPost v-if="selectedCategory === 'all' && !searchQuery && featuredPost" :post="featuredPost" />

    <!-- Articles Grid -->
    <BlogPostGrid :posts="filteredPosts" />

    <!-- Highlighted Reading / Cinematic Section 
    <BlogCinematicGuide /> -->

    <!-- Newsletter 
    <BlogNewsletterSection />-->

    <NosotrosCtaSection />
  </div>
</template>