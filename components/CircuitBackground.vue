<template>
  <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <!-- Imagen de fondo de circuito -->
    <img 
      src="@/assets/img/circuit-bg.png" 
      alt="" 
      class="w-full h-full object-cover opacity-30 mix-blend-screen"
    />
    <!-- Overlay de color para oscurecer y mezclar con el tema -->
    <div class="absolute inset-0 bg-[#0a0e17]/80 backdrop-blur-[2px]"></div>
    
    <!-- Gradientes para difuminar los bordes superior e inferior -->
    <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0e17] to-transparent"></div>
    <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0e17] to-transparent"></div>
  </div>
</template>

<script setup>
// Componente de fondo reutilizable para darle textura a las secciones
</script>
