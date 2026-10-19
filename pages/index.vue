<script setup>
import { defineAsyncComponent } from 'vue'
// SEO Configuration
const { setMeta, setSchema } = useSEO()

const HomeBusinessUnits = defineAsyncComponent(() => import('~/components/home/HomeBusinessUnits.vue'))
const HomeTrust = defineAsyncComponent(() => import('~/components/home/HomeTrust.vue'))
/* Testimonios pendientes de una reseña real autorizada.
const HomeTestimonials = defineAsyncComponent(() => import('~/components/home/HomeTestimonials.vue'))
// Contenido temporal, identificado visualmente como ficticio; reemplazar por la reseña autorizada.
const testimonialPreview = {
  text: 'Desde la primera conversación nos explicaron cada etapa con claridad. Pudimos revisar los avances y resolver nuestras dudas directamente con el equipo. El resultado refleja lo que necesitábamos para presentar nuestro negocio.',
  author: 'Nombre del cliente',
  role: 'Empresa de ejemplo · texto de referencia'
}

*/

const HomeBanner = defineAsyncComponent(() => import('~/components/home/HomeBanner.vue'))

setMeta({
  title: 'SysifosWeb | Desarrollo de Software y Páginas Web en Chile',
  description: 'Creamos software a medida, páginas web profesionales y tiendas online para empresas en Chile. Especialistas en Laravel, Nuxt y arquitecturas escalables. ¡Cotiza gratis hoy!',
  keywords: 'desarrollo de software chile, páginas web profesionales chile, desarrollo web coquimbo, software a medida, tiendas online chile, consultoría tecnológica chile, aplicaciones web empresas',
  image: '/img/og-home.jpg'
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
    description: 'Agencia de desarrollo de software, páginas web profesionales y tiendas online en coquimbo, Chile. Especialistas en Laravel, Nuxt, Vue.js y React.',
    telephone: '+56-9-8502-1549',
    email: 'contacto@sysifosweb.cl',
    addressLocality: 'coquimbo',
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
  <HomeValue />
  <HomeProblems />
  <HomeProposition />
  <Suspense>
    <HomeBusinessUnits />
  </Suspense>
  <Suspense>
    <HomeTrust />
  </Suspense>
  <!-- Retomar cuando contemos con una reseña real autorizada.
  <Suspense>
    <HomeTestimonials :testimonial="testimonialPreview" preview />
  </Suspense>
  -->
  <Suspense>
    <HomeBanner />
  </Suspense>
</template>