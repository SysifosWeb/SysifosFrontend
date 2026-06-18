export default defineNuxtRouteMiddleware((to, from) => {
  if (!to.path.startsWith('/admin')) {
    return
  }

  if (to.path === '/admin/login') {
    return
  }

  const token = useCookie('auth_token')

  if (!token.value) {
    return navigateTo('/admin/login')
  }

  try {
    const parts = token.value.split('.')
    if (parts.length !== 3) {
      token.value = null
      return navigateTo('/admin/login')
    }

    const payload = JSON.parse(atob(parts[1]))

    if (payload.exp && payload.exp * 1000 < Date.now()) {
      token.value = null
      return navigateTo('/admin/login')
    }
  } catch {
    token.value = null
    return navigateTo('/admin/login')
  }
})
