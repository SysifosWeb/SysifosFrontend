export default defineNuxtRouteMiddleware(async (to) => {
  if (!to.path.startsWith('/admin')) {
    return
  }

  const sessionVerified = useState<boolean>('admin-session-verified', () => false)
  const requestFetch = useRequestFetch()

  let authenticated = sessionVerified.value
  if (!authenticated || import.meta.server || to.path === '/admin/login') {
    try {
      const session = await requestFetch<{ authenticated: boolean }>('/api/auth/session', {
        headers: { Accept: 'application/json' },
      })
      authenticated = Boolean(session?.authenticated)
      sessionVerified.value = authenticated
    } catch {
      authenticated = false
      sessionVerified.value = false
    }
  }

  if (to.path === '/admin/login') {
    if (authenticated) {
      return navigateTo('/admin')
    }
    return
  }

  if (!authenticated) {
    return navigateTo('/admin/login')
  }
})
