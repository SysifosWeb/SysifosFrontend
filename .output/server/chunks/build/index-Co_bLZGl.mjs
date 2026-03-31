import { _ as __nuxt_component_0 } from './nuxt-link--2BX9w7I.mjs';
import { reactive, computed, withAsyncContext, watch, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { d as delivery } from './delivery-CSSnNyyk.mjs';
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
      category_id: "",
      featured: "",
      page: 1
    });
    const queryParams = computed(() => {
      const q = { page: filters.page };
      if (filters.search) q.search = filters.search;
      if (filters.status) q.status = filters.status;
      if (filters.category_id) q.category_id = filters.category_id;
      if (filters.featured) q.featured = filters.featured;
      return q;
    });
    const { data: postsResponse, pending, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}blog`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          Accept: "application/json"
        },
        query: queryParams,
        watch: false
      },
      "$IUVAIIJEPq"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const { data: categoriesResponse } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `${config.public.apiUrl}category`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
          Accept: "application/json"
        }
      },
      "$vXkir3hNn1"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const posts = computed(() => {
      var _a;
      return ((_a = postsResponse.value) == null ? void 0 : _a.data) ? postsResponse.value : { data: [], links: [], from: 0, to: 0, total: 0 };
    });
    const categories = computed(() => {
      var _a;
      return ((_a = categoriesResponse.value) == null ? void 0 : _a.data) || [];
    });
    const hasActiveFilters = computed(() => {
      return filters.search || filters.status || filters.category || filters.featured;
    });
    const search = () => {
      filters.page = 1;
      refresh();
    };
    let searchTimeout = null;
    watch(() => filters.search, (newValue) => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      searchTimeout = setTimeout(() => {
        search();
      }, 500);
    });
    const getStatusClass = (status) => {
      return {
        draft: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
        published: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      }[status] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    };
    const getStatusText = (status) => {
      return {
        draft: "Borrador",
        published: "Publicado"
      }[status] || "Desconocido";
    };
    const formatNumber = (number) => {
      return new Intl.NumberFormat("es-CL").format(number || 0);
    };
    const formatDate = (date) => {
      if (!date) return "-";
      return new Date(date).toLocaleDateString("es-CL", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6 flex items-center justify-between"><div><h1 class="text-2xl font-semibold text-gray-900 dark:text-white"> Posts del Blog </h1><p class="mt-1 text-sm text-gray-600 dark:text-gray-400"> Gestiona todos los posts de tu blog </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/posts/create",
        class: "inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"${_scopeId}></path></svg> Nuevo Post `);
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
              createTextVNode(" Nuevo Post ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white dark:bg-slate-800 rounded-lg shadow mb-6 border border-gray-100 dark:border-slate-700"><div class="p-6"><form class="grid grid-cols-1 md:grid-cols-4 gap-4"><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Buscar</label><input${ssrRenderAttr("value", filters.search)} type="text" placeholder="T\xEDtulo, contenido..." class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"></div><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Estado</label><select class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "") : ssrLooseEqual(filters.status, "")) ? " selected" : ""}>Todos los estados</option><option value="draft"${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "draft") : ssrLooseEqual(filters.status, "draft")) ? " selected" : ""}>Borrador</option><option value="published"${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "published") : ssrLooseEqual(filters.status, "published")) ? " selected" : ""}>Publicado</option></select></div><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Categor\xEDa</label><select class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(filters.category_id) ? ssrLooseContain(filters.category_id, "") : ssrLooseEqual(filters.category_id, "")) ? " selected" : ""}>Todas las categor\xEDas</option><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<option${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(Array.isArray(filters.category_id) ? ssrLooseContain(filters.category_id, category.id) : ssrLooseEqual(filters.category_id, category.id)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
      });
      _push(`<!--]--></select></div><div><label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Destacado</label><select class="w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"><option value=""${ssrIncludeBooleanAttr(Array.isArray(filters.featured) ? ssrLooseContain(filters.featured, "") : ssrLooseEqual(filters.featured, "")) ? " selected" : ""}>Todos</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(filters.featured) ? ssrLooseContain(filters.featured, "1") : ssrLooseEqual(filters.featured, "1")) ? " selected" : ""}>Solo destacados</option><option value="0"${ssrIncludeBooleanAttr(Array.isArray(filters.featured) ? ssrLooseContain(filters.featured, "0") : ssrLooseEqual(filters.featured, "0")) ? " selected" : ""}>No destacados</option></select></div><div class="md:col-span-4 flex items-center justify-between"><div class="flex items-center space-x-3"><button type="submit" class="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"><svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> Filtrar </button>`);
      if (hasActiveFilters.value) {
        _push(`<button type="button" class="inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition ease-in-out duration-150"><svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Limpiar Filtros </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-sm text-gray-600 dark:text-gray-400"><span class="font-medium dark:text-white">${ssrInterpolate(posts.value.total)}</span> ${ssrInterpolate(posts.value.total === 1 ? "post encontrado" : "posts encontrados")} `);
      if (hasActiveFilters.value) {
        _push(`<span class="ml-2 text-blue-600 dark:text-blue-400"> (filtrado) </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></form></div></div>`);
      if (unref(pending)) {
        _push(`<div class="flex justify-center my-12"><svg class="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>`);
      } else {
        _push(`<div class="bg-white dark:bg-slate-800 rounded-lg shadow overflow-hidden border border-gray-100 dark:border-slate-700"><div class="overflow-x-auto"><table class="min-w-full divide-y divide-gray-200 dark:divide-slate-700"><thead class="bg-gray-50 dark:bg-slate-900/50"><tr><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"> Post </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"> Categor\xEDa </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"> Estado </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"> Vistas </th><th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"> Fecha </th><th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"> Acciones </th></tr></thead><tbody class="bg-white dark:bg-slate-800 divide-y divide-gray-200 dark:divide-slate-700"><!--[-->`);
        ssrRenderList(posts.value.data, (post) => {
          var _a;
          _push(`<tr class="hover:bg-gray-50 dark:hover:bg-slate-700/50"><td class="px-6 py-4"><div class="flex items-center"><div class="flex-shrink-0 h-12 w-12"><img${ssrRenderAttr("src", post.featured_image_url ? post.featured_image_url : unref(delivery))}${ssrRenderAttr("alt", post.title)} class="h-12 w-12 rounded-lg object-cover"></div><div class="ml-4"><div class="text-sm font-medium text-gray-900 dark:text-white">${ssrInterpolate(post.title)}</div><div class="text-sm text-gray-500 dark:text-gray-400"> por ${ssrInterpolate(((_a = post.user) == null ? void 0 : _a.name) || "Usuario")}</div>`);
          if (post.featured) {
            _push(`<div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 mt-1"> \u2B50 Destacado </div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></td><td class="px-6 py-4 whitespace-nowrap">`);
          if (post.category) {
            _push(`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" style="${ssrRenderStyle({
              backgroundColor: post.category.color ? post.category.color + "20" : "#e5e7eb",
              color: post.category.color || "#374151"
            })}">${ssrInterpolate(post.category.name)}</span>`);
          } else {
            _push(`<span class="text-gray-400 dark:text-gray-500">Sin categor\xEDa</span>`);
          }
          _push(`</td><td class="px-6 py-4 whitespace-nowrap"><span class="${ssrRenderClass([getStatusClass(post.status), "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"])}">${ssrInterpolate(getStatusText(post.status))}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">${ssrInterpolate(formatNumber(post.views))}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(formatDate(post.created_at))}</td><td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><div class="flex items-center justify-end space-x-2">`);
          if (post.id) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: "/admin/posts/" + post.id,
              class: "text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300",
              title: "Ver post"
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
          if (post.id) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: "/admin/posts/edit?id=" + post.id,
              class: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300",
              title: "Editar post"
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
            post.featured ? "text-yellow-600 dark:text-yellow-400 hover:text-yellow-900 dark:hover:text-yellow-300" : "text-gray-400 dark:text-gray-500 hover:text-yellow-600 dark:hover:text-yellow-400"
          )}"${ssrRenderAttr(
            "title",
            post.featured ? "Quitar de destacados" : "Marcar como destacado"
          )}><svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></button>`);
          if (post.status === "draft") {
            _push(`<button class="text-green-600 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300" title="Publicar"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></button>`);
          } else {
            _push(`<button class="text-orange-600 dark:text-orange-400 hover:text-orange-900 dark:hover:text-orange-300" title="Despublicar"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 4h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17.294 15M10 14l4-2 4-2m-8 4l-2 2m2-2l2 2"></path></svg></button>`);
          }
          _push(`<button class="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300" title="Eliminar post"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
        if (posts.value.links && posts.value.links.length > 3) {
          _push(`<div class="bg-white dark:bg-slate-800 px-4 py-3 border-t border-gray-200 dark:border-slate-700 sm:px-6"><div class="flex items-center justify-between"><div class="flex-1 flex justify-between sm:hidden">`);
          if (posts.value.prev_page_url) {
            _push(`<button class="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700"> Anterior </button>`);
          } else {
            _push(`<!---->`);
          }
          if (posts.value.next_page_url) {
            _push(`<button class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700"> Siguiente </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"><div><p class="text-sm text-gray-700 dark:text-gray-400"> Mostrando <span class="font-medium dark:text-white">${ssrInterpolate(posts.value.from)}</span> a <span class="font-medium dark:text-white">${ssrInterpolate(posts.value.to)}</span> de <span class="font-medium dark:text-white">${ssrInterpolate(posts.value.total)}</span> resultados </p></div><div><nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"><!--[-->`);
          ssrRenderList(posts.value.links, (link, index) => {
            var _a, _b;
            _push(`<!--[-->`);
            if (link && link.url) {
              _push(`<button class="${ssrRenderClass([
                "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                link.active ? "z-10 bg-blue-50 dark:bg-blue-900/30 border-blue-500 text-blue-600 dark:text-blue-400" : "bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700",
                index === 0 ? "rounded-l-md" : "",
                index === posts.value.links.length - 1 ? "rounded-r-md" : ""
              ])}">${(_a = link.label) != null ? _a : ""}</button>`);
            } else if (link) {
              _push(`<span class="${ssrRenderClass([
                "relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-900 text-sm font-medium text-gray-500",
                index === 0 ? "rounded-l-md" : "",
                index === posts.value.links.length - 1 ? "rounded-r-md" : ""
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/posts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Co_bLZGl.mjs.map
