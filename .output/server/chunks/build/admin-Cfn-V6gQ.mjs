import { h as useCookie, b as useHead, a as __nuxt_component_0$1 } from './server.mjs';
import { ref, computed, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, createTextVNode, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderAttr, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute, useRouter } from 'vue-router';
import { X, LayoutDashboard, SquareKanban, FileText, Tags, Inbox, ExternalLink, ChevronRight, LogOut, Menu, Sun, Moon, Bell } from 'lucide-vue-next';
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
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'ipx';

const _sfc_main = {
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const sidebarOpen = ref(false);
    const isDark = ref(false);
    const newContactsCount = ref(0);
    const userEmail = useCookie("user_email");
    const userName = useCookie("user_name");
    useCookie("auth_token");
    useHead({ meta: [{ name: "robots", content: "noindex, nofollow" }] });
    const navGroups = [
      {
        label: "General",
        items: [
          { label: "Dashboard", to: "/admin", match: "/admin", icon: LayoutDashboard },
          { label: "Kanban", to: "/admin/kanban", match: "/admin/kanban", icon: SquareKanban }
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
      if (p === "/admin" || p === "/admin/") return "Dashboard";
      if (p.startsWith("/admin/kanban")) return "Kanban";
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
      if (path === "/admin") return route.path === "/admin";
      return route.path.startsWith(path);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-scope min-h-screen bg-slate-100/70 dark:bg-slate-950" }, _attrs))}><aside class="${ssrRenderClass([sidebarOpen.value ? "translate-x-0" : "-translate-x-full", "fixed inset-y-0 left-0 z-50 flex w-[264px] flex-col border-r border-white/[0.06] bg-[#0B1222] transition-transform duration-300 ease-in-out lg:translate-x-0"])}"><div class="flex h-16 items-center gap-3 border-b border-white/[0.06] px-5"><div class="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 shadow-lg shadow-sky-500/25"><span class="font-display text-lg font-bold text-[#07101F]">S</span></div><div class="min-w-0 leading-tight"><p class="truncate font-display text-sm font-semibold text-white">SysifosWeb</p><p class="text-[11px] font-medium tracking-wide text-sky-400/80">Panel de gesti\xF3n</p></div><button aria-label="Cerrar men\xFA" class="ml-auto rounded-lg p-1.5 text-slate-400 hover:bg-white/5 hover:text-white lg:hidden">`);
      _push(ssrRenderComponent(unref(X), { class: "h-5 w-5" }, null, _parent));
      _push(`</button></div><nav class="flex-1 space-y-6 overflow-y-auto px-3 py-5 scrollbar-thin"><!--[-->`);
      ssrRenderList(navGroups, (group) => {
        _push(`<div><p class="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">${ssrInterpolate(group.label)}</p><div class="space-y-1"><!--[-->`);
        ssrRenderList(group.items, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.to,
            to: item.to,
            class: ["group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200", routeCurrent(item.match) ? "bg-white/[0.07] text-white" : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-100"],
            onClick: ($event) => sidebarOpen.value = false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="${ssrRenderClass([routeCurrent(item.match) ? "opacity-100" : "opacity-0", "absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-sky-400 transition-all duration-200"])}"${_scopeId}></span>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.icon), {
                  class: ["h-[18px] w-[18px] shrink-0 transition-colors", routeCurrent(item.match) ? "text-sky-400" : "text-slate-500 group-hover:text-slate-300"]
                }, null), _parent2, _scopeId);
                _push2(` ${ssrInterpolate(item.label)} `);
                if (item.to === "/admin/contacts" && newContactsCount.value > 0) {
                  _push2(`<span class="ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-sky-500/90 px-1.5 text-[11px] font-bold text-[#07101F]"${_scopeId}>${ssrInterpolate(newContactsCount.value)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createVNode("span", {
                    class: ["absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-sky-400 transition-all duration-200", routeCurrent(item.match) ? "opacity-100" : "opacity-0"]
                  }, null, 2),
                  (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                    class: ["h-[18px] w-[18px] shrink-0 transition-colors", routeCurrent(item.match) ? "text-sky-400" : "text-slate-500 group-hover:text-slate-300"]
                  }, null, 8, ["class"])),
                  createTextVNode(" " + toDisplayString(item.label) + " ", 1),
                  item.to === "/admin/contacts" && newContactsCount.value > 0 ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-sky-500/90 px-1.5 text-[11px] font-bold text-[#07101F]"
                  }, toDisplayString(newContactsCount.value), 1)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></nav><div class="border-t border-white/[0.06] p-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        target: "_blank",
        class: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-white/[0.04] hover:text-slate-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ExternalLink), { class: "h-[18px] w-[18px] text-slate-500" }, null, _parent2, _scopeId));
            _push2(` Ver sitio web `);
            _push2(ssrRenderComponent(unref(ChevronRight), { class: "ml-auto h-4 w-4 text-slate-600" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ExternalLink), { class: "h-[18px] w-[18px] text-slate-500" }),
              createTextVNode(" Ver sitio web "),
              createVNode(unref(ChevronRight), { class: "ml-auto h-4 w-4 text-slate-600" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-2 flex items-center gap-3 rounded-xl bg-white/[0.04] p-3"><div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-sm font-bold text-[#07101F]">${ssrInterpolate((unref(userName) || "Admin").charAt(0).toUpperCase())}</div><div class="min-w-0 flex-1 leading-tight"><p class="truncate text-sm font-medium text-white">${ssrInterpolate(unref(userName) || "Admin")}</p><p class="truncate text-xs text-slate-500">${ssrInterpolate(unref(userEmail) || "admin@sysifos.cl")}</p></div><button class="rounded-lg p-2 text-slate-500 transition-colors hover:bg-red-500/10 hover:text-red-400" title="Cerrar sesi\xF3n">`);
      _push(ssrRenderComponent(unref(LogOut), { class: "h-4 w-4" }, null, _parent));
      _push(`</button></div></div></aside><div class="flex min-h-screen flex-col lg:pl-[264px]"><header class="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl transition-colors dark:border-slate-800 dark:bg-slate-950/80"><div class="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8"><button aria-label="Abrir men\xFA"${ssrRenderAttr("aria-expanded", sidebarOpen.value)} class="rounded-xl p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-slate-200 lg:hidden">`);
      _push(ssrRenderComponent(unref(Menu), { class: "h-5 w-5" }, null, _parent));
      _push(`</button><div class="flex min-w-0 items-center gap-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "hidden text-sm font-medium text-slate-400 transition-colors hover:text-sky-600 dark:text-slate-500 dark:hover:text-sky-400 sm:block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Admin `);
          } else {
            return [
              createTextVNode(" Admin ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(ChevronRight), { class: "hidden h-4 w-4 text-slate-300 dark:text-slate-600 sm:block" }, null, _parent));
      _push(`<h1 class="truncate text-sm font-semibold text-slate-900 dark:text-white sm:text-base">${ssrInterpolate(pageTitle.value)}</h1></div><div class="ml-auto flex items-center gap-1.5"><button class="rounded-xl p-2.5 text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-slate-100"${ssrRenderAttr("title", isDark.value ? "Modo claro" : "Modo oscuro")}>`);
      if (isDark.value) {
        _push(ssrRenderComponent(unref(Sun), { class: "h-[18px] w-[18px]" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Moon), { class: "h-[18px] w-[18px]" }, null, _parent));
      }
      _push(`</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/contacts",
        class: "relative rounded-xl p-2.5 text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-slate-100",
        title: newContactsCount.value > 0 ? `${newContactsCount.value} contactos nuevos` : "Contactos"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Bell), { class: "h-[18px] w-[18px]" }, null, _parent2, _scopeId));
            if (newContactsCount.value > 0) {
              _push2(`<span class="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-950"${_scopeId}>${ssrInterpolate(newContactsCount.value > 9 ? "9+" : newContactsCount.value)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(Bell), { class: "h-[18px] w-[18px]" }),
              newContactsCount.value > 0 ? (openBlock(), createBlock("span", {
                key: 0,
                class: "absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-950"
              }, toDisplayString(newContactsCount.value > 9 ? "9+" : newContactsCount.value), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header><main class="mx-auto w-full max-w-[1600px] flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div><div class="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden" style="${ssrRenderStyle(sidebarOpen.value ? null : { display: "none" })}"></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin-Cfn-V6gQ.mjs.map
