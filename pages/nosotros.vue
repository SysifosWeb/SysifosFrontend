<script setup>

// Page Layout configuration
definePageMeta({
  layout: 'secondary',
  title: 'Nosotros'
})

// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Nosotros | Equipo de Desarrollo Web y Software en Chile — SysifosWeb',
  description: 'Somos SysifosWeb, una agencia de desarrollo de software ubicada en Coquimbo, Chile. Nuestro equipo de ingenieros full stack construye soluciones digitales escalables para empresas. Conoce quiénes somos.',
  keywords: 'equipo desarrollo software chile, agencia desarrollo web coquimbo, empresa desarrollo software chile, desarrolladores full stack chile, quiénes somos sysifosweb',
  image: '/img/og-nosotros.webp'
})

setSchema({
  type: 'WebPage',
  data: {
    name: 'Nosotros — SysifosWeb',
    description: 'Equipo de ingenieros de software especializados en desarrollo web, ecommerce y soluciones digitales para empresas en Chile y el mundo.'
  }
})
</script>
<template>
  <div class="bg-section-dark min-h-[100svh]">
    <NosotrosHistoriaYPrincipios />
    
    <!-- BREAK 1: The Belief -->
    <NosotrosStorytellingBreak 
      headline="El software debe impulsar tu ventaja."
      :oversized="true"
    />

    <NosotrosEquipoSection />

    <!-- BREAK 2: The Promise -->
    <NosotrosStorytellingBreak 
      overline="Arquitectura que acompaña tu crecimiento"
      headline="Construimos para escalar contigo."
      subheadline="Sistemas estables. Resultados tangibles."
      glow="indigo"
    />

    <NosotrosMetodologiaSection />
    <NosotrosCtaSection />
  </div>
</template>


