<script setup>
// Page Layout configuration
definePageMeta({
  layout: 'hero',
  title: 'Servicios'
})

// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Servicios de Desarrollo Web, Automatización y Software | SysifosWeb Chile',
  description: 'Sitios web comerciales con panel de consultas, flujos para B2B y clínicas, automatización de procesos, ecommerce y software a medida en Coquimbo y todo Chile. Cotiza tu diagnóstico.',
  keywords: 'sitio web comercial chile, desarrollo web coquimbo, automatizacion procesos pymes chile, software a medida b2b, tienda online chile, mantenimiento web cpanel',
  image: '/img/og-servicios.webp'
})

setSchema({
  type: 'Service',
  data: {
    services: [
      {
        name: 'Landing Express',
        description: 'Landing page de una página sobre plantilla propia para validar una oferta concreta desde $200.000 + IVA.',
        serviceType: 'Desarrollo de Landing Page'
      },
      {
        name: 'Sitio Web Comercial + Panel de Consultas',
        description: 'Sitio web comercial con respaldo automático de consultas en base de datos, medición de WhatsApp y alertas al equipo desde $350.000 + IVA.',
        serviceType: 'Desarrollo de Sitios Web Comerciales'
      },
      {
        name: 'Web + Flujo Comercial / Agenda',
        description: 'Plataforma web con cotizador técnico para maestranzas/B2B o flujo de solicitud de hora para clínicas y servicios ($590.000 - $650.000 + IVA).',
        serviceType: 'Desarrollo Web con Flujo Comercial'
      },
      {
        name: 'Automatización e Integraciones Acotadas',
        description: 'Flujos automatizados compatibles con cPanel para conectar formularios, WhatsApp, correos y planillas desde $450.000 + IVA.',
        serviceType: 'Automatización de Procesos'
      },
      {
        name: 'E-commerce Estándar',
        description: 'Tienda online autoadministrable con pasarelas de pago chilenas (Webpay, Flow o MercadoPago) desde $650.000 + IVA.',
        serviceType: 'Desarrollo de Tiendas Online y Ecommerce'
      },
      {
        name: 'Plan Continuidad & Soporte',
        description: 'Mantenimiento mensual en cPanel, SSL, respaldos, monitoreo de formularios y horas de ajustes desde $49.000/mes + IVA.',
        serviceType: 'Mantenimiento y Soporte Web'
      }
    ]
  }
})

setSchema({
  type: 'LocalBusiness',
  data: {
    name: 'Sysifos Web',
    description: 'Equipo de desarrollo de software, páginas web profesionales y tiendas online en Coquimbo, Chile.',
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
