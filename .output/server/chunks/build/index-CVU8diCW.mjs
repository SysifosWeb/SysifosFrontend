import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { i as useCookie, a as useRoute, c as __nuxt_component_0$1, d as useRuntimeConfig } from './server.mjs';
import { reactive, computed, withAsyncContext, watch, withCtx, unref, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import { Plus, Search, X, Inbox, RotateCcw, Star, Eye, Pencil, CloudUpload, CloudDownload, Trash2 } from 'lucide-vue-next';
import { u as useFetch } from './fetch-CjxAMk5H.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'lru-cache';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'consola';
import 'fast-xml-parser';
import 'xss';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import '@vue/shared';
import './asyncData-B3AJ1GQp.mjs';
import 'perfect-debounce';

const delivery = "" + buildAssetsURL("delivery.BbVlRW9e.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3e3,
      timerProgressBar: true,
      background: "#1e293b",
      color: "#fff"
    });
    const config = useRuntimeConfig();
    const token = useCookie("auth_token");
    useRouter();
    const filters = reactive({
      search: "",
      status: "",
      category_id: String(useRoute().query.category_id || ""),
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
      "$GmU3M2kQVd"
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
      "$9hNIC6EcGg"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const posts = computed(() => {
      var _a;
      const r = postsResponse.value;
      if (!(r == null ? void 0 : r.data)) return { data: [], links: [], from: 0, to: 0, total: 0 };
      return { ...r, links: Array.isArray(r.links) ? r.links : ((_a = r.meta) == null ? void 0 : _a.links) || [] };
    });
    const categories = computed(() => {
      var _a;
      return ((_a = categoriesResponse.value) == null ? void 0 : _a.data) || [];
    });
    const hasActiveFilters = computed(() => {
      return filters.search || filters.status || filters.category_id || filters.featured;
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
        draft: "bg-amber-50 text-amber-700 ring-amber-600/10 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-400/20",
        published: "bg-emerald-50 text-emerald-700 ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/20"
      }[status] || "bg-slate-100 text-slate-600 ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-400/20";
    };
    const getStatusText = (status) => {
      return {
        draft: "Borrador",
        published: "Publicado"
      }[status] || "Desconocido";
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
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6 flex flex-wrap items-center justify-between gap-4"><div><h1 class="font-display text-xl font-bold text-slate-900 dark:text-white sm:text-2xl"> Posts del Blog </h1><p class="mt-1 text-sm text-slate-500 dark:text-slate-400"> Gestiona todos los posts de tu blog </p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/posts/create",
        class: "inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-600 hover:shadow-sky-600/25"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            _push2(` Nuevo Post `);
          } else {
            return [
              createVNode(unref(Plus), { class: "h-4 w-4" }),
              createTextVNode(" Nuevo Post ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mb-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/60 sm:p-5 dark:bg-slate-900 dark:ring-slate-800"><form class="grid grid-cols-1 gap-4 md:grid-cols-4"><div class="relative">`);
      _push(ssrRenderComponent(unref(Search), { class: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }, null, _parent));
      _push(`<input${ssrRenderAttr("value", filters.search)} type="text" placeholder="T\xEDtulo, contenido\u2026" class="!pl-10"></div><div><select><option value=""${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "") : ssrLooseEqual(filters.status, "")) ? " selected" : ""}>Todos los estados</option><option value="draft"${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "draft") : ssrLooseEqual(filters.status, "draft")) ? " selected" : ""}>Borrador</option><option value="published"${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "published") : ssrLooseEqual(filters.status, "published")) ? " selected" : ""}>Publicado</option></select></div><div><select><option value=""${ssrIncludeBooleanAttr(Array.isArray(filters.category_id) ? ssrLooseContain(filters.category_id, "") : ssrLooseEqual(filters.category_id, "")) ? " selected" : ""}>Todas las categor\xEDas</option><!--[-->`);
      ssrRenderList(categories.value, (category) => {
        _push(`<option${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(Array.isArray(filters.category_id) ? ssrLooseContain(filters.category_id, category.id) : ssrLooseEqual(filters.category_id, category.id)) ? " selected" : ""}>${ssrInterpolate(category.name)}</option>`);
      });
      _push(`<!--]--></select></div><div class="flex items-center gap-2.5"><select class="flex-1"><option value=""${ssrIncludeBooleanAttr(Array.isArray(filters.featured) ? ssrLooseContain(filters.featured, "") : ssrLooseEqual(filters.featured, "")) ? " selected" : ""}>Todos</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(filters.featured) ? ssrLooseContain(filters.featured, "1") : ssrLooseEqual(filters.featured, "1")) ? " selected" : ""}>Solo destacados</option><option value="0"${ssrIncludeBooleanAttr(Array.isArray(filters.featured) ? ssrLooseContain(filters.featured, "0") : ssrLooseEqual(filters.featured, "0")) ? " selected" : ""}>No destacados</option></select>`);
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
        if (posts.value.data.length === 0) {
          _push(`<div class="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800"><div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-500/10">`);
          _push(ssrRenderComponent(unref(Inbox), { class: "h-7 w-7 text-sky-500" }, null, _parent));
          _push(`</div><div><p class="font-semibold text-slate-900 dark:text-white">Sin resultados</p><p class="mt-1 text-sm text-slate-500 dark:text-slate-400"> No se encontraron posts con los filtros actuales </p></div>`);
          if (hasActiveFilters.value) {
            _push(`<button class="mt-1 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-sky-600 ring-1 ring-sky-200 transition-colors hover:bg-sky-50 dark:text-sky-400 dark:ring-sky-500/30 dark:hover:bg-sky-500/10">`);
            _push(ssrRenderComponent(unref(RotateCcw), { class: "h-4 w-4" }, null, _parent));
            _push(` Limpiar filtros </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<div class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800"><div class="overflow-x-auto scrollbar-thin"><table class="min-w-full divide-y divide-slate-100 dark:divide-slate-800"><thead><tr class="bg-slate-50/80 dark:bg-slate-800/40"><th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"> Post </th><th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"> Categor\xEDa </th><th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"> Estado </th><th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"> Fecha </th><th class="px-6 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"> Acciones </th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
          ssrRenderList(posts.value.data, (post) => {
            var _a;
            _push(`<tr class="group/row transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/40"><td class="px-6 py-4"><div class="flex items-center"><img${ssrRenderAttr("src", post.featured_image_url ? post.featured_image_url : unref(delivery))}${ssrRenderAttr("alt", post.title)} class="h-12 w-12 rounded-xl object-cover ring-1 ring-slate-200/60 dark:ring-slate-700"><div class="ml-4"><div class="text-sm font-semibold text-slate-900 group-hover/row:text-sky-600 dark:text-white dark:group-hover/row:text-sky-400">${ssrInterpolate(post.title)}</div><div class="text-xs text-slate-500 dark:text-slate-400"> por ${ssrInterpolate(((_a = post.user) == null ? void 0 : _a.name) || "Usuario")}</div>`);
            if (post.featured) {
              _push(`<span class="mt-1 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-600/10 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-400/20">`);
              _push(ssrRenderComponent(unref(Star), { class: "h-3 w-3" }, null, _parent));
              _push(` Destacado </span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></td><td class="px-6 py-4 whitespace-nowrap">`);
            if (post.category) {
              _push(`<span class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold" style="${ssrRenderStyle({
                backgroundColor: post.category.color ? post.category.color + "1a" : "#f1f5f9",
                color: post.category.color || "#475569"
              })}"><span class="h-1.5 w-1.5 rounded-full" style="${ssrRenderStyle({ backgroundColor: post.category.color || "#94a3b8" })}"></span> ${ssrInterpolate(post.category.name)}</span>`);
            } else {
              _push(`<span class="text-xs text-slate-400 dark:text-slate-500">Sin categor\xEDa</span>`);
            }
            _push(`</td><td class="px-6 py-4 whitespace-nowrap"><span class="${ssrRenderClass([getStatusClass(post.status), "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1"])}"><span class="${ssrRenderClass([post.status === "published" ? "bg-emerald-500" : "bg-amber-500", "h-1.5 w-1.5 rounded-full"])}"></span> ${ssrInterpolate(getStatusText(post.status))}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(formatDate(post.created_at))}</td><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center justify-end gap-1">`);
            if (post.id) {
              _push(ssrRenderComponent(_component_NuxtLink, {
                to: "/admin/posts/" + post.id,
                title: "Ver post",
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
            if (post.id) {
              _push(ssrRenderComponent(_component_NuxtLink, {
                to: "/admin/posts/edit?id=" + post.id,
                title: "Editar post",
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
            _push(`<button${ssrRenderAttr("title", post.featured ? "Quitar de destacados" : "Marcar como destacado")} class="${ssrRenderClass([post.featured ? "text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10" : "text-slate-300 hover:bg-amber-50 hover:text-amber-500 dark:text-slate-600 dark:hover:bg-amber-500/10 dark:hover:text-amber-400", "flex h-8 w-8 items-center justify-center rounded-lg transition-colors"])}">`);
            _push(ssrRenderComponent(unref(Star), {
              class: "h-4 w-4",
              fill: post.featured ? "currentColor" : "none"
            }, null, _parent));
            _push(`</button>`);
            if (post.status === "draft") {
              _push(`<button title="Publicar" class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400">`);
              _push(ssrRenderComponent(unref(CloudUpload), { class: "h-4 w-4" }, null, _parent));
              _push(`</button>`);
            } else {
              _push(`<button title="Despublicar" class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-orange-500/10 dark:hover:text-orange-400">`);
              _push(ssrRenderComponent(unref(CloudDownload), { class: "h-4 w-4" }, null, _parent));
              _push(`</button>`);
            }
            _push(`<button title="Eliminar post" class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400">`);
            _push(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4" }, null, _parent));
            _push(`</button></div></td></tr>`);
          });
          _push(`<!--]--></tbody></table></div>`);
          if (posts.value.links && posts.value.links.length > 3) {
            _push(`<div class="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/30 sm:px-6"><div class="flex-1 flex justify-between sm:hidden">`);
            if (posts.value.prev_page_url) {
              _push(`<button class="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"> Anterior </button>`);
            } else {
              _push(`<!---->`);
            }
            if (posts.value.next_page_url) {
              _push(`<button class="ml-3 inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"> Siguiente </button>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"><div><p class="text-sm text-slate-500 dark:text-slate-400"> Mostrando <span class="font-semibold text-slate-900 dark:text-white">${ssrInterpolate(posts.value.from)}</span> a <span class="font-semibold text-slate-900 dark:text-white">${ssrInterpolate(posts.value.to)}</span> de <span class="font-semibold text-slate-900 dark:text-white">${ssrInterpolate(posts.value.total)}</span> resultados </p></div><div><nav class="relative z-0 inline-flex -space-x-px rounded-xl shadow-sm"><!--[-->`);
            ssrRenderList(posts.value.links, (link, index) => {
              var _a, _b;
              _push(`<!--[-->`);
              if (link && link.url) {
                _push(`<button class="${ssrRenderClass([
                  "relative inline-flex items-center border px-3.5 py-2 text-sm font-medium transition-colors first:rounded-l-xl last:rounded-r-xl",
                  link.active ? "z-10 border-sky-500 bg-sky-50 text-sky-700 dark:border-sky-400/40 dark:bg-sky-500/15 dark:text-sky-300" : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                ])}">${(_a = link.label) != null ? _a : ""}</button>`);
              } else if (link) {
                _push(`<span class="${ssrRenderClass([
                  "relative inline-flex items-center border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-300 first:rounded-l-xl last:rounded-r-xl dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-600"
                ])}">${(_b = link.label) != null ? _b : ""}</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]--></nav></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/posts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CVU8diCW.mjs.map
