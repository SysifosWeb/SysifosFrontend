<script setup>
// Page Layout configuration
definePageMeta({
  layout: 'hero',
  title: 'Servicios'
})

// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Servicios de Captación Web, Automatización y Software | SysifosWeb Chile',
  description: 'Sistemas de captación web, flujos comerciales para B2B y clínicas, automatización de procesos, ecommerce y software a medida en Coquimbo y todo Chile. Cotiza tu diagnóstico.',
  keywords: 'sistemas captacion web chile, automatizacion procesos pymes chile, desarrollo web coquimbo, software a medida b2b, tienda online chile, mantenimiento web cpanel',
  image: '/img/og-servicios.webp'
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
    description: 'Agencia de desarrollo de software, páginas web profesionales y tiendas online en coquimbo, Chile.',
    telephone: '+56-9-8502-1549',
    email: 'contacto@sysifosweb.cl',
    addressLocality: 'Coquimbo',
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
