import { ref } from 'vue'

const CONSENT_KEY = 'sysifos_cookie_consent'
const CONSENT_VERSION = '1.1'

export type ConsentDecision = 'accepted' | 'rejected' | null

interface ConsentRecord {
  decision: ConsentDecision
  timestamp: string
  version: string
}

const consent = ref<ConsentDecision>(null)
const bannerVisible = ref(false)

let cancelScheduledBanner: (() => void) | null = null
let initialized = false

function readStored(): ConsentDecision {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return null
  }
  const stored = localStorage.getItem(CONSENT_KEY)
  if (!stored) return null

  try {
    const record = JSON.parse(stored) as ConsentRecord
    return record.decision
  } catch {
    return null
  }
}

function writeStored(decision: 'accepted' | 'rejected') {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({
    decision,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION
  }))
}

export function useCookieConsent() {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined' && !initialized) {
    initialized = true

    const stored = readStored()
    if (stored !== null) {
      consent.value = stored
      // Si ya decidió, sincroniza el estado con GTM/GA4.
      syncConsent(stored)
    } else {
      consent.value = null
      // Default: denegar hasta que el usuario decida.
      syncConsent('rejected')
      // Banner diferido: se muestra al llegar al 30% de la página
      // (mitad típica del artículo) o a los 45 s, lo que ocurra primero.
      scheduleBanner()
    }

    // Los CTA de "Configurar cookies" (#cookies) reabren el banner
    // desde cualquier página o artículo.
    window.addEventListener('hashchange', handleCookieHash)
    if (window.location.hash === '#cookies') {
      handleCookieHash()
    }
  }

  function accept() {
    cancelScheduledBanner?.()
    consent.value = 'accepted'
    writeStored('accepted')
    bannerVisible.value = false
    syncConsent('accepted')
    trackDecision('accepted')
    stripCookiesHash()
    firePageView()
  }

  function reject() {
    cancelScheduledBanner?.()
    consent.value = 'rejected'
    writeStored('rejected')
    bannerVisible.value = false
    syncConsent('rejected')
    trackDecision('rejected')
    stripCookiesHash()
  }

  return {
    consent,
    bannerVisible,
    accept,
    reject,
  }
}

function handleCookieHash() {
  if (window.location.hash !== '#cookies') return
  cancelScheduledBanner?.()
  bannerVisible.value = true
}

function stripCookiesHash() {
  if (window.location.hash === '#cookies') {
    history.replaceState(null, '', window.location.pathname + window.location.search)
  }
}

function scheduleBanner() {
  if (cancelScheduledBanner) {
    return
  }

  const show = () => {
    cleanup()
    if (consent.value === null) {
      bannerVisible.value = true
    }
  }

  // Sin triggers de click/teclado/touch: interrumpen la lectura.
  // En su lugar, profundidad de scroll y tiempo de permanencia.
  const onScroll = () => {
    const doc = document.documentElement
    const progress = (window.scrollY + window.innerHeight) / doc.scrollHeight
    if (progress >= 0.3) {
      show()
    }
  }

  const timer = window.setTimeout(show, 45000)
  const options: AddEventListenerOptions = { passive: true }

  window.addEventListener('scroll', onScroll, options)

  function cleanup() {
    window.clearTimeout(timer)
    window.removeEventListener('scroll', onScroll, options)
    cancelScheduledBanner = null
  }

  cancelScheduledBanner = cleanup
}

// Registra la decisión para medir la tasa de aceptación real.
// - Aceptación: además se envía evento a GA4.
// - Rechazo: no puede llegar a GA4 (analytics_storage denied),
//   por lo que se registra en el backend vía /api/consent.
function trackDecision(decision: 'accepted' | 'rejected') {
  if (decision === 'accepted') {
    const gtag = getGtag()
    if (gtag) {
      gtag('event', 'consent_accepted', { page_path: window.location.pathname })
    }
  }

  try {
    const payload = JSON.stringify({
      decision,
      path: window.location.pathname,
      ts: Date.now(),
    })
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/consent', new Blob([payload], { type: 'application/json' }))
    } else {
      fetch('/api/consent', {
        method: 'POST',
        body: payload,
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
      })
    }
  } catch {
    // Sin red no hay registro, pero la decisión local ya quedó guardada.
  }
}

// nuxt-gtag no expone window.gtag (su función es privada del módulo),
// por lo que se usa el stub oficial de Google que encola comandos en dataLayer.
function getGtag(): ((...args: any[]) => void) | null {
  if (typeof window === 'undefined') {
    return null
  }
  const w = window as any
  w.dataLayer = w.dataLayer || []
  if (typeof w.gtag !== 'function') {
    w.gtag = function gtag() {
      w.dataLayer.push(arguments)
    }
  }
  return w.gtag
}

function syncConsent(decision: ConsentDecision) {
  const gtag = getGtag()
  if (gtag) {
    gtag('consent', 'update', {
      ad_storage: decision === 'accepted' ? 'granted' : 'denied',
      analytics_storage: decision === 'accepted' ? 'granted' : 'denied',
      ad_user_data: decision === 'accepted' ? 'granted' : 'denied',
      ad_personalization: decision === 'accepted' ? 'granted' : 'denied',
    })
  }
}

function firePageView() {
  const gtag = getGtag()
  if (!gtag) {
    return
  }
  gtag('event', 'page_view', {
    page_location: window.location.href,
    page_title: document.title,
    page_path: window.location.pathname,
  })
}
