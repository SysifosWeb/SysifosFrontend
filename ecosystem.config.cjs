module.exports = {
    apps: [
        {
            name: 'sysifosweb',
            port: 3000,
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            env: {
                NODE_ENV: 'production',
                PORT: 3000,
                NUXT_PUBLIC_API_URL: 'https://sysifosweb.cl/api/'
            }
        }
    ]
}
