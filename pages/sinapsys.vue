<script setup>
  import { GlobeAltIcon, BriefcaseIcon, CameraIcon, LinkIcon } from '@heroicons/vue/24/solid'
  import logo from '../assets/img/logo-sinapsys.png'

  definePageMeta({
    layout: 'landing'
  })
  const links = [
    {
      title: 'Página Web',
      desc: 'Visita nuestro sitio principal.',
      url: 'https://sysifosweb.cl/',
      icon: GlobeAltIcon,
      bg: 'bg-purple-500/25',
      color: 'text-purple-500',
      shadow: 'hover:shadow-purple-500/50'
    },
    {
      title: 'Portafolio',
      desc: 'Mira nuestros proyectos.',
      url: 'https://sysifosweb.cl/portfolio',
      icon: BriefcaseIcon,
      bg: 'bg-green-500/25',
      color: 'text-green-500',
      shadow: 'hover:shadow-green-500/50'
    },
    {
      title: 'Instagram',
      desc: 'Síguenos para ver más.',
      url: 'https://www.instagram.com/sysifosweb_/',
      icon: CameraIcon,
      bg: 'bg-pink-600/25',
      color: 'text-pink-600',
      shadow: 'hover:shadow-pink-600/50'
    },
    {
      title: 'LinkedIn',
      desc: 'Conectemos.',
      url: 'https://www.linkedin.com/company/sysifos-web',
      icon: LinkIcon,
      bg: 'bg-blue-500/25',
      color: 'text-blue-500',
      shadow: 'hover:shadow-blue-500/50'
    },
  ]
</script>

<template>
  <div
    class="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden font-display bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900 text-slate-200 selection:bg-primary/30">
    <div class="absolute inset-0 w-full h-full aurora-background animate-aurora opacity-10 dark:opacity-20 blur-3xl">
    </div>

    <div class="relative z-10 w-full max-w-2xl mx-auto">
      <!-- Header -->
      <div class="flex flex-col items-center gap-6 text-center">
        <div class="relative w-40 h-40 animate-float">
          <div class="absolute inset-0 rounded-full bg-cover bg-center shadow-lg"
            :style="{ backgroundImage: `url(${logo})`}"></div>
          <div
            class="absolute inset-0 rounded-full ring-4 ring-primary/50 ring-offset-4 ring-offset-background-dark animate-pulse">
          </div>
        </div>

        <div>
          <h1 class="text-4xl md:text-5xl font-black text-white tracking-tight">
            SysifosWeb
          </h1>
          <p class="text-xl text-slate-400 mt-2">
            Innovación y Desarrollo de Software a Medida
          </p>
        </div>
      </div>

      <!-- Misión -->
      <div class="mt-8 bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-md text-center">
        <h2 class="text-2xl font-bold">Nuestra Misión</h2>
        <p class="mt-4 text-slate-400">
          En SysifosWeb, nuestra misión es convertir las ideas de nuestros clientes en soluciones digitales a medida,
          innovadoras y escalables.
        </p>

        <a class="mt-6 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:scale-105"
          href="https://wa.me/56949109970?text=¡Hola!%20Quiero%20más%20información%20sobre%20sus%20servicios"
          target="_blank">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Contacta con nosotros
        </a>
      </div>

      <!-- Links -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-10">
        <a v-for="item in links" :key="item.title" :href="item.url" target="_blank"
          :class="`link-card group flex items-center justify-between p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-lg ${item.shadow}`">
          <div class="flex items-center gap-4">
            <div :class="`p-3 rounded-full ${item.bg} ${item.color}`">
              <component :is="item.icon" class="w-6 h-6" />
            </div>
            <div>
              <p class="font-bold text-lg">{{ item.title }}</p>
              <p class="text-sm text-slate-400">{{ item.desc }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>


<style>
  .aurora-background {
    background: linear-gradient(-45deg, #1e40af, #3730a3, #3b82f6, #60a5fa);
    background-size: 400% 400%;
  }

  .link-card {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .link-card:hover {
    transform: translateY(-5px) scale(1.02);
  }
</style>