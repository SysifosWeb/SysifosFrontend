import type { $Fetch, FetchOptions } from 'ofetch'

type ApiFailure = {
    statusCode?: number; status?: number; response?: { status?: number }
    data?: { message?: string; errors?: Record<string, string[]> }
}

export function apiStatus(error: unknown): number {
    const failure = error as ApiFailure | null
    return Number(failure?.statusCode || failure?.status || failure?.response?.status || 0)
}

export function apiErrorMessage(error: unknown, fallback = 'No se pudo guardar el cambio. Inténtalo nuevamente.'): string {
    const failure = error as ApiFailure | null
    const status = apiStatus(error)
    if (status === 401 || status === 419) return 'Tu sesión venció. Inicia sesión nuevamente.'
    if (status === 403) return 'No tienes permiso para realizar este cambio o el proyecto está archivado.'
    if (status === 404) return 'No se encontró el recurso o ya no tienes acceso a él.'
    if (status === 409) return 'Otra persona modificó este issue. Revisa la versión actual antes de volver a guardar.'
    if (status === 429) return 'Has realizado varias peticiones seguidas. Espera un momento y vuelve a intentar.'
    if (failure?.data?.errors) return Object.values(failure.data.errors).flat().join(' ')
    return failure?.data?.message || fallback
}

export function useApi() {
    const config = useRuntimeConfig()
    const token = useCookie<string | null>('auth_token')
    const userName = useCookie<string | null>('user_name')
    const userEmail = useCookie<string | null>('user_email')
    const projectContext = useState('admin-active-project', () => null)
    const nuxt = useNuxtApp()
    const base = String(config.public.apiUrl).replace(/\/$/, '')

    async function request<T>(path: string, options: FetchOptions<'json'> = {}): Promise<T> {
        const requestToken = token.value
        const headers = new Headers(options.headers)
        headers.set('Accept', 'application/json')
        if (requestToken) headers.set('Authorization', `Bearer ${requestToken}`)
        try {
            // Proxy paths are dynamic Laravel endpoints, not Nitro's typed local routes.
            const fetchApi = $fetch as unknown as $Fetch
            return await fetchApi<T>(`${base}/${path.replace(/^\/+/, '')}`, { retry: 0, timeout: 20000, ...options, headers })
        } catch (error) {
            if ([401, 419].includes(apiStatus(error)) && token.value === requestToken) {
                token.value = null; userName.value = null; userEmail.value = null; projectContext.value = null
                await nuxt.runWithContext(() => navigateTo('/admin/login'))
            }
            throw error
        }
    }

    // Binary responses share the same authentication and expired-session handling.
    function download(path: string, query: Record<string, string | number>): Promise<Blob> {
        return request<Blob>(path, { query, responseType: 'blob' } as unknown as FetchOptions<'json'>)
    }

    return { request, download }
}
