/**
 * Endpoint requerido por @nuxtjs/sitemap para descubrir URLs dinámicas.
 * El módulo consulta /__sitemap__/urls.json en tiempo de build y en runtime.
 * Documentación: https://nuxtseo.com/sitemap/guides/dynamic-urls
 */
export default defineEventHandler(async () => {
  const apiBase = 'https://olimpo.sysifosweb.cl/api'
  const allPosts: Array<{ slug: string; updated_at?: string; published_at?: string }> = []

  try {
    let currentPage = 1
    let lastPage = 1

    do {
      const response = await $fetch<{ 
        data: Array<{ slug: string; updated_at?: string; published_at?: string }>,
        meta: { last_page: number }
      }>(`${apiBase}/blog?page=${currentPage}`)
      
      if (response?.data) {
        allPosts.push(...response.data)
      }
      
      lastPage = response?.meta?.last_page || 1
      currentPage++
    } while (currentPage <= lastPage)

    return allPosts.map((post) => ({
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
