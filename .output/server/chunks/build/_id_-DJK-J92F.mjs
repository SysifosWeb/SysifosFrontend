import { _ as __nuxt_component_0 } from './nuxt-link--2BX9w7I.mjs';
import { withAsyncContext, computed, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const config = useRuntimeConfig();
    const token = useCookie("auth_token");
    const { data: categoryResponse, pending, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}category/${route.params.id}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          Accept: "application/json"
        }
      },
      "$YCp7N45wNY"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const category = computed(() => {
      var _a;
      return ((_a = categoryResponse.value) == null ? void 0 : _a.data) || categoryResponse.value || {};
    });
    const statusClass = computed(() => {
      return category.value.active ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    });
    const statusText = computed(() => {
      return category.value.active ? "Activa" : "Inactiva";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(pending)) {
        _push(`<div class="flex justify-center my-12"><svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>`);
      } else if (unref(error) || !category.value.id) {
        _push(`<div class="text-center py-12"><h2 class="text-2xl font-bold text-gray-900 dark:text-white">Categor\xEDa no encontrada</h2><p class="mt-2 text-gray-600 dark:text-gray-400">La categor\xEDa que buscas no existe o fue eliminada.</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/categories",
          class: "mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Volver a categor\xEDas `);
            } else {
              return [
                createTextVNode(" Volver a categor\xEDas ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="max-w-4xl mx-auto"><div class="mb-6"><div class="flex items-center justify-between"><div><h1 class="text-2xl font-semibold text-gray-900 dark:text-white">${ssrInterpolate(category.value.name)}</h1><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Detalles y estad\xEDsticas de la categor\xEDa </p></div><div class="flex items-center space-x-3">`);
        if (category.value.id) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/admin/categories/edit?id=" + category.value.id,
            class: "inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Editar `);
              } else {
                return [
                  createTextVNode(" Editar ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/categories",
          class: "inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Volver `);
            } else {
              return [
                createTextVNode(" Volver ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-6"><div class="lg:col-span-2"><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700"><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700"><h3 class="text-lg font-medium text-gray-900 dark:text-white"> Informaci\xF3n de la Categor\xEDa </h3></div><div class="p-6 space-y-6"><div class="flex items-center space-x-4"><div class="w-8 h-8 rounded-full border border-gray-300 dark:border-slate-600" style="${ssrRenderStyle({ backgroundColor: category.value.color || "#3B82F6" })}"></div><div><h2 class="text-xl font-semibold text-gray-900 dark:text-white">${ssrInterpolate(category.value.name)}</h2><p class="text-sm text-gray-500 dark:text-gray-400"> Color: ${ssrInterpolate(category.value.color || "Predeterminado")}</p></div></div><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> Slug (URL) </label><code class="px-3 py-1 bg-gray-100 dark:bg-slate-900 text-gray-800 dark:text-gray-200 rounded text-sm block overflow-x-auto"> /blog/categoria/${ssrInterpolate(category.value.slug)}</code></div><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> Descripci\xF3n </label>`);
        if (category.value.description) {
          _push(`<p class="text-gray-900 dark:text-white">${ssrInterpolate(category.value.description)}</p>`);
        } else {
          _push(`<p class="text-gray-400 dark:text-gray-500 italic"> Sin descripci\xF3n </p>`);
        }
        _push(`</div><div class="grid grid-cols-2 gap-4"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> Estado </label><span class="${ssrRenderClass([statusClass.value, "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}">${ssrInterpolate(statusText.value)}</span></div><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> Orden </label><p class="text-gray-900 dark:text-white">${ssrInterpolate(category.value.sort_order)}</p></div></div></div></div></div><div class="space-y-6"><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700"><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700"><h3 class="text-lg font-medium text-gray-900 dark:text-white"> Estad\xEDsticas </h3></div><div class="p-6"><div class="text-center"><div class="text-3xl font-bold text-blue-600 dark:text-blue-400">${ssrInterpolate(category.value.blog_posts_count || 0)}</div><div class="text-sm text-gray-500 dark:text-gray-400 mt-1"> Posts asociados </div></div></div></div><div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700"><div class="px-6 py-4 border-b border-gray-200 dark:border-slate-700"><h3 class="text-lg font-medium text-gray-900 dark:text-white"> Acciones R\xE1pidas </h3></div><div class="p-6 space-y-3">`);
        if (category.value.id) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: { path: "", query: { category: category.value.id } },
            class: "w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Crear Post aqu\xED `);
              } else {
                return [
                  createTextVNode(" Crear Post aqu\xED ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/categories/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DJK-J92F.mjs.map
