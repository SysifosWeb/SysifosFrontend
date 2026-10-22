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
  type: 'WebPage',
  data: { name: 'Contacta con SysifosWeb', description: 'Cotiza tu proyecto web o software mediante formulario, WhatsApp o email.' }
})
</script>
<template>
  <div class="bg-section-dark min-h-screen">
    <ContactoHeroSection />
    <ContactoContactFormSection />
  </div>
</template>