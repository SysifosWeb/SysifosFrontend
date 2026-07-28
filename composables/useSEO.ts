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
    type: 'WebPage' | 'Service' | 'Article' | 'FAQPage' | 'BreadcrumbList' | 'LocalBusiness' | 'Review'
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
            image = '/img/og-default.jpg',
            url,
            type = 'website',
            author,
            publishedTime,
            modifiedTime,
            section,
            tags = []
        } = seoConfig

        // Dominio canónico unificado (siempre con www)
        const siteUrl = 'https://www.sysifosweb.cl'
        const fullUrl = url || `${siteUrl}${route.path}`
        const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`

        // Meta tags básicos
        const metaTags: any[] = [
            { name: 'description', content: description },
            { name: 'author', content: author || 'Sysifos Web' },

            // Open Graph (Facebook, Instagram, LinkedIn)
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:type', content: type },
            { property: 'og:url', content: fullUrl },
            { name: 'image', property: 'og:image', content: fullImage },
            { property: 'og:image', content: fullImage },
            { property: 'og:image:secure_url', content: fullImage },
            { property: 'og:image:type', content: 'image/jpeg' },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { property: 'og:image:alt', content: title },
            { property: 'og:site_name', content: 'SysifosWeb' },
            { property: 'og:locale', content: 'es_CL' },
            { property: 'fb:app_id', content: '1215450019494398' },

            // Twitter / X Cards
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@sysifosweb' },
            { name: 'twitter:creator', content: '@sysifosweb' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: fullImage },
            { name: 'twitter:image:alt', content: title },

            // Adicionales
            { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
            { name: 'googlebot', content: 'index, follow' },
            { name: 'language', content: 'Spanish' },
            { name: 'geo.region', content: 'CL-CO' },
            { name: 'geo.placename', content: 'Coquimbo, Chile' },
            { name: 'geo.position', content: '-29.9533;-71.3436' },
        ]

        // Keywords si se proporcionan
        if (keywords) {
            metaTags.push({ name: 'keywords', content: keywords })
        }

        // Publish date & Modified date for all pages (LinkedIn requires it)
        const defaultDate = '2024-06-01T12:00:00Z'
        metaTags.push({ property: 'article:published_time', content: publishedTime || defaultDate })
        metaTags.push({ property: 'article:modified_time', content: modifiedTime || defaultDate })

        // Article specific meta tags
        if (type === 'article') {
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
        const siteUrl = 'https://www.sysifosweb.cl'

        // Schema base de Organization (siempre presente)
        const organizationSchema = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Sysifos Web',
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
                telephone: '+56-9-8502-1549',
                contactType: 'customer service',
                email: 'contacto@sysifosweb.cl',
                availableLanguage: ['Spanish']
            },
            sameAs: [
                'https://www.linkedin.com/company/sysifosweb',
                'https://github.com/sysifosweb'
            ]
        }

        const websiteSchema = {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Sysifos Web',
            url: siteUrl,
            potentialAction: {
                '@type': 'SearchAction',
                target: `${siteUrl}/servicios?q={search_term_string}`,
                'query-input': 'required name=search_term_string'
            }
        }

        const schemas: any[] = [organizationSchema, websiteSchema]

        switch (type) {
            case 'WebPage':
                schemas.push({
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
                    },
                    ...(data.breadcrumb ? {
                        breadcrumb: {
                            '@type': 'BreadcrumbList',
                            itemListElement: data.breadcrumb
                        }
                    } : {})
                })
                break

            case 'Service': {
                const services = data.services || [data]
                services.forEach((svc: any) => {
                    schemas.push({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: svc.name || 'Desarrolladores de Software',
                        description: svc.description || '',
                        provider: {
                            '@type': 'Organization',
                            name: 'Sysifos Web',
                            sameAs: siteUrl
                        },
                        areaServed: {
                            '@type': 'Country',
                            name: 'Chile'
                        },
                        serviceType: svc.serviceType || 'Desarrolladores de Software',
                        ...(svc.image ? { image: svc.image.startsWith('http') ? svc.image : `${siteUrl}${svc.image}` } : {}),
                        ...(svc.offer ? {
                            offers: {
                                '@type': 'Offer',
                                price: svc.offer.price,
                                priceCurrency: svc.offer.currency || 'CLP',
                                description: svc.offer.description
                            }
                        } : {})
                    })
                })
                break
            }

            case 'FAQPage':
                schemas.push({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    mainEntity: data.questions || []
                })
                break

            case 'BreadcrumbList':
                schemas.push({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: data.items || []
                })
                break

            case 'LocalBusiness':
                schemas.push({
                    '@context': 'https://schema.org',
                    '@type': 'LocalBusiness',
                    '@id': `${siteUrl}#localbusiness`,
                    name: data.name || 'Sysifos Web',
                    description: data.description || 'Empresa de desarrollo de software, aplicaciones web y soluciones digitales en Chile',
                    url: siteUrl,
                    telephone: data.telephone || '+56-9-8502-1549',
                    email: data.email || 'contacto@sysifosweb.cl',
                    image: data.image || `${siteUrl}/img/logo.png`,
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: data.addressLocality || 'La Serena',
                        addressRegion: data.addressRegion || 'Coquimbo',
                        addressCountry: data.addressCountry || 'CL'
                    },
                    openingHoursSpecification: data.openingHours || [
                        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' }
                    ],
                    geo: data.geo || {
                        '@type': 'GeoCoordinates',
                        latitude: '-29.9533',
                        longitude: '-71.3436'
                    },
                    sameAs: data.sameAs || [
                        'https://www.facebook.com/profile.php?id=61567859694020',
                        'https://www.instagram.com/sysifosweb_/',
                        'https://www.linkedin.com/company/sysifosweb',
                        'https://www.tiktok.com/@sysifosweb'
                    ],
                    priceRange: data.priceRange || '$$'
                })
                break

            case 'Review':
                (data.reviews || []).forEach((review: any) => {
                    schemas.push({
                        '@context': 'https://schema.org',
                        '@type': 'Review',
                        itemReviewed: {
                            '@type': 'LocalBusiness',
                            '@id': `${siteUrl}#localbusiness`,
                            name: 'Sysifos Web'
                        },
                        author: {
                            '@type': 'Person',
                            name: review.author
                        },
                        ...(review.authorUrl ? { url: review.authorUrl } : {}),
                        reviewRating: {
                            '@type': 'Rating',
                            ratingValue: review.rating || '5',
                            bestRating: '5'
                        },
                        reviewBody: review.text || ''
                    })
                })
                break
        }

        useHead({
            script: schemas.map(schema => ({
                type: 'application/ld+json',
                innerHTML: JSON.stringify(schema)
            }))
        })
    }

    return {
        setMeta,
        setSchema
    }
}
