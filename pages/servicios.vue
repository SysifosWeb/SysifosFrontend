<script setup>
// Page Layout configuration
definePageMeta({
  layout: 'secondary',
  title: 'Servicios'
})

const { gtag } = useGtag()
// Ejecutar cuando alguien ve la página
onMounted(() => {
  if (gtag) {
    gtag('event', 'conversion', {
      'send_to': 'AW-17809723983/Xs8DCL2-sNIbEM-kq6xc',
      'value': 1.0,
      'currency': 'CLP'
    })
  }
})

// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Servicios de Desarrollo Web, E-commerce y Software a Medida',
  description: 'Servicios profesionales de desarrollo web, tiendas online, landing pages, WordPress, software a medida y mantenimiento web en Chile. Laravel, Vue.js, React, Flutter. Cotiza gratis.',
  keywords: 'servicios desarrollo web, servicios desarrollo software, landing pages chile',
  image: '/img/og-servicios.jpg'
})

setSchema({
  type: 'Service',
  data: {
    name: 'Servicios de Desarrollo Web y Software',
    description: 'Desarrollo de páginas web, tiendas online, aplicaciones móviles y software a medida',
    serviceType: 'Desarrollo de Software'
  }
})
</script>

<template>
  <div class="bg-[#0a0e17] min-h-screen">
    <ServiciosHeroSection />
    <ServiciosListSection />
    <ServiciosProcesoSection />
    <ServiciosTechStackSection />
    <NosotrosCtaSection />
  </div>
</template>
