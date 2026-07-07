<script setup>
// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'SysifosWeb | Desarrollo de Software y Páginas Web en Chile',
  description: 'Creamos software a medida, páginas web profesionales y tiendas online para empresas en Chile. Especialistas en Laravel, Nuxt y arquitecturas escalables. ¡Cotiza gratis hoy!',
  keywords: 'desarrollo de software chile, páginas web profesionales chile, desarrollo web coquimbo, software a medida, tiendas online chile, consultoría tecnológica chile, aplicaciones web empresas',
  image: '/img/og-home.png'
})

setSchema({
  type: 'WebPage',
  data: {
    name: 'SysifosWeb — Desarrollo de Software y Páginas Web en Chile',
    description: 'Agencia de desarrollo de software, páginas web y ecommerce para empresas en Chile. Laravel, Nuxt, Vue.js y más.'
  }
})

setSchema({
  type: 'LocalBusiness',
  data: {
    name: 'Sysifos Web',
    description: 'Agencia de desarrollo de software, páginas web profesionales y tiendas online en La Serena, Chile. Especialistas en Laravel, Nuxt, Vue.js y React.',
    telephone: '+56-9-8502-1549',
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

setSchema({
  type: 'Review',
  data: {
    reviews: [
      {
        author: 'María Rodríguez',
        text: 'Antes tenía una web que no me traía nada. Desde que trabajamos con SysifosWeb, nuestras consultas online se triplicaron. El equipo entendió exactamente lo que necesitaba y lo ejecutaron con precisión.',
        rating: '5'
      },
      {
        author: 'Carlos López',
        text: 'Lanzamos nuestra tienda online en tiempo récord. Nuestras ventas crecieron un 40% en el primer trimestre.',
        rating: '5'
      },
      {
        author: 'Ana Silva',
        text: 'El sistema que desarrollaron nos ahorró horas de trabajo manual cada semana. Ahora el equipo se enfoca en lo que realmente importa.',
        rating: '5'
      }
    ]
  }
})
</script>

<template>
  <HomeValue />
  <HomeProblems />
  <HomeProposition />
  <HomeBusinessUnits />
  <HomeTrust />
  <HomeTestimonials />
  <HomeBanner />
</template>