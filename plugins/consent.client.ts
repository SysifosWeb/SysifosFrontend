export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    window.SysifosConsent?.mount()
    window.SysifosConsent?.pageView()
  })
})
