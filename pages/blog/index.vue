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

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'desarrollo-web', name: 'Desarrollo Web' },
  { id: 'performance', name: 'Performance' },
  { id: 'ux-ui', name: 'UX/UI' },
  { id: 'ecommerce', name: 'Ecommerce' },
  { id: 'escalabilidad', name: 'Escalabilidad' },
  { id: 'seo', name: 'SEO' }
]

const selectedCategory = ref('all')

const dummyPosts = [
  {
    id: 1,
    title: 'Arquitectura Invisible: Cómo construir sistemas que resisten hiper-crecimiento',
    excerpt: 'El verdadero valor de la ingeniería de software moderna no está en lo que los usuarios ven, sino en las fundaciones invisibles que permiten escalar de 100 a 100,000 usuarios sin fricción.',
    category: { name: 'Escalabilidad', slug: 'escalabilidad' },
    reading_time: '8 min',
    date: '14 Mayo 2026',
    author: 'Sysifos Engineering',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: 'El impacto del Performance en la Conversión Ecommerce',
    excerpt: 'Por qué cada 100ms de latencia te cuesta miles de dólares en ventas perdidas y cómo optimizar tu stack tecnológico para conversiones.',
    category: { name: 'Performance', slug: 'performance' },
    reading_time: '5 min',
    date: '10 Mayo 2026',
    author: 'Performance Team',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Design Systems: Más allá de componentes UI',
    excerpt: 'Cómo construir un lenguaje visual escalable que conecte diseño y desarrollo, reduciendo la deuda técnica en productos complejos.',
    category: { name: 'UX/UI', slug: 'ux-ui' },
    reading_time: '6 min',
    date: '02 Mayo 2026',
    author: 'Design Team',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Migrando a arquitecturas Serverless en 2026',
    excerpt: 'Patrones, beneficios y los costos ocultos de migrar tu monolito a una arquitectura orientada a eventos sin servidores.',
    category: { name: 'Desarrollo Web', slug: 'desarrollo-web' },
    reading_time: '10 min',
    date: '28 Abril 2026',
    author: 'Sysifos Engineering',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Core Web Vitals: La guía definitiva',
    excerpt: 'Entiende las métricas de Google, cómo medirlas y las estrategias técnicas para obtener un score perfecto.',
    category: { name: 'SEO', slug: 'seo' },
    reading_time: '7 min',
    date: '15 Abril 2026',
    author: 'Growth Team',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Edge Computing para aplicaciones globales',
    excerpt: 'Llevando la computación más cerca del usuario final para latencias de un solo dígito y experiencias instantáneas.',
    category: { name: 'Performance', slug: 'performance' },
    reading_time: '6 min',
    date: '05 Abril 2026',
    author: 'Sysifos Engineering',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Micro-frontends: ¿Cuándo realmente los necesitas?',
    excerpt: 'Desmitificando el hype. Cuándo tiene sentido dividir tu capa de presentación y cuándo un monolito modular es suficiente.',
    category: { name: 'Desarrollo Web', slug: 'desarrollo-web' },
    reading_time: '8 min',
    date: '20 Marzo 2026',
    author: 'Architecture Team',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000&auto=format&fit=crop'
  }
]

const featuredPost = computed(() => dummyPosts.find(p => p.featured))
const filteredPosts = computed(() => {
  let posts = dummyPosts.filter(p => !p.featured)
  if (selectedCategory.value !== 'all') {
    posts = dummyPosts.filter(p => p.category.slug === selectedCategory.value)
  }
  return posts
})

</script>

<template>
  <div class="bg-section-dark min-h-screen">
    <BlogHeroSection />

    <!-- Search and Filters (SaaS Minimalist) -->
    <BlogFiltersSection v-model="selectedCategory" :categories="categories" />

    <!-- Featured Article -->
    <BlogFeaturedPost v-if="selectedCategory === 'all' && featuredPost" :post="featuredPost" />

    <!-- Articles Grid -->
    <BlogPostGrid :posts="filteredPosts" />

    <!-- Highlighted Reading / Cinematic Section -->
    <BlogCinematicGuide />

    <!-- Newsletter -->
    <BlogNewsletterSection />

    <NosotrosCtaSection />
  </div>
</template>