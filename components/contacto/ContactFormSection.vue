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
    errorMessage.value = 'ERR_01: CAMPOS_REQUERIDOS_VACIOS'
    showError.value = true
    setTimeout(() => showError.value = false, 5000)
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errorMessage.value = 'ERR_02: FORMATO_EMAIL_INVALIDO'
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
      errorMessage.value = data.message || 'ERR_500: FALLA_DE_COMUNICACION_SERVIDOR'
      showError.value = true
      setTimeout(() => showError.value = false, 5000)
    }
  } catch (error) {
    errorMessage.value = 'ERR_503: CONEXION_INTERRUMPIDA'
    showError.value = true
    setTimeout(() => showError.value = false, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="relative bg-[#0a0e17] py-24 overflow-hidden border-b border-white/5">
    <CircuitBackground />
    
    <!-- Alerta Éxito -->
    <div v-if="showSuccess" class="fixed top-24 right-4 z-50 bg-[#0c121e]/90 backdrop-blur-md border border-[#00f2ff]/50 p-4 shadow-[0_0_20px_rgba(0,242,255,0.2)]">
      <div class="flex items-center gap-3">
        <span class="text-[#00f2ff] animate-pulse">>></span>
        <p class="text-white font-mono text-[15px]">SYS_MSG: DATOS_ENVIADOS_EXITOSAMENTE</p>
        <button @click="showSuccess = false" class="ml-4 text-gray-300 hover:text-[#00f2ff]"><X class="w-4 h-4"/></button>
      </div>
    </div>

    <!-- Alerta Error -->
    <div v-if="showError" class="fixed top-24 right-4 z-50 bg-[#1a0f14]/90 backdrop-blur-md border border-red-500/50 p-4 shadow-[0_0_20px_rgba(255,0,0,0.2)]">
      <div class="flex items-center gap-3">
        <span class="text-red-500 animate-pulse">>></span>
        <p class="text-red-400 font-mono text-[15px]">{{ errorMessage }}</p>
        <button @click="showError = false" class="ml-4 text-gray-300 hover:text-red-500"><X class="w-4 h-4"/></button>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        <!-- Contenedor del Formulario -->
        <div class="bg-[#0a0e17]/80 backdrop-blur-[6px] border border-white/[0.05] p-8 lg:p-12 relative group shadow-2xl">
          <div class="absolute top-0 left-0 w-1/4 h-[2px] bg-gradient-to-r from-[#00f2ff] to-transparent"></div>
          <div class="absolute top-4 right-4 text-[14px] font-mono text-[#00f2ff]/20">[ TX_MODULE ]</div>

          <div class="mb-10">
            <h2 class="text-3xl font-bold font-tech text-white uppercase tracking-tighter mb-4">
              Transmisión de <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Datos.</span>
            </h2>
            <p class="text-gray-300 font-mono text-[14px]">> INGRESE_PARAMETROS_DEL_PROYECTO</p>
          </div>

          <form @submit="submitForm" class="space-y-6 font-mono">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-[14px] text-[#00f2ff] mb-2 uppercase tracking-widest">Nombre_Operador *</label>
                <input v-model="form.name" type="text" required class="w-full bg-[#0c121e] border border-white/10 px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#00f2ff]/50 transition-colors placeholder:text-gray-300" placeholder="[INGRESAR NOMBRE]">
              </div>
              <div>
                <label class="block text-[14px] text-[#00f2ff] mb-2 uppercase tracking-widest">Enlace_Comunicaciones *</label>
                <input v-model="form.email" type="email" required class="w-full bg-[#0c121e] border border-white/10 px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#00f2ff]/50 transition-colors placeholder:text-gray-300" placeholder="[INGRESAR EMAIL]">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-[14px] text-gray-300 mb-2 uppercase tracking-widest">Frecuencia_Voz</label>
                <input v-model="form.phone" type="tel" class="w-full bg-[#0c121e] border border-white/10 px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#00f2ff]/50 transition-colors placeholder:text-gray-300" placeholder="[TEL OPCIONAL]">
              </div>
              <div>
                <label class="block text-[14px] text-gray-300 mb-2 uppercase tracking-widest">Designacion_Corporativa</label>
                <input v-model="form.company" type="text" class="w-full bg-[#0c121e] border border-white/10 px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#00f2ff]/50 transition-colors placeholder:text-gray-300" placeholder="[EMPRESA OPCIONAL]">
              </div>
            </div>

            <div>
              <label class="block text-[14px] text-[#00f2ff] mb-2 uppercase tracking-widest">Vector_Asunto *</label>
              <input v-model="form.subject" type="text" required class="w-full bg-[#0c121e] border border-white/10 px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#00f2ff]/50 transition-colors placeholder:text-gray-300" placeholder="[MOTIVO DE TRANSMISION]">
            </div>

            <div>
              <label class="block text-[14px] text-[#00f2ff] mb-2 uppercase tracking-widest">Paquete_de_Datos *</label>
              <textarea v-model="form.message" rows="5" required class="w-full bg-[#0c121e] border border-white/10 px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#00f2ff]/50 transition-colors placeholder:text-gray-300 resize-none" placeholder="[DESCRIPCION DETALLADA DE LA OPERACION]"></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting" class="group relative w-full inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] font-bold uppercase tracking-[0.2em] text-[14px] overflow-hidden transition-all hover:bg-[#00f2ff] hover:text-[#0a0e17] hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed">
              <span class="relative z-10 flex items-center gap-2">
                {{ isSubmitting ? 'ENCRIPTANDO_Y_ENVIANDO...' : 'INICIAR_TRANSMISION' }} 
                <Send v-if="!isSubmitting" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </form>
        </div>

        <!-- Info Section -->
        <div class="flex flex-col gap-8">
            <div class="bg-[#0a0e17]/80 backdrop-blur-[6px] border border-white/[0.05] p-8 relative group shadow-2xl">
                <div class="absolute top-0 right-0 w-1/4 h-[2px] bg-gradient-to-l from-[#00f2ff] to-transparent"></div>
                <h3 class="text-xl font-bold font-sans text-white uppercase tracking-widest mb-8">Nodos de Contacto</h3>
                
                <div class="space-y-6">
                    <div class="flex items-center gap-4 group/item">
                        <div class="w-12 h-12 border border-white/10 bg-[#0c121e] flex items-center justify-center group-hover/item:border-[#00f2ff]/50 group-hover/item:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all">
                            <Mail class="w-5 h-5 text-[#00f2ff]" />
                        </div>
                        <div>
                            <p class="text-[14px] text-gray-300 font-mono uppercase tracking-widest mb-1">DATA_LAKE_EMAIL</p>
                            <p class="text-[14px] text-gray-300 font-mono">contacto@sysifosweb.cl</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 group/item">
                        <div class="w-12 h-12 border border-white/10 bg-[#0c121e] flex items-center justify-center group-hover/item:border-[#00f2ff]/50 group-hover/item:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all">
                            <Phone class="w-5 h-5 text-[#00f2ff]" />
                        </div>
                        <div>
                            <p class="text-[14px] text-gray-300 font-mono uppercase tracking-widest mb-1">FREQ_VOZ</p>
                            <p class="text-[14px] text-gray-300 font-mono">+56 9 4910 9970</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 group/item">
                        <div class="w-12 h-12 border border-white/10 bg-[#0c121e] flex items-center justify-center group-hover/item:border-[#00f2ff]/50 group-hover/item:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all">
                            <MapPin class="w-5 h-5 text-[#00f2ff]" />
                        </div>
                        <div>
                            <p class="text-[14px] text-gray-300 font-mono uppercase tracking-widest mb-1">COORDS</p>
                            <p class="text-[14px] text-gray-300 font-mono">Coquimbo, Chile</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4 group/item">
                        <div class="w-12 h-12 border border-white/10 bg-[#0c121e] flex items-center justify-center group-hover/item:border-[#00f2ff]/50 group-hover/item:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all">
                            <Clock class="w-5 h-5 text-[#00f2ff]" />
                        </div>
                        <div>
                            <p class="text-[14px] text-gray-300 font-mono uppercase tracking-widest mb-1">UPTIME</p>
                            <p class="text-[14px] text-gray-300 font-mono">Lun - Vie: 0900 - 1800 hrs</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- WhatsApp CTA -->
            <a href="https://wa.me/56949109970" target="_blank" class="bg-[#0c121e] border border-green-500/30 p-8 hover:bg-green-500/10 transition-colors flex items-center justify-between group shadow-2xl">
                <div>
                    <h4 class="text-white font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                        <MessageSquare class="w-5 h-5 text-green-500" /> WhatsApp Link
                    </h4>
                    <p class="text-gray-300 font-mono text-[14px]">> ESTABLECER_ENLACE_DIRECTO</p>
                </div>
                <div class="w-10 h-10 border border-green-500/50 flex items-center justify-center group-hover:bg-green-500/20 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    <span class="text-green-500 font-mono">></span>
                </div>
            </a>
        </div>

      </div>
    </div>
  </section>
</template>
