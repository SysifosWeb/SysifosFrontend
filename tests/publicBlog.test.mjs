import { test } from 'node:test'
import assert from 'node:assert/strict'
import { fetchPublicBlog } from '../utils/publicBlog.ts'

const post = id => ({ id, title: `Artículo ${id}`, slug: `articulo-${id}` })

test('loads a complete catalogue in one request when supported', async () => {
  const calls = []
  const posts = await fetchPublicBlog(async page => {
    calls.push(page)
    return { data: [post(1), post(2)], meta: { last_page: 1 } }
  })
  assert.deepEqual(calls, [1])
  assert.equal(posts.length, 2)
})

test('follows legacy pagination and respects the RSS item limit', async () => {
  const calls = []
  const posts = await fetchPublicBlog(async page => {
    calls.push(page)
    return { data: [post(page * 2 - 1), post(page * 2)], last_page: 4 }
  }, 3)
  assert.deepEqual(calls, [1, 2])
  assert.deepEqual(posts.map(p => p.id), [1, 2, 3])
})

test('a legitimately empty catalogue remains valid', async () => {
  assert.deepEqual(await fetchPublicBlog(async () => ({ data: [], last_page: 1 })), [])
})

test('does not return a partial catalogue when a later request fails', async () => {
  await assert.rejects(fetchPublicBlog(async page => {
    if (page === 2) throw new Error('API unavailable')
    return { data: [post(1)], last_page: 2 }
  }), /API unavailable/)
})

for (const response of [null, {}, { data: null }, { data: [null] }, { data: [{ title: 'No slug' }] },
  { data: [], last_page: 101 }, { data: [], last_page: 0 }, { data: [], last_page: '2' }]) {
  test(`rejects malformed API data: ${JSON.stringify(response)}`, async () => {
    await assert.rejects(fetchPublicBlog(async () => response), /Invalid public blog/)
  })
}
