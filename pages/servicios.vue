<script setup>
// Page Layout configuration
definePageMeta({
  layout: 'hero',
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
  title: 'Servicios de Desarrollo Web, Ecommerce y Software a Medida | SysifosWeb Chile',
  description: 'Páginas web profesionales, tiendas online, aplicaciones móviles, software a medida y mantenimiento web para empresas en Chile. Trabajamos con Laravel, Vue.js, React y Flutter. Cotiza tu proyecto gratis.',
  keywords: 'servicios desarrollo web chile, diseño páginas web empresas chile, tienda online chile, ecommerce chile, landing pages profesionales, software a medida empresas, aplicaciones móviles chile, mantenimiento web',
  image: '/img/og-servicios.png'
})

setSchema({
  type: 'Service',
  data: {
    services: [
      {
        name: 'Páginas Web Profesionales',
        description: 'Páginas web modernas, rápidas y optimizadas para captar clientes. Diseño Mobile-First, copywriting persuasivo y estructura lista para SEO.',
        serviceType: 'Desarrollo de Páginas Web'
      },
      {
        name: 'Tiendas Online y Ecommerce',
        description: 'Tiendas online construidas para vender y cobrar automáticamente. Proceso de compra optimizado, integración de pagos y panel autoadministrable.',
        serviceType: 'Desarrollo de Tiendas Online y Ecommerce'
      },
      {
        name: 'Sistemas y Software a Medida',
        description: 'Sistemas robustos que reducen costos operativos y automatizan procesos empresariales. Desarrollo full-stack con tecnologías modernas.',
        serviceType: 'Desarrollo de Software a Medida'
      }
    ]
  }
})

setSchema({
  type: 'LocalBusiness',
  data: {
    name: 'Sysifos Web',
    description: 'Agencia de desarrollo de software, páginas web profesionales y tiendas online en La Serena, Chile.',
    telephone: '+56-9-4910-9970',
    email: 'contacto@sysifosweb.cl',
    addressLocality: 'La Serena',
    addressRegion: 'Coquimbo',
    addressCountry: 'CL',
    openingHours: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' }
    ],
    priceRange: '$$'
  }
})
</script>

<template>
  <div class="bg-section-dark min-h-screen">
    <ServiciosHeroSection />
    <ServiciosListSection />
    <ServiciosProcesoSection />
    <ServiciosTechStackSection />
    <NosotrosCtaSection />
  </div>
</template>
