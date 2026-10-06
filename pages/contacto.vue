<script setup>
// Page Layout configuration
definePageMeta({
  layout: 'hero',
  title: 'Contacto'
})

// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Contacto | Cotiza tu Proyecto Web o Software — SysifosWeb Chile',
  description: 'Contáctanos para cotizar tu página web, tienda online, aplicación o software a medida. Respondemos en menos de 24 horas. Disponible por WhatsApp, email y formulario. Coquimbo, Chile.',
  keywords: 'contacto desarrollo web chile, cotizar página web chile, presupuesto desarrollo web, cotizar software a medida, agencia web coquimbo, contratar desarrolladores chile',
  image: '/img/og-contacto.webp'
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