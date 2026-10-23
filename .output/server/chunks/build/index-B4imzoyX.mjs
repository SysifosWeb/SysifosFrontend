import { i as useCookie, c as __nuxt_component_0$1, f as useRuntimeConfig } from './server.mjs';
import { reactive, computed, withAsyncContext, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { Search, X, Inbox, RotateCcw, Eye, MailOpen, Archive } from 'lucide-vue-next';
import { u as useFetch } from './fetch-Dh0cH-Tt.mjs';
import '../nitro/nitro.mjs';
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
import './asyncData-C6UtHzJh.mjs';
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
      "$cbqzjPQZbY"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const contacts = computed(() => {
      var _a;
      const r = contactsResponse.value;
      if (!(r == null ? void 0 : r.data)) return { data: [], links: [], from: 0, to: 0, total: 0 };
      return { ...r, links: Array.isArray(r.links) ? r.links : ((_a = r.meta) == null ? void 0 : _a.links) || [] };
    });
    const hasActiveFilters = computed(() => filters.search || filters.status);
    const getStatusClass = (status) => {
      const statusClasses = {
        "new": "bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-500/10 dark:text-red-400 dark:ring-red-400/20",
        "read": "bg-amber-50 text-amber-700 ring-amber-600/10 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-400/20",
        "replied": "bg-emerald-50 text-emerald-700 ring-emerald-600/10 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-400/20",
        "archived": "bg-slate-100 text-slate-600 ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-400/20"
      };
      return statusClasses[status] || "bg-slate-100 text-slate-600 ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-400/20";
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
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-6 flex flex-wrap items-center justify-between gap-4"><div><h1 class="font-display text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">Contactos</h1><p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Gestiona los mensajes de contacto de tu sitio principal</p></div></div><div class="mb-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/60 sm:p-5 dark:bg-slate-900 dark:ring-slate-800"><form class="grid grid-cols-1 gap-4 md:grid-cols-3"><div class="relative md:col-span-2">`);
      _push(ssrRenderComponent(unref(Search), { class: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" }, null, _parent));
      _push(`<input${ssrRenderAttr("value", filters.search)} type="text" placeholder="Nombre, email, asunto\u2026" class="!pl-10"></div><div class="flex items-center gap-2.5"><select class="flex-1"><option value=""${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "") : ssrLooseEqual(filters.status, "")) ? " selected" : ""}>Todos</option><option value="new"${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "new") : ssrLooseEqual(filters.status, "new")) ? " selected" : ""}>Nuevo</option><option value="read"${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "read") : ssrLooseEqual(filters.status, "read")) ? " selected" : ""}>Le\xEDdo</option><option value="replied"${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "replied") : ssrLooseEqual(filters.status, "replied")) ? " selected" : ""}>Respondido</option><option value="archived"${ssrIncludeBooleanAttr(Array.isArray(filters.status) ? ssrLooseContain(filters.status, "archived") : ssrLooseEqual(filters.status, "archived")) ? " selected" : ""}>Archivado</option></select>`);
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
        if (contacts.value.data.length === 0) {
          _push(`<div class="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800"><div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-500/10">`);
          _push(ssrRenderComponent(unref(Inbox), { class: "h-7 w-7 text-sky-500" }, null, _parent));
          _push(`</div><div><p class="font-semibold text-slate-900 dark:text-white">Sin contactos</p><p class="mt-1 text-sm text-slate-500 dark:text-slate-400">No se encontraron mensajes con los filtros actuales</p></div>`);
          if (hasActiveFilters.value) {
            _push(`<button class="mt-1 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-sky-600 ring-1 ring-sky-200 transition-colors hover:bg-sky-50 dark:text-sky-400 dark:ring-sky-500/30 dark:hover:bg-sky-500/10">`);
            _push(ssrRenderComponent(unref(RotateCcw), { class: "h-4 w-4" }, null, _parent));
            _push(` Limpiar filtros </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<div class="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-900 dark:ring-slate-800"><div class="overflow-x-auto scrollbar-thin"><table class="min-w-full divide-y divide-slate-100 dark:divide-slate-800"><thead><tr class="bg-slate-50/80 dark:bg-slate-800/40"><th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Contacto</th><th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Asunto</th><th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Estado</th><th class="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Fecha</th><th class="px-6 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Acciones</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
          ssrRenderList(contacts.value.data, (contact) => {
            var _a;
            _push(`<tr class="group/row transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/40"><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center gap-3"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sm font-bold text-sky-600 dark:bg-sky-500/10 dark:text-sky-400">${ssrInterpolate((_a = contact.name) == null ? void 0 : _a.charAt(0).toUpperCase())}</div><div class="min-w-0"><div class="text-sm font-semibold text-slate-900 group-hover/row:text-sky-600 dark:text-white dark:group-hover/row:text-sky-400">${ssrInterpolate(contact.name)}</div><div class="truncate text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(contact.email)}</div></div></div></td><td class="px-6 py-4"><div class="max-w-xs truncate text-sm text-slate-700 dark:text-slate-300"${ssrRenderAttr("title", contact.subject)}>${ssrInterpolate(contact.subject)}</div></td><td class="px-6 py-4 whitespace-nowrap"><span class="${ssrRenderClass([getStatusClass(contact.status), "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1"])}"><span class="${ssrRenderClass([{
              "bg-red-500": contact.status === "new",
              "bg-amber-500": contact.status === "read",
              "bg-emerald-500": contact.status === "replied",
              "bg-slate-400": contact.status === "archived"
            }, "h-1.5 w-1.5 rounded-full"])}"></span> ${ssrInterpolate(getStatusText(contact.status))}</span></td><td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(formatDate(contact.created_at))}</td><td class="px-6 py-4 whitespace-nowrap"><div class="flex items-center justify-end gap-1">`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: "/admin/contacts/" + contact.id,
              title: "Ver detalle",
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
            if (contact.status === "new") {
              _push(`<button title="Marcar como le\xEDdo" class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-amber-50 hover:text-amber-600 dark:hover:bg-amber-500/10 dark:hover:text-amber-400">`);
              _push(ssrRenderComponent(unref(MailOpen), { class: "h-4 w-4" }, null, _parent));
              _push(`</button>`);
            } else {
              _push(`<!---->`);
            }
            if (contact.status !== "archived") {
              _push(`<button title="Archivar" class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200">`);
              _push(ssrRenderComponent(unref(Archive), { class: "h-4 w-4" }, null, _parent));
              _push(`</button>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></td></tr>`);
          });
          _push(`<!--]--></tbody></table></div>`);
          if (contacts.value.last_page > 1) {
            _push(`<div class="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/30 sm:px-6"><div class="flex-1 flex justify-between sm:hidden">`);
            if (contacts.value.prev_page_url) {
              _push(`<button class="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"> Anterior </button>`);
            } else {
              _push(`<!---->`);
            }
            if (contacts.value.next_page_url) {
              _push(`<button class="ml-3 inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"> Siguiente </button>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"><p class="text-sm text-slate-500 dark:text-slate-400"> Mostrando <span class="font-semibold text-slate-900 dark:text-white">${ssrInterpolate(contacts.value.from)}</span> a <span class="font-semibold text-slate-900 dark:text-white">${ssrInterpolate(contacts.value.to)}</span> de <span class="font-semibold text-slate-900 dark:text-white">${ssrInterpolate(contacts.value.total)}</span> resultados </p><nav class="relative z-0 inline-flex -space-x-px rounded-xl shadow-sm"><!--[-->`);
            ssrRenderList(contacts.value.links, (link, index) => {
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
            _push(`<!--]--></nav></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/contacts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B4imzoyX.mjs.map
