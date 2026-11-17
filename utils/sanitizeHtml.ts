const DANGEROUS_BLOCKS = /<(script|style|iframe|object|embed|applet|svg|math|form|input|textarea|select|button)\b[^>]*>[\s\S]*?<\/\1>|<(script|style|iframe|object|embed|applet|svg|math|form|input|textarea|select|button)\b[^>]*\/?>/gi
const EVENT_ATTRS = /\s+on[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi
const JS_URIS = /\s+(href|src)\s*=\s*(?:"\s*(?:javascript|vbscript|data):[^"]*"|'\s*(?:javascript|vbscript|data):[^']*'|(?:javascript|vbscript|data):[^\s>]+)/gi

/**
 * Defensa en profundidad en cliente/SSR sobre el HTML ya sanitizado por el backend.
 * Elimina etiquetas activas, atributos on* y URIs javascript:/data:/vbscript:.
 */
export function sanitizeArticleHtml(html: string | null | undefined): string {
  if (!html) return ''
  return html
    .replace(DANGEROUS_BLOCKS, '')
    .replace(EVENT_ATTRS, '')
    .replace(JS_URIS, '')
}
