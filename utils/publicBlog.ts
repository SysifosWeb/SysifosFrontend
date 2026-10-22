export interface PublicBlogPost {
  id?: number
  slug: string
  title: string
  excerpt?: string
  published_at?: string
  created_at?: string
  updated_at?: string
  category?: { name: string }
  [key: string]: any
}

interface BlogPage {
  data: PublicBlogPost[]
  meta?: { last_page?: number }
  last_page?: number
}

/** Supports both the bounded API and older deployments that still return ten posts per page. */
export async function fetchPublicBlog(
  fetchPage: (page: number) => Promise<unknown>,
  limit = Infinity,
): Promise<PublicBlogPost[]> {
  const posts: PublicBlogPost[] = []
  let lastPage = 1
  for (let page = 1; page <= lastPage; page++) {
    const response = await fetchPage(page) as BlogPage
    if (!response || !Array.isArray(response.data) || response.data.some(post =>
      !post || typeof post.slug !== 'string' || !post.slug || typeof post.title !== 'string')) {
      throw new Error('Invalid public blog response')
    }
    const reportedLastPage = response.meta?.last_page ?? response.last_page ?? 1
    if (!Number.isInteger(reportedLastPage) || reportedLastPage < page || reportedLastPage > 100) {
      throw new Error('Invalid public blog pagination')
    }
    lastPage = reportedLastPage
    posts.push(...response.data)
    if (posts.length >= limit) break
  }
  return posts.slice(0, limit)
}
