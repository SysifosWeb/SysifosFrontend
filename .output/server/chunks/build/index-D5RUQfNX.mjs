import { _ as __nuxt_component_0 } from './nuxt-link--2BX9w7I.mjs';
import { reactive, computed, withAsyncContext, unref, withCtx, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useRuntimeConfig } from './server.mjs';
import { u as useCookie } from './cookie-D3QZ8Gbb.mjs';
import { u as useFetch } from './fetch-CHFNaGwH.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'ipx';
import '@vue/shared';
import 'perfect-debounce';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const token = useCookie("auth_token");
    useRouter();
    const filters = reactive({
      search: "",
      status: "",
      page: 1
    });
    const queryParams = computed(() => {
      const q = { page: filters.page };
      if (filters.search) q.search = filters.search;
      if (filters.status) q.status = filters.status;
      return q;
    });
    const { data: contactsResponse, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}contact`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          Accept: "application/json"
        },
        query: queryParams,
        watch: false
      },
      "$ow_R8hBapK"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const contacts = computed(() => {
      var _a;
      return ((_a = contactsResponse.value) == null ? void 0 : _a.data) ? contactsResponse.value : { data: [], links: [], from: 0, to: 0, total: 0 };
    });
    const getStatusClass = (status) => {
      const statusClasses = {
        "new": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
        "read": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
        "replied": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
        "archived": "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
      };
      return statusClasses[status] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    };
    const getStatusText = (status) => {
      const statusTexts = {
        "new": "Nuevo",
        "read": "Le\xEDdo",
        "replied": "Respondido",
        "archived": "Archivado"
      };
      return statusTexts[status] || "Desconocido";
    };
    const formatDate = (date) => {
      if (!date) return "-";
      return new Date(date).toLocaleDateString("es-CL", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6 flex items-center justify-between"><div><h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Contactos</h1><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Gestiona los mensajes de contacto de tu sitio principal </p></div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow mb-6 border border-gray-100 dark:border-slate-700"><div class="p-6"><form class="grid grid-cols-1 md:grid-cols-3 gap-4"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Buscar</label><input${ssrRenderAttr("value", filters.search)} type="text" placeholder="Nombre, email, asunto..." class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Estado</label><select class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "") : ssrLooseEqual(filters.status, "")) ? " selected" : ""}>Todos</option><option value="new"${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "new") : ssrLooseEqual(filters.status, "new")) ? " selected" : ""}>Nuevo</option><option value="read"${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "read") : ssrLooseEqual(filters.status, "read")) ? " selected" : ""}>Le\xEDdo</option><option value="replied"${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "replied") : ssrLooseEqual(filters.status, "replied")) ? " selected" : ""}>Respondido</option><option value="archived"${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "archived") : ssrLooseEqual(filters.status, "archived")) ? " selected" : ""}>Archivado</option></select></div><div class="flex items-end space-x-3"><button type="submit" class="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"> Filtrar </button><button type="button" class="inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition"> Limpiar </button></div></form></div></div>`);
      if (unref(pending)) {
        _push(`<div class="flex justify-center my-12"><svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>`);
      } else {
        _push(`<div class="bg-white dark:bg-slate-800 rounded-lg shadow overflow-hidden border border-gray-100 dark:border-slate-700"><div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200 dark:divide-slate-700"><thead class="bg-gray-50 dark:bg-slate-900/50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"> Contacto</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"> Asunto</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"> Estado</th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"> Fecha</th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"> Acciones</th></tr></thead><tbody class="bg-white dark:bg-slate-800 divide-y divide-gray-200 dark:divide-slate-700"><!--[-->`);
        ssrRenderList(contacts.value.data, (contact) => {
          _push(`<tr class="hover:bg-gray-50 dark:hover:bg-slate-700/50"><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm font-medium text-gray-900 dark:text-white">${ssrInterpolate(contact.name)}</div><div class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(contact.email)}</div></td><td class="px-6 py-4"><div class="text-sm text-gray-900 dark:text-white line-clamp-1"${ssrRenderAttr("title", contact.subject)}>${ssrInterpolate(contact.subject)}</div></td><td class="px-6 py-4 whitespace-nowrap"><span class="${ssrRenderClass([getStatusClass(contact.status), "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}">${ssrInterpolate(getStatusText(contact.status))}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(formatDate(contact.created_at))}</td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><div class="flex items-center justify-end space-x-2">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/admin/contacts/" + contact.id,
            class: "text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300",
            title: "Ver detalle"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    class: "h-5 w-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    }),
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    })
                  ]))
                ];
              }
            }),
            _: 2
          }, _parent));
          if (contact.status === "new") {
            _push(`<button class="text-yellow-600 hover:text-yellow-900 dark:text-yellow-400 dark:hover:text-yellow-300" title="Marcar como le\xEDdo"><svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"></path></svg></button>`);
          } else {
            _push(`<!---->`);
          }
          if (contact.status !== "archived") {
            _push(`<button class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200" title="Archivar"><svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg></button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></td></tr>`);
        });
        _push(`<!--]-->`);
        if (contacts.value.data.length === 0) {
          _push(`<tr><td colspan="5" class="px-6 py-12 text-center text-gray-500 dark:text-gray-400"> No se encontraron contactos. </td></tr>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</tbody></table></div>`);
        if (contacts.value.last_page > 1) {
          _push(`<div class="bg-white dark:bg-slate-800 px-4 py-3 border-t border-gray-200 dark:border-slate-700 sm:px-6"><div class="flex items-center justify-between"><div class="flex-1 flex justify-between sm:hidden">`);
          if (contacts.value.prev_page_url) {
            _push(`<button class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700"> Anterior </button>`);
          } else {
            _push(`<!---->`);
          }
          if (contacts.value.next_page_url) {
            _push(`<button class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700"> Siguiente </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"><div><p class="text-sm text-gray-700 dark:text-gray-400"> Mostrando <span class="font-medium dark:text-white">${ssrInterpolate(contacts.value.from)}</span> a <span class="font-medium dark:text-white">${ssrInterpolate(contacts.value.to)}</span> de <span class="font-medium dark:text-white">${ssrInterpolate(contacts.value.total)}</span> resultados </p></div><div><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"><!--[-->`);
          ssrRenderList(contacts.value.links, (link, index) => {
            var _a, _b;
            _push(`<!--[-->`);
            if (link && link.url) {
              _push(`<button class="${ssrRenderClass([
                "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                link.active ? "z-10 bg-blue-50 dark:bg-blue-900/30 border-blue-500 text-blue-600 dark:text-blue-400" : "bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700",
                index === 0 ? "rounded-l-md" : "",
                index === contacts.value.links.length - 1 ? "rounded-r-md" : ""
              ])}">${(_a = link.label) != null ? _a : ""}</button>`);
            } else if (link) {
              _push(`<span class="${ssrRenderClass([
                "relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-sm font-medium text-gray-500",
                index === 0 ? "rounded-l-md" : "",
                index === contacts.value.links.length - 1 ? "rounded-r-md" : ""
              ])}">${(_b = link.label) != null ? _b : ""}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></nav></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/contacts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D5RUQfNX.mjs.map
