export default defineEventHandler(async (event) => {
  const apiBase = 'https://olimpo.sysifosweb.cl/api'
  const siteUrl = 'https://www.sysifosweb.cl'

  try {
    const response = await $fetch<{ data: Array<{
      slug: string
      title: string
      excerpt?: string
      content?: string
      featured_image?: string
      published_at?: string
      created_at?: string
      updated_at?: string
      category?: { name: string }
      user?: { name: string }
    }> }>(`${apiBase}/blog?per_page=50`)

    const posts = response?.data ?? []

    const items = posts.map((post) => {
      const pubDate = post.published_at || post.created_at
      const description = post.excerpt?.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') || ''
      return `
    <item>
      <title>${post.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description>${description}</description>
      ${post.featured_image ? `<enclosure url="${post.featured_image.replace(/&/g, '&amp;')}" type="image/jpeg" />` : ''}
      ${pubDate ? `<pubDate>${new Date(pubDate).toUTCString()}</pubDate>` : ''}
      <source url="${siteUrl}/blog/feed.xml">SysifosWeb Blog</source>
      ${post.category?.name ? `<category>${post.category.name}</category>` : ''}
    </item>`
    }).join('\n')

    const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>SysifosWeb Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Artículos sobre desarrollo web, software, ecommerce, SEO y estrategias digitales para empresas.</description>
    <language>es-cl</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/img/logo.png</url>
      <title>SysifosWeb Blog</title>
      <link>${siteUrl}/blog</link>
    </image>
${items}
  </channel>
</rss>`

    setHeader(event, 'Content-Type', 'application/rss+xml; charset=utf-8')
    setHeader(event, 'Cache-Control', 'public, max-age=3600')
    return feed
  } catch (error) {
    console.error('[RSS] Error fetching blog posts:', error)
    setHeader(event, 'Content-Type', 'application/rss+xml; charset=utf-8')
    return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>SysifosWeb Blog</title><link>${siteUrl}/blog</link><description>Blog de tecnología y desarrollo web</description></channel></rss>`
  }
})
