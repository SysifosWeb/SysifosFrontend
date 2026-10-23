// El mismo servicio controla la portada sin hidratación y las rutas Nuxt.
export function useCookieConsent() {
  return {
    accept: () => window.SysifosConsent?.choose(true, 'accept'),
    reject: () => window.SysifosConsent?.choose(false, 'reject'),
    openPreferences: () => window.SysifosConsent?.openPreferences(),
  }
}
