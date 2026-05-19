<script setup>
import { ref, reactive } from 'vue'
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, X, ExternalLink } from 'lucide-vue-next'

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
  <section class="relative bg-section-dark py-20 lg:py-32 overflow-hidden border-b border-white/5">
    
    <!-- Ambient glows -->
    <div class="absolute rounded-full pointer-events-none blur-[120px] w-[500px] h-[500px] bg-sky-400 opacity-5 -top-40 -left-40"></div>
    <div class="absolute rounded-full pointer-events-none blur-[120px] w-[400px] h-[400px] bg-indigo-500 opacity-5 top-[30%] -right-20"></div>

    <!-- Alertas -->
    <div v-if="showSuccess" class="fixed top-24 right-4 z-50 rounded-xl bg-[#0b1222] p-4 border border-accent/30 shadow-[0_8px_32px_rgba(56,189,248,0.2)]">
      <div class="flex items-center gap-3">
        <span class="text-accent animate-pulse font-bold">✓</span>
        <p class="text-sm text-white/80 mb-0 font-medium">Mensaje enviado exitosamente. Te contactaremos pronto.</p>
        <button @click="showSuccess = false" class="ml-4 text-white/40 hover:text-white transition-colors"><X class="w-4 h-4"/></button>
      </div>
    </div>

    <div v-if="showError" class="fixed top-24 right-4 z-50 rounded-xl bg-[#0b1222] p-4 border border-red-500/30 shadow-[0_8px_32px_rgba(239,68,68,0.2)]">
      <div class="flex items-center gap-3">
        <span class="text-red-500 font-bold">!</span>
        <p class="text-sm text-red-400 mb-0 font-medium">{{ errorMessage }}</p>
        <button @click="showError = false" class="ml-4 text-white/40 hover:text-white transition-colors"><X class="w-4 h-4"/></button>
      </div>
    </div>

    <div class="relative z-10 w-[90%] max-w-[1200px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        
        <!-- Contenedor del Formulario (Col-span-3) -->
        <div class="lg:col-span-3 relative" v-reveal data-delay="0">
          <!-- Glassmorphism Card -->
          <div class="relative p-8 lg:p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <div class="mb-10">
              <h2 class="text-3xl font-extrabold text-white mb-3 tracking-tight">
                Cuéntanos tu idea.
              </h2>
              <p class="text-white/60 text-sm">Nuestros ingenieros revisarán tus requerimientos y te contactarán a la brevedad.</p>
            </div>

            <form @submit="submitForm" class="space-y-8 flex flex-col">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Inputs premium -->
                <div class="space-y-2">
                  <label class="text-[0.7rem] font-semibold uppercase tracking-wider text-white/50">Nombre</label>
                  <input v-model="form.name" type="text" required placeholder="Tu nombre" class="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-black/40 transition-all duration-300">
                </div>
                <div class="space-y-2">
                  <label class="text-[0.7rem] font-semibold uppercase tracking-wider text-white/50">Email *</label>
                  <input v-model="form.email" type="email" required placeholder="tu@email.com" class="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-black/40 transition-all duration-300">
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-[0.7rem] font-semibold uppercase tracking-wider text-white/50">Empresa (Opcional)</label>
                    <input v-model="form.company" type="text" placeholder="Tu empresa" class="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-black/40 transition-all duration-300">
                  </div>
                  <div class="space-y-2 hidden">
                    <!-- Invisible phone field to keep the model intact if backend requires it but we don't force it -->
                    <input v-model="form.phone" type="tel">
                  </div>
                  <div class="space-y-2">
                    <label class="text-[0.7rem] font-semibold uppercase tracking-wider text-white/50">Asunto *</label>
                    <input v-model="form.subject" type="text" required placeholder="¿En qué te podemos ayudar?" class="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-black/40 transition-all duration-300">
                  </div>
              </div>

              <div class="space-y-2">
                <label class="text-[0.7rem] font-semibold uppercase tracking-wider text-white/50">Detalles del Proyecto *</label>
                <textarea v-model="form.message" rows="4" required placeholder="¿Qué te gustaría construir?" class="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-sky-400/50 focus:bg-black/40 transition-all duration-300 resize-y min-h-[120px]"></textarea>
              </div>

              <button type="submit" :disabled="isSubmitting" class="w-full py-4 mt-2 rounded-xl bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center group" :class="isSubmitting ? 'opacity-50 cursor-not-allowed' : ''">
                  {{ isSubmitting ? 'Enviando...' : 'Comenzar colaboración' }} 
                  <Send v-if="!isSubmitting" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <!-- Info Section (Col-span-2) -->
        <div class="lg:col-span-2 flex flex-col justify-center gap-8" v-reveal data-delay="150">
            <div class="mb-4">
                <h3 class="text-2xl font-bold text-white mb-2">Siempre a tu alcance.</h3>
                <p class="text-sm text-white/60 leading-relaxed">Respondemos en menos de 24 hrs. Trabajamos de manera remota con empresas en todo Chile y Latinoamérica, creando plataformas escalables y confiables.</p>
            </div>
            
            <div class="space-y-8">
                <div class="flex items-center gap-4 group">
                    <div class="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-sky-400/50 group-hover:bg-sky-400/10 transition-colors flex-shrink-0">
                        <Mail class="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                        <p class="text-[0.65rem] font-bold uppercase tracking-wider text-white/40 mb-1">Email Directo</p>
                        <p class="text-sm text-white font-medium">contacto@sysifosweb.cl</p>
                    </div>
                </div>

                <div class="flex items-center gap-4 group">
                    <div class="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-indigo-400/50 group-hover:bg-indigo-400/10 transition-colors flex-shrink-0">
                        <Clock class="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                        <p class="text-[0.65rem] font-bold uppercase tracking-wider text-white/40 mb-1">Soporte y Respuesta</p>
                        <p class="text-sm text-white font-medium">Lun - Vie, 09:00 a 18:00 hrs</p>
                    </div>
                </div>
            </div>

            <div class="pt-6 border-t border-white/5">
                <!-- WhatsApp CTA -->
                <a href="https://wa.me/56949109970" target="_blank" class="block w-full p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all group">
                    <div class="flex justify-between items-center mb-2">
                        <h4 class="text-white font-bold text-sm flex items-center gap-2">
                            <MessageSquare class="w-4 h-4 text-green-400" /> WhatsApp
                        </h4>
                        <span class="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold uppercase tracking-wider">Abrir chat &rarr;</span>
                    </div>
                    <p class="text-xs text-white/50">¿Prefieres un mensaje rápido? Escríbenos y conversemos directamente.</p>
                </a>
            </div>
        </div>

      </div>
    </div>
  </section>
</template>
