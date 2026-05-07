<script setup>
// Page Layout configuration
definePageMeta({
  layout: 'secondary',
  title: 'Contacto'
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
  title: 'Contacto - Cotiza tu Proyecto de Desarrollo Web',
  description: 'Contáctanos para cotizar tu proyecto de desarrollo web, tienda online, aplicación móvil o software a medida. Respuesta en menos de 24 horas. WhatsApp, email y formulario. Coquimbo, Chile.',
  keywords: 'contacto desarrollo web, cotizar desarrollo web, cotización página web, presupuesto desarrollo web',
  image: '/img/og-contacto.jpg'
})

setSchema({
  type: 'FAQPage',
  data: {
    questions: [
      {
        '@type': 'Question',
        name: '¿Cuánto tiempo toma desarrollar un sitio web?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sitios web: 2-4 semanas. Aplicaciones complejas: 3-6 meses. El tiempo depende de la complejidad y funcionalidades requeridas.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Ofrecen soporte post-lanzamiento?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, ofrecemos planes de soporte y mantenimiento continuo para asegurar que tu sitio web o aplicación funcione correctamente.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Trabajan con clientes fuera de Chile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, trabajamos con clientes de todo el mundo de forma remota.'
        }
      }
    ]
  }
})
</script>

<template>
  <div class="bg-section-dark min-h-screen">
    <ContactoHeroSection />
    <ContactoContactFormSection />
  </div>
</template>
