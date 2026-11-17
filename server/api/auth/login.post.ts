import { readBody, setCookie, getRequestHeader } from 'h3'

const REMEMBER_MAX_AGE = 60 * 60 * 24 * 30 // 30 días

function resolveBackendBase(): string {
  const config = useRuntimeConfig()
  return `${(config.apiBase || 'https://olimpo.sysifosweb.cl/api/').replace(/\/+$/, '')}/`
}

export default defineEventHandler(async (event) => {
  const body = await readBody<{ email?: string, password?: string, remember?: boolean }>(event)
  const base = resolveBackendBase()
  const isSecure = process.env.NODE_ENV === 'production' || getRequestHeader(event, 'x-forwarded-proto') === 'https'

  try {
    const response = await $fetch<{
      token?: string
      access_token?: string
      data?: { token?: string, user?: Record<string, unknown> }
      user?: Record<string, unknown>
    }>(`${base}auth/login`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: {
        email: body?.email,
        password: body?.password,
        remember: Boolean(body?.remember),
      },
    })

    const token = response.token || response.data?.token || response.access_token
    if (!token) {
      throw createError({ statusCode: 502, statusMessage: 'Token no recibido desde el backend' })
    }

    let user = response.user || response.data?.user
    if (!user) {
      user = await $fetch<Record<string, unknown>>(`${base}auth/me`, {
        headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
      })
    }

    const cookieOptions = {
      httpOnly: true,
      secure: isSecure,
      sameSite: 'lax' as const,
      path: '/',
      ...(body?.remember ? { maxAge: REMEMBER_MAX_AGE } : {}),
    }

    setCookie(event, 'auth_token', token, cookieOptions)

    if (typeof user?.email === 'string') {
      setCookie(event, 'user_email', user.email, {
        httpOnly: false,
        secure: isSecure,
        sameSite: 'lax',
        path: '/',
        ...(body?.remember ? { maxAge: REMEMBER_MAX_AGE } : {}),
      })
    }

    if (typeof user?.name === 'string') {
      setCookie(event, 'user_name', user.name, {
        httpOnly: false,
        secure: isSecure,
        sameSite: 'lax',
        path: '/',
        ...(body?.remember ? { maxAge: REMEMBER_MAX_AGE } : {}),
      })
    }

    return { user }
  } catch (error: any) {
    const status = error?.response?.status || error?.statusCode || 502
    const data = error?.response?._data || error?.data
    throw createError({
      statusCode: status,
      statusMessage: data?.message || 'Error de autenticación',
      data,
    })
  }
})
