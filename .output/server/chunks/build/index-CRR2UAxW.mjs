import { b as useHead, i as useCookie, c as __nuxt_component_0$1, f as useRuntimeConfig } from './server.mjs';
import { defineComponent, ref, reactive, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { FolderOpen, RefreshCw, Plus, Loader2, FolderPlus, SquareKanban, ArrowUpRight, X } from 'lucide-vue-next';
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
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Proyectos Kanban \xB7 SysifosWeb", meta: [{ name: "robots", content: "noindex, nofollow" }] });
    const projects = ref([]);
    const loading = ref(true);
    const busy = ref(false);
    const connected = ref(false);
    const retryable = ref(true);
    const notice = ref("");
    const projectError = ref("");
    ref();
    ref(false);
    const form = reactive({ name: "", description: "" });
    useCookie("auth_token");
    const config = useRuntimeConfig();
    `${config.public.apiUrl}kanban`;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><header class="flex flex-wrap items-start justify-between gap-4"><div><h2 class="flex items-center gap-2 font-display text-2xl font-bold text-slate-900 dark:text-white">`);
      _push(ssrRenderComponent(unref(FolderOpen), { class: "h-6 w-6 text-sky-500" }, null, _parent));
      _push(` Proyectos Kanban</h2><p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Elige un proyecto para abrir su tablero o crea uno nuevo para comenzar.</p></div><div class="flex items-center gap-2"><button aria-label="Actualizar proyectos"${ssrIncludeBooleanAttr(unref(loading) || unref(busy)) ? " disabled" : ""} class="rounded-xl bg-white p-2.5 text-slate-500 ring-1 ring-slate-200 hover:text-sky-600 disabled:opacity-50 dark:bg-slate-900 dark:text-slate-400 dark:ring-slate-800">`);
      _push(ssrRenderComponent(unref(RefreshCw), { class: "h-4 w-4" }, null, _parent));
      _push(`</button>`);
      if (unref(projects).length) {
        _push(`<button${ssrIncludeBooleanAttr(unref(loading) || unref(busy) || !unref(connected)) ? " disabled" : ""} class="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 disabled:opacity-50">`);
        _push(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent));
        _push(` Crear proyecto Kanban</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header>`);
      if (unref(notice)) {
        _push(`<div role="alert" class="rounded-xl border border-amber-300/50 bg-amber-50 p-4 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300"><p>${ssrInterpolate(unref(notice))}</p>`);
        if (unref(retryable)) {
          _push(`<button${ssrIncludeBooleanAttr(unref(loading) || unref(busy)) ? " disabled" : ""} class="mt-2 font-semibold underline underline-offset-2">Reintentar conexi\xF3n</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loading)) {
        _push(`<div role="status" class="flex h-64 flex-col items-center justify-center gap-3">`);
        _push(ssrRenderComponent(unref(Loader2), { class: "h-8 w-8 animate-spin text-sky-500" }, null, _parent));
        _push(`<p class="text-sm text-slate-500 dark:text-slate-400">Cargando proyectos\u2026</p></div>`);
      } else if (unref(connected) && !unref(projects).length) {
        _push(`<section aria-labelledby="empty-projects-heading" class="flex flex-col items-center rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800"><div class="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 dark:bg-sky-500/10">`);
        _push(ssrRenderComponent(unref(FolderPlus), { class: "h-8 w-8" }, null, _parent));
        _push(`</div><h3 id="empty-projects-heading" class="text-lg font-bold text-slate-900 dark:text-white">Todav\xEDa no hay proyectos Kanban</h3><p class="mt-2 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">Crea tu primer proyecto para organizar sus tareas en un tablero y trabajar junto al equipo.</p><button${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 disabled:opacity-50">`);
        _push(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent));
        _push(` Crear proyecto Kanban</button></section>`);
      } else if (unref(projects).length) {
        _push(`<section aria-label="Proyectos Kanban" class="space-y-4"><p class="text-xs font-medium text-slate-500 dark:text-slate-400">${ssrInterpolate(unref(projects).length)} ${ssrInterpolate(unref(projects).length === 1 ? "proyecto" : "proyectos")} \xB7 Un tablero para cada objetivo del equipo.</p><div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"><!--[-->`);
        ssrRenderList(unref(projects), (project) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: project.id,
            to: `/admin/kanban/${project.id}`,
            "aria-label": `Abrir tablero de ${project.name}`,
            "data-project": project.id,
            class: "group flex min-w-0 flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 dark:bg-slate-900 dark:ring-slate-800 dark:hover:ring-sky-700"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="mb-4 flex items-start justify-between gap-3"${_scopeId}><div class="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-500 dark:bg-sky-500/10"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(FolderOpen), { class: "h-5 w-5" }, null, _parent2, _scopeId));
                _push2(`</div><span class="rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400"${_scopeId}>Proyecto #${ssrInterpolate(project.id)}</span></div><h3 class="break-words font-display text-lg font-semibold text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400"${_scopeId}>${ssrInterpolate(project.name)}</h3><p class="mb-5 mt-2 line-clamp-3 whitespace-pre-line break-words text-sm leading-relaxed text-slate-500 dark:text-slate-400"${_scopeId}>${ssrInterpolate(project.description || "Organiza y sigue las tareas de este proyecto.")}</p><div class="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-800"${_scopeId}><span class="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(SquareKanban), { class: "h-4 w-4" }, null, _parent2, _scopeId));
                _push2(`${ssrInterpolate(project.cards_count)} ${ssrInterpolate(project.cards_count === 1 ? "tarea" : "tareas")}</span><span class="flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400"${_scopeId}>Abrir tablero`);
                _push2(ssrRenderComponent(unref(ArrowUpRight), { class: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" }, null, _parent2, _scopeId));
                _push2(`</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "mb-4 flex items-start justify-between gap-3" }, [
                    createVNode("div", { class: "flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-500 dark:bg-sky-500/10" }, [
                      createVNode(unref(FolderOpen), { class: "h-5 w-5" })
                    ]),
                    createVNode("span", { class: "rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400" }, "Proyecto #" + toDisplayString(project.id), 1)
                  ]),
                  createVNode("h3", { class: "break-words font-display text-lg font-semibold text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400" }, toDisplayString(project.name), 1),
                  createVNode("p", { class: "mb-5 mt-2 line-clamp-3 whitespace-pre-line break-words text-sm leading-relaxed text-slate-500 dark:text-slate-400" }, toDisplayString(project.description || "Organiza y sigue las tareas de este proyecto."), 1),
                  createVNode("div", { class: "mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-800" }, [
                    createVNode("span", { class: "flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400" }, [
                      createVNode(unref(SquareKanban), { class: "h-4 w-4" }),
                      createTextVNode(toDisplayString(project.cards_count) + " " + toDisplayString(project.cards_count === 1 ? "tarea" : "tareas"), 1)
                    ]),
                    createVNode("span", { class: "flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400" }, [
                      createTextVNode("Abrir tablero"),
                      createVNode(unref(ArrowUpRight), { class: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<dialog aria-labelledby="project-heading" class="admin-scope m-auto max-h-[90vh] w-[min(520px,calc(100vw-32px))] overflow-y-auto rounded-2xl bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-slate-950/60 dark:bg-slate-900 dark:text-slate-100"><form class="space-y-5 p-6"><header class="flex items-center justify-between gap-3"><h3 id="project-heading" class="text-lg font-bold">Crear proyecto Kanban</h3><button type="button" aria-label="Cerrar creaci\xF3n de proyecto"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="p-2 text-slate-400">`);
      _push(ssrRenderComponent(unref(X), { class: "h-5 w-5" }, null, _parent));
      _push(`</button></header><p class="text-sm text-slate-500 dark:text-slate-400">Cada proyecto tendr\xE1 su propio tablero, tareas e historial de actividad. Los administradores y editores podr\xE1n trabajar juntos en \xE9l.</p>`);
      if (unref(projectError)) {
        _push(`<p role="alert" class="rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">${ssrInterpolate(unref(projectError))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<label class="block text-sm font-medium">Nombre del proyecto<input${ssrRenderAttr("value", unref(form).name)} type="text" required minlength="2" maxlength="120" placeholder="Por ejemplo, Sitio web de un cliente" class="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"></label><label class="block text-sm font-medium">Descripci\xF3n del proyecto<textarea rows="3" maxlength="2000" placeholder="Objetivo, contexto o alcance del proyecto\u2026" class="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">${ssrInterpolate(unref(form).description)}</textarea></label><footer class="flex justify-end gap-2 border-t border-slate-200 pt-4 dark:border-slate-800"><button type="button"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="rounded-xl px-4 py-2 text-sm text-slate-500">Cancelar</button><button type="submit"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">`);
      if (unref(busy)) {
        _push(ssrRenderComponent(unref(Loader2), { class: "mr-1 inline h-4 w-4 animate-spin" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`${ssrInterpolate(unref(busy) ? "Creando\u2026" : "Crear proyecto")}</button></footer></form></dialog></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/kanban/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CRR2UAxW.mjs.map
