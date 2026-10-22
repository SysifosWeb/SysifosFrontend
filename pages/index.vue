<script setup>
const { setMeta, setSchema } = useSEO()

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
  <LazyHomeValue hydrate-on-visible />
  <LazyHomeProblems hydrate-on-visible />
  <LazyHomeProposition hydrate-on-visible />
  <LazyHomeBusinessUnits hydrate-on-visible />
  <LazyHomeTrust hydrate-on-visible />
  <LazyHomeBanner hydrate-on-visible />
</template>
