<script setup>
// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Portfolio de Proyectos | Desarrollo Web y Casos de Éxito',
  description: 'Explora nuestros desarrollos: Ansar Automotriz, Maestranza Faremin, StahlForm y Carmotor\'s. Ingeniería de software aplicada a soluciones reales de negocio en Chile y el mundo.',
  keywords: 'portafolio desarrollo web, casos de éxito software, ejemplos desarrollo web chile, soluciones digitales empresas',
  image: '/img/og-portfolio.jpg'
})

setSchema({
  type: 'WebPage',
  data: {
    name: 'Portfolio - Sysifos Web',
    description: 'Portfolio de proyectos de desarrollo web y software realizados por Sysifos Web'
  }
})

definePageMeta({
  layout: 'secondary',
  title: 'Portfolio'
})
</script>

<template>
  <div class="bg-[#0a0e17] min-h-screen">
    <PortfolioHeroSection />
    <PortfolioGridSection />
    <PortfolioStatsSection />
    <NosotrosCtaSection />
  </div>
</template>
