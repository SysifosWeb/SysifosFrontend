<template>
  <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <!-- Imagen de fondo de circuito -->
    <img 
      :src="bgImage" 
      alt="" 
      class="w-full h-full object-cover opacity-15 mix-blend-screen"
      loading="lazy"
    />
    <!-- Overlay de color para oscurecer y mezclar con el tema -->
    <div class="absolute inset-0 bg-[#0a0e17]/85 backdrop-blur-[1px]"></div>
    
    <!-- Gradientes para difuminar los bordes superior e inferior -->
    <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0e17] to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0e17] to-transparent"></div>
  </div>
</template>

<script setup>
import bgImage from '@/assets/img/circuit-bg.png'
// Componente de fondo reutilizable para darle textura a las secciones
</script>
