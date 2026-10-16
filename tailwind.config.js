/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            colors: {
                accent: 'var(--accent)',
                content: 'var(--text-main)',
                subdued: 'var(--text-secondary)',
                panel: 'var(--bg-surface)',
                quiet: 'var(--bg-elevated)',
                line: 'var(--border)',
                action: 'var(--button-text)',
                'heading-start': 'var(--heading-gradient-start)',
                'heading-end': 'var(--heading-gradient-end)',
                secondary: 'var(--secondary)',
                primary: 'var(--primary)',
                detail: {
                    primary: 'var(--detail-primary)',
                    secondary: 'var(--detail-secondary)',
                    dark: 'var(--detail-dark)',
                    quaternary: 'var(--detail-quaternary)',
                },
                background: {
                    light: 'var(--background-light)',
                    medium: 'var(--background-medium)',
                    dark: 'var(--background-dark)',
                },
                text: {
                    light: 'var(--text-light)',
                    medium: 'var(--text-medium)',
                    dark: 'var(--text-dark)',
                    muted: 'var(--text-muted)'
                },
                dark: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Poppins', 'sans-serif'],
                tech: ['"Space Grotesk"', 'sans-serif'],
            },
            fontSize: {
                hero: ['var(--fs-hero)', { lineHeight: 'var(--lh-hero)', letterSpacing: 'var(--ls-hero)', fontWeight: 'var(--fw-hero)' }],
                h1: ['var(--fs-h1)', { lineHeight: 'var(--lh-h1)', letterSpacing: 'var(--ls-h1)', fontWeight: 'var(--fw-h1)' }],
                h2: ['var(--fs-h2)', { lineHeight: 'var(--lh-h2)', letterSpacing: 'var(--ls-h2)', fontWeight: 'var(--fw-h2)' }],
                h3: ['var(--fs-h3)', { lineHeight: 'var(--lh-h3)', letterSpacing: 'var(--ls-h3)', fontWeight: 'var(--fw-h3)' }],
                lead: ['var(--fs-lead)', { lineHeight: 'var(--lh-lead)', fontWeight: 'var(--fw-lead)' }],
                body: ['var(--fs-body)', { lineHeight: 'var(--lh-body)', fontWeight: 'var(--fw-body)' }],
                small: ['var(--fs-small)', { lineHeight: 'var(--lh-small)', fontWeight: 'var(--fw-small)' }],
                overline: ['var(--fs-overline)', { lineHeight: 'var(--lh-overline)', letterSpacing: 'var(--ls-overline)', fontWeight: 'var(--fw-overline)' }],
                'sys-micro': ['9px', { letterSpacing: '0.1em', lineHeight: '1.2' }],
                'sys-badge': ['10px', { letterSpacing: '0.2em', lineHeight: '1.2' }],
                'sys-label': ['11px', { letterSpacing: '0.15em', lineHeight: '1.4' }],
                'sys-body-sm': ['12px', { lineHeight: '1.6' }],
                'sys-body': ['13px', { lineHeight: '1.6' }],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
                'aurora': 'aurora 25s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                aurora: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
