import { proxyRequest, getRequestURL, getCookie, getRequestHeaders } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const reqUrl = getRequestURL(event)
  const path = reqUrl.pathname.replace('/api/', '')
  const base = `${(config.apiBase || 'https://olimpo.sysifosweb.cl/api/').replace(/\/+$/, '')}/`
  const target = `${base}${path}${reqUrl.search}`

  const authToken = getCookie(event, 'auth_token')
  const incomingHeaders = getRequestHeaders(event)
  const forwardedHeaders: Record<string, string> = {}

  for (const [key, value] of Object.entries(incomingHeaders)) {
    const lower = key.toLowerCase()
    if (!value || lower === 'cookie' || lower === 'host' || lower === 'content-length') {
      continue
    }
    forwardedHeaders[key] = value
  }

  if (authToken && !forwardedHeaders.authorization && !forwardedHeaders.Authorization) {
    forwardedHeaders.Authorization = `Bearer ${authToken}`
  }

  try {
    return await proxyRequest(event, target, { headers: forwardedHeaders })
  } catch (error) {
    const proxyError = error as { message?: string, response?: { status?: number, statusText?: string } }
    console.error(`[API Proxy Error] ${target}:`, proxyError.message || error)
    throw createError({
      statusCode: proxyError.response?.status || 502,
      statusMessage: proxyError.response?.statusText || 'Bad Gateway',
    })
  }
})
