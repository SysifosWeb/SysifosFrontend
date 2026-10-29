import { g as useCookie, m as useState, u as useNuxtApp, f as useRuntimeConfig, n as navigateTo } from './server.mjs';

function apiStatus(error) {
  var _a;
  const failure = error;
  return Number((failure == null ? void 0 : failure.statusCode) || (failure == null ? void 0 : failure.status) || ((_a = failure == null ? void 0 : failure.response) == null ? void 0 : _a.status) || 0);
}
function apiErrorMessage(error, fallback = "No se pudo guardar el cambio. Int\xE9ntalo nuevamente.") {
  var _a, _b;
  const failure = error;
  const status = apiStatus(error);
  if (status === 401 || status === 419) return "Tu sesi\xF3n venci\xF3. Inicia sesi\xF3n nuevamente.";
  if (status === 403) return "No tienes permiso para realizar este cambio o el proyecto est\xE1 archivado.";
  if (status === 404) return "No se encontr\xF3 el recurso o ya no tienes acceso a \xE9l.";
  if (status === 409) return "Otra persona modific\xF3 este issue. Revisa la versi\xF3n actual antes de volver a guardar.";
  if (status === 429) return "Has realizado varias peticiones seguidas. Espera un momento y vuelve a intentar.";
  if ((_a = failure == null ? void 0 : failure.data) == null ? void 0 : _a.errors) return Object.values(failure.data.errors).flat().join(" ");
  return ((_b = failure == null ? void 0 : failure.data) == null ? void 0 : _b.message) || fallback;
}
function useApi() {
  const config = useRuntimeConfig();
  const token = useCookie("auth_token");
  const userName = useCookie("user_name");
  const userEmail = useCookie("user_email");
  const projectContext = useState("admin-active-project", () => null);
  const nuxt = useNuxtApp();
  const base = String(config.public.apiUrl).replace(/\/$/, "");
  async function request(path, options = {}) {
    const requestToken = token.value;
    const headers = new Headers(options.headers);
    headers.set("Accept", "application/json");
    if (requestToken) headers.set("Authorization", `Bearer ${requestToken}`);
    try {
      const fetchApi = $fetch;
      return await fetchApi(`${base}/${path.replace(/^\/+/, "")}`, { retry: 0, timeout: 2e4, ...options, headers });
    } catch (error) {
      if ([401, 419].includes(apiStatus(error)) && token.value === requestToken) {
        token.value = null;
        userName.value = null;
        userEmail.value = null;
        projectContext.value = null;
        await nuxt.runWithContext(() => navigateTo("/admin/login"));
      }
      throw error;
    }
  }
  return { request };
}

export { apiErrorMessage as a, apiStatus as b, useApi as u };
//# sourceMappingURL=useApi-CzfxiAaW.mjs.map
