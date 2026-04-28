<script setup>
// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Portfolio - Proyectos de Desarrollo Web y Software Realizados',
  description: 'Explora nuestro portfolio de proyectos exitosos: Ansar Automotriz, Carmotor\'s, Faremin. Desarrollo web, e-commerce, software a medida y aplicaciones móviles en Chile. Casos de éxito reales.',
  keywords: 'portfolio desarrollo web, portafolio proyectos, casos de éxito, proyectos realizados',
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
    <PortfolioDestacadoSection />
    <PortfolioGridSection />
    <PortfolioStatsSection />
    <NosotrosCtaSection />
  </div>
</template>
