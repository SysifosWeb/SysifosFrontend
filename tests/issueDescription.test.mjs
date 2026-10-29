import { test } from 'node:test'
import assert from 'node:assert/strict'
import { descriptionUrl, githubDescriptionLabel, parseIssueDescription, privateImageReference } from '../utils/issueDescription.ts'

test('keeps legacy text and line breaks unchanged', () => {
    const text = 'Contexto\nObjetivos <script>alert(1)</script>'
    assert.deepEqual(parseIssueDescription(text), [{ kind: 'text', text }])
})

test('recognizes private evidence only as an image with a constrained reference', () => {
    const reference = 'kanban-image:2/3/12345678-1234-1234-1234-123456789abc.png'
    assert.deepEqual(privateImageReference(reference), { projectId: 2, cardId: 3, filename: '12345678-1234-1234-1234-123456789abc.png' })
    assert.deepEqual(parseIssueDescription(`![Evidence](${reference})`), [{ kind: 'image', text: 'Evidence', url: reference }])
    for (const invalid of ['kanban-image:2/3/../../secret', 'kanban-image:2/3/file.svg', 'kanban-image:0/3/12345678-1234-1234-1234-123456789abc.png']) assert.equal(privateImageReference(invalid), null)
    assert.ok(parseIssueDescription(`[Link](${reference})`).every(part => part.kind === 'text'))
})

test('renders markdown images, links and bare URLs without HTML', () => {
    const parts = parseIssueDescription('Antes ![Captura](https://example.com/a.png) [Docs](https://example.com) https://github.com/org/repo.')
    assert.equal(parts[1].kind, 'image')
    assert.equal(parts[1].text, 'Captura')
    assert.equal(parts[3].kind, 'link')
    assert.equal(parts[5].url, 'https://github.com/org/repo')
    assert.equal(parts[6].text, '.')
})

test('rejects dangerous URLs, credentials and insecure images', () => {
    for (const url of ['javascript:alert(1)', 'data:image/svg+xml,hi', '//example.com/a', 'https://user:pass@example.com']) assert.equal(descriptionUrl(url), null)
    assert.equal(descriptionUrl('http://example.com/a.png', true), null)
    assert.equal(descriptionUrl('https://example.com/a.png', true), 'https://example.com/a.png')
    assert.deepEqual(parseIssueDescription('![No](http://example.com/a.png)'), [{ kind: 'text', text: '![No](http://example.com/a.png)' }])
    assert.ok(parseIssueDescription('[No](javascript:alert(1))').every(part => part.kind === 'text'))
})

test('recognizes only exact GitHub repository, issue and pull request URLs', () => {
    assert.equal(githubDescriptionLabel('https://github.com/org/repo'), 'GitHub · org/repo')
    assert.equal(githubDescriptionLabel('https://github.com/org/repo/issues/42#comment'), 'GitHub · org/repo · Issue #42')
    assert.equal(githubDescriptionLabel('https://github.com/org/repo/pull/7'), 'GitHub · org/repo · PR #7')
    for (const url of ['https://github.com.evil.test/org/repo', 'https://github.com/org/repo/tree/main', 'https://example.com/org/repo']) assert.equal(githubDescriptionLabel(url), null)
})
