<script setup>
// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'SysifosWeb | Ingeniería de Software y Consultoría Técnica en Chile',
  description: 'Desarrollamos soluciones de software a medida, aplicaciones web de alto rendimiento y consultoría tecnológica avanzada. Especialistas en Laravel, Nuxt y arquitecturas escalables en Chile.',
  keywords: 'desarrollo de software chile, consultoría tecnológica, ingeniería de software, aplicaciones web personalizadas, desarrollo web profesional',
  image: '/img/og-home.jpg'
})

setSchema({
  type: 'WebPage',
  data: {
    name: 'SysifosWeb - Consultoría Tecnológica',
    description: 'Consultoría técnica de alto nivel y soluciones de ingeniería avanzada.'
  }
})
</script>

<template>
  <HomeValue />
  <HomeBusinessUnits />
  <HomeTrust />
  <HomeTestimonials />
  <HomeBanner />
</template>