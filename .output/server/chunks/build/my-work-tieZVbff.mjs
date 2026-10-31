import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { u as useApi } from './useApi-B4bgMxIg.mjs';
import { i as issueDate, a as issueOverdue } from './kanban-DnRkN1iU.mjs';
import { e as useHead } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "my-work",
  __ssrInlineRender: true,
  setup(__props) {
    useApi();
    useRouter();
    const loading = ref(true);
    const error = ref("");
    const data = ref(null);
    const sections = computed(() => {
      var _a, _b, _c, _d, _e;
      return [
        { key: "assigned", title: "Asignados a m\xED", items: ((_a = data.value) == null ? void 0 : _a.assigned) || [] },
        { key: "overdue", title: "Vencidos", items: ((_b = data.value) == null ? void 0 : _b.overdue) || [] },
        { key: "upcoming", title: "Pr\xF3ximos (7 d\xEDas)", items: ((_c = data.value) == null ? void 0 : _c.upcoming) || [] },
        { key: "recently_modified", title: "Modificados recientemente", items: ((_d = data.value) == null ? void 0 : _d.recently_modified) || [] },
        { key: "created_by_me", title: "Creados por m\xED", items: ((_e = data.value) == null ? void 0 : _e.created_by_me) || [] }
      ];
    });
    const statusLabel = (status) => ({ backlog: "Backlog", todo: "Por hacer", in_progress: "En curso", review: "En revisi\xF3n", done: "Hecho" })[status] || status;
    useHead({ title: "Mi trabajo \xB7 SysifosWeb" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><header class="flex flex-wrap items-start justify-between gap-4"><div class="min-w-0"><p class="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Productividad</p><h2 class="text-xl font-semibold text-slate-900 dark:text-white">Mi trabajo</h2><p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Issues asignados, vencidos, pr\xF3ximos, modificados recientemente y creados por ti.</p></div><button class="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-sky-600 px-3 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-50"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""}> Actualizar </button></header>`);
      if (error.value) {
        _push(`<p class="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-900 dark:border-rose-900/40 dark:bg-rose-950/40 dark:text-rose-200"> No se pudo cargar tu trabajo. ${ssrInterpolate(error.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (loading.value) {
        _push(`<div class="grid gap-3"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="h-24 animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800"></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(sections.value, (section) => {
          _push(`<section class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"><div class="mb-3 flex items-center justify-between gap-3"><h3 class="text-sm font-semibold text-slate-900 dark:text-white">${ssrInterpolate(section.title)}</h3><span class="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">${ssrInterpolate(section.items.length)}</span></div>`);
          if (!section.items.length) {
            _push(`<p class="text-sm text-slate-500 dark:text-slate-400">Sin resultados.</p>`);
          } else {
            _push(`<ul class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
            ssrRenderList(section.items, (issue) => {
              var _a, _b;
              _push(`<li class="py-2"><button class="flex w-full items-start gap-3 text-left hover:text-sky-600 dark:hover:text-sky-400"><span class="mt-0.5 shrink-0 rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">${ssrInterpolate(issue.issue_key)}</span><span class="min-w-0 flex-1"><span class="block truncate text-sm font-medium text-slate-900 dark:text-white">${ssrInterpolate(issue.title)}</span><span class="block text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(((_a = issue.project) == null ? void 0 : _a.name) || ((_b = issue.project) == null ? void 0 : _b.project_key) || "Proyecto")} \xB7 ${ssrInterpolate(statusLabel(issue.status))}${ssrInterpolate(issue.due_date ? " \xB7 vence " + unref(issueDate)(issue.due_date) : "")}</span></span>`);
              if (unref(issueOverdue)(issue)) {
                _push(`<span class="shrink-0 rounded-full bg-rose-100 px-2 py-0.5 text-[11px] font-semibold text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">Vencido</span>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</button></li>`);
            });
            _push(`<!--]--></ul>`);
          }
          _push(`</section>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/kanban/my-work.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=my-work-tieZVbff.mjs.map
