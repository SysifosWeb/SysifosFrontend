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

})
