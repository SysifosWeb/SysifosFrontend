import { h as useCookie, a as __nuxt_component_0$1, d as useRuntimeConfig } from './server.mjs';
import { reactive, computed, withAsyncContext, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { Plus, Search, X, Inbox, FileText, Eye, Pencil, Power, Trash2, ArrowUpRight } from 'lucide-vue-next';
import { u as useFetch } from './fetch-BNwszLB7.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'lru-cache';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'xss';
import 'node:crypto';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'ipx';
import '@vue/shared';
import './asyncData-DuUXGvWD.mjs';

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
      "$PI-I7e9X4F"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const categories = computed(() => {
      var _a;
      const r = categoriesResponse.value;
      if (!(r == null ? void 0 : r.data)) return { data: [], links: [], from: 0, to: 0, total: 0 };
      return { ...r, links: Array.isArray(r.links) ? r.links : ((_a = r.meta) == null ? void 0 : _a.links) || [] };
    });
    const hasActiveFilters = computed(() => filters.search || filters.active !== "");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6 flex flex-wrap items-center justify-between gap-4"><div><h1 class="font-display text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">Categor\xEDas</h1><p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Organiza tus posts por categor\xEDas</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/categories/create",
        class: "inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 hover:shadow-sky-600/25"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` Nueva Categor\xEDa `);
          } else {
            return [
              createVNode(unref(Plus), { class: "h-4 w-4" }),
              createTextVNode(" Nueva Categor\xEDa ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/60 sm:p-5 dark:bg-slate-900 dark:ring-slate-800"><form class="grid grid-cols-1 gap-4 md:grid-cols-3"><div class="relative md:col-span-2">`);
      _push(ssrRenderComponent(unref(Search), { class: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }, null, _parent));
      _push(`<input${ssrRenderAttr("value", filters.search)} type="text" placeholder="Nombre, descripci\xF3n\u2026" class="!pl-10"></div><div class="flex items-center gap-2.5"><select class="flex-1"><option value=""${ssrIncludeBooleanAttr(Array.isArray(filters.active) ? ssrLooseContain(filters.active, "") : ssrLooseEqual(filters.active, "")) ? " selected" : ""}>Todas</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(filters.active) ? ssrLooseContain(filters.active, "1") : ssrLooseEqual(filters.active, "1")) ? " selected" : ""}>Activas</option><option value="0"${ssrIncludeBooleanAttr(Array.isArray(filters.active) ? ssrLooseContain(filters.active, "0") : ssrLooseEqual(filters.active, "0")) ? " selected" : ""}>Inactivas</option></select>`);
      if (hasActiveFilters.value) {
        _push(`<button type="button" title="Limpiar filtros" class="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl text-slate-500 ring-1 ring-slate-200 transition-colors hover:bg-slate-50 hover:text-slate-700 dark:text-slate-400 dark:ring-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200">`);
        _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></div>`);
      if (unref(pending)) {
        _push(`<div class="flex h-64 items-center justify-center"><div class="h-10 w-10 animate-spin rounded-full border-4 border-sky-200 border-t-sky-500 dark:border-slate-700 dark:border-t-sky-400"></div></div>`);
      } else {
        _push(`<!--[-->`);
        if (categories.value.data.length === 0) {
          _push(`<div class="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800"><div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-500/10">`);
          _push(ssrRenderComponent(unref(Inbox), { class: "h-7 w-7 text-sky-500" }, null, _parent));
          _push(`</div><div><p class="font-semibold text-slate-900 dark:text-white">No hay categor\xEDas</p><p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Comienza creando una nueva categor\xEDa.</p></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/admin/categories/create",
            class: "mt-1 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent2, _scopeId));
                _push2(` Nueva Categor\xEDa `);
              } else {
                return [
                  createVNode(unref(Plus), { class: "h-4 w-4" }),
                  createTextVNode(" Nueva Categor\xEDa ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
          ssrRenderList(categories.value.data, (category) => {
            _push(`<div class="group flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-900 dark:ring-slate-800 dark:hover:ring-slate-700"><div class="mb-3 flex items-start justify-between gap-3"><div class="flex items-center gap-2.5"><span class="h-3.5 w-3.5 shrink-0 rounded-full ring-2 ring-white dark:ring-slate-900" style="${ssrRenderStyle({ backgroundColor: category.color || "#38BDF8" })}"></span><h3 class="truncate font-semibold text-slate-900 dark:text-white">${ssrInterpolate(category.name)}</h3></div><span class="${ssrRenderClass([category.active ? "bg-emerald-50 text-emerald-700 ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/20" : "bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-500/10 dark:text-red-400 dark:ring-red-400/20", "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1"])}"><span class="${ssrRenderClass([category.active ? "bg-emerald-500" : "bg-red-500", "h-1.5 w-1.5 rounded-full"])}"></span> ${ssrInterpolate(category.active ? "Activa" : "Inactiva")}</span></div><p class="mb-4 line-clamp-2 min-h-[2.5rem] text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(category.description || "Sin descripci\xF3n")}</p><div class="mb-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400"><span class="flex items-center gap-1.5 font-medium">`);
            _push(ssrRenderComponent(unref(FileText), { class: "h-3.5 w-3.5 text-sky-500" }, null, _parent));
            _push(` ${ssrInterpolate(category.blog_posts_count || 0)} posts </span><span class="text-slate-400 dark:text-slate-500">Orden: ${ssrInterpolate(category.sort_order)}</span></div><div class="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800"><div class="flex items-center gap-1">`);
            if (category.id) {
              _push(ssrRenderComponent(_component_NuxtLink, {
                to: "/admin/categories/" + category.id,
                title: "Ver categor\xEDa",
                class: "flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-sky-500/10 dark:hover:text-sky-400"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(unref(Eye), { class: "h-4 w-4" }, null, _parent2, _scopeId));
                  } else {
                    return [
                      createVNode(unref(Eye), { class: "h-4 w-4" })
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
                title: "Editar categor\xEDa",
                class: "flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(unref(Pencil), { class: "h-4 w-4" }, null, _parent2, _scopeId));
                  } else {
                    return [
                      createVNode(unref(Pencil), { class: "h-4 w-4" })
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<button${ssrRenderAttr("title", category.active ? "Desactivar" : "Activar")} class="${ssrRenderClass([category.active ? "text-slate-400 hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-orange-500/10 dark:hover:text-orange-400" : "text-slate-400 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400", "flex h-8 w-8 items-center justify-center rounded-lg transition-colors"])}">`);
            _push(ssrRenderComponent(unref(Power), { class: "h-4 w-4" }, null, _parent));
            _push(`</button><button title="Eliminar categor\xEDa"${ssrIncludeBooleanAttr(category.blog_posts_count > 0) ? " disabled" : ""} class="${ssrRenderClass([category.blog_posts_count > 0 ? "cursor-not-allowed text-slate-200 dark:text-slate-700" : "text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400", "flex h-8 w-8 items-center justify-center rounded-lg transition-colors"])}">`);
            _push(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4" }, null, _parent));
            _push(`</button></div>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: "/admin/posts?category_id=" + category.id,
              class: "flex items-center gap-1 text-xs font-semibold text-sky-600 transition-colors hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Posts `);
                  _push2(ssrRenderComponent(unref(ArrowUpRight), { class: "h-3.5 w-3.5" }, null, _parent2, _scopeId));
                } else {
                  return [
                    createTextVNode(" Posts "),
                    createVNode(unref(ArrowUpRight), { class: "h-3.5 w-3.5" })
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div>`);
          });
          _push(`<!--]--></div>`);
        }
        if (categories.value.links && categories.value.links.length > 3) {
          _push(`<div class="mt-6 rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800"><div class="flex items-center justify-between px-4 py-3 sm:px-6"><div class="flex-1 flex justify-between sm:hidden">`);
          if (categories.value.prev_page_url) {
            _push(`<button class="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"> Anterior </button>`);
          } else {
            _push(`<!---->`);
          }
          if (categories.value.next_page_url) {
            _push(`<button class="ml-3 inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"> Siguiente </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"><p class="text-sm text-slate-500 dark:text-slate-400"> Mostrando <span class="font-semibold text-slate-900 dark:text-white">${ssrInterpolate(categories.value.from)}</span> a <span class="font-semibold text-slate-900 dark:text-white">${ssrInterpolate(categories.value.to)}</span> de <span class="font-semibold text-slate-900 dark:text-white">${ssrInterpolate(categories.value.total)}</span> resultados </p><nav class="relative z-0 inline-flex -space-x-px rounded-xl shadow-sm"><!--[-->`);
          ssrRenderList(categories.value.links, (link, index) => {
            var _a, _b;
            _push(`<!--[-->`);
            if (link && link.url) {
              _push(`<button class="${ssrRenderClass([
                "relative inline-flex items-center border px-3.5 py-2 text-sm font-medium transition-colors first:rounded-l-xl last:rounded-r-xl",
                link.active ? "z-10 border-sky-500 bg-sky-50 text-sky-700 dark:border-sky-400/40 dark:bg-sky-500/15 dark:text-sky-300" : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
              ])}">${(_a = link.label) != null ? _a : ""}</button>`);
            } else if (link) {
              _push(`<span class="relative inline-flex items-center border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-300 first:rounded-l-xl last:rounded-r-xl dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-600">${(_b = link.label) != null ? _b : ""}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></nav></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
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
//# sourceMappingURL=index-CDp3KhyF.mjs.map
