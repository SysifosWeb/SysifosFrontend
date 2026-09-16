import { ref } from 'vue'

const CONSENT_KEY = 'sysifos_cookie_consent'
const CONSENT_VERSION = '1.0'

export type ConsentDecision = 'accepted' | 'rejected' | null

interface ConsentRecord {
  decision: ConsentDecision
  timestamp: string
  version: string
}

const consent = ref<ConsentDecision>(null)
const bannerVisible = ref(false)

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

export function useCookieConsent() {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const stored = readStored()
    if (stored !== null) {
      consent.value = stored
      // Si ya decidió, sincroniza el estado con GTM/GA4.
      syncConsent(stored)
    } else {
      consent.value = null
      bannerVisible.value = true
      // Default: denegar hasta que el usuario decida.
      syncConsent('rejected')
    }
  }

  function accept() {
    consent.value = 'accepted'
    localStorage.setItem(CONSENT_KEY, JSON.stringify({
      decision: 'accepted',
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION
    }))
    bannerVisible.value = false
    syncConsent('accepted')
    firePageView()
  }

  function reject() {
    consent.value = 'rejected'
    localStorage.setItem(CONSENT_KEY, JSON.stringify({
      decision: 'rejected',
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION
    }))
    bannerVisible.value = false
    syncConsent('rejected')
  }

  return {
    consent,
    bannerVisible,
    accept,
    reject,
  }
}

function syncConsent(decision: ConsentDecision) {
  if (typeof window === 'undefined') {
    return
  }
  // Google Consent Mode v2
  const gtag = (window as any).gtag
  if (typeof gtag === 'function') {
    gtag('consent', 'update', {
      ad_storage: decision === 'accepted' ? 'granted' : 'denied',
      analytics_storage: decision === 'accepted' ? 'granted' : 'denied',
      ad_user_data: decision === 'accepted' ? 'granted' : 'denied',
      ad_personalization: decision === 'accepted' ? 'granted' : 'denied',
    })
  }
}

function firePageView() {
  if (typeof window === 'undefined') {
    return
  }
  const gtag = (window as any).gtag
  if (typeof gtag !== 'function') {
    return
  }
  gtag('event', 'page_view', {
    page_location: window.location.href,
    page_title: document.title,
    page_path: window.location.pathname,
  })
}