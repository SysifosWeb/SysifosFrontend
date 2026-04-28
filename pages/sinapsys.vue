<script setup>
  import { GlobeAltIcon, BriefcaseIcon, CameraIcon, LinkIcon } from '@heroicons/vue/24/solid'
  import logo from '../assets/img/logo-sinapsys.png'

  definePageMeta({
    layout: 'landing'
  })
  
  const links = [
    {
      title: 'Página Web',
      desc: 'NODO_PRINCIPAL.',
      url: 'https://sysifosweb.cl/',
      icon: GlobeAltIcon,
      bg: 'bg-[#00f2ff]/10',
      color: 'text-[#00f2ff]',
      shadow: 'hover:shadow-[0_0_15px_rgba(0,242,255,0.2)]'
    },
    {
      title: 'Portafolio',
      desc: 'HISTORIAL_OPERATIVO.',
      url: 'https://sysifosweb.cl/portfolio',
      icon: BriefcaseIcon,
      bg: 'bg-[#00f2ff]/10',
      color: 'text-[#00f2ff]',
      shadow: 'hover:shadow-[0_0_15px_rgba(0,242,255,0.2)]'
    },
    {
      title: 'Instagram',
      desc: 'REGISTROS_VISUALES.',
      url: 'https://www.instagram.com/sysifosweb_/',
      icon: CameraIcon,
      bg: 'bg-[#00f2ff]/10',
      color: 'text-[#00f2ff]',
      shadow: 'hover:shadow-[0_0_15px_rgba(0,242,255,0.2)]'
    },
    {
      title: 'LinkedIn',
      desc: 'RED_PROFESIONAL.',
      url: 'https://www.linkedin.com/company/sysifos-web',
      icon: LinkIcon,
      bg: 'bg-[#00f2ff]/10',
      color: 'text-[#00f2ff]',
      shadow: 'hover:shadow-[0_0_15px_rgba(0,242,255,0.2)]'
    },
  ]
</script>

<template>
  <div class="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden font-sans bg-[#0a0e17] text-gray-300 selection:bg-[#00f2ff]/30">
    <!-- HUD Background -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-20 select-none flex items-center justify-center">
        <div class="w-[600px] h-[600px] rounded-full border border-[#00f2ff]/10 border-dashed animate-[spin_60s_linear_infinite]"></div>
        <div class="absolute w-[400px] h-[400px] rounded-full border border-[#00f2ff]/20 shadow-[inset_0_0_50px_rgba(0,242,255,0.05)] border-dashed animate-[spin_30s_linear_infinite_reverse]"></div>
        <div class="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f2ff]/10 to-transparent"></div>
        <div class="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#00f2ff]/10 to-transparent"></div>
    </div>

    <div class="relative z-10 w-full max-w-2xl mx-auto">
      <!-- Header -->
      <div class="flex flex-col items-center gap-6 text-center">
        <div class="relative w-40 h-40 animate-[spin_15s_linear_infinite]">
          <div class="absolute inset-0 rounded-full border border-[#00f2ff]/30"></div>
          <div class="absolute -inset-2 rounded-full border-2 border-transparent border-t-[#00f2ff]/50 animate-[spin_5s_linear_infinite]"></div>
          <div class="absolute inset-4 rounded-full bg-cover bg-center shadow-lg bg-[#0c121e] z-10 border border-white/5 animate-[spin_15s_linear_infinite_reverse]"
            :style="{ backgroundImage: `url(${logo})`}"></div>
        </div>

        <div>
          <div class="flex items-center justify-center gap-2 mb-2">
              <span class="text-[#00f2ff] font-mono text-[14px] uppercase tracking-widest">> SISTEMA_CENTRAL</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(0,242,255,0.2)]">
            Sysifos<span class="text-[#00f2ff]">Web</span>
          </h1>
          <p class="text-[14px] font-mono text-gray-300 mt-2 tracking-widest uppercase">
            Desarrollo de Software de Alto Rendimiento
          </p>
        </div>
      </div>

      <!-- Misión -->
      <div class="mt-10 bg-[#0c121e]/80 backdrop-blur-md border border-[#00f2ff]/20 p-8 rounded-none shadow-[0_0_20px_rgba(0,242,255,0.05)] text-center relative group">
        <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00f2ff]"></div>
        <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00f2ff]"></div>
        
        <h2 class="text-[15px] font-mono text-[#00f2ff] uppercase tracking-widest">OBJETIVO_PRINCIPAL</h2>
        <p class="mt-4 text-[15px] font-mono text-gray-300 leading-relaxed">
          Convertimos requerimientos abstractos en arquitecturas digitales concretas, escalables y orientadas a la máxima eficiencia operativa.
        </p>

        <a class="mt-8 inline-flex items-center gap-2 bg-[#00f2ff]/10 hover:bg-[#00f2ff] border border-[#00f2ff]/50 text-[#00f2ff] hover:text-[#0a0e17] font-mono text-[15px] uppercase tracking-widest py-3 px-6 transition-all duration-300 shadow-[0_0_15px_rgba(0,242,255,0.1)] hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]"
          href="https://wa.me/56949109970?text=¡Hola!%20Quiero%20más%20información%20sobre%20sus%20servicios"
          target="_blank">
          ESTABLECER_CONEXION_WSP >
        </a>
      </div>

      <!-- Links -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8">
        <a v-for="item in links" :key="item.title" :href="item.url" target="_blank"
          :class="`group flex items-center justify-between p-5 bg-[#0c121e]/80 backdrop-blur-md border border-white/5 hover:border-[#00f2ff]/50 transition-all duration-300 ${item.shadow} relative overflow-hidden`">
          <div class="absolute inset-0 bg-gradient-to-r from-[#00f2ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="flex items-center gap-4 relative z-10">
            <div :class="`p-3 border border-white/5 bg-[#0a0e17] ${item.color} group-hover:border-[#00f2ff]/30 transition-colors`">
              <component :is="item.icon" class="w-5 h-5" />
            </div>
            <div>
              <p class="font-bold text-sm text-white uppercase tracking-wider">{{ item.title }}</p>
              <p class="text-[15px] font-mono text-gray-300 uppercase">{{ item.desc }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>