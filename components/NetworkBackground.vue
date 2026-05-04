<template>
  <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <!-- Imagen de fondo de conectividad (plexus/red) -->
    <img 
      :src="bgImage" 
      alt="" 
      class="w-full h-full object-cover opacity-20 mix-blend-screen"
      loading="lazy"
    />
    <!-- Overlay de color para oscurecer y fusionar con la paleta oscura -->
    <div class="absolute inset-0 bg-[#0a0e17]/80 backdrop-blur-sm"></div>
    
    <!-- Gradientes para difuminar los bordes superior e inferior -->
    <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0e17] to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0e17] to-transparent"></div>
  </div>
</template>

<script setup>
import bgImage from '@/assets/img/network-bg.png'
// Componente de fondo de red/conectividad (Plexus style)
</script>
