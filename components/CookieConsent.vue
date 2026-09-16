<script setup>
const { bannerVisible, accept, reject } = useCookieConsent()
</script>

<template>
  <Transition name="cookie">
    <div
      v-if="bannerVisible"
      class="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[9999] rounded-2xl border border-white/10 bg-[#0b1222]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-6"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <div class="flex flex-col gap-4">
        <div>
          <h2 id="cookie-title" class="text-sm font-bold text-white mb-2">
            Hagamos tu experiencia mejor 💡
          </h2>
          <p id="cookie-desc" class="text-xs text-white/60 leading-relaxed">
            Usamos cookies para que el sitio funcione bien y para entender cómo lo
            visitas. Con tu "Aceptar", la analítica nos ayuda a mejorar el contenido
            que te interesa y a ofrecerte información más útil. Es anónimo, seguro y
            puedes cambiar de opinión cuando quieras. Más detalles en nuestra
            <NuxtLink to="/privacidad" class="text-sky-400 underline hover:text-sky-300">
              Política de Privacidad
            </NuxtLink>.
          </p>
        </div>

        <div class="flex flex-col gap-2">
          <button
            @click="accept"
            class="w-full py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-gray-200 hover:scale-[1.02] transition-all"
          >
            ¡Entendido, aceptar!
          </button>
          <button
            @click="reject"
            class="w-full py-2 rounded-lg text-white/50 font-medium text-[0.7rem] hover:text-white/80 hover:bg-white/5 transition-colors"
          >
            No, solo lo necesario
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-enter-active,
.cookie-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.cookie-enter-from,
.cookie-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>