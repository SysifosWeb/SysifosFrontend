import { _ as __nuxt_component_0 } from './nuxt-link--2BX9w7I.mjs';
import { withAsyncContext, computed, withCtx, openBlock, createBlock, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { _ as _export_sfc, u as useRuntimeConfig } from './server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const token = useCookie("auth_token");
    const route = useRoute();
    useRouter();
    const contactId = route.params.id;
    const { data: contactResponse, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}contact/${contactId}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          Accept: "application/json"
        }
      },
      "$yXrTYxK535"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const contact = computed(() => {
      var _a;
      return ((_a = contactResponse.value) == null ? void 0 : _a.data) || contactResponse.value || {};
    });
    const statusClass = computed(() => {
      const statusClasses = {
        "new": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
        "read": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
        "replied": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
        "archived": "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
      };
      return statusClasses[contact.value.status] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    });
    const statusText = computed(() => {
      const statusTexts = {
        "new": "Nuevo",
        "read": "Le\xEDdo",
        "replied": "Respondido",
        "archived": "Archivado"
      };
      return statusTexts[contact.value.status] || "Desconocido";
    });
    const formatDate = (date) => {
      if (!date) return "-";
      return new Date(date).toLocaleDateString("es-CL", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b866e478><div class="max-w-4xl mx-auto" data-v-b866e478><div class="bg-white dark:bg-slate-800 rounded-lg shadow mb-6 border border-gray-100 dark:border-slate-700" data-v-b866e478><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-b866e478><div class="flex items-center justify-between" data-v-b866e478><div class="flex items-center space-x-3" data-v-b866e478>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/contacts",
        class: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b866e478${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-b866e478${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-6 w-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 19l-7-7 7-7"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-b866e478><h1 class="text-2xl font-semibold text-gray-900 dark:text-white" data-v-b866e478>${ssrInterpolate(contact.value.name)}</h1><p class="text-sm text-gray-600 dark:text-gray-400" data-v-b866e478> Contacto recibido el ${ssrInterpolate(formatDate(contact.value.created_at))}</p></div></div><span class="${ssrRenderClass(["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", statusClass.value])}" data-v-b866e478>${ssrInterpolate(statusText.value)}</span></div></div><div class="px-6 py-4 bg-gray-50 dark:bg-slate-900/50 border-b border-gray-200 dark:border-slate-700" data-v-b866e478><div class="flex flex-wrap gap-2" data-v-b866e478>`);
      if (contact.value.status === "new") {
        _push(`<button class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" data-v-b866e478><svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b866e478><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-v-b866e478></path></svg> Marcar como Le\xEDdo </button>`);
      } else {
        _push(`<!---->`);
      }
      if (contact.value.status !== "replied") {
        _push(`<button class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" data-v-b866e478><svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b866e478><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-v-b866e478></path></svg> Marcar como Respondido </button>`);
      } else {
        _push(`<!---->`);
      }
      if (contact.value.status !== "archived") {
        _push(`<button class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" data-v-b866e478><svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b866e478><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a4 4 0 118 0v4m-4 8a2 2 0 100-4 2 2 0 000 4zm0 0v4a2 2 0 002 2h6a2 2 0 002-2v-4" data-v-b866e478></path></svg> Archivar </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<a${ssrRenderAttr("href", `mailto:${contact.value.email}?subject=Re: ${contact.value.subject}`)} class="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-slate-600 text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-v-b866e478><svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b866e478><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-b866e478></path></svg> Responder por Email </a><button class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-v-b866e478><svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-b866e478><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" data-v-b866e478></path></svg> Eliminar </button></div></div></div>`);
      if (unref(pending)) {
        _push(`<div class="flex justify-center my-12" data-v-b866e478><svg class="animate-spin h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-b866e478><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-b866e478></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-b866e478></path></svg></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-6" data-v-b866e478><div class="lg:col-span-2" data-v-b866e478><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-b866e478><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-b866e478><h2 class="text-lg font-medium text-gray-900 dark:text-white" data-v-b866e478>Mensaje</h2></div><div class="px-6 py-4" data-v-b866e478><div class="mb-4" data-v-b866e478><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1" data-v-b866e478>Asunto</h3><p class="text-sm text-gray-900 dark:text-gray-100" data-v-b866e478>${ssrInterpolate(contact.value.subject)}</p></div><div data-v-b866e478><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2" data-v-b866e478>Mensaje</h3><div class="prose dark:prose-invert max-w-none" data-v-b866e478><p class="text-sm text-gray-900 dark:text-gray-100 whitespace-pre-wrap" data-v-b866e478>${ssrInterpolate(contact.value.message)}</p></div></div></div></div></div><div class="space-y-6" data-v-b866e478><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-b866e478><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-b866e478><h2 class="text-lg font-medium text-gray-900 dark:text-white" data-v-b866e478>Datos de Contacto</h2></div><div class="px-6 py-4 space-y-4" data-v-b866e478><div data-v-b866e478><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-v-b866e478>Nombre</h3><p class="text-sm text-gray-900 dark:text-gray-100" data-v-b866e478>${ssrInterpolate(contact.value.name)}</p></div><div data-v-b866e478><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-v-b866e478>Email</h3><p class="text-sm text-gray-900 dark:text-gray-100" data-v-b866e478><a${ssrRenderAttr("href", `mailto:${contact.value.email}`)} class="text-blue-600 hover:text-blue-800 dark:text-blue-400" data-v-b866e478>${ssrInterpolate(contact.value.email)}</a></p></div>`);
        if (contact.value.phone) {
          _push(`<div data-v-b866e478><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-v-b866e478>Tel\xE9fono</h3><p class="text-sm text-gray-900 dark:text-gray-100" data-v-b866e478><a${ssrRenderAttr("href", `tel:${contact.value.phone}`)} class="text-blue-600 hover:text-blue-800 dark:text-blue-400" data-v-b866e478>${ssrInterpolate(contact.value.phone)}</a></p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (contact.value.company) {
          _push(`<div data-v-b866e478><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-v-b866e478>Empresa</h3><p class="text-sm text-gray-900 dark:text-gray-100" data-v-b866e478>${ssrInterpolate(contact.value.company)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700" data-v-b866e478><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700" data-v-b866e478><h2 class="text-lg font-medium text-gray-900 dark:text-white" data-v-b866e478>Informaci\xF3n del Sistema</h2></div><div class="px-6 py-4 space-y-4" data-v-b866e478><div data-v-b866e478><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-v-b866e478>Estado</h3><span class="${ssrRenderClass(["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium", statusClass.value])}" data-v-b866e478>${ssrInterpolate(statusText.value)}</span></div><div data-v-b866e478><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-v-b866e478>Fecha de Contacto</h3><p class="text-sm text-gray-900 dark:text-gray-100" data-v-b866e478>${ssrInterpolate(formatDate(contact.value.created_at))}</p></div>`);
        if (contact.value.read_at) {
          _push(`<div data-v-b866e478><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-v-b866e478>Le\xEDdo el</h3><p class="text-sm text-gray-900 dark:text-gray-100" data-v-b866e478>${ssrInterpolate(formatDate(contact.value.read_at))}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (contact.value.replied_at) {
          _push(`<div data-v-b866e478><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-v-b866e478>Respondido el</h3><p class="text-sm text-gray-900 dark:text-gray-100" data-v-b866e478>${ssrInterpolate(formatDate(contact.value.replied_at))}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (contact.value.ip_address) {
          _push(`<div data-v-b866e478><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-v-b866e478>Direcci\xF3n IP</h3><p class="text-sm text-gray-900 dark:text-gray-100 font-mono" data-v-b866e478>${ssrInterpolate(contact.value.ip_address)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (contact.value.user_agent) {
          _push(`<div data-v-b866e478><h3 class="text-sm font-medium text-gray-500 dark:text-gray-400" data-v-b866e478>Navegador</h3><p class="text-xs text-gray-900 dark:text-gray-100 break-all" data-v-b866e478>${ssrInterpolate(contact.value.user_agent)}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/contacts/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b866e478"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DS_asnv_.mjs.map
