import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:diagnostics_channel';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'xss';
import 'ipx';

const urls = defineEventHandler(async () => {
  var _a;
  const apiBase = "https://olimpo.sysifosweb.cl/api";
  const allPosts = [];
  try {
    let currentPage = 1;
    let lastPage = 1;
    do {
      const response = await $fetch(`${apiBase}/blog?page=${currentPage}`);
      if (response == null ? void 0 : response.data) {
        allPosts.push(...response.data);
      }
      lastPage = ((_a = response == null ? void 0 : response.meta) == null ? void 0 : _a.last_page) || 1;
      currentPage++;
    } while (currentPage <= lastPage);
    return allPosts.map((post) => {
      var _a2, _b;
      return {
        loc: `/blog/${post.slug}`,
        lastmod: (_b = (_a2 = post.updated_at) != null ? _a2 : post.published_at) != null ? _b : void 0,
        changefreq: "weekly",
        priority: 0.8
      };
    });
  } catch (error) {
    console.error("[Sitemap] Error fetching blog posts from API:", error);
    return [];
  }
});

export { urls as default };
//# sourceMappingURL=urls.mjs.map
