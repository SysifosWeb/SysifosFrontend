<script setup>

// Page Layout configuration
definePageMeta({
  layout: 'secondary',
  title: 'Nosotros'
})

// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Nosotros - Equipo de Desarrollo de Software en Chile',
  description: 'Conoce al equipo de Sysifos Web. Especialistas en desarrollo de software, aplicaciones web y soluciones digitales con años de experiencia en Chile. Diego, Karen y Osman - Full Stack Developers.',
  keywords: 'equipo desarrollo software, equipo desarrollo web, empresa desarrollo software chile, empresa desarrollo web chile',
  image: '/img/og-nosotros.jpg'
})

setSchema({
  type: 'WebPage',
  data: {
    name: 'Nosotros - Sysifos Web',
    description: 'Equipo de desarrollo de software especializado en soluciones digitales en Chile'
  }
})
</script>
<template>
  <div class="bg-section-dark min-h-screen">
    <NosotrosHistoriaYPrincipios />
    <NosotrosEquipoSection />
    <NosotrosMetodologiaSection />
    <NosotrosCtaSection />
  </div>
</template>


