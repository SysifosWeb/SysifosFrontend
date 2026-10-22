import type { SitemapUrlInput } from '@nuxtjs/sitemap'

export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('sitemap:sources', async (context) => {
    // The module otherwise swallows failed fetch sources and serves a partial sitemap with HTTP 200.
    try {
      const urls = await context.event.$fetch<SitemapUrlInput[]>('/__sitemap__/urls', { retry: 0 })
      context.sources.push({ context: { name: 'public-blog' }, urls })
    } catch {
      setHeader(context.event, 'Retry-After', 60)
      setHeader(context.event, 'Cache-Control', 'no-store')
      throw createError({ statusCode: 503, statusMessage: 'Sitemap temporarily unavailable' })
    }
  })
})
