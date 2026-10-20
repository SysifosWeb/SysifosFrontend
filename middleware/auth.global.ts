export default defineNuxtRouteMiddleware(async (to) => {
  if (!to.path.startsWith('/admin')) {
    return
  }

  const token = useCookie('auth_token')

  if (to.path === '/admin/login') {
    if (!token.value) {
      return
    }

    // Con sesión vigente (p. ej. "Recordarme") no se piden credenciales de
    // nuevo: se valida el token contra /auth/me y se entra directo al admin.
    const config = useRuntimeConfig()
    let valid = false
    try {
      await $fetch(`${config.public.apiUrl}auth/me`, {
        headers: { Authorization: `Bearer ${token.value}`, Accept: 'application/json' },
      })
      valid = true
    } catch (error: any) {
      const status = error?.response?.status ?? error?.status
      if (status === 401 || status === 403) {
        // Token vencido o revocado: limpiar sesión local y mostrar el login.
        token.value = null
        useCookie('user_email').value = null
        useCookie('user_name').value = null
      }
    }

    if (valid) {
      return navigateTo('/admin')
    }
    return
  }

  if (!token.value) {
    return navigateTo('/admin/login')
  }
})
