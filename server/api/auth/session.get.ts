import { getCookie, deleteCookie } from 'h3'

function resolveBackendBase(): string {
  const config = useRuntimeConfig()
  return `${(config.apiBase || 'https://olimpo.sysifosweb.cl/api/').replace(/\/+$/, '')}/`
}

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'auth_token')
  if (!token) {
    return { authenticated: false, user: null }
  }

  const base = resolveBackendBase()

  try {
    const user = await $fetch<Record<string, unknown>>(`${base}auth/me`, {
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
    })

    return { authenticated: true, user }
  } catch (error: any) {
    const status = error?.response?.status || error?.statusCode
    if (status === 401 || status === 403) {
      deleteCookie(event, 'auth_token', { path: '/' })
      deleteCookie(event, 'user_email', { path: '/' })
      deleteCookie(event, 'user_name', { path: '/' })
    }

    return { authenticated: false, user: null }
  }
})
