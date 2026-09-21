import { proxyRequest, getRequestURL } from 'h3'

export default defineEventHandler(async (event) => {
  const reqUrl = getRequestURL(event)
  const path = reqUrl.pathname.replace('/api/', '')
  const target = `https://olimpo.sysifosweb.cl/api/${path}${reqUrl.search}`

  try {
    return await proxyRequest(event, target)
  } catch (error) {
    const proxyError = error as { message?: string; response?: { status?: number; statusText?: string } }
    console.error(`[API Proxy Error] ${target}:`, proxyError.message || error)
    throw createError({
      statusCode: proxyError.response?.status || 502,
      statusMessage: proxyError.response?.statusText || 'Bad Gateway'
    })
  }
})
