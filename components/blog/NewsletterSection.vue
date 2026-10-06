<script setup>
import { ref, reactive } from 'vue'

const config = useRuntimeConfig()
const { gtag } = useGtag()

const form = reactive({
  email: '',
  consent: false,
  website: '' // honeypot: los bots lo rellenan
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const showError = (msg) => {
  successMessage.value = ''
  errorMessage.value = msg
}

const submitForm = async (event) => {
  event.preventDefault()

  if (!form.email) {
    showError('Ingresa tu email para suscribirte.')
    return
  }

  if (!form.consent) {
    showError('Debes aceptar el tratamiento de tus datos personales.')
    return
  }

  isSubmitting.value = true
  errorMessage.value = ''

  try {
    const response = await fetch(config.public.apiUrl + 'newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: form.email,
        consent: form.consent,
        website: form.website
      })
    })

    const data = await response.json()
    if (response.ok) {
      if (gtag) {
        gtag('event', 'generate_lead', { method: 'newsletter' })
      }
      successMessage.value = data.message || '¡Gracias por suscribirte!'
      errorMessage.value = ''
      form.email = ''
      form.consent = false
      form.website = ''
    } else {
      const firstError = data.errors ? Object.values(data.errors)[0][0] : null
      showError(firstError || data.message || 'No se pudo procesar la suscripción.')
    }
  } catch (error) {
    showError('Error de conexión. Intenta nuevamente.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
    <section class="py-20 bg-section-dark border-t border-white/5">
        <div class="max-w-2xl mx-auto text-center px-6">
            <div class="w-16 h-16 mx-auto bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-2xl lg:text-3xl font-bold text-white mb-4">Recibe insights tecnológicos</h3>
            <p class="text-white/50 text-sm mb-8">Únete a nuestra lista para recibir artículos mensuales sobre arquitectura web y escalabilidad. Sin spam.</p>

            <form @submit="submitForm" class="flex flex-col sm:flex-row gap-3">
                <input v-model="form.email" type="email" placeholder="tu@email.com" autocomplete="email" class="flex-grow bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-sky-400/50 transition-colors" required>
                <button type="submit" :disabled="isSubmitting" class="px-6 py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed">
                    {{ isSubmitting ? 'Enviando...' : 'Suscribirse' }}
                </button>
                <!-- Honeypot anti-bots: invisible para humanos -->
                <input v-model="form.website" type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true">
            </form>

            <!-- Consentimiento obligatorio (Ley 21.719) -->
            <label class="flex items-start gap-3 cursor-pointer select-none text-left mt-5">
                <input v-model="form.consent" type="checkbox" class="mt-1 w-4 h-4 rounded border-white/20 bg-black/20 accent-sky-500">
                <span class="text-xs text-white/50 leading-relaxed">
                    Acepto que mis datos personales sean tratados para enviarme el boletín, de acuerdo a la
                    <NuxtLink to="/privacidad" class="text-sky-400 underline hover:text-sky-300 transition-colors">Política de Privacidad</NuxtLink>.
                    Puedo darme de baja en cualquier momento.
                </span>
            </label>

            <p v-if="successMessage" class="mt-4 text-sm text-emerald-400 font-medium">{{ successMessage }}</p>
            <p v-if="errorMessage" class="mt-4 text-sm text-red-400 font-medium">{{ errorMessage }}</p>
        </div>
    </section>
</template>
