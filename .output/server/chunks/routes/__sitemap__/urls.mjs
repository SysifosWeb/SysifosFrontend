import { d as defineEventHandler, u as useRuntimeConfig, s as setHeader, c as createError } from '../../nitro/nitro.mjs';
import { f as fetchPublicBlog } from '../../_/publicBlog.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'lru-cache';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'xss';
import 'ipx';

const urls = defineEventHandler(async (event) => {
  const apiBase = useRuntimeConfig().apiBase.replace(/\/+$/, "");
  try {
    const posts = await fetchPublicBlog((page) => $fetch(`${apiBase}/blog`, {
      query: { page, per_page: 100 },
      timeout: 8e3,
      retry: 0
    }));
    return posts.map((post) => {
      var _a, _b;
      return {
        loc: `/blog/${post.slug}`,
        lastmod: (_b = (_a = post.updated_at) != null ? _a : post.published_at) != null ? _b : void 0,
        changefreq: "weekly",
        priority: 0.8
      };
    });
  } catch {
    setHeader(event, "Retry-After", 60);
    setHeader(event, "Cache-Control", "no-store");
    throw createError({ statusCode: 503, statusMessage: "Blog sitemap temporarily unavailable" });
  }
});

export { urls as default };
//# sourceMappingURL=urls.mjs.map
