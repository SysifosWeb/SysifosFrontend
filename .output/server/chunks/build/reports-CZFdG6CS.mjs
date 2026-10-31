import { defineComponent, mergeProps, ref, watch, computed, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { BarChart3 } from 'lucide-vue-next';
import { u as useApi } from './useApi-B4bgMxIg.mjs';
import './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{ name: "AdminKanbanReports" },
  __name: "Reports",
  __ssrInlineRender: true,
  props: {
    projectId: {}
  },
  setup(__props) {
    const props = __props;
    const api = useApi();
    const loading = ref(true);
    const error = ref("");
    const report = ref(null);
    async function load() {
      loading.value = true;
      error.value = "";
      try {
        const { data } = await api.request("/kanban/reports", { query: { project_id: props.projectId } });
        report.value = data;
      } catch (e) {
        error.value = "No se pudieron cargar los reportes.";
        report.value = null;
      } finally {
        loading.value = false;
      }
    }
    watch(() => props.projectId, load);
    const byStatus = computed(() => {
      var _a, _b;
      return ((_a = report.value) == null ? void 0 : _a.by_status) || ((_b = report.value) == null ? void 0 : _b.status) || [];
    });
    const byPriority = computed(() => {
      var _a, _b;
      return ((_a = report.value) == null ? void 0 : _a.by_priority) || ((_b = report.value) == null ? void 0 : _b.priority) || [];
    });
    const byAssignee = computed(() => {
      var _a, _b;
      return ((_a = report.value) == null ? void 0 : _a.by_assignee) || ((_b = report.value) == null ? void 0 : _b.assignee) || [];
    });
    const series = computed(() => {
      var _a, _b;
      return ((_a = report.value) == null ? void 0 : _a.created_vs_resolved) || ((_b = report.value) == null ? void 0 : _b.created_resolved) || [];
    });
    const avgResolution = computed(() => {
      var _a, _b, _c, _d;
      return (_d = (_c = (_a = report.value) == null ? void 0 : _a.average_resolution_days) != null ? _c : (_b = report.value) == null ? void 0 : _b.avg_resolution) != null ? _d : null;
    });
    const maxStatus = computed(() => Math.max(1, ...byStatus.value.map((x) => x.count || 0)));
    const maxPriority = computed(() => Math.max(1, ...byPriority.value.map((x) => x.count || 0)));
    const maxAssignee = computed(() => Math.max(1, ...byAssignee.value.map((x) => x.count || 0)));
    const svgPoints = computed(() => {
      if (!series.value.length) return "";
      const width = 400;
      const height = 160;
      const max = Math.max(1, ...series.value.flatMap((x) => [x.created || 0, x.resolved || 0]));
      return series.value.map((x, i) => {
        const px = i / Math.max(1, series.value.length - 1) * width;
        const py = height - (x.created || 0) / max * height;
        return `${px},${py}`;
      }).join(" ");
    });
    const svgResolved = computed(() => {
      if (!series.value.length) return "";
      const width = 400;
      const height = 160;
      const max = Math.max(1, ...series.value.flatMap((x) => [x.created || 0, x.resolved || 0]));
      return series.value.map((x, i) => {
        const px = i / Math.max(1, series.value.length - 1) * width;
        const py = height - (x.resolved || 0) / max * height;
        return `${px},${py}`;
      }).join(" ");
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-5" }, _attrs))}><div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">`);
      _push(ssrRenderComponent(unref(BarChart3), { class: "h-4 w-4" }, null, _parent));
      _push(`Reportes y m\xE9tricas</div>`);
      if (unref(loading)) {
        _push(`<div class="h-48 animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800"></div>`);
      } else if (unref(error)) {
        _push(`<div class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300">${ssrInterpolate(unref(error))}</div>`);
      } else if (!unref(report)) {
        _push(`<div class="rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">Sin datos.</div>`);
      } else {
        _push(`<div class="space-y-6"><div class="grid gap-4 sm:grid-cols-3"><div class="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"><p class="text-xs text-slate-500 dark:text-slate-400">Total issues</p><p class="text-2xl font-semibold text-slate-900 dark:text-white">${ssrInterpolate((_b = (_a = unref(report).total_issues) != null ? _a : unref(report).total) != null ? _b : 0)}</p></div><div class="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"><p class="text-xs text-slate-500 dark:text-slate-400">Resueltos</p><p class="text-2xl font-semibold text-slate-900 dark:text-white">${ssrInterpolate((_d = (_c = unref(report).resolved_count) != null ? _c : unref(report).done_count) != null ? _d : 0)}</p></div><div class="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"><p class="text-xs text-slate-500 dark:text-slate-400">Promedio resoluci\xF3n (d\xEDas)</p><p class="text-2xl font-semibold text-slate-900 dark:text-white">${ssrInterpolate((_e = unref(avgResolution)) != null ? _e : "\u2014")}</p></div></div><section class="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"><h3 class="mb-3 text-sm font-semibold text-slate-800 dark:text-white">Issues por estado</h3><div class="space-y-2"><!--[-->`);
        ssrRenderList(unref(byStatus), (row) => {
          _push(`<div class="flex items-center gap-3"><span class="w-24 text-xs text-slate-600 dark:text-slate-300">${ssrInterpolate(row.status)}</span><div class="h-3 flex-1 rounded bg-slate-100 dark:bg-slate-800"><div class="h-3 rounded bg-sky-500" style="${ssrRenderStyle({ width: row.count / unref(maxStatus) * 100 + "%" })}"></div></div><span class="w-8 text-right text-xs text-slate-500">${ssrInterpolate(row.count)}</span></div>`);
        });
        _push(`<!--]--></div></section><section class="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"><h3 class="mb-3 text-sm font-semibold text-slate-800 dark:text-white">Issues por prioridad</h3><div class="space-y-2"><!--[-->`);
        ssrRenderList(unref(byPriority), (row) => {
          _push(`<div class="flex items-center gap-3"><span class="w-24 text-xs text-slate-600 dark:text-slate-300">${ssrInterpolate(row.priority)}</span><div class="h-3 flex-1 rounded bg-slate-100 dark:bg-slate-800"><div class="h-3 rounded bg-indigo-500" style="${ssrRenderStyle({ width: row.count / unref(maxPriority) * 100 + "%" })}"></div></div><span class="w-8 text-right text-xs text-slate-500">${ssrInterpolate(row.count)}</span></div>`);
        });
        _push(`<!--]--></div></section><section class="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"><h3 class="mb-3 text-sm font-semibold text-slate-800 dark:text-white">Issues por responsable</h3><div class="space-y-2"><!--[-->`);
        ssrRenderList(unref(byAssignee), (row) => {
          _push(`<div class="flex items-center gap-3"><span class="w-32 truncate text-xs text-slate-600 dark:text-slate-300">${ssrInterpolate(row.name)}</span><div class="h-3 flex-1 rounded bg-slate-100 dark:bg-slate-800"><div class="h-3 rounded bg-emerald-500" style="${ssrRenderStyle({ width: row.count / unref(maxAssignee) * 100 + "%" })}"></div></div><span class="w-8 text-right text-xs text-slate-500">${ssrInterpolate(row.count)}</span></div>`);
        });
        _push(`<!--]--></div></section><section class="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"><h3 class="mb-3 text-sm font-semibold text-slate-800 dark:text-white">Creados vs resueltos</h3><svg viewBox="0 0 400 160" class="h-40 w-full"><polyline${ssrRenderAttr("points", unref(svgPoints))} fill="none" stroke="#38bdf8" stroke-width="2"></polyline><polyline${ssrRenderAttr("points", unref(svgResolved))} fill="none" stroke="#34d399" stroke-width="2"></polyline></svg><div class="mt-2 flex gap-4 text-xs text-slate-500 dark:text-slate-400"><span><span class="inline-block h-2 w-2 rounded-full bg-sky-400"></span> Creados</span><span><span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span> Resueltos</span></div></section></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/Reports.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reports",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminKanbanReports = _sfc_main$1;
      _push(ssrRenderComponent(_component_AdminKanbanReports, mergeProps({
        "project-id": Number(_ctx.$route.params.project)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/kanban/[project]/reports.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reports-CZFdG6CS.mjs.map
