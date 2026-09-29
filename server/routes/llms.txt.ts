interface BlogPost {
  slug: string
  title: string
  excerpt?: string
  published_at?: string
  created_at?: string
  category?: { name?: string }
}

const SITE_URL = 'https://sysifosweb.cl'

const CORE = `# SysifosWeb

> Agencia de desarrollo de software en La Serena, Chile. Especialistas en páginas web profesionales, tiendas online y software a medida para empresas.

SysifosWeb (Sysifos) construye productos digitales escalables: sitios web de alto rendimiento, ecommerce autoadministrable y sistemas empresariales a medida. Trabajamos con Laravel, Nuxt/Vue.js, React y Flutter, con foco en performance, SEO técnico y arquitecturas robustas.

## Datos de contacto

- Sitio web: ${SITE_URL}
- Email: contacto@sysifosweb.cl
- Teléfono: +56 9 8502 1549
- WhatsApp: https://wa.me/56985021549
- Ubicación: La Serena, Región de Coquimbo, Chile
- Horario: Lunes a viernes, 09:00–18:00
- Tiempo de respuesta: menos de 24 horas

## Servicios

- [Servicios](${SITE_URL}/servicios): listado completo de servicios y proceso de trabajo
- Páginas Web Profesionales: diseño mobile-first, copywriting persuasivo y estructura lista para SEO
- Tiendas Online y Ecommerce: proceso de compra optimizado, integración de pagos y panel autoadministrable
- Sistemas y Software a Medida: desarrollo full-stack y automatización de procesos empresariales
- Mantenimiento web y soporte post-lanzamiento

## Páginas principales

- [Inicio](${SITE_URL}/): propuesta de valor, unidades de negocio y testimonios de clientes
- [Nosotros](${SITE_URL}/nosotros): historia, equipo de ingenieros y metodología de trabajo
- [Portfolio](${SITE_URL}/portfolio): casos de éxito reales (Ansar Automotriz, Maestranza Faremin, StahlForm)
- [Contacto](${SITE_URL}/contacto): formulario de cotización para proyectos web y software
- [Blog](${SITE_URL}/blog): artículos sobre desarrollo web, software, ecommerce y SEO
- [Sinapsys](${SITE_URL}/sinapsys): hub de enlaces y recursos
- [Política de Privacidad](${SITE_URL}/privacidad): tratamiento de datos personales conforme a la Ley 19.628 y la Ley 21.719 de Chile

## Recursos para LLMs y crawlers

- [RSS del blog](${SITE_URL}/blog/feed.xml): últimos artículos en formato RSS 2.0
- [Sitemap](${SITE_URL}/sitemap.xml): todas las URLs indexables del sitio
- Contenido del blog: HTML renderizado en servidor (SSR), sin paywall ni registro
- Idioma: español (es-CL)
`

export default defineEventHandler(async (event) => {
  let blogSection = ''

  try {
    const response = await $fetch<{ data: BlogPost[] }>(
      `https://olimpo.sysifosweb.cl/api/blog?per_page=20`
    )
    const posts = response?.data ?? []

    if (posts.length > 0) {
      const lines = posts.map((p) => {
        const title = p.title.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1').trim()
        const excerpt = (p.excerpt || '').replace(/\s+/g, ' ').trim().slice(0, 160)
        return `- [${title}](${SITE_URL}/blog/${p.slug})${excerpt ? `: ${excerpt}` : ''}`
      })
      blogSection = `\n## Artículos recientes del blog\n\n${lines.join('\n')}\n`
    }
  } catch {
    blogSection = `\n## Artículos recientes del blog\n\n- [Ver blog](${SITE_URL}/blog): listado completo de artículos\n`
  }

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')
  return CORE + blogSection
})
