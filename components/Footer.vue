<script setup>
import logoBlanco from "@/assets/img/logo-blanco.webp";
</script>
<template>
  <footer class="bg-[#0a0e17] relative overflow-hidden font-sans">
    <div class="max-w-[1400px] w-[92%] mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        <!-- Bloque Izquierdo (Logo, Slogan, Redes) -->
        <div class="lg:col-span-5 flex flex-col items-start justify-start">
          <div class="mb-0">
            <NuxtLink to="/">
              <NuxtImg :src="logoBlanco" alt="SysifosWeb Logo" class="h-20 md:h-28 w-auto object-contain" format="webp" />
            </NuxtLink>
          </div>
          <p class="font-mono text-[#e1e1e1] text-[15px] md:text-sm tracking-widest mb-10 mt-0 uppercase w-full">
            Ingeniería digital para tu negocio.
          </p>
          
          <!-- Redes Sociales -->
          <div class="flex space-x-6 items-center">
            <a href="https://www.facebook.com/profile.php?id=61567859694020" target="_blank" class="text-white hover:text-[#00f2ff] transition-colors duration-300">
                <span class="sr-only">Facebook</span>
                <svg class="h-8 w-8 scale-95" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.97 3.65 9.1 8.4 9.84v-6.96h-2.53v-2.88h2.53v-2.19c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.77l-.44 2.88h-2.33v6.96c4.76-.74 8.41-4.87 8.41-9.84 0-5.5-4.46-9.96-9.96-9.96z"/>
                </svg>
            </a>
            <a href="https://www.instagram.com/sysifosweb_/" target="_blank" class="text-white hover:text-[#00f2ff] transition-colors duration-300">
                <span class="sr-only">Instagram</span>
                <svg class="h-8 w-8 scale-95" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm8.5 2h-8.5C5.55 4 4 5.55 4 7.75v8.5C4 18.45 5.55 20 7.75 20h8.5c2.2 0 3.75-1.55 3.75-3.75v-8.5C20 5.55 18.45 4 16.25 4ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/>
                </svg>
            </a>
            <a href="https://www.linkedin.com/company/sysifos-web" target="_blank" class="text-white hover:text-[#00f2ff] transition-colors duration-300">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-8 w-8 scale-105" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-11.5 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm1.5 10.5V9H6v10h3Zm2 0h3v-5.5c0-1.87 2.25-2.02 2.25 0V19h3v-6.6a4.11 4.11 0 0 0-4.1-4.4c-1.4 0-2.3.8-2.65 1.54V9h-3v10Z"/>
                </svg>
            </a>
            <a href="https://www.tiktok.com/@sysifosweb" target="_blank" class="text-white hover:text-[#00f2ff] transition-colors duration-300">
                <span class="sr-only">TikTok</span>
                <svg class="h-8 w-8 scale-[0.80]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
            </a>
          </div>
        </div>
        
        <!-- Espacio Vacío Asimétrico (Centro) -->
        <div class="hidden lg:block lg:col-span-1"></div>
        
        <!-- Bloque Derecho (Enlaces y Contacto) -->
        <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-14">
          
          <!-- Enlaces Rápidos -->
          <div class="flex flex-col">
            <h3 class="text-white font-bold text-[17px] tracking-wide mb-4 relative pb-3 border-b border-[#00f2ff] w-fit pr-8">
              Enlaces Rápidos
            </h3>
            <ul class="space-y-4 font-sans text-[15px] text-gray-200 mt-2">
              <li><NuxtLink to="/" class="hover:text-[#00f2ff] transition-colors duration-300">Inicio</NuxtLink></li>
              <li><NuxtLink to="/nosotros" class="hover:text-[#00f2ff] transition-colors duration-300">Nosotros</NuxtLink></li>
              <li><NuxtLink to="/servicios" class="hover:text-[#00f2ff] transition-colors duration-300">Servicios</NuxtLink></li>
              <li><NuxtLink to="/portfolio" class="hover:text-[#00f2ff] transition-colors duration-300">Portfolio</NuxtLink></li>
            </ul>
          </div>

          <!-- Contacto -->
          <div class="flex flex-col">
            <h3 class="text-white font-bold text-[17px] tracking-wide mb-4 relative pb-3 border-b border-[#00f2ff] w-fit pr-8">
              Contacto
            </h3>
            <ul class="space-y-5 font-sans text-[15px] text-gray-200 mt-2">
                <li class="flex items-center">
                    <svg class="h-5 w-5 mr-3 text-[#00f2ff] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <a href="mailto:contacto@sysifosweb.cl" class="hover:text-[#00f2ff] transition-colors duration-300 truncate">
                        contacto@sysifosweb.cl
                    </a>
                </li>
                <li class="flex items-center">
                    <svg class="h-5 w-5 mr-3 text-[#00f2ff] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    +56 9 4910 9970
                </li>
                <li class="flex items-start">
                    <svg class="h-5 w-5 mr-3 mt-0.5 text-[#00f2ff] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>Coquimbo, Chile</span>
                </li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Pie de Página / Copyright -->
      <div class="mt-28 w-full flex justify-start">
        <p class="text-[15px] md:text-sm text-gray-300 font-sans tracking-wide">
          © {{ new Date().getFullYear() }} SysifosWeb. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>
