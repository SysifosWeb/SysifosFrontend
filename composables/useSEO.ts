/**
 * Composable para gestión de SEO
 * Proporciona funciones para configurar meta tags, Open Graph, Twitter Cards y Schema.org
 */

export interface SEOConfig {
    title: string
    description: string
    keywords?: string
    image?: string
    url?: string
    type?: 'website' | 'article' | 'profile'
    author?: string
    publishedTime?: string
    modifiedTime?: string
    section?: string
    tags?: string[]
}

export interface SchemaConfig {
    type: 'WebPage' | 'Service' | 'Article' | 'FAQPage' | 'BreadcrumbList'
    data?: any
}

export const useSEO = () => {
    const config = useRuntimeConfig()
    const route = useRoute()

    /**
     * Configurar meta tags para SEO
     */
    const setMeta = (seoConfig: SEOConfig) => {
        const {
            title,
            description,
            keywords,
            image = '/img/og-image.jpg',
            url,
            type = 'website',
            author,
            publishedTime,
            modifiedTime,
            section,
            tags = []
        } = seoConfig

        const siteUrl = 'https://sysifosweb.cl'
        const fullUrl = url || `${siteUrl}${route.path}`
        const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`

        // Meta tags básicos
        const metaTags: any[] = [
            { name: 'description', content: description },
            { name: 'author', content: author || 'SysifosWeb' },

            // Open Graph (Facebook, LinkedIn)
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:type', content: type },
            { property: 'og:url', content: fullUrl },
            { property: 'og:image', content: fullImage },
            { property: 'og:site_name', content: 'SysifosWeb' },
            { property: 'og:locale', content: 'es_CL' },
            { property: 'fb:app_id', content: '1215450019494398' },

            // Twitter Cards
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: fullImage },

            // Adicionales
            { name: 'robots', content: 'index, follow' },
            { name: 'googlebot', content: 'index, follow' },
            { name: 'language', content: 'Spanish' },
            { name: 'geo.region', content: 'CL-CO' },
            { name: 'geo.placename', content: 'Coquimbo' },
            { name: 'geo.position', content: '-29.9533;-71.3436' },
        ]

        // Keywords si se proporcionan
        if (keywords) {
            metaTags.push({ name: 'keywords', content: keywords })
        }

        // Article meta tags
        if (type === 'article') {
            if (publishedTime) {
                metaTags.push({ property: 'article:published_time', content: publishedTime })
            }
            if (modifiedTime) {
                metaTags.push({ property: 'article:modified_time', content: modifiedTime })
            }
            if (author) {
                metaTags.push({ property: 'article:author', content: author })
            }
            if (section) {
                metaTags.push({ property: 'article:section', content: section })
            }
            tags.forEach(tag => {
                metaTags.push({ property: 'article:tag', content: tag })
            })
        }

        useHead({
            title,
            meta: metaTags,
            link: [
                { rel: 'canonical', href: fullUrl }
            ]
        })
    }

    /**
     * Generar Schema.org JSON-LD
     */
    const setSchema = (schemaConfig: SchemaConfig) => {
        const { type, data = {} } = schemaConfig
        const siteUrl = 'https://sysifosweb.cl'

        // Schema base de Organization (siempre presente)
        const organizationSchema = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SysifosWeb',
            url: siteUrl,
            logo: `${siteUrl}/img/logo.png`,
            description: 'Empresa de desarrollo de software, aplicaciones web y soluciones digitales en Chile',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Coquimbo',
                addressRegion: 'Coquimbo',
                addressCountry: 'CL'
            },
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+56-9-4910-9970',
                contactType: 'customer service',
                email: 'contacto@sysifosweb.cl',
                availableLanguage: ['Spanish']
            },
            sameAs: [
                'https://www.linkedin.com/company/sysifosweb',
                'https://github.com/sysifosweb'
            ]
        }

        let pageSchema: any = {}

        switch (type) {
            case 'WebPage':
                pageSchema = {
                    '@context': 'https://schema.org',
                    '@type': 'WebPage',
                    name: data.name || 'SysifosWeb',
                    description: data.description || '',
                    url: data.url || `${siteUrl}${route.path}`,
                    inLanguage: 'es-CL',
                    isPartOf: {
                        '@type': 'WebSite',
                        name: 'SysifosWeb',
                        url: siteUrl
                    }
                }
                break

            case 'Service':
                pageSchema = {
                    '@context': 'https://schema.org',
                    '@type': 'Service',
                    name: data.name || 'Desarrollo de Software',
                    description: data.description || '',
                    provider: {
                        '@type': 'Organization',
                        name: 'SysifosWeb'
                    },
                    areaServed: {
                        '@type': 'Country',
                        name: 'Chile'
                    },
                    serviceType: data.serviceType || 'Desarrollo Web'
                }
                break

            case 'FAQPage':
                pageSchema = {
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: data.questions || []
                }
                break

            case 'BreadcrumbList':
                pageSchema = {
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: data.items || []
                }
                break
        }

        useHead({
            script: [
                {
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify(organizationSchema)
                },
                ...(Object.keys(pageSchema).length > 0 ? [{
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify(pageSchema)
                }] : [])
            ]
        })
    }

    return {
        setMeta,
        setSchema
    }
}
