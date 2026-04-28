<script setup>
import { Monitor, Smartphone, LayoutTemplate, Settings, ShieldCheck } from 'lucide-vue-next'
</script>

<template>
  <section class="relative bg-[#0a0e17] py-24 overflow-hidden border-b border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        <!-- Service 1 -->
        <div class="relative group bg-[#0a0e17]/80 backdrop-blur-[6px] border border-white/[0.05] p-8 hover:bg-[#0c121e]/90 hover:border-[#00f2ff]/30 transition-all duration-500 shadow-2xl">
          <div class="absolute top-4 right-4 text-[14px] font-mono text-[#00f2ff]/20 group-hover:text-[#00f2ff]/50 transition-colors">[ SRV_01 ]</div>
          <div class="absolute top-0 left-0 w-1/4 h-[2px] bg-gradient-to-r from-[#00f2ff] to-transparent opacity-40 group-hover:w-full group-hover:opacity-100 transition-all duration-700"></div>
          
          <div class="mb-6">
            <Monitor class="w-10 h-10 text-[#00f2ff] opacity-80" />
          </div>
          <h3 class="text-xl font-bold font-sans text-white uppercase tracking-widest mb-4">Landing Pages</h3>
          <p class="text-gray-300 font-mono text-[15px] leading-relaxed mb-6">
            Interfaces modernas y optimizadas para máxima conversión, captación de clientes y contacto directo.
          </p>
          <ul class="space-y-2 mb-8 font-mono text-[15px] text-gray-300">
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> 1-5 secciones de alto impacto</li>
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> Formularios dinámicos</li>
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> Integración API WhatsApp</li>
          </ul>
        </div>

        <!-- Service 2 -->
        <div class="relative group bg-[#0a0e17]/80 backdrop-blur-[6px] border border-white/[0.05] p-8 hover:bg-[#0c121e]/90 hover:border-[#00f2ff]/30 transition-all duration-500 shadow-2xl">
          <div class="absolute top-4 right-4 text-[14px] font-mono text-[#00f2ff]/20 group-hover:text-[#00f2ff]/50 transition-colors">[ SRV_02 ]</div>
          <div class="absolute top-0 left-0 w-1/4 h-[2px] bg-gradient-to-r from-[#00f2ff] to-transparent opacity-40 group-hover:w-full group-hover:opacity-100 transition-all duration-700"></div>
          
          <div class="mb-6">
            <Smartphone class="w-10 h-10 text-[#00f2ff] opacity-80" />
          </div>
          <h3 class="text-xl font-bold font-sans text-white uppercase tracking-widest mb-4">E-commerce</h3>
          <p class="text-gray-300 font-mono text-[15px] leading-relaxed mb-6">
            Tiendas online transaccionales con pasarelas de pago cifradas, gestión de inventario y logística integrada.
          </p>
          <ul class="space-y-2 mb-8 font-mono text-[15px] text-gray-300">
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> Pagos encriptados (Webpay, Stripe)</li>
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> Logística automatizada</li>
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> Panel de gestión de stock</li>
          </ul>
        </div>

        <!-- Service 3 -->
        <div class="relative group bg-[#0a0e17]/80 backdrop-blur-[6px] border border-white/[0.05] p-8 hover:bg-[#0c121e]/90 hover:border-[#00f2ff]/30 transition-all duration-500 shadow-2xl">
          <div class="absolute top-4 right-4 text-[14px] font-mono text-[#00f2ff]/20 group-hover:text-[#00f2ff]/50 transition-colors">[ SRV_03 ]</div>
          <div class="absolute top-0 left-0 w-1/4 h-[2px] bg-gradient-to-r from-[#00f2ff] to-transparent opacity-40 group-hover:w-full group-hover:opacity-100 transition-all duration-700"></div>
          
          <div class="mb-6">
            <LayoutTemplate class="w-10 h-10 text-[#00f2ff] opacity-80" />
          </div>
          <h3 class="text-xl font-bold font-sans text-white uppercase tracking-widest mb-4">Plataformas Corporativas</h3>
          <p class="text-gray-300 font-mono text-[15px] leading-relaxed mb-6">
            Sistemas web extensos y robustos con CMS personalizado, gestión de usuarios y optimización estructural SEO.
          </p>
          <ul class="space-y-2 mb-8 font-mono text-[15px] text-gray-300">
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> Arquitectura escalable</li>
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> Autoadministrable (Headless CMS)</li>
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> SEO Estructural Técnico</li>
          </ul>
        </div>

        <!-- Service 4 -->
        <div class="relative group bg-[#0a0e17]/80 backdrop-blur-[6px] border border-white/[0.05] p-8 hover:bg-[#0c121e]/90 hover:border-[#00f2ff]/30 transition-all duration-500 shadow-2xl lg:col-span-2">
          <div class="absolute top-4 right-4 text-[14px] font-mono text-[#00f2ff]/20 group-hover:text-[#00f2ff]/50 transition-colors">[ SRV_04 ]</div>
          <div class="absolute top-0 left-0 w-1/4 h-[2px] bg-gradient-to-r from-[#00f2ff] to-transparent opacity-40 group-hover:w-full group-hover:opacity-100 transition-all duration-700"></div>
          
          <div class="mb-6">
            <Settings class="w-10 h-10 text-[#00f2ff] opacity-80" />
          </div>
          <h3 class="text-xl font-bold font-sans text-white uppercase tracking-widest mb-4">Software a Medida</h3>
          <p class="text-gray-300 font-mono text-[15px] leading-relaxed mb-6 max-w-2xl">
            Sistemas backend de grado empresarial diseñados para optimizar operaciones internas complejas, automatizar flujos de datos e integrar APIs de terceros.
          </p>
          <ul class="flex gap-6 mb-8 font-mono text-[15px] text-gray-300 flex-wrap">
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> Bases de Datos Relacionales</li>
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> Dashboards & Analíticas en TR</li>
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> Integración API REST/GraphQL</li>
          </ul>
        </div>

        <!-- Service 5 -->
        <div class="relative group bg-[#0a0e17]/80 backdrop-blur-[6px] border border-white/[0.05] p-8 hover:bg-[#0c121e]/90 hover:border-[#00f2ff]/30 transition-all duration-500 shadow-2xl">
          <div class="absolute top-4 right-4 text-[14px] font-mono text-[#00f2ff]/20 group-hover:text-[#00f2ff]/50 transition-colors">[ SRV_05 ]</div>
          <div class="absolute top-0 left-0 w-1/4 h-[2px] bg-gradient-to-r from-[#00f2ff] to-transparent opacity-40 group-hover:w-full group-hover:opacity-100 transition-all duration-700"></div>
          
          <div class="mb-6">
            <ShieldCheck class="w-10 h-10 text-[#00f2ff] opacity-80" />
          </div>
          <h3 class="text-xl font-bold font-sans text-white uppercase tracking-widest mb-4">Soporte & Mantenimiento</h3>
          <p class="text-gray-300 font-mono text-[15px] leading-relaxed mb-6">
            Garantizamos la disponibilidad del servidor, seguridad de infraestructura y parcheo constante de vulnerabilidades.
          </p>
          <ul class="space-y-2 mb-8 font-mono text-[15px] text-gray-300">
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> Backups encriptados</li>
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> Monitoreo Uptime 99.9%</li>
            <li class="flex items-center gap-2"><span class="text-[#00f2ff]">></span> Optimización de Servidor</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>
