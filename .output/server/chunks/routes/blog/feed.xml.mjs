import { f as defineEventHandler, I as setHeader } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'ipx';

const feed_xml = defineEventHandler(async (event) => {
  var _a;
  const apiBase = "https://olimpo.sysifosweb.cl/api";
  const siteUrl = "https://www.sysifosweb.cl";
  try {
    const response = await $fetch(`${apiBase}/blog?per_page=50`);
    const posts = (_a = response == null ? void 0 : response.data) != null ? _a : [];
    const items = posts.map((post) => {
      var _a2, _b;
      const pubDate = post.published_at || post.created_at;
      const description = ((_a2 = post.excerpt) == null ? void 0 : _a2.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")) || "";
      return `
    <item>
      <title>${post.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description>${description}</description>
      ${post.featured_image ? `<enclosure url="${post.featured_image.replace(/&/g, "&amp;")}" type="image/jpeg" />` : ""}
      ${pubDate ? `<pubDate>${new Date(pubDate).toUTCString()}</pubDate>` : ""}
      <source url="${siteUrl}/blog/feed.xml">SysifosWeb Blog</source>
      ${((_b = post.category) == null ? void 0 : _b.name) ? `<category>${post.category.name}</category>` : ""}
    </item>`;
    }).join("\n");
    const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>SysifosWeb Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Art\xEDculos sobre desarrollo web, software, ecommerce, SEO y estrategias digitales para empresas.</description>
    <language>es-cl</language>
    <lastBuildDate>${(/* @__PURE__ */ new Date()).toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/img/logo.png</url>
      <title>SysifosWeb Blog</title>
      <link>${siteUrl}/blog</link>
    </image>
${items}
  </channel>
</rss>`;
    setHeader(event, "Content-Type", "application/rss+xml; charset=utf-8");
    setHeader(event, "Cache-Control", "public, max-age=3600");
    return feed;
  } catch (error) {
    console.error("[RSS] Error fetching blog posts:", error);
    setHeader(event, "Content-Type", "application/rss+xml; charset=utf-8");
    return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>SysifosWeb Blog</title><link>${siteUrl}/blog</link><description>Blog de tecnolog\xEDa y desarrollo web</description></channel></rss>`;
  }
});

export { feed_xml as default };
//# sourceMappingURL=feed.xml.mjs.map
