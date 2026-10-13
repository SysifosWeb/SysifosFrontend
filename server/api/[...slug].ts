import { proxyRequest, getRequestURL } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const reqUrl = getRequestURL(event)
  const path = reqUrl.pathname.replace('/api/', '')
  const base = `${(config.apiBase || 'https://olimpo.sysifosweb.cl/api/').replace(/\/+$/, '')}/`
  const target = `${base}${path}${reqUrl.search}`

  try {
    return await proxyRequest(event, target)
  } catch (error) {
    const proxyError = error as { message?: string, response?: { status?: number, statusText?: string } }
    console.error(`[API Proxy Error] ${target}:`, proxyError.message || error)
    throw createError({
      statusCode: proxyError.response?.status || 502,
      statusMessage: proxyError.response?.statusText || 'Bad Gateway'
    })
  }
})
