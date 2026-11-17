import { getCookie, deleteCookie } from 'h3'

function resolveBackendBase(): string {
  const config = useRuntimeConfig()
  return `${(config.apiBase || 'https://olimpo.sysifosweb.cl/api/').replace(/\/+$/, '')}/`
}

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'auth_token')
  const base = resolveBackendBase()

  if (token) {
    try {
      await $fetch(`${base}auth/logout`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
      })
    } catch {
      // Si el token ya expiró o fue revocado en el backend, igual limpiamos las cookies locales.
    }
  }

  deleteCookie(event, 'auth_token', { path: '/' })
  deleteCookie(event, 'user_email', { path: '/' })
  deleteCookie(event, 'user_name', { path: '/' })

  return { ok: true }
})
