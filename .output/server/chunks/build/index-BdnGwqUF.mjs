import { _ as __nuxt_component_0 } from './nuxt-link--2BX9w7I.mjs';
import { reactive, computed, withAsyncContext, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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
      active: "",
      page: 1
    });
    const queryParams = computed(() => {
      const q = { page: filters.page };
      if (filters.search) q.search = filters.search;
      if (filters.active !== "") q.active = filters.active;
      return q;
    });
    const { data: categoriesResponse, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}category`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          Accept: "application/json"
        },
        query: queryParams,
        watch: false,
        getCachedData: () => null
        // siempre fetch fresco
      },
      "$QMH3qmujzM"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const categories = computed(() => {
      var _a;
      return ((_a = categoriesResponse.value) == null ? void 0 : _a.data) ? categoriesResponse.value : { data: [], links: [], from: 0, to: 0, total: 0 };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6 flex items-center justify-between"><div><h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Categor\xEDas</h1><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Organiza tus posts por categor\xEDas </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/categories/create",
        class: "inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"${_scopeId}></path></svg> Nueva Categor\xEDa `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "h-4 w-4 mr-2",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M12 4v16m8-8H4"
                })
              ])),
              createTextVNode(" Nueva Categor\xEDa ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white dark:bg-slate-800 rounded-lg shadow mb-6 border border-gray-100 dark:border-slate-700"><div class="p-6"><form class="grid grid-cols-1 md:grid-cols-3 gap-4"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Buscar</label><input${ssrRenderAttr("value", filters.search)} type="text" placeholder="Nombre, descripci\xF3n..." class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Estado</label><select class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(filters.active) ? ssrLooseContain(filters.active, "") : ssrLooseEqual(filters.active, "")) ? " selected" : ""}>Todas</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(filters.active) ? ssrLooseContain(filters.active, "1") : ssrLooseEqual(filters.active, "1")) ? " selected" : ""}>Activas</option><option value="0"${ssrIncludeBooleanAttr(Array.isArray(filters.active) ? ssrLooseContain(filters.active, "0") : ssrLooseEqual(filters.active, "0")) ? " selected" : ""}>Inactivas</option></select></div><div class="flex items-end space-x-3"><button type="submit" class="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-150"> Filtrar </button><button type="button" class="inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150"> Limpiar </button></div></form></div></div>`);
      if (unref(pending)) {
        _push(`<div class="flex justify-center my-12"><svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>`);
      } else if (categories.value.data.length > 0) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"><!--[-->`);
        ssrRenderList(categories.value.data, (category) => {
          _push(`<div class="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-lg shadow hover:shadow-md transition-shadow duration-200"><div class="p-6"><div class="flex items-center justify-between mb-4"><div class="flex items-center"><div class="w-4 h-4 rounded-full mr-3" style="${ssrRenderStyle({ backgroundColor: category.color || "#3B82F6" })}"></div><h3 class="text-lg font-medium text-gray-900 dark:text-white">${ssrInterpolate(category.name)}</h3></div><div class="flex items-center space-x-2"><span class="${ssrRenderClass([
            category.active ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
          ])}">${ssrInterpolate(category.active ? "Activa" : "Inactiva")}</span></div></div>`);
          if (category.description) {
            _push(`<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">${ssrInterpolate(category.description)}</p>`);
          } else {
            _push(`<p class="text-sm text-gray-400 dark:text-gray-500 italic mb-4"> Sin descripci\xF3n </p>`);
          }
          _push(`<div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4"><span>${ssrInterpolate(category.blog_posts_count || 0)} posts</span><span>Orden: ${ssrInterpolate(category.sort_order)}</span></div><div class="flex items-center justify-between"><div class="flex items-center space-x-2">`);
          if (category.id) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: "/admin/categories/" + category.id,
              class: "text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300",
              title: "Ver categor\xEDa"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"${_scopeId}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "h-4 w-4",
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
          } else {
            _push(`<!---->`);
          }
          if (category.id) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: "/admin/categories/edit?id=" + category.id,
              class: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300",
              title: "Editar categor\xEDa"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"${_scopeId}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "h-4 w-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      })
                    ]))
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<button class="${ssrRenderClass(
            category.active ? "text-orange-600 dark:text-orange-400 hover:text-orange-900 dark:hover:text-orange-300" : "text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300"
          )}"${ssrRenderAttr("title", category.active ? "Desactivar" : "Activar")}>`);
          if (category.active) {
            _push(`<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728"></path></svg>`);
          } else {
            _push(`<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`);
          }
          _push(`</button><button title="Eliminar categor\xEDa"${ssrIncludeBooleanAttr(category.blog_posts_count > 0) ? " disabled" : ""} class="${ssrRenderClass([{
            "opacity-50 cursor-not-allowed": category.blog_posts_count > 0
          }, "text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300"])}"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="bg-white dark:bg-slate-800 text-center p-12 rounded-lg shadow border border-gray-100 dark:border-slate-700"><svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg><h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">No hay categor\xEDas</h3><p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Comienza creando una nueva categor\xEDa.</p><div class="mt-6">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/categories/create",
          class: "inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Nueva Categor\xEDa `);
            } else {
              return [
                createTextVNode(" Nueva Categor\xEDa ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      if (categories.value.links && categories.value.links.length > 3) {
        _push(`<div class="bg-white dark:bg-slate-800 rounded-lg shadow border border-gray-100 dark:border-slate-700"><div class="px-4 py-3 sm:px-6"><div class="flex items-center justify-between"><div class="flex-1 flex justify-between sm:hidden">`);
        if (categories.value.prev_page_url) {
          _push(`<button class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700"> Anterior </button>`);
        } else {
          _push(`<!---->`);
        }
        if (categories.value.next_page_url) {
          _push(`<button class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700"> Siguiente </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"><div><p class="text-sm text-gray-700 dark:text-gray-400"> Mostrando <span class="font-medium text-gray-900 dark:text-white">${ssrInterpolate(categories.value.from)}</span> a <span class="font-medium text-gray-900 dark:text-white">${ssrInterpolate(categories.value.to)}</span> de <span class="font-medium text-gray-900 dark:text-white">${ssrInterpolate(categories.value.total)}</span> resultados </p></div><div><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"><!--[-->`);
        ssrRenderList(categories.value.links, (link, index) => {
          var _a, _b;
          _push(`<!--[-->`);
          if (link && link.url) {
            _push(`<button class="${ssrRenderClass([
              "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
              link.active ? "z-10 bg-blue-50 dark:bg-blue-900/30 border-blue-500 text-blue-600 dark:text-blue-400" : "bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700",
              index === 0 ? "rounded-l-md" : "",
              index === categories.value.links.length - 1 ? "rounded-r-md" : ""
            ])}">${(_a = link.label) != null ? _a : ""}</button>`);
          } else if (link) {
            _push(`<span class="${ssrRenderClass([
              "relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-sm font-medium text-gray-500 dark:text-gray-500",
              index === 0 ? "rounded-l-md" : "",
              index === categories.value.links.length - 1 ? "rounded-r-md" : ""
            ])}">${(_b = link.label) != null ? _b : ""}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BdnGwqUF.mjs.map
