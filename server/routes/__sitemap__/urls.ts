import { fetchPublicBlog } from '~/utils/publicBlog'

export default defineEventHandler(async (event) => {
  const apiBase = useRuntimeConfig().apiBase.replace(/\/+$/, '')
  try {
    const posts = await fetchPublicBlog(page => $fetch(`${apiBase}/blog`, {
      query: { page, per_page: 100 }, timeout: 8000, retry: 0,
    }))
    return posts.map(post => ({
      loc: `/blog/${post.slug}`,
      lastmod: post.updated_at ?? post.published_at ?? undefined,
      changefreq: 'weekly',
      priority: 0.8,
    }))
  } catch {
    setHeader(event, 'Retry-After', 60)
    setHeader(event, 'Cache-Control', 'no-store')
    throw createError({ statusCode: 503, statusMessage: 'Blog sitemap temporarily unavailable' })
  }
})
