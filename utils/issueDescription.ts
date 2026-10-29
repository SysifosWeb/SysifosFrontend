export type DescriptionPart = { kind: 'text' | 'link' | 'image'; text: string; url?: string }

export function privateImageReference(value: string): { projectId: number; cardId: number; filename: string } | null {
    const match = value.match(/^kanban-image:([1-9]\d*)\/([1-9]\d*)\/([0-9a-f-]{36}\.(?:png|jpe?g|webp))$/)
    return match ? { projectId: Number(match[1]), cardId: Number(match[2]), filename: match[3]! } : null
}

// Never interpret HTML or allow executable/data URLs. Images use HTTPS only.
export function descriptionUrl(value: string, image = false): string | null {
    try {
        const url = new URL(value)
        if (url.username || url.password || !(['https:', ...(image ? [] : ['http:'])].includes(url.protocol))) return null
        return url.href
    } catch { return null }
}

export function githubDescriptionLabel(value: string): string | null {
    const safe = descriptionUrl(value)
    if (!safe) return null
    const url = new URL(safe)
    if (url.hostname !== 'github.com') return null
    const match = url.pathname.match(/^\/([\w.-]+)\/([\w.-]+)(?:\/(issues|pull)\/(\d+))?\/?$/)
    if (!match) return null
    const repo = `${match[1]}/${match[2]}`
    return match[3] ? `GitHub · ${repo} · ${match[3] === 'pull' ? 'PR' : 'Issue'} #${match[4]}` : `GitHub · ${repo}`
}

export function parseIssueDescription(value: string): DescriptionPart[] {
    const parts: DescriptionPart[] = []
    const pattern = /(!?)\[([^\]\n]*)\]\((https?:\/\/[^\s<>]+?|kanban-image:[^\s<>]+?)\)|https?:\/\/[^\s<>]+/gi
    let end = 0
    for (const match of value.matchAll(pattern)) {
        const index = match.index!
        if (index > end) parts.push({ kind: 'text', text: value.slice(end, index) })
        const markdown = match[3] !== undefined
        const image = markdown && match[1] === '!'
        const raw = markdown ? match[3]! : match[0].replace(/[.,;:!?]+$/, '')
        const url = image && privateImageReference(raw) ? raw : descriptionUrl(raw, image)
        if (url) {
            parts.push({ kind: image ? 'image' : 'link', text: markdown ? match[2]! : raw, url })
            if (!markdown && raw.length < match[0].length) parts.push({ kind: 'text', text: match[0].slice(raw.length) })
        } else parts.push({ kind: 'text', text: match[0] })
        end = index + match[0].length
    }
    if (end < value.length) parts.push({ kind: 'text', text: value.slice(end) })
    return parts
}
