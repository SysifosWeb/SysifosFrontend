import { fetchPublicBlog } from '~/utils/publicBlog'

export default defineEventHandler(async (event) => {
  const apiBase = useRuntimeConfig().apiBase.replace(/\/+$/, '')
  const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
  const siteUrl = 'https://sysifosweb.cl'

  try {
    const posts = await fetchPublicBlog(page => $fetch(`${apiBase}/blog`, {
      query: { page, per_page: 50 }, timeout: 8000, retry: 0,
    }), 50)

    const items = posts.map((post) => {
      const date = new Date(post.published_at || post.created_at || '')
      const pubDate = Number.isNaN(date.getTime()) ? null : date.toUTCString()
      const postUrl = escapeXml(`${siteUrl}/blog/${encodeURIComponent(post.slug)}`)
      const description = escapeXml(post.excerpt || '')
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${description}</description>

      ${pubDate ? `<pubDate>${pubDate}</pubDate>` : ''}
      <source url="${siteUrl}/blog/feed.xml">SysifosWeb Blog</source>
      ${post.category?.name ? `<category>${escapeXml(post.category.name)}</category>` : ''}
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
      <url>${siteUrl}/img/brand/logo.svg</url>
      <title>SysifosWeb Blog</title>
      <link>${siteUrl}/blog</link>
    </image>
${items}
  </channel>
</rss>`

    setHeader(event, 'Content-Type', 'application/rss+xml; charset=utf-8')
    setHeader(event, 'Cache-Control', 'public, max-age=3600')
    return feed
  } catch {
    setHeader(event, 'Retry-After', 60)
    setHeader(event, 'Cache-Control', 'no-store')
    throw createError({ statusCode: 503, statusMessage: 'Blog feed temporarily unavailable' })
  }
})
