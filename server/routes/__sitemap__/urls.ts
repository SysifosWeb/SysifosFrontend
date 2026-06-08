/**
 * Endpoint requerido por @nuxtjs/sitemap para descubrir URLs dinámicas.
 * El módulo consulta /__sitemap__/urls.json en tiempo de build y en runtime.
 * Documentación: https://nuxtseo.com/sitemap/guides/dynamic-urls
 */
export default defineEventHandler(async () => {
  const apiBase = 'https://olimpo.sysifosweb.cl/api'

  try {
    const response = await $fetch<{ data: Array<{ slug: string; updated_at?: string; published_at?: string }> }>(
      `${apiBase}/blog?per_page=500`
    )

    const posts = response?.data ?? []

    return posts.map((post) => ({
      loc: `/blog/${post.slug}`,
      lastmod: post.updated_at ?? post.published_at ?? undefined,
      changefreq: 'weekly',
      priority: 0.8,
    }))
  } catch (error) {
    console.error('[Sitemap] Error fetching blog posts from API:', error)
    return []
  }
})
