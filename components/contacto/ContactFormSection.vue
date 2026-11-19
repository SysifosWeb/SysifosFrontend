<script setup>
import { ref, reactive, computed } from 'vue'
import { Mail, Clock, MessageSquare, Send, X, CheckCircle2, AlertCircle } from 'lucide-vue-next'

const config = useRuntimeConfig()
const route = useRoute()

const planLabels = {
  'landing-express': 'Cotización: Landing Express (desde $200.000 + IVA)',
  'captacion-web': 'Cotización: Sistema de Captación Web (desde $350.000 + IVA)',
  'web-flujo-comercial': 'Cotización: Web + Flujo Comercial / Agenda ($590.000 - $650.000 + IVA)',
  'automatizacion-flujo': 'Evaluación: Automatización e Integraciones (desde $450.000 + IVA)',
  'ecommerce-estandar': 'Cotización: E-commerce Estándar (desde $650.000 + IVA)',
  'continuidad-mensual': 'Solicitud: Plan Continuidad & Soporte ($49.000 - $89.000/mes + IVA)',
  'software-a-medida': 'Diagnóstico: Software a medida / Piloto Control de Asistencia'
}

const selectedPlan = computed(() => {
  const raw = route.query.plan
  return typeof raw === 'string' && raw in planLabels ? raw : null
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: selectedPlan.value ? planLabels[selectedPlan.value] : '',
  message: '',
  consent: false
})

const trackWhatsAppClick = () => {
  if (typeof window !== 'undefined' && window.SysifosConsent) {
    window.SysifosConsent.track('generate_lead', {
      method: 'whatsapp',
      origin: 'contact_page',
      plan: selectedPlan.value || 'general'
    })
  }
}

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
        source: 'contact_form',
        plan: selectedPlan.value
      })
    })

    const data = await response.json()
    if (response.ok) {
      if (window.SysifosConsent) {
        window.SysifosConsent.track('generate_lead', { method: 'contact_form' })
      }
      showSuccess.value = true
      form.name = ''
      form.email = ''
      form.phone = ''
      form.company = ''
      form.subject = ''
      form.message = ''
      form.consent = false
      setTimeout(() => { showSuccess.value = false }, 5000)
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
  <section class="contact-section bg-section-dark border-b border-line">

    <!-- Alertas -->
    <div v-if="showSuccess" role="status" aria-live="polite"
      class="toast-notice toast-notice--success">
      <CheckCircle2 class="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
      <p class="text-body text-content mb-0 font-medium">Mensaje enviado. Te responderemos en menos de 24 horas hábiles.</p>
      <button aria-label="Cerrar confirmación" @click="showSuccess = false" class="ml-2 text-subdued hover:text-content transition-colors">
        <X class="w-4 h-4" />
      </button>
    </div>

    <div v-if="showError" role="alert"
      class="toast-notice toast-notice--error">
      <AlertCircle class="w-5 h-5 text-red-500 shrink-0" aria-hidden="true" />
      <p class="text-body text-content mb-0 font-medium">{{ errorMessage }}</p>
      <button aria-label="Cerrar error" @click="showError = false" class="ml-2 text-subdued hover:text-content transition-colors">
        <X class="w-4 h-4" />
      </button>
    </div>

    <div class="section-container">
      <div class="contact-grid">

        <!-- Contenedor del Formulario -->
        <div class="contact-form-panel" v-reveal data-delay="0">
          <div class="mb-8">
            <h2 class="text-h2 font-bold text-content mb-2 tracking-tight">
              Cuéntanos qué necesitas resolver.
            </h2>
            <p class="text-subdued text-body m-0">
              Cada solicitud queda respaldada en nuestro sistema y la revisamos directamente Osman y el equipo técnico.
            </p>
          </div>

          <form @submit="submitForm" class="space-y-6 flex flex-col">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="space-y-2">
                <label for="contact-name" class="field-label">Nombre *</label>
                <input id="contact-name" name="name" autocomplete="name" minlength="2" maxlength="255" v-model="form.name" type="text" required placeholder="Tu nombre"
                  class="field-input">
              </div>
              <div class="space-y-2">
                <label for="contact-email" class="field-label">Email *</label>
                <input id="contact-email" name="email" autocomplete="email" maxlength="255" v-model="form.email" type="email" required placeholder="tu@empresa.cl"
                  class="field-input">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div class="space-y-2">
                <label for="contact-company" class="field-label">Empresa (Opcional)</label>
                <input id="contact-company" name="company" autocomplete="organization" maxlength="255" v-model="form.company" type="text" placeholder="Nombre de tu empresa"
                  class="field-input">
              </div>
              <div class="space-y-2 hidden">
                <input v-model="form.phone" type="tel">
              </div>
              <div class="space-y-2">
                <label for="contact-subject" class="field-label">Asunto *</label>
                <input id="contact-subject" name="subject" minlength="5" maxlength="255" v-model="form.subject" type="text" required placeholder="Ej. Sistema de Captación Web"
                  class="field-input">
              </div>
            </div>

            <div class="space-y-2">
              <label for="contact-message" class="field-label">Detalles del proyecto *</label>
              <textarea id="contact-message" name="message" minlength="10" maxlength="2000" v-model="form.message" rows="4" required placeholder="Cuéntanos brevemente tu rubro, cómo recibes consultas hoy y qué te gustaría mejorar."
                class="field-input resize-y min-h-[120px]"></textarea>
            </div>

            <!-- Consentimiento de datos personales -->
            <div class="space-y-2">
              <label class="flex items-start gap-3 cursor-pointer select-none">
                <input v-model="form.consent" type="checkbox" required class="mt-1 w-4 h-4 rounded border-line bg-quiet accent-accent">
                <span class="text-small text-subdued leading-relaxed">
                  Acepto que mis datos personales sean tratados de acuerdo a la
                  <NuxtLink to="/privacidad" class="text-accent underline hover:text-accent transition-colors">Política de Privacidad</NuxtLink>
                  y autorizo a SysifosWeb a contactarme sobre mi consulta.
                </span>
              </label>
            </div>

            <button type="submit" :disabled="isSubmitting"
              class="btn btn-primary w-full py-4 justify-center"
              :class="isSubmitting ? 'opacity-50 cursor-not-allowed' : ''">
              {{ isSubmitting ? 'Enviando solicitud...' : 'Enviar solicitud de diagnóstico' }}
              <Send v-if="!isSubmitting" class="w-4 h-4" aria-hidden="true" />
            </button>
          </form>
        </div>

        <!-- Info Section -->
        <aside class="contact-aside" v-reveal data-delay="100">
          <div>
            <h3 class="text-h3 font-bold text-content mb-2">Respuesta directa, sin intermediarios.</h3>
            <p class="text-body text-subdued leading-relaxed m-0">
              Trabajamos desde la Región de Coquimbo con empresas de todo Chile. Respondemos en menos de 24 horas hábiles.
            </p>
          </div>

          <dl class="contact-info-list">
            <div class="contact-info-row">
              <dt>
                <Mail class="w-4 h-4 text-accent" aria-hidden="true" />
                Email directo
              </dt>
              <dd>
                <a href="mailto:contacto@sysifosweb.cl" class="text-body text-content font-medium underline">contacto@sysifosweb.cl</a>
              </dd>
            </div>

            <div class="contact-info-row">
              <dt>
                <Clock class="w-4 h-4 text-accent" aria-hidden="true" />
                Horario de atención
              </dt>
              <dd class="text-body text-content font-medium">Lun - Vie, 09:00 a 18:00 hrs (Chile)</dd>
            </div>
          </dl>

          <div class="pt-4">
            <a href="https://wa.me/56985021549" target="_blank"
              rel="noopener noreferrer"
              @click="trackWhatsAppClick"
              class="whatsapp-card block w-full p-6 rounded-2xl border border-line bg-panel group">
              <div class="flex justify-between items-center mb-2">
                <h4 class="text-content font-bold text-body flex items-center gap-2 m-0">
                  <MessageSquare class="whatsapp-card__icon w-5 h-5" aria-hidden="true" /> WhatsApp
                </h4>
                <span class="whatsapp-card__action text-small font-bold">
                  Abrir chat <span class="whatsapp-card__arrow" aria-hidden="true">&rarr;</span>
                </span>
              </div>
              <p class="text-small text-subdued m-0">¿Prefieres un mensaje rápido? Escríbenos y conversemos directamente.</p>
            </a>
          </div>
        </aside>

      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  padding: clamp(3rem, 6vw, 5rem) 0 clamp(4.5rem, 8vw, 7rem);
}

