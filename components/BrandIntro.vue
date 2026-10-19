<script setup>
import { onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['complete'])
let timer
let completed = false

const finish = () => {
  if (completed) return
  completed = true
  clearTimeout(timer)
  emit('complete')
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    finish()
    return
  }
  timer = setTimeout(finish, 3000)
})
onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <div class="brand-intro" role="status" aria-label="Bienvenido a SysifosWeb">
    <div class="intro-halo" aria-hidden="true"></div>
    <div class="intro-composition">
      <svg class="intro-symbol" viewBox="0 0 96 96" aria-hidden="true">
        <g transform="translate(-9.613 -4.097) scale(1.22581)">
          <path class="intro-ramp" d="M16 72L62 26L78 42L48 72Z" fill="#1D5FA6" />
          <circle class="intro-sphere" cx="41" cy="23" r="10" fill="#1D5FA6" />
        </g>
      </svg>
      <div class="intro-lockup"><BrandLogo /></div>
      <p class="intro-tagline">Ideas que toman impulso.</p>
    </div>
  </div>
</template>

<style scoped>
.brand-intro { position: fixed; inset: 0; z-index: 5000; display: grid; place-items: center; overflow: hidden; background: #F7F8FB; color: #102B46; animation: intro-exit 3s ease both; }
.intro-composition { position: relative; width: min(78vw, 360px); height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.intro-halo { position: absolute; width: min(95vw, 620px); aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle, rgba(157,203,245,.34), rgba(157,203,245,0) 66%); animation: intro-halo 2.7s ease-out both; }
.intro-symbol { width: 120px; height: 120px; overflow: visible; animation: intro-symbol 2.7s cubic-bezier(.2,.7,.2,1) both; }
.intro-ramp { transform-box: fill-box; transform-origin: center; animation: intro-ramp .7s cubic-bezier(.16,1,.3,1) both; }
.intro-sphere { transform-box: fill-box; transform-origin: center; animation: intro-sphere 1.1s cubic-bezier(.22,1,.36,1) .15s both; }
.intro-lockup { position: absolute; top: 96px; width: 100%; animation: intro-lockup 2.7s ease both; }
.intro-lockup :deep(.brand-logo) { display: block; width: 100%; }
.intro-tagline { position: absolute; top: 180px; font-family: var(--font-heading); font-size: clamp(.875rem, 3.5vw, 1rem); letter-spacing: .04em; color: #52677F; animation: intro-tagline 2.7s ease both; }
@keyframes intro-ramp { from { opacity: 0; transform: translate(-28px,28px) scale(.9); } to { opacity: 1; transform: translate(0,0) scale(1); } }
@keyframes intro-sphere { 0% { opacity: 0; transform: translate(28px,34px) scale(.65); } 65% { opacity: 1; transform: translate(-2px,-5px) scale(1); } 100% { opacity: 1; transform: translate(0,0) scale(1); } }
@keyframes intro-symbol { 0%, 40% { opacity: 1; transform: translateY(0) scale(1); } 62%, 100% { opacity: 0; transform: translateY(-10px) scale(.85); } }
@keyframes intro-lockup { 0%, 43% { opacity: 0; transform: translateY(12px); } 65%, 100% { opacity: 1; transform: translateY(0); } }
@keyframes intro-tagline { 0%, 57% { opacity: 0; transform: translateY(8px); } 78%, 100% { opacity: 1; transform: translateY(0); } }
@keyframes intro-halo { from { opacity: 0; transform: scale(.65); } 60%, to { opacity: 1; transform: scale(1.15); } }
@keyframes intro-exit { 0%, 88% { opacity: 1; } 100% { opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .brand-intro { display: none; } .brand-intro * { animation: none; } }
</style>
