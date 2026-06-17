const sources = [
    {
        "sourceType": "user",
        "fetch": "/__sitemap__/urls"
    },
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [
            {
                "loc": "/",
                "priority": 1,
                "changefreq": "weekly"
            },
            {
                "loc": "/servicios",
                "priority": 0.9,
                "changefreq": "monthly"
            },
            {
                "loc": "/nosotros",
                "priority": 0.7,
                "changefreq": "monthly"
            },
            {
                "loc": "/portfolio",
                "priority": 0.7,
                "changefreq": "monthly"
            },
            {
                "loc": "/contacto",
                "priority": 0.8,
                "changefreq": "monthly"
            },
            {
                "loc": "/blog",
                "priority": 0.9,
                "changefreq": "daily"
            }
        ],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/"
            },
            {
                "loc": "/contacto"
            },
            {
                "loc": "/nosotros"
            },
            {
                "loc": "/sinapsys"
            },
            {
                "loc": "/portfolio"
            },
            {
                "loc": "/servicios"
            },
            {
                "loc": "/blog"
            },
            {
                "loc": "/admin"
            },
            {
                "loc": "/admin/login"
            },
            {
                "loc": "/admin/posts/edit"
            },
            {
                "loc": "/admin/posts"
            },
            {
                "loc": "/admin/posts/create"
            },
            {
                "loc": "/admin/contacts"
            },
            {
                "loc": "/admin/categories/edit"
            },
            {
                "loc": "/admin/categories"
            },
            {
                "loc": "/admin/categories/create"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
