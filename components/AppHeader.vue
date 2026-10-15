<template>
  <section class="relative w-full min-h-[95vh] flex items-center overflow-hidden" style="background: var(--bg-dark);">

    <!-- =========================================
         BACKGROUND: Gradientes premium sutiles
    ========================================= -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <!-- Glow índigo — superior izquierda, muy difuso -->
      <div class="absolute -top-60 -left-60 w-[700px] h-[700px]"
        style="background: radial-gradient(circle, var(--purple) 0%, transparent 70%); opacity: 0.15;"></div>
      <!-- Glow cyan — inferior derecha, muy difuso -->
      <div class="absolute bottom-0 right-0 w-[550px] h-[550px]"
        style="background: radial-gradient(circle, var(--accent) 0%, transparent 70%); opacity: 0.12;"></div>
      <!-- Gradiente superior sutil para profundidad -->
      <div class="absolute top-0 left-0 right-0 h-px"
        style="background: linear-gradient(to right, transparent, rgba(var(--decoration-rgb), 0.15), transparent);"></div>
    </div>

    <!-- =========================================
         CONTENT: Grid 2 columnas
    ========================================= -->
    <div
      class="relative z-10 w-[88%] max-w-[1340px] mx-auto pt-36 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-20 xl:gap-28 items-center">

      <!-- =====================
           COLUMNA IZQUIERDA
      ===================== -->
      <div class="flex flex-col items-start text-left">

        <!-- Eyebrow Badge -->
        <div class="hero-enter inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
          style="background: rgba(var(--decoration-rgb), 0.06); border: 1px solid rgba(var(--decoration-rgb), 0.18);">
          <span class="w-1.5 h-1.5 rounded-full pulse-dot" style="background: var(--accent);"></span>
          <span class="text-xs font-medium tracking-wide" style="color: var(--accent);">
            Desarrollo de software premium · La Serena, Chile
          </span>
        </div>

        <!-- H1 — Titular principal -->
        <h1 class="hero-enter delay-1 font-bold leading-[1.06] mb-5"
          style="font-size: clamp(2.4rem, 5vw, 3.8rem); color: var(--text-main); letter-spacing: -0.035em; font-family: 'Inter', sans-serif;">
          Tu negocio necesita<br />
          una plataforma digital<br />
          <span class="hero-accent">que trabaje por ti.</span>
        </h1>

        <!-- Subtexto refinado -->
        <p class="hero-enter delay-2 text-[1.08rem] leading-[1.75] mb-10 max-w-[460px]"
          style="color: var(--text-secondary);">
          Somos el equipo de tecnología detrás de empresas que crecen.
          Diseñamos, construimos y escalamos plataformas web que generan resultados reales.
        </p>

        <!-- CTAs — Estrategia de conversión mejorada -->
        <div class="hero-enter delay-3 flex flex-col sm:flex-row gap-3.5 mb-12">

          <!-- CTA Primario: WhatsApp -->
          <a href="https://wa.me/56985021549?text=Hola%20SysifosWeb!%20Quiero%20cotizar%20mi%20proyecto%20web%2Fsoftware"
            target="_blank"
            rel="noopener"
            class="cta-primary group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-[0.9rem]"
            style="background: var(--accent); color: var(--button-text);">
            <span>Hablemos por WhatsApp</span>
            <svg class="w-4 h-4 cta-arrow" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.198-.347.222-.644.073-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.08 4.487.707.307 1.255.491 1.68.626.711.226 1.36.195 1.874.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
          </a>

          <!-- CTA Secundario: Contacto -->
          <NuxtLink to="/contacto"
            class="cta-secondary inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-medium text-[0.9rem]"
            style="color: var(--text-main); border: 1px solid var(--border);">
            Ver portfolio
          </NuxtLink>
        </div>

        <!-- Trust indicators — Minimalistas, tipo Linear/Vercel -->
        <div class="hero-enter delay-4 flex flex-wrap items-center gap-x-6 gap-y-3 pt-8"
          style="border-top: 1px solid var(--border);">
          <div v-for="trust in trustItems" :key="trust.label" class="flex items-center gap-2">
            <svg class="w-3.5 h-3.5 shrink-0" aria-hidden="true" style="color: var(--accent);" fill="none" stroke="currentColor"
              stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-xs font-medium" style="color: var(--text-secondary);">{{ trust.label }}</span>
          </div>
        </div>

      </div>

      <!-- =====================
           COLUMNA DERECHA: Dashboard UI
      ===================== -->
      <div class="relative hidden lg:flex items-center justify-center mockup-container" aria-hidden="true">

        <!-- Glow de profundidad detrás del panel -->
        <div class="absolute inset-8 rounded-3xl pointer-events-none"
          style="background: radial-gradient(ellipse at 60% 50%, rgba(var(--decoration-rgb), 0.1) 0%, transparent 65%);">
        </div>

        <!-- === Panel Principal del Dashboard === -->
        <div class="relative w-full max-w-[600px] rounded-2xl overflow-hidden mockup-float"
          style="background: var(--bg-surface); border: 1px solid rgba(var(--neutral-rgb), 0.07); box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(var(--neutral-rgb), 0.04);">

          <!-- Barra de título -->
          <div class="flex items-center gap-2 px-5 py-3.5"
            style="background: var(--bg-elevated); border-bottom: 1px solid rgba(var(--neutral-rgb), 0.06);">
            <div class="flex items-center gap-1.5">
              <div class="w-3 h-3 rounded-full" style="background: #FF5F57;"></div>
              <div class="w-3 h-3 rounded-full" style="background: #FEBC2E;"></div>
              <div class="w-3 h-3 rounded-full" style="background: #28C840;"></div>
            </div>
            <div class="flex-1 flex justify-center">
              <div class="h-[22px] rounded-md px-3 flex items-center gap-2 w-52"
                style="background: var(--bg-dark); border: 1px solid rgba(var(--neutral-rgb), 0.07);">
                <div class="w-3 h-3 opacity-40">
                  <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"
                    style="color: var(--text-muted);">
                    <circle cx="5" cy="5" r="3.5" />
                    <path d="M8.5 8.5l2 2" stroke-linecap="round" />
                  </svg>
                </div>
                <span class="text-[10px]" style="color: var(--text-muted);">sysifosweb.cl/dashboard</span>
              </div>
            </div>
          </div>

          <!-- Cuerpo del dashboard -->
          <div class="p-5 grid grid-cols-[140px_1fr] gap-5">

            <!-- Sidebar -->
            <div class="flex flex-col gap-2 pr-4" style="border-right: 1px solid rgba(var(--neutral-rgb), 0.05);">
              <div class="flex items-center gap-2 px-2 py-2 rounded-lg mb-1" style="background: rgba(var(--decoration-rgb), 0.08);">
                <div class="w-4 h-4 rounded" style="background: rgba(var(--decoration-rgb), 0.3);"></div>
                <div class="w-16 h-2.5 rounded" style="background: rgba(var(--decoration-rgb), 0.4);"></div>
              </div>
              <div v-for="i in 4" :key="i" class="flex items-center gap-2 px-2 py-1.5 rounded-md">
                <div class="w-3.5 h-3.5 rounded" style="background: rgba(var(--neutral-rgb), 0.07);"></div>
                <div class="h-2 rounded"
                  :style="{ background: 'rgba(var(--neutral-rgb), 0.06)', width: ['70%', '85%', '60%', '75%'][i - 1] }"></div>
              </div>
              <div class="mt-auto pt-4">
                <div class="w-full h-[72px] rounded-xl p-3 flex flex-col justify-between"
                  style="background: linear-gradient(135deg, rgba(var(--decoration-rgb), 0.08), rgba(var(--decoration-rgb), 0.08)); border: 1px solid rgba(var(--decoration-rgb), 0.15);">
                  <div class="w-4 h-4 rounded-md" style="background: rgba(var(--decoration-rgb), 0.25);"></div>
                  <div class="w-3/4 h-2 rounded" style="background: rgba(var(--neutral-rgb), 0.1);"></div>
                </div>
              </div>
            </div>

            <!-- Panel principal -->
            <div class="flex flex-col gap-4">

              <!-- Stat cards -->
              <div class="grid grid-cols-3 gap-3">
                <div v-for="stat in dashStats" :key="stat.label" class="p-3 rounded-xl flex flex-col gap-1.5"
                  style="background: var(--bg-dark); border: 1px solid rgba(var(--neutral-rgb), 0.06);">
                  <p class="text-[9px] font-medium" style="color: var(--text-muted);">{{ stat.label }}</p>
                  <p class="text-xl font-bold leading-none" style="color: var(--text-main);">{{ stat.value }}</p>
                  <p class="text-[9px] font-medium" :style="{ color: stat.color }">{{ stat.trend }}</p>
                </div>
              </div>

              <!-- Gráfica de rendimiento -->
              <div class="rounded-xl p-4" style="background: var(--bg-dark); border: 1px solid rgba(var(--neutral-rgb), 0.06);">
                <div class="flex items-center justify-between mb-3">
                  <p class="text-[10px] font-semibold" style="color: var(--text-secondary);">Rendimiento del mes</p>
                  <div class="flex items-center gap-3">
                    <span class="flex items-center gap-1 text-[8px]" style="color: var(--accent);">
                      <span class="w-4 h-px inline-block" style="background:var(--accent);"></span>Tráfico
                    </span>
                    <span class="flex items-center gap-1 text-[8px]" style="color: var(--accent);">
                      <span class="w-4 h-px inline-block border-t border-dashed"
                        style="border-color:var(--accent);"></span>Conversión
                    </span>
                  </div>
                </div>
                <svg viewBox="0 0 340 88" class="w-full overflow-visible">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.18" />
                      <stop offset="100%" stop-color="var(--accent)" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.12" />
                      <stop offset="100%" stop-color="var(--accent)" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                  <!-- Grid lines -->
                  <line v-for="y in [22, 44, 66, 88]" :key="y" x1="0" :y1="y" x2="340" :y2="y"
                    stroke="rgba(var(--neutral-rgb), 0.04)" stroke-width="1" />
                  <!-- Área cyan -->
                  <path d="M0 80 L0 58 C30 50 55 68 85 50 S120 28 155 30 S200 18 240 14 S290 9 340 6 L340 80 Z"
                    fill="url(#g1)" />
                  <path d="M0 58 C30 50 55 68 85 50 S120 28 155 30 S200 18 240 14 S290 9 340 6" fill="none"
                    stroke="var(--accent)" stroke-width="2" stroke-linecap="round" />
                  <!-- Área morada -->
                  <path d="M0 80 L0 70 C35 64 65 76 100 66 S148 58 180 60 S225 55 265 48 S300 44 340 42 L340 80 Z"
                    fill="url(#g2)" />
                  <path d="M0 70 C35 64 65 76 100 66 S148 58 180 60 S225 55 265 48 S300 44 340 42" fill="none"
                    stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="4 3" />
                  <!-- Punto activo -->
                  <circle cx="340" cy="6" r="3" fill="var(--accent)" />
                  <circle cx="340" cy="6" r="6" fill="var(--accent)" fill-opacity="0.15" />
                </svg>
              </div>

            </div>
          </div>
        </div>

        <!-- === Floating Card: Nuevo cliente === -->
        <div class="absolute -top-5 -right-6 flex items-center gap-3 px-4 py-3 rounded-2xl float-card-1"
          style="background: var(--bg-elevated); border: 1px solid rgba(var(--neutral-rgb), 0.08); box-shadow: 0 16px 40px rgba(0,0,0,0.4); min-width: 200px;">
          <div class="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold"
            style="background: linear-gradient(135deg, var(--heading-gradient-end), var(--heading-gradient-end)); color: white;">JM</div>
          <div>
            <p class="text-[11px] font-semibold leading-none mb-0.5" style="color: var(--text-main);">Nuevo proyecto
              iniciado</p>
            <p class="text-[10px]" style="color: var(--text-muted);">E-commerce · Retail</p>
          </div>
          <div class="w-2 h-2 rounded-full ml-auto shrink-0" style="background: var(--accent);"></div>
        </div>

        <!-- === Floating Card: Deploy exitoso === -->
        <div class="absolute -bottom-5 -left-6 flex items-center gap-3 px-4 py-3 rounded-2xl float-card-2"
          style="background: var(--bg-elevated); border: 1px solid rgba(var(--neutral-rgb), 0.08); box-shadow: 0 16px 40px rgba(0,0,0,0.4);">
          <div class="w-8 h-8 rounded-full shrink-0 flex items-center justify-center"
            style="background: rgba(var(--decoration-rgb), 0.12);">
            <svg class="w-4 h-4" style="color: var(--accent);" fill="none" stroke="currentColor" stroke-width="2.5"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p class="text-[11px] font-semibold leading-none mb-0.5" style="color: var(--text-main);">Deploy completado
            </p>
            <p class="text-[10px]" style="color: var(--text-muted);">Producción · Hace 3 min</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const trustItems = [
  { label: '+50 proyectos entregados' },
  { label: 'Rendimiento optimizado' },
  { label: 'Escalable desde el día 1' },
  { label: 'Soporte continuo' },
]

