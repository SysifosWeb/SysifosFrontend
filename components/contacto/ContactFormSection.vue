<script setup>
import { ref, reactive } from 'vue'
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, X, ExternalLink } from 'lucide-vue-next'

const config = useRuntimeConfig()
const { gtag } = useGtag()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
  consent: false
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const errorMessage = ref('')

const submitForm = async (event) => {
  event.preventDefault()

  if (!form.name || !form.email || !form.subject || !form.message) {
    errorMessage.value = 'Por favor completa los campos requeridos.'
    showError.value = true
    return
  }

  if (!form.consent) {
    errorMessage.value = 'Debes aceptar el tratamiento de tus datos personales para enviar el formulario.'
    showError.value = true
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errorMessage.value = 'El formato de email no es válido.'
    showError.value = true
    return
  }

  isSubmitting.value = true
  showError.value = false

  try {
    const response = await fetch(config.public.apiUrl + 'contact/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        company: form.company || null,
        subject: form.subject,
        message: form.message,
        consent: form.consent,
        source: 'contact_form'
      })
    })

    const data = await response.json()
    if (response.ok) {
      // Lead real: solo aquí se mide (antes disparaba en cada vista de página)
      if (gtag) {
        gtag('event', 'generate_lead', { method: 'contact_form' })
        gtag('event', 'conversion', {
          'send_to': 'AW-17809723983/Xs8DCL2-sNIbEM-kq6xc',
          'value': 1.0,
          'currency': 'CLP'
        })
      }
      showSuccess.value = true
      form.name = ''
      form.email = ''
      form.phone = ''
      form.company = ''
      form.subject = ''
      form.message = ''
      form.consent = false
      setTimeout(() => showSuccess.value = false, 5000)
    } else {
      errorMessage.value = data.message || 'Hubo un error al enviar tu mensaje.'
      showError.value = true
      }
  } catch (error) {
    errorMessage.value = 'Error de conexión. Intenta nuevamente.'
    showError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="relative bg-section-dark py-20 lg:py-32 overflow-hidden border-b border-line">

    <!-- Ambient glows -->
    <div
      class="absolute rounded-full pointer-events-none blur-[120px] w-[500px] h-[500px] bg-accent opacity-5 -top-40 -left-40">
    </div>
    <div
      class="absolute rounded-full pointer-events-none blur-[120px] w-[400px] h-[400px] bg-accent opacity-5 top-[30%] -right-20">
    </div>

    <!-- Alertas -->
    <div v-if="showSuccess" role="status" aria-live="polite"
      class="fixed top-24 right-4 z-50 rounded-xl bg-panel p-4 border border-accent/30 shadow-[0_8px_32px_rgba(var(--decoration-rgb), 0.2)]">
      <div class="flex items-center gap-3">
        <span class="text-accent animate-pulse font-bold">✓</span>
        <p class="text-body text-content mb-0 font-medium">Mensaje enviado exitosamente. Te contactaremos pronto.</p>
        <button aria-label="Cerrar confirmación" @click="showSuccess = false" class="ml-4 text-subdued hover:text-content transition-colors">
          <X class="w-4 h-4" />
        </button>
      </div>
    </div>

    <div v-if="showError" role="alert"
      class="fixed top-24 right-4 z-50 rounded-xl bg-panel p-4 border border-red-500/30 shadow-[0_8px_32px_rgba(239,68,68,0.2)]">
      <div class="flex items-center gap-3">
        <span class="text-red-500 font-bold">!</span>
        <p class="text-body text-red-400 mb-0 font-medium">{{ errorMessage }}</p>
        <button aria-label="Cerrar error" @click="showError = false" class="ml-4 text-subdued hover:text-content transition-colors">
          <X class="w-4 h-4" />
        </button>
      </div>
    </div>

    <div class="relative z-10 w-[90%] max-w-[1200px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

        <!-- Contenedor del Formulario (Col-span-3) -->
        <div class="lg:col-span-3 relative" v-reveal data-delay="0">
          <!-- Glassmorphism Card -->
          <div
            class="relative p-8 lg:p-12 rounded-[2rem] border border-line bg-panel shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <div class="mb-10">
              <h2 class="text-h2 font-extrabold text-content mb-3 tracking-tight">
                Cuéntanos tu idea.
              </h2>
              <p class="text-subdued text-body">Nuestros ingenieros revisarán tus requerimientos y te contactarán a la
                brevedad.</p>
            </div>

            <form @submit="submitForm" class="space-y-8 flex flex-col">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Inputs premium -->
                <div class="space-y-2">
                  <label for="contact-name" class="text-bodyall font-semibold uppercase tracking-wider text-subdued">Nombre</label>
                  <input id="contact-name" name="name" autocomplete="name" minlength="2" maxlength="255" v-model="form.name" type="text" required placeholder="Tu nombre"
                    class="w-full bg-quiet border border-line rounded-xl px-4 py-3.5 text-content placeholder-subdued focus:outline-none focus:border-accent/50 focus:bg-panel transition-all duration-300">
                </div>
                <div class="space-y-2">
                  <label for="contact-email" class="text-bodyall font-semibold uppercase tracking-wider text-subdued">Email *</label>
                  <input id="contact-email" name="email" autocomplete="email" maxlength="255" v-model="form.email" type="email" required placeholder="tu@email.com"
                    class="w-full bg-quiet border border-line rounded-xl px-4 py-3.5 text-content placeholder-subdued focus:outline-none focus:border-accent/50 focus:bg-panel transition-all duration-300">
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="contact-company" class="text-bodyall font-semibold uppercase tracking-wider text-subdued">Empresa
                    (Opcional)</label>
                  <input id="contact-company" name="company" autocomplete="organization" maxlength="255" v-model="form.company" type="text" placeholder="Tu empresa"
                    class="w-full bg-quiet border border-line rounded-xl px-4 py-3.5 text-content placeholder-subdued focus:outline-none focus:border-accent/50 focus:bg-panel transition-all duration-300">
                </div>
                <div class="space-y-2 hidden">
                  <!-- Invisible phone field to keep the model intact if backend requires it but we don't force it -->
                  <input v-model="form.phone" type="tel">
                </div>
                <div class="space-y-2">
                  <label for="contact-subject" class="text-bodyall font-semibold uppercase tracking-wider text-subdued">Asunto *</label>
                  <input id="contact-subject" name="subject" minlength="5" maxlength="255" v-model="form.subject" type="text" required placeholder="¿En qué te podemos ayudar?"
                    class="w-full bg-quiet border border-line rounded-xl px-4 py-3.5 text-content placeholder-subdued focus:outline-none focus:border-accent/50 focus:bg-panel transition-all duration-300">
                </div>
              </div>

              <div class="space-y-2">
                <label for="contact-message" class="text-bodyall font-semibold uppercase tracking-wider text-subdued">Detalles del Proyecto
                  *</label>
                <textarea id="contact-message" name="message" minlength="10" maxlength="2000" v-model="form.message" rows="4" required placeholder="¿Qué te gustaría construir?"
                  class="w-full bg-quiet border border-line rounded-xl px-4 py-3.5 text-content placeholder-subdued focus:outline-none focus:border-accent/50 focus:bg-panel transition-all duration-300 resize-y min-h-[120px]"></textarea>
              </div>

              <!-- Consentimiento de datos personales -->
              <div class="space-y-2">
                <label class="flex items-start gap-3 cursor-pointer select-none">
                  <input v-model="form.consent" type="checkbox" required class="mt-1 w-4 h-4 rounded border-line bg-quiet accent-accent">
                  <span class="text-body text-subdued leading-relaxed">
                    Acepto que mis datos personales sean tratados de acuerdo a la
                    <NuxtLink to="/privacidad" class="text-accent underline hover:text-accent transition-colors">Política de Privacidad</NuxtLink>
                    y autorizo a Sysifos a contactarme sobre mi consulta. Puedo ejercer mis derechos de acceso, rectificación, cancelación y oposición cuando lo desee.
                  </span>
                </label>
              </div>

              <button type="submit" :disabled="isSubmitting"
                class="w-full py-4 mt-2 rounded-xl bg-accent text-action font-bold text-body hover:bg-quiet hover:text-content transition-colors flex items-center justify-center group"
                :class="isSubmitting ? 'opacity-50 cursor-not-allowed' : ''">
                {{ isSubmitting ? 'Enviando...' : 'Comenzar colaboración' }}
                <Send v-if="!isSubmitting" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <!-- Info Section (Col-span-2) -->
        <div class="lg:col-span-2 flex flex-col justify-center gap-8" v-reveal data-delay="150">
          <div class="mb-4">
            <h3 class="text-h3 font-bold text-content mb-2">Siempre a tu alcance.</h3>
            <p class="text-body text-subdued leading-relaxed">Respondemos en menos de 24 hrs. Trabajamos de manera remota
              con empresas en todo Chile y Latinoamérica, creando plataformas escalables y confiables.</p>
          </div>

          <div class="space-y-8">
            <div class="flex items-center gap-4 group">
              <div
                class="w-12 h-12 rounded-full border border-line bg-panel flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors flex-shrink-0">
                <Mail class="w-5 h-5 text-accent" />
              </div>
              <div>
                <p class="text-bodyall font-bold uppercase tracking-wider text-subdued mb-1">Email Directo</p>
                <a href="mailto:contacto@sysifosweb.cl" class="text-body text-content font-medium underline">contacto@sysifosweb.cl</a>
              </div>
            </div>

            <div class="flex items-center gap-4 group">
              <div
                class="w-12 h-12 rounded-full border border-line bg-panel flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-colors flex-shrink-0">
                <Clock class="w-5 h-5 text-accent" />
              </div>
              <div>
                <p class="text-bodyall font-bold uppercase tracking-wider text-subdued mb-1">Soporte y Respuesta</p>
                <p class="text-body text-content font-medium">Lun - Vie, 09:00 a 18:00 hrs</p>
              </div>
            </div>
          </div>

          <div class="pt-6 border-t border-line">
            <!-- WhatsApp CTA -->
            <a href="https://wa.me/56985021549" target="_blank"
              rel="noopener noreferrer"
              class="whatsapp-card block w-full p-6 rounded-2xl border border-line bg-panel group">
              <div class="flex justify-between items-center mb-2">
                <h4 class="text-content font-bold text-body flex items-center gap-2">
                  <MessageSquare class="whatsapp-card__icon w-5 h-5" /> WhatsApp
                </h4>
                <span
                  class="whatsapp-card__action text-small font-bold">Abrir
                  chat <span class="whatsapp-card__arrow" aria-hidden="true">&rarr;</span></span>
              </div>
              <p class="text-small text-subdued">¿Prefieres un mensaje rápido? Escríbenos y conversemos directamente.</p>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
input, textarea { font-size: var(--fs-body); line-height: var(--lh-body); }
.whatsapp-card { transition: background-color .25s ease, border-color .25s ease, box-shadow .25s ease, transform .25s ease; }
.whatsapp-card__icon, .whatsapp-card__action { color: #16803d; }
.whatsapp-card__action { display: inline-flex; align-items: center; }
.whatsapp-card:hover, .whatsapp-card:focus-visible {
  background-color: #25D366;
  border-color: #25D366;
  box-shadow: 0 12px 28px rgba(37, 211, 102, .2);
}
.whatsapp-card:hover :is(h4, p, span, svg),
.whatsapp-card:focus-visible :is(h4, p, span, svg) { color: #102B46; }
.whatsapp-card:focus-visible { outline: 3px solid #102B46; outline-offset: 4px; }
.whatsapp-card__arrow { display: inline-block; margin-left: .35rem; transition: transform .25s ease; }
@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .whatsapp-card:hover, .whatsapp-card:focus-visible { transform: translateY(-4px); }
  .whatsapp-card:hover .whatsapp-card__arrow, .whatsapp-card:focus-visible .whatsapp-card__arrow { transform: translateX(3px); }
}
@media (max-width: 400px) {
  .whatsapp-card > div { flex-wrap: wrap; gap: .5rem; }
}
</style>
