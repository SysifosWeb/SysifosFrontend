import { m as useState, g as useCookie, e as useHead, a as __nuxt_component_0$1, b as useRoute$1, c as useRouter$1, f as useRuntimeConfig } from './server.mjs';
import { defineComponent, computed, ref, watch, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderSlot, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { LayoutDashboard, ClipboardList, SquareKanban, FileText, Tags, Inbox, X, Landmark, ExternalLink, ChevronRight, LogOut, Menu, PanelLeftOpen, PanelLeftClose, Plus, Sun, Moon, Rows3, ListTodo, Flag, Layers, CalendarRange, BarChart, Settings2, Bell, RefreshCw } from 'lucide-vue-next';
import { u as useApi, b as apiErrorMessage } from './useApi-B4bgMxIg.mjs';
import { _ as _imports_0 } from './_virtual_public-hZXEL4kF.mjs';
import { useRoute, useRouter } from 'vue-router';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectNavigation",
  __ssrInlineRender: true,
  props: {
    context: {},
    collapsed: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const route = useRoute$1();
    const links = computed(() => {
      const base = `/admin/kanban/${props.context.project.id}`;
      return [
        { name: "Tablero", path: base, view: void 0, icon: SquareKanban, active: route.path === base && route.query.view !== "list" },
        { name: "Issues", path: base, view: "list", icon: Rows3, active: route.path === base && route.query.view === "list" },
        { name: "Backlog", path: `${base}/backlog`, view: void 0, icon: ListTodo, active: route.path === `${base}/backlog` },
        { name: "Sprints", path: `${base}/sprints`, view: void 0, icon: Flag, active: route.path === `${base}/sprints` },
        { name: "\xC9picas", path: `${base}/epics`, view: void 0, icon: Layers, active: route.path === `${base}/epics` },
        { name: "Timeline", path: `${base}/timeline`, view: void 0, icon: CalendarRange, active: route.path === `${base}/timeline` },
        { name: "Reportes", path: `${base}/reports`, view: void 0, icon: BarChart, active: route.path === `${base}/reports` },
        { name: "Configuraci\xF3n", path: `/admin/projects/${props.context.project.id}/settings`, view: void 0, icon: Settings2, active: route.path === `/admin/projects/${props.context.project.id}/settings` }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "border-t border-white/10 pt-5",
        "aria-label": "Proyecto activo"
      }, _attrs))}><div class="${ssrRenderClass([__props.collapsed ? "lg:justify-center lg:px-0" : "", "mb-3 flex items-center gap-2 px-2"])}"><span class="flex h-8 min-w-8 max-w-12 items-center justify-center rounded-md bg-sky-500/20 px-1 text-[10px] font-semibold text-sky-300"${ssrRenderAttr("title", __props.context.project.name)}>${ssrInterpolate(__props.context.project.project_key.slice(0, 4))}</span><div class="${ssrRenderClass([__props.collapsed ? "lg:hidden" : "", "min-w-0"])}"><p class="text-[10px] uppercase tracking-wider text-slate-400">Proyecto</p><p class="truncate text-xs font-semibold text-white"${ssrRenderAttr("title", __props.context.project.name)}>${ssrInterpolate(__props.context.project.name)}</p></div></div><div class="space-y-1"><!--[-->`);
      ssrRenderList(unref(links), (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.name,
          to: { path: link.path, query: { ...unref(route).query, view: link.view } },
          "aria-current": link.active ? "page" : void 0,
          class: ["flex min-h-10 items-center gap-3 rounded-lg px-3 text-sm text-slate-400 hover:bg-white/5 hover:text-white aria-[current=page]:bg-white/10 aria-[current=page]:text-white", __props.collapsed ? "lg:justify-center lg:px-0" : ""],
          "aria-label": `${link.name} del proyecto`,
          title: link.name,
          onClick: ($event) => emit("navigate")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(link.icon), { class: "h-[18px] w-[18px]" }, null), _parent2, _scopeId);
              _push2(`<span class="${ssrRenderClass(__props.collapsed ? "lg:hidden" : "")}"${_scopeId}>${ssrInterpolate(link.name)}</span>`);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(link.icon), { class: "h-[18px] w-[18px]" })),
                createVNode("span", {
                  class: __props.collapsed ? "lg:hidden" : ""
                }, toDisplayString(link.name), 3)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/ProjectNavigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NotificationBell",
  __ssrInlineRender: true,
  setup(__props) {
    const api = useApi();
    useRouter$1();
    const token = useCookie("auth_token");
    const notices = ref([]);
    const unread = ref(0);
    const page = ref(1);
    const lastPage = ref(1);
    const busy = ref(false);
    const error = ref("");
    const dropdown = ref();
    const labels = { assigned: "te asign\xF3 un issue", comment: "coment\xF3 un issue", status_changed: "cambi\xF3 el estado", mention: "te mencion\xF3" };
    let disposed = false;
    let epoch = 0;
    async function refresh(append = false) {
      if (busy.value || !token.value) return;
      const started = epoch;
      busy.value = true;
      error.value = "";
      try {
        const next = append ? page.value + 1 : 1;
        const response = await api.request("kanban/notifications", { query: { page: next } });
        if (disposed || started !== epoch) return;
        notices.value = append ? [...notices.value, ...response.data.filter((item) => !notices.value.some((current) => current.id === item.id))] : response.data;
        unread.value = response.meta.unread_count;
        lastPage.value = response.meta.last_page;
        page.value = next;
      } catch (failure) {
        if (started !== epoch) return;
        notices.value = [];
        unread.value = 0;
        error.value = apiErrorMessage(failure, "No se pudieron cargar las notificaciones.");
      } finally {
        if (started === epoch) busy.value = false;
      }
    }
    watch(token, () => {
      epoch++;
      notices.value = [];
      unread.value = 0;
      busy.value = false;
      if (token.value) void refresh();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<details${ssrRenderAttrs(mergeProps({
        ref_key: "dropdown",
        ref: dropdown,
        class: "relative"
      }, _attrs))}><summary${ssrRenderAttr("aria-label", `Notificaciones${unref(unread) ? `, ${unref(unread)} sin leer` : ""}`)} class="relative flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg text-slate-600 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:bg-slate-800">`);
      _push(ssrRenderComponent(unref(Bell), { class: "h-[18px] w-[18px]" }, null, _parent));
      if (unref(unread)) {
        _push(`<span class="absolute right-0 top-0 rounded-full bg-red-600 px-1 text-[10px] font-semibold text-white">${ssrInterpolate(unref(unread) > 99 ? "99+" : unref(unread))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</summary><section aria-label="Notificaciones internas" class="absolute right-0 z-50 mt-2 max-h-[75vh] w-[min(360px,calc(100vw-32px))] overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-900"><header class="mb-3 flex items-center gap-2"><h2 class="flex-1 text-sm font-semibold">Notificaciones</h2><button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} aria-label="Actualizar notificaciones" class="rounded p-1">`);
      _push(ssrRenderComponent(unref(RefreshCw), { class: "h-4 w-4" }, null, _parent));
      _push(`</button><button${ssrIncludeBooleanAttr(unref(busy) || !unref(unread)) ? " disabled" : ""} class="text-xs text-sky-700 underline dark:text-sky-300">Marcar le\xEDdas</button></header>`);
      if (unref(error)) {
        _push(`<p role="alert" class="mb-2 text-xs text-amber-800 dark:text-amber-200">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(notices).length) {
        _push(`<p class="py-3 text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(unref(busy) ? "Cargando\u2026" : "No hay notificaciones disponibles.")}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
      ssrRenderList(unref(notices), (notice) => {
        _push(`<li><button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="${ssrRenderClass([!notice.read_at ? "font-semibold" : "", "w-full rounded p-2 text-left text-xs hover:bg-slate-50 dark:hover:bg-slate-800"])}"><span class="block">${ssrInterpolate(notice.data.actor)} ${ssrInterpolate(labels[notice.data.kind] || "actualiz\xF3 un issue")}</span><span class="mt-1 block text-sky-700 dark:text-sky-300">${ssrInterpolate(notice.data.issue_key)} \xB7 ${ssrInterpolate(notice.data.title)}</span><time class="mt-1 block text-[11px] text-slate-500 dark:text-slate-400">${ssrInterpolate(new Date(notice.created_at).toLocaleString("es-CL"))}</time></button></li>`);
      });
      _push(`<!--]--></ul>`);
      if (unref(page) < unref(lastPage)) {
        _push(`<button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="mt-3 text-xs font-semibold underline">Ver m\xE1s notificaciones</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></details>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/NotificationBell.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const projectContext = useState("admin-active-project", () => null);
    const activeProjectContext = computed(() => {
      var _a;
      return ((_a = projectContext.value) == null ? void 0 : _a.project.id) === Number(route.params.project) ? projectContext.value : null;
    });
    const paletteCommands = computed(() => [
      { label: "Ir al inicio", to: "/admin", icon: LayoutDashboard },
      { label: "Mi trabajo", to: "/admin/kanban/my-work", icon: ClipboardList },
      { label: "Proyectos", to: "/admin/kanban", icon: SquareKanban },
      { label: "Posts del Blog", to: "/admin/posts", icon: FileText },
      { label: "Categor\xEDas", to: "/admin/categories", icon: Tags },
      { label: "Contactos", to: "/admin/contacts", icon: Inbox }
    ]);
    const isHome = computed(() => /^\/admin\/?$/.test(route.path));
    const sidebarOpen = ref(false);
    const sidebarCollapsed = ref(true);
    const isDark = ref(false);
    const newContactsCount = ref(0);
    const searchQuery = ref("");
    const searchResults = ref([]);
    const searchOpen = ref(false);
    const searchLoading = ref(false);
    let searchTimer;
    const paletteOpen = ref(false);
    const paletteQuery = ref("");
    ref(null);
    const paletteResults = ref([]);
    const paletteLoading = ref(false);
    let paletteTimer;
    const userEmail = useCookie("user_email");
    const userName = useCookie("user_name");
    const authToken = useCookie("auth_token");
    const config = useRuntimeConfig();
    useHead({ meta: [{ name: "robots", content: "noindex, nofollow" }] });
    const navGroups = [
      {
        label: "General",
        items: [
          { label: "Inicio", to: "/admin", match: "/admin", icon: LayoutDashboard },
          { label: "Mercado P\xFAblico", to: "/admin/mercado-publico", match: "/admin/mercado-publico", icon: Landmark },
          { label: "Proyectos", to: "/admin/kanban", match: "/admin/kanban", icon: SquareKanban },
          { label: "Mi trabajo", to: "/admin/kanban/my-work", match: "/admin/kanban/my-work", icon: ClipboardList }
        ]
      },
      {
        label: "Contenido",
        items: [
          { label: "Posts del Blog", to: "/admin/posts", match: "/admin/posts", icon: FileText },
          { label: "Categor\xEDas", to: "/admin/categories", match: "/admin/categories", icon: Tags }
        ]
      },
      {
        label: "Comunicaci\xF3n",
        items: [
          { label: "Contactos", to: "/admin/contacts", match: "/admin/contacts", icon: Inbox }
        ]
      }
    ];
    const pageTitle = computed(() => {
      const p = route.path;
      if (p === "/admin" || p === "/admin/") return "Inicio";
      if (p === "/admin/kanban/my-work" || p === "/admin/kanban/my-work/") return "Mi trabajo";
      if (p === "/admin/kanban" || p === "/admin/kanban/") return "Proyectos Kanban";
      if (p.startsWith("/admin/kanban/") && p.endsWith("/timeline")) return "Timeline del proyecto";
      if (p.startsWith("/admin/kanban/") && p.endsWith("/reports")) return "Reportes del proyecto";
      if (p.startsWith("/admin/kanban/")) return route.query.view === "list" ? "Issues del proyecto" : "Tablero Kanban";
      if (p.startsWith("/admin/projects/")) return "Configuraci\xF3n del proyecto";
      if (p.startsWith("/admin/mercado-publico")) return "Mercado P\xFAblico";
      if (p.startsWith("/admin/posts")) {
        if (p.endsWith("/create")) return "Nuevo Post";
        if (p.includes("/edit")) return "Editar Post";
        if (/^\/admin\/posts\/\d+/.test(p)) return "Detalle de Post";
        return "Posts del Blog";
      }
      if (p.startsWith("/admin/categories")) {
        if (p.endsWith("/create")) return "Nueva Categor\xEDa";
        if (p.includes("/edit")) return "Editar Categor\xEDa";
        if (/^\/admin\/categories\/\d+/.test(p)) return "Detalle de Categor\xEDa";
        return "Categor\xEDas";
      }
      if (p.startsWith("/admin/contacts")) {
        if (/^\/admin\/contacts\/\d+/.test(p)) return "Detalle de Contacto";
        return "Contactos";
      }
      return "Panel de Administraci\xF3n";
    });
    const routeCurrent = (path) => {
      if (path === "/admin") return isHome.value;
      if (path === "/admin/kanban/my-work") return route.path === path || route.path.startsWith(path + "/");
      if (path === "/admin/kanban") return (route.path === path || route.path.startsWith(path + "/")) && !route.path.startsWith("/admin/kanban/my-work") || route.path.startsWith("/admin/projects/");
      return route.path.startsWith(path);
    };
    const fetchSearch = async (q) => {
      if (!q.trim()) return [];
      try {
        const res = await $fetch(`${config.public.apiUrl}kanban/search`, {
          headers: { Authorization: `Bearer ${authToken.value}`, Accept: "application/json" },
          query: { q: q.trim(), limit: 15 }
        });
        return (res == null ? void 0 : res.data) || res || [];
      } catch {
        return [];
      }
    };
    watch(searchQuery, (q) => {
      clearTimeout(searchTimer);
      if (!q.trim()) {
        searchResults.value = [];
        return;
      }
      searchTimer = setTimeout(async () => {
        searchLoading.value = true;
        searchResults.value = await fetchSearch(q);
        searchLoading.value = false;
      }, 250);
    });
    watch(paletteQuery, (q) => {
      clearTimeout(paletteTimer);
      if (!q.trim()) {
        paletteResults.value = [];
        return;
      }
      paletteTimer = setTimeout(async () => {
        paletteLoading.value = true;
        paletteResults.value = await fetchSearch(q);
        paletteLoading.value = false;
      }, 250);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_AdminKanbanProjectNavigation = _sfc_main$2;
      const _component_AdminKanbanNotificationBell = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-scope min-h-screen bg-[#f6f4fa] text-slate-900 dark:bg-[#141318] dark:text-slate-100" }, _attrs))}><aside id="admin-navigation" class="${ssrRenderClass([[sidebarOpen.value ? "translate-x-0" : "-translate-x-full", sidebarCollapsed.value ? "lg:w-[64px]" : "lg:w-[232px]"], "fixed inset-y-0 left-0 z-50 flex w-[264px] flex-col bg-[#17161b] text-white transition-[width,transform] duration-200 ease-out lg:translate-x-0 lg:inset-y-4 lg:left-4 lg:rounded-[24px]"])}"><div class="${ssrRenderClass([sidebarCollapsed.value ? "lg:justify-center lg:px-2" : "", "flex h-16 shrink-0 items-center gap-3 border-b border-white/10 px-5"])}"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white"><img${ssrRenderAttr("src", _imports_0)} alt="" class="h-6 w-6"></div><div class="${ssrRenderClass([sidebarCollapsed.value ? "lg:hidden" : "", "min-w-0 leading-tight"])}"><p class="truncate font-display text-sm font-semibold text-white">SysifosWeb</p><p class="text-xs text-slate-400">Gesti\xF3n del trabajo</p></div><button aria-label="Cerrar men\xFA" class="ml-auto flex h-11 w-11 items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 hover:text-white lg:hidden">`);
      _push(ssrRenderComponent(unref(X), { class: "h-5 w-5" }, null, _parent));
      _push(`</button></div><nav aria-label="Navegaci\xF3n principal" class="flex-1 space-y-5 overflow-y-auto px-3 py-5 scrollbar-thin"><!--[-->`);
      ssrRenderList(navGroups, (group) => {
        _push(`<div><p class="${ssrRenderClass([sidebarCollapsed.value ? "lg:hidden" : "", "mb-2 px-3 text-xs font-medium text-slate-400"])}">${ssrInterpolate(group.label)}</p><div class="space-y-1"><!--[-->`);
        ssrRenderList(group.items, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.to,
            to: item.to,
            class: ["group flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400", [routeCurrent(item.match) ? "bg-[#ded4f0] text-[#24202e]" : "text-slate-400 hover:bg-white/5 hover:text-white", sidebarCollapsed.value ? "lg:justify-center lg:px-0" : ""]],
            "aria-label": item.to === "/admin/contacts" && newContactsCount.value > 0 ? `${item.label}, ${newContactsCount.value} nuevos` : item.label,
            title: sidebarCollapsed.value ? item.label : void 0,
            onClick: ($event) => sidebarOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.icon), { class: "h-[18px] w-[18px] shrink-0 text-current" }, null), _parent2, _scopeId);
                _push2(`<span class="${ssrRenderClass([sidebarCollapsed.value ? "lg:hidden" : "", "truncate"])}"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
                if (item.to === "/admin/contacts" && newContactsCount.value > 0) {
                  _push2(`<span class="${ssrRenderClass([sidebarCollapsed.value ? "lg:hidden" : "", "ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1.5 text-[11px] font-semibold text-slate-900"])}"${_scopeId}>${ssrInterpolate(newContactsCount.value)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "h-[18px] w-[18px] shrink-0 text-current" })),
                  createVNode("span", {
                    class: ["truncate", sidebarCollapsed.value ? "lg:hidden" : ""]
                  }, toDisplayString(item.label), 3),
                  item.to === "/admin/contacts" && newContactsCount.value > 0 ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: ["ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1.5 text-[11px] font-semibold text-slate-900", sidebarCollapsed.value ? "lg:hidden" : ""]
                  }, toDisplayString(newContactsCount.value), 3)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]-->`);
      if (activeProjectContext.value) {
        _push(ssrRenderComponent(_component_AdminKanbanProjectNavigation, {
          context: activeProjectContext.value,
          collapsed: sidebarCollapsed.value,
          onNavigate: ($event) => sidebarOpen.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</nav><div class="shrink-0 border-t border-white/10 p-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        target: "_blank",
        class: ["flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400", sidebarCollapsed.value ? "lg:justify-center lg:px-0" : ""],
        "aria-label": sidebarCollapsed.value ? "Ver sitio web" : void 0,
        title: sidebarCollapsed.value ? "Ver sitio web" : void 0
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ExternalLink), { class: "h-[18px] w-[18px] shrink-0" }, null, _parent2, _scopeId));
            _push2(`<span class="${ssrRenderClass(sidebarCollapsed.value ? "lg:hidden" : "")}"${_scopeId}>Ver sitio web</span>`);
            _push2(ssrRenderComponent(unref(ChevronRight), {
              class: ["ml-auto h-4 w-4 text-slate-500", sidebarCollapsed.value ? "lg:hidden" : ""]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ExternalLink), { class: "h-[18px] w-[18px] shrink-0" }),
              createVNode("span", {
                class: sidebarCollapsed.value ? "lg:hidden" : ""
              }, "Ver sitio web", 2),
              createVNode(unref(ChevronRight), {
                class: ["ml-auto h-4 w-4 text-slate-500", sidebarCollapsed.value ? "lg:hidden" : ""]
              }, null, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([sidebarCollapsed.value ? "lg:flex-col lg:justify-center lg:gap-1 lg:px-0" : "", "mt-2 flex min-w-0 items-center gap-3 rounded-lg bg-white/5 p-2"])}"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-900">${ssrInterpolate((unref(userName) || "Admin").charAt(0).toUpperCase())}</div><div class="${ssrRenderClass([sidebarCollapsed.value ? "lg:hidden" : "", "min-w-0 flex-1 leading-tight"])}"><p class="truncate text-sm font-medium text-white">${ssrInterpolate(unref(userName) || "Admin")}</p><p class="truncate text-xs text-slate-400">${ssrInterpolate(unref(userEmail) || "admin@sysifos.cl")}</p></div><button class="flex h-11 w-11 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400" aria-label="Cerrar sesi\xF3n" title="Cerrar sesi\xF3n">`);
      _push(ssrRenderComponent(unref(LogOut), { class: "h-4 w-4" }, null, _parent));
      _push(`</button></div></div></aside><div class="${ssrRenderClass([sidebarCollapsed.value ? "lg:pl-[96px]" : "lg:pl-[264px]", "flex min-h-screen flex-col transition-[padding] duration-200 ease-out"])}"><header class="sticky top-0 z-40 bg-[#f6f4fa] transition-colors dark:bg-[#141318]"><div class="flex h-14 items-center gap-3 px-4 sm:px-6 lg:px-8"><button aria-label="Abrir men\xFA"${ssrRenderAttr("aria-expanded", sidebarOpen.value)} class="flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-200/70 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden">`);
      _push(ssrRenderComponent(unref(Menu), { class: "h-5 w-5" }, null, _parent));
      _push(`</button><button${ssrRenderAttr("aria-label", sidebarCollapsed.value ? "Expandir navegaci\xF3n" : "Contraer navegaci\xF3n")}${ssrRenderAttr("aria-expanded", !sidebarCollapsed.value)} class="hidden h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-200/70 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 lg:flex">`);
      if (sidebarCollapsed.value) {
        _push(ssrRenderComponent(unref(PanelLeftOpen), { class: "h-[18px] w-[18px]" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(PanelLeftClose), { class: "h-[18px] w-[18px]" }, null, _parent));
      }
      _push(`</button><div class="flex min-w-0 items-center gap-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "hidden text-sm font-medium text-slate-600 transition-colors hover:text-sky-800 dark:text-slate-300 dark:hover:text-sky-200 sm:block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` SysifosWeb `);
          } else {
            return [
              createTextVNode(" SysifosWeb ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(ChevronRight), { class: "hidden h-4 w-4 text-slate-400 dark:text-slate-600 sm:block" }, null, _parent));
      _push(`<h1 class="truncate text-sm font-semibold text-slate-950 dark:text-white sm:text-base">${ssrInterpolate(pageTitle.value)}</h1></div><div class="relative hidden min-w-0 flex-1 max-w-md md:block"><input${ssrRenderAttr("value", searchQuery.value)} data-global-search type="search" placeholder="Buscar issues\u2026 ( / )" aria-label="Buscar issues" class="h-9 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">`);
      if (searchOpen.value && (searchLoading.value || searchResults.value.length)) {
        _push(`<div class="absolute left-0 right-0 top-11 z-50 max-h-80 overflow-auto rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">`);
        if (searchLoading.value) {
          _push(`<p class="px-3 py-2 text-xs text-slate-500">Buscando\u2026</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(searchResults.value, (issue) => {
          var _a2, _b;
          _push(`<button class="flex w-full items-start gap-2 px-3 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-800"><span class="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">${ssrInterpolate(issue.issue_key)}</span><span class="min-w-0 flex-1"><span class="block truncate text-sm font-medium text-slate-900 dark:text-white">${ssrInterpolate(issue.title)}</span><span class="block truncate text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(((_a2 = issue.project) == null ? void 0 : _a2.name) || ((_b = issue.project) == null ? void 0 : _b.project_key) || "")}</span></span></button>`);
        });
        _push(`<!--]-->`);
        if (!searchLoading.value && !searchResults.value.length && searchQuery.value.trim()) {
          _push(`<p class="px-3 py-2 text-xs text-slate-500">Sin resultados.</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="ml-auto flex items-center gap-1.5">`);
      if ((_a = activeProjectContext.value) == null ? void 0 : _a.permissions.collaborate) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { path: `/admin/kanban/${activeProjectContext.value.project.id}`, query: { ...unref(route).query, issue: void 0, create: "1" } },
          class: "mr-2 inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-sky-700 px-3 text-sm font-semibold text-white hover:bg-sky-800"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              _push2(`Crear`);
            } else {
              return [
                createVNode(unref(Plus), { class: "h-4 w-4" }),
                createTextVNode("Crear")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-200/70 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"${ssrRenderAttr("title", isDark.value ? "Modo claro" : "Modo oscuro")}>`);
      if (isDark.value) {
        _push(ssrRenderComponent(unref(Sun), { class: "h-[18px] w-[18px]" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Moon), { class: "h-[18px] w-[18px]" }, null, _parent));
      }
      _push(`</button>`);
      _push(ssrRenderComponent(_component_AdminKanbanNotificationBell, null, null, _parent));
      _push(`</div></div></header><main class="${ssrRenderClass([isHome.value ? "" : "mb-4 rounded-2xl bg-white py-6 dark:bg-slate-900", "admin-content mx-auto w-full min-w-0 max-w-[1600px] flex-1 px-4 pb-6 pt-2 sm:px-6"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
      if (paletteOpen.value) {
        _push(`<div class="fixed inset-0 z-[60] flex items-start justify-center bg-black/50 pt-16"><div class="w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-slate-900"><div class="border-b border-slate-200 p-3 dark:border-slate-800"><input${ssrRenderAttr("value", paletteQuery.value)} type="search" placeholder="Comandos o buscar issues\u2026 (Ctrl+K)" aria-label="Paleta de comandos" class="h-9 w-full rounded-lg border border-slate-200 bg-transparent px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:text-slate-100"></div><div class="max-h-80 overflow-auto p-2">`);
        if (paletteLoading.value) {
          _push(`<p class="px-3 py-2 text-xs text-slate-500">Buscando\u2026</p>`);
        } else {
          _push(`<!--[--><p class="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Navegaci\xF3n</p><!--[-->`);
          ssrRenderList(paletteCommands.value, (cmd) => {
            _push(`<button class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800">`);
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(cmd.icon), { class: "h-4 w-4 text-slate-400" }, null), _parent);
            _push(` ${ssrInterpolate(cmd.label)}</button>`);
          });
          _push(`<!--]-->`);
          if (paletteResults.value.length) {
            _push(`<p class="mt-2 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">Issues</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(paletteResults.value, (issue) => {
            var _a2;
            _push(`<button class="flex w-full items-start gap-2 rounded-lg px-3 py-2 text-left hover:bg-slate-50 dark:hover:bg-slate-800"><span class="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">${ssrInterpolate(issue.issue_key)}</span><span class="min-w-0 flex-1"><span class="block truncate text-sm font-medium text-slate-900 dark:text-white">${ssrInterpolate(issue.title)}</span><span class="block truncate text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(((_a2 = issue.project) == null ? void 0 : _a2.name) || "")}</span></span></button>`);
          });
          _push(`<!--]--><!--]-->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="fixed inset-0 z-40 bg-black/50 lg:hidden" style="${ssrRenderStyle(sidebarOpen.value ? null : { display: "none" })}"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin-VL_NiUoL.mjs.map
