<script setup>
import { ref, reactive } from 'vue'
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, X } from 'lucide-vue-next'

const config = useRuntimeConfig()

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: ''
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
    setTimeout(() => showError.value = false, 5000)
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errorMessage.value = 'El formato de email no es válido.'
    showError.value = true
    setTimeout(() => showError.value = false, 5000)
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
        message: form.message
      })
    })

    const data = await response.json()
    if (response.ok) {
      showSuccess.value = true
      form.name = ''
      form.email = ''
      form.phone = ''
      form.company = ''
      form.subject = ''
      form.message = ''
      setTimeout(() => showSuccess.value = false, 5000)
    } else {
      errorMessage.value = data.message || 'Hubo un error al enviar tu mensaje.'
      showError.value = true
      setTimeout(() => showError.value = false, 5000)
    }
  } catch (error) {
    errorMessage.value = 'Error de conexión. Intenta nuevamente.'
    showError.value = true
    setTimeout(() => showError.value = false, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="relative bg-section-surface py-20 lg:py-28 overflow-hidden border-b border-white/5">
    
    <div class="section-glow-purple glow-top-left"></div>
    
    <!-- Alertas -->
    <div v-if="showSuccess" class="fixed top-24 right-4 z-50 card-border bg-section-surface p-4 border-accent/50 shadow-2xl">
      <div class="flex items-center gap-3">
        <span class="text-accent animate-pulse">✓</span>
        <p class="card-text text-sm mb-0">Mensaje enviado exitosamente. Te contactaremos pronto.</p>
        <button @click="showSuccess = false" class="ml-4 text-muted hover:text-white transition-colors"><X class="w-4 h-4"/></button>
      </div>
    </div>

    <div v-if="showError" class="fixed top-24 right-4 z-50 card-border bg-section-surface p-4 border-red-500/50 shadow-2xl">
      <div class="flex items-center gap-3">
        <span class="text-red-500 font-bold">!</span>
        <p class="text-sm text-red-400 mb-0">{{ errorMessage }}</p>
        <button @click="showError = false" class="ml-4 text-muted hover:text-white transition-colors"><X class="w-4 h-4"/></button>
      </div>
    </div>

    <div class="section-container relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        <!-- Contenedor del Formulario -->
        <div class="card-elevated p-8 lg:p-12 relative flex flex-col">
          <div class="mb-10">
            <h2 class="card-title text-3xl mb-3">
              Déjanos un mensaje.
            </h2>
            <p class="card-text text-sm">Completa el formulario y responderemos en breve.</p>
          </div>

          <form @submit="submitForm" class="space-y-6 flex-grow flex flex-col">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="input-group">
                <label>Nombre Completo *</label>
                <input v-model="form.name" type="text" required placeholder="Tu nombre">
              </div>
              <div class="input-group">
                <label>Email *</label>
                <input v-model="form.email" type="email" required placeholder="tu@email.com">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="input-group">
                <label>Teléfono</label>
                <input v-model="form.phone" type="tel" placeholder="+56 9...">
              </div>
              <div class="input-group">
                <label>Empresa</label>
                <input v-model="form.company" type="text" placeholder="Opcional">
              </div>
            </div>

            <div class="input-group">
              <label>Asunto *</label>
              <input v-model="form.subject" type="text" required placeholder="¿En qué te podemos ayudar?">
            </div>

            <div class="input-group flex-grow flex flex-col">
              <label>Mensaje *</label>
              <textarea v-model="form.message" rows="5" required placeholder="Detalles de tu proyecto..." class="flex-grow"></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting" class="cta-primary-btn w-full justify-center mt-auto" :class="isSubmitting ? 'opacity-50 cursor-not-allowed' : ''">
                {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }} 
                <Send v-if="!isSubmitting" class="w-4 h-4 ml-2" />
            </button>
          </form>
        </div>

        <!-- Info Section -->
        <div class="flex flex-col gap-8">
            <div class="card-border bg-section-dark p-8 lg:p-12 relative flex flex-col justify-center h-full">
                <h3 class="card-title text-xl mb-8">Información de Contacto</h3>
                
                <div class="space-y-8">
                    <div class="flex items-start gap-5 group">
                        <div class="w-12 h-12 rounded-xl border border-white/10 bg-section-surface flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all flex-shrink-0">
                            <Mail class="w-5 h-5 text-accent" />
                        </div>
                        <div class="pt-1">
                            <p class="text-xs font-semibold uppercase tracking-wider text-muted mb-1">Email</p>
                            <p class="text-sm text-white font-medium">contacto@sysifosweb.cl</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-5 group">
                        <div class="w-12 h-12 rounded-xl border border-white/10 bg-section-surface flex items-center justify-center group-hover:border-purple/50 group-hover:bg-purple/5 transition-all flex-shrink-0">
                            <Phone class="w-5 h-5 text-purple" />
                        </div>
                        <div class="pt-1">
                            <p class="text-xs font-semibold uppercase tracking-wider text-muted mb-1">Teléfono</p>
                            <p class="text-sm text-white font-medium">+56 9 4910 9970</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-5 group">
                        <div class="w-12 h-12 rounded-xl border border-white/10 bg-section-surface flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all flex-shrink-0">
                            <MapPin class="w-5 h-5 text-accent" />
                        </div>
                        <div class="pt-1">
                            <p class="text-xs font-semibold uppercase tracking-wider text-muted mb-1">Ubicación</p>
                            <p class="text-sm text-white font-medium">Coquimbo, Chile</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-5 group">
                        <div class="w-12 h-12 rounded-xl border border-white/10 bg-section-surface flex items-center justify-center group-hover:border-purple/50 group-hover:bg-purple/5 transition-all flex-shrink-0">
                            <Clock class="w-5 h-5 text-purple" />
                        </div>
                        <div class="pt-1">
                            <p class="text-xs font-semibold uppercase tracking-wider text-muted mb-1">Horario</p>
                            <p class="text-sm text-white font-medium">Lun - Vie: 09:00 - 18:00 hrs</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- WhatsApp CTA -->
            <a href="https://wa.me/56949109970" target="_blank" class="card-border bg-[#111827] border-green-500/30 p-8 hover:bg-green-500/10 hover:border-green-500/50 transition-all flex items-center justify-between group shadow-xl">
                <div>
                    <h4 class="text-white font-semibold mb-1 flex items-center gap-2">
                        <MessageSquare class="w-5 h-5 text-green-500" /> WhatsApp
                    </h4>
                    <p class="text-sm text-muted">Contáctanos directamente</p>
                </div>
                <div class="w-10 h-10 rounded-full border border-green-500/50 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <ExternalLink class="w-4 h-4 text-green-500" />
                </div>
            </a>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.section-container {
  position: relative;
  z-index: 10;
  width: 90%;
  max-width: 1340px;
  margin: 0 auto;
}

.glow-top-left {
  width: 500px;
  height: 500px;
  top: -100px;
  left: -200px;
}

/* Forms */
.input-group label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.input-group input,
.input-group textarea {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: 0.875rem 1rem;
  color: white;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.input-group input:focus,
.input-group textarea:focus {
  outline: none;
  border-color: rgba(56, 189, 248, 0.5);
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.1);
}

.input-group input::placeholder,
.input-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.2);
}

.input-group textarea {
  resize: vertical;
  min-height: 120px;
}
</style>
