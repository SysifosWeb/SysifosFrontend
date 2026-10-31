import { defineComponent, mergeProps, ref, watch, computed, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { CalendarRange } from 'lucide-vue-next';
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
  ...{ name: "AdminKanbanTimeline" },
  __name: "Timeline",
  __ssrInlineRender: true,
  props: {
    projectId: {}
  },
  setup(__props) {
    const props = __props;
    const api = useApi();
    const loading = ref(true);
    const error = ref("");
    const items = ref([]);
    async function load() {
      loading.value = true;
      error.value = "";
      try {
        const { data } = await api.request("/kanban/timeline", { query: { project_id: props.projectId } });
        items.value = Array.isArray(data) ? data : [];
      } catch (e) {
        error.value = "No se pudo cargar la l\xEDnea de tiempo.";
        items.value = [];
      } finally {
        loading.value = false;
      }
    }
    watch(() => props.projectId, load);
    const dateRange = computed(() => {
      const dates = items.value.flatMap((issue) => [issue.start_date, issue.due_date]).filter(Boolean);
      if (!dates.length) return null;
      const values = dates.map((date) => (/* @__PURE__ */ new Date(`${date.slice(0, 10)}T00:00:00`)).getTime());
      return { start: Math.min(...values), end: Math.max(...values) };
    });
    const totalDays = computed(() => {
      if (!dateRange.value) return 1;
      return Math.max(1, Math.round((dateRange.value.end - dateRange.value.start) / 864e5) + 1);
    });
    function dayOffset(date) {
      if (!date || !dateRange.value) return 0;
      return Math.max(0, Math.round(((/* @__PURE__ */ new Date(`${date.slice(0, 10)}T00:00:00`)).getTime() - dateRange.value.start) / 864e5));
    }
    function barStyle(issue) {
      const start = issue.start_date || issue.due_date;
      const end = issue.due_date || issue.start_date;
      if (!start || !end || !dateRange.value) {
        return "left: 0%; width: 2%;";
      }
      const left = dayOffset(start) / totalDays.value * 100;
      const startMs = (/* @__PURE__ */ new Date(start.slice(0, 10) + "T00:00:00")).getTime();
      const endMs = (/* @__PURE__ */ new Date(end.slice(0, 10) + "T00:00:00")).getTime();
      const diffDays = Math.round((endMs - startMs) / 864e5);
      const span = diffDays + 1;
      const safeSpan = span > 0 ? span : 1;
      const width = safeSpan / totalDays.value * 100;
      return "left: " + left + "%; width: " + Math.max(1.5, width) + "%;";
    }
    const groups = computed(() => {
      const map = /* @__PURE__ */ new Map();
      for (const issue of items.value) {
        const key = issue.epic_id || null;
        if (!map.has(key)) map.set(key, { epic: null, issues: [] });
        map.get(key).issues.push(issue);
      }
      for (const issue of items.value) {
        if (issue.type === "epic") {
          const group = map.get(issue.id);
          if (group) group.epic = issue;
        }
      }
      const result = [];
      for (const [key, group] of map) {
        const epicItem = key ? items.value.find((issue) => issue.id === key) || group.epic : null;
        result.push({ epic: epicItem, issues: group.issues.filter((issue) => issue.type !== "epic" || issue.id !== key), key: key ? String(key) : "none" });
      }
      for (const issue of items.value) {
        if (issue.type === "epic" && !map.has(issue.id)) {
          result.push({ epic: issue, issues: [], key: String(issue.id) });
        }
      }
      return result.sort((a, b) => {
        var _a, _b, _c, _d;
        return (((_a = a.epic) == null ? void 0 : _a.start_date) || ((_b = a.issues[0]) == null ? void 0 : _b.start_date) || "").localeCompare(((_c = b.epic) == null ? void 0 : _c.start_date) || ((_d = b.issues[0]) == null ? void 0 : _d.start_date) || "");
      });
    });
    computed(() => items.value.filter((issue) => !issue.epic_id));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-5" }, _attrs))}><div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">`);
      _push(ssrRenderComponent(unref(CalendarRange), { class: "h-4 w-4" }, null, _parent));
      _push(`L\xEDnea de tiempo (Gantt) agrupada por \xE9pica</div>`);
      if (unref(loading)) {
        _push(`<div class="h-48 animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800"></div>`);
      } else if (unref(error)) {
        _push(`<div class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300">${ssrInterpolate(unref(error))}</div>`);
      } else if (!unref(items).length) {
        _push(`<div class="rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">No hay issues con fechas de inicio o fin para mostrar.</div>`);
      } else {
        _push(`<div class="space-y-6"><!--[-->`);
        ssrRenderList(unref(groups), (group) => {
          var _a;
          _push(`<div class="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"><div class="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-white">`);
          if (group.epic) {
            _push(`<span class="text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(group.epic.issue_key)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(((_a = group.epic) == null ? void 0 : _a.title) || "Sin \xE9pica")}</div><div class="relative h-10 w-full rounded bg-slate-100 dark:bg-slate-800">`);
          if (group.epic && (group.epic.start_date || group.epic.due_date)) {
            _push(`<div class="absolute top-1 h-8 rounded bg-sky-500/80 text-xs text-white flex items-center px-2" style="${ssrRenderStyle(barStyle(group.epic))}">${ssrInterpolate(group.epic.issue_key)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><!--[-->`);
          ssrRenderList(group.issues, (issue) => {
            _push(`<div class="relative mt-2 h-8 w-full rounded bg-slate-50 dark:bg-slate-800/50"><div class="absolute top-0.5 h-7 rounded bg-indigo-500/80 text-xs text-white flex items-center px-2" style="${ssrRenderStyle(barStyle(issue))}">${ssrInterpolate(issue.issue_key)} \xB7 ${ssrInterpolate(issue.title)}</div></div>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/Timeline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "timeline",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminKanbanTimeline = _sfc_main$1;
      _push(ssrRenderComponent(_component_AdminKanbanTimeline, mergeProps({
        "project-id": Number(_ctx.$route.params.project)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/kanban/[project]/timeline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=timeline-DqcvCJA-.mjs.map
