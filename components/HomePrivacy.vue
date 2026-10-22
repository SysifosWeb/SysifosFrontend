<template>
  <div id="home-cookie-banner" hidden role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-desc"
    class="impulso-closing fixed bottom-20 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-24 sm:max-w-md z-[9999] rounded-2xl border border-white/10 bg-[#102b46]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-6">
    <div class="flex flex-col gap-4">
      <div><h2 id="cookie-title" class="text-sm font-bold text-white mb-2">Tu lectura nos enseña</h2>
        <p id="cookie-desc" class="text-xs text-white/60 leading-relaxed">Con tu permiso medimos las visitas con Google Analytics para mejorar nuestro sitio. Puedes cambiar de opinión cuando quieras. Más detalles en nuestra <a href="/privacidad" class="text-accent underline">Política de Privacidad</a>.</p>
      </div>
      <div class="flex flex-col gap-2">
        <button data-consent="accepted" class="w-full py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-gray-200">Aceptar medición</button>
        <button data-consent="rejected" class="w-full py-2 rounded-lg border border-white/15 text-white/70 font-medium text-[0.7rem] hover:text-white hover:bg-white/5">Solo lo necesario</button>
      </div>
    </div>
  </div>
</template>
