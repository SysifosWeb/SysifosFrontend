<script setup>
// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Portfolio | Proyectos de Desarrollo Web y Software a Medida — SysifosWeb',
  description: 'Conoce nuestros proyectos reales: Ansar Automotriz, Maestranza Faremin, StahlForm y más. Desarrollamos soluciones digitales que generan resultados medibles para empresas en Chile y el mundo.',
  keywords: 'portfolio desarrollo web chile, casos de éxito software, proyectos desarrollo web empresas, ejemplos software a medida, soluciones digitales automotriz, ecommerce chile',
  image: '/img/og-portfolio.jpg'
})

setSchema({
  type: 'WebPage',
  data: {
    name: 'Portfolio de Proyectos — SysifosWeb',
    description: 'Casos de éxito en desarrollo web, ecommerce y software a medida para empresas en Chile y el mundo.'
  }
})

definePageMeta({
  layout: 'hero',
  title: 'Portfolio'
})
</script>

<template>
  <div class="bg-section-dark min-h-screen">
    <PortfolioHeroSection />
    <PortfolioGridSection />
    <PortfolioStatsSection />
  </div>
</template>