const dashStats = [
  { label: 'Proyectos activos', value: '24', trend: '↑ +12% este mes', color: 'var(--accent)' },
  { label: 'Clientes satisfechos', value: '98%', trend: '● Siempre', color: 'var(--accent)' },
  { label: 'Uptime garantizado', value: '99.9%', trend: '● Operacional', color: 'var(--accent)' },
]
</script>

<style scoped>
/* ===========================
   Entrada escalonada del hero
=========================== */
.hero-enter {
  animation: enterUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.delay-1 {
  animation-delay: 80ms;
}

.delay-2 {
  animation-delay: 160ms;
}

.delay-3 {
  animation-delay: 240ms;
}

.delay-4 {
  animation-delay: 320ms;
}

@keyframes enterUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===========================
   Acento del headline
=========================== */
.hero-accent {
  color: var(--accent);
  position: relative;
  display: inline-block;
}

/* ===========================
   Dot pulsante del badge
=========================== */
.pulse-dot {
  animation: pulse 2.5s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.5;
    transform: scale(0.85);
  }
}

/* ===========================
   CTA Primario
=========================== */
.cta-primary {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 0 0 0 rgba(var(--decoration-rgb), 0);
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(var(--decoration-rgb), 0.25), 0 0 0 1px rgba(var(--decoration-rgb), 0.2);
}

.cta-primary:hover .cta-arrow {
  transform: translateX(3px);
}

.cta-arrow {
  transition: transform 0.2s ease;
}

/* ===========================
   CTA Secundario
=========================== */
.cta-secondary {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-secondary:hover {
  background: rgba(var(--neutral-rgb), 0.04) !important;
  border-color: rgba(var(--decoration-rgb), 0.25) !important;
  transform: translateY(-2px);
}

/* ===========================
   Mockup flotante (suave)
=========================== */
.mockup-float {
  animation: floatPanel 9s ease-in-out infinite;
}

@keyframes floatPanel {

  0%,
  100% {
    transform: translateY(0px) rotateX(1deg);
  }

  50% {
    transform: translateY(-12px) rotateX(0deg);
  }
}

/* ===========================
   Floating cards
=========================== */
.float-card-1 {
  animation: floatCard1 7s ease-in-out infinite;
}

.float-card-2 {
  animation: floatCard2 8s ease-in-out infinite;
}

@keyframes floatCard1 {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }
}

@keyframes floatCard2 {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(8px);
  }
}

h1 {
  letter-spacing: -0.035em;
}
</style>