.section-container {
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2.5rem, 5vw, 4.5rem);
  align-items: start;
}

.contact-form-panel {
  padding: clamp(1.75rem, 4vw, 3rem);
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
  background: var(--bg-surface);
  box-shadow: 0 18px 44px rgba(16, 43, 70, 0.08);
}

.field-label {
  display: block;
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 700;
  color: var(--text-main);
}

.field-input {
  width: 100%;
  background: var(--bg-dark);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0.85rem 1rem;
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  color: var(--text-main);
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.field-input::placeholder {
  color: var(--text-muted);
  opacity: 0.85;
}

.field-input:focus {
  outline: none;
  border-color: var(--accent);
  background: var(--bg-surface);
}

.contact-aside {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-info-list {
  margin: 0;
  border-top: 1px solid var(--border);
}

.contact-info-row {
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border);
}

.contact-info-row dt {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-heading);
  font-size: var(--fs-small);
  font-weight: 700;
  color: var(--text-secondary);
  margin-bottom: 0.3rem;
}

.contact-info-row dd {
  margin: 0;
}

.toast-notice {
  position: fixed;
  top: 6rem;
  right: 1rem;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: var(--radius-md);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  box-shadow: 0 12px 32px rgba(16, 43, 70, 0.16);
}

.toast-notice--success {
  border-color: var(--accent);
}

.toast-notice--error {
  border-color: #dc2626;
}

.whatsapp-card {
  transition: background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}
.whatsapp-card__icon, .whatsapp-card__action { color: #16803d; }
.whatsapp-card__action { display: inline-flex; align-items: center; }
.whatsapp-card:hover, .whatsapp-card:focus-visible {
  background-color: #25D366;
  border-color: #25D366;
  box-shadow: 0 12px 28px rgba(37, 211, 102, 0.2);
}
.whatsapp-card:hover :is(h4, p, span, svg),
.whatsapp-card:focus-visible :is(h4, p, span, svg) { color: #102B46; }
.whatsapp-card:focus-visible { outline: 3px solid #102B46; outline-offset: 4px; }
.whatsapp-card__arrow { display: inline-block; margin-left: 0.35rem; transition: transform 0.25s ease; }

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .whatsapp-card:hover, .whatsapp-card:focus-visible { transform: translateY(-3px); }
  .whatsapp-card:hover .whatsapp-card__arrow, .whatsapp-card:focus-visible .whatsapp-card__arrow { transform: translateX(3px); }
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: minmax(0, 1.45fr) minmax(0, 0.9fr);
  }
}

@media (max-width: 400px) {
  .whatsapp-card > div { flex-wrap: wrap; gap: 0.5rem; }
}
</style>
