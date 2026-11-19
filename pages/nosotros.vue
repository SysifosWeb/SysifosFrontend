<script setup>

// Page Layout configuration
definePageMeta({
  layout: 'hero',
  title: 'Nosotros'
})

// SEO Configuration
const { setMeta, setSchema } = useSEO()

setMeta({
  title: 'Nosotros | Equipo de Desarrollo Web y Software en Chile | SysifosWeb',
  description: 'Somos SysifosWeb, un equipo de desarrollo web y software en Coquimbo, Chile. Diseñamos sitios web comerciales, flujos de venta y automatizaciones para empresas.',
  keywords: 'equipo desarrollo software chile, agencia desarrollo web coquimbo, empresa desarrollo software chile, desarrolladores full stack chile, quiénes somos sysifosweb',
  image: '/img/og-nosotros.webp'
})

setSchema({
  type: 'WebPage',
  data: {
    name: 'Nosotros | SysifosWeb',
    description: 'Equipo de desarrollo web, automatización y software a medida en Coquimbo, Chile.'
  }
})
</script>
<template>
  <div class="bg-section-dark min-h-[100svh]">
    <AppHeaderSecundary title="Nosotros" />
    <NosotrosHistoriaYPrincipios />
    
    <!-- BREAK 1: The Belief -->
    <NosotrosStorytellingBreak 
      id="software-util"
      headline="El software tiene que <em>ordenar</em> tu operación, no complicarla."
      :oversized="true"
    />

    <NosotrosEquipoSection />

    <!-- BREAK 2: The Promise -->
    <NosotrosStorytellingBreak 
      overline="Pensado para durar"
      headline="Código claro que crece al ritmo de tu empresa."
      subheadline="Sin plataformas sobredimensionadas ni licencias que te aten a un proveedor."
      glow="indigo"
    />

    <NosotrosMetodologiaSection />
    <NosotrosCtaSection />
  </div>
</template>


