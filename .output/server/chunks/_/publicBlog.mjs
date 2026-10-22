async function fetchPublicBlog(fetchPage, limit = Infinity) {
  var _a, _b, _c;
  const posts = [];
  let lastPage = 1;
  for (let page = 1; page <= lastPage; page++) {
    const response = await fetchPage(page);
    if (!response || !Array.isArray(response.data) || response.data.some((post) => !post || typeof post.slug !== "string" || !post.slug || typeof post.title !== "string")) {
      throw new Error("Invalid public blog response");
    }
    const reportedLastPage = (_c = (_b = (_a = response.meta) == null ? void 0 : _a.last_page) != null ? _b : response.last_page) != null ? _c : 1;
    if (!Number.isInteger(reportedLastPage) || reportedLastPage < page || reportedLastPage > 100) {
      throw new Error("Invalid public blog pagination");
    }
    lastPage = reportedLastPage;
    posts.push(...response.data);
    if (posts.length >= limit) break;
  }
  return posts.slice(0, limit);
}

export { fetchPublicBlog as f };
//# sourceMappingURL=publicBlog.mjs.map
