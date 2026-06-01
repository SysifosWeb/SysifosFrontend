import { proxyRequest, getRequestURL } from 'h3'

export default defineEventHandler(async (event) => {
  const reqUrl = getRequestURL(event)
  const path = reqUrl.pathname.replace('/api/', '')
  const target = `https://olimpo.sysifosweb.cl/api/${path}${reqUrl.search}`

  try {
    return await proxyRequest(event, target)
  } catch (error) {
    console.error(`[API Proxy Error] ${target}:`, error.message || error)
    throw createError({
      statusCode: error.response?.status || 502,
      statusMessage: error.response?.statusText || 'Bad Gateway'
    })
  }
})
