import { u as useKanbanBoard, _ as _sfc_main$2 } from './useKanbanBoard--KKVqRCV.mjs';
import { defineComponent, mergeProps, computed, ref, watch, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { BarChart3, Plus, Calendar, Play, Square, Trash2, Target } from 'lucide-vue-next';
import { h as burndownSeries } from './kanban-DnRkN1iU.mjs';
import { b as useRoute, c as useRouter } from './server.mjs';
import { u as useApi } from './useApi-B4bgMxIg.mjs';
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
  __name: "Sprints",
  __ssrInlineRender: true,
  props: {
    projectId: {}
  },
  emits: ["navigate"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useRoute();
    useRouter();
    useApi();
    const board = useKanbanBoard(computed(() => props.projectId), true);
    const { project: projectRef, permissions: permissionsRef, lists: listsRef, sprints: sprintsRef, loading: loadingRef, busy: busyRef, notice: noticeRef, canWrite: canWriteRef, refresh: refreshFn } = board;
    const allIssues = computed(() => Object.values(listsRef).flat());
    const sprintOpen = ref(false);
    const sprintSaving = ref(false);
    const selectedSprintId = ref(null);
    const actionBusy = ref(false);
    watch(() => sprintsRef.value, (value) => {
      if (!selectedSprintId.value && (value == null ? void 0 : value.length)) selectedSprintId.value = value[0].id;
    }, { immediate: true });
    const sprintIssues = computed(() => {
      if (!selectedSprintId.value) return [];
      return allIssues.value.filter((issue) => issue.sprint_id === selectedSprintId.value);
    });
    const selectedSprint = computed(() => {
      var _a;
      return ((_a = sprintsRef.value) == null ? void 0 : _a.find((sprint) => sprint.id === selectedSprintId.value)) || null;
    });
    const burndown = computed(() => burndownSeries(selectedSprint.value, sprintIssues.value));
    const sprintGroups = computed(() => [
      { key: "active", label: "Sprint activo", items: (sprintsRef.value || []).filter((s) => s.status === "active") },
      { key: "planned", label: "Planificados", items: (sprintsRef.value || []).filter((s) => s.status === "planned") },
      { key: "completed", label: "Completados", items: (sprintsRef.value || []).filter((s) => s.status === "completed") }
    ]);
    function sprintCreated() {
      sprintOpen.value = false;
      sprintSaving.value = false;
      void refreshFn(true);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const _component_AdminKanbanSprintDialog = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-5" }, _attrs))}><header class="flex flex-wrap items-start justify-between gap-4"><div><h2 class="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-white">`);
      _push(ssrRenderComponent(unref(BarChart3), { class: "h-5 w-5 text-sky-500" }, null, _parent));
      _push(` Sprints</h2><p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Planificaci\xF3n Scrum: crea, inicia y cierra sprints. Asigna issues desde el backlog.</p></div><div class="flex items-center gap-2">`);
      if (unref(canWriteRef) && ((_a = unref(permissionsRef)) == null ? void 0 : _a.manage)) {
        _push(`<button${ssrIncludeBooleanAttr(unref(loadingRef) || unref(busyRef)) ? " disabled" : ""} class="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-sky-600 px-4 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-50">`);
        _push(ssrRenderComponent(unref(Plus), { class: "h-4 w-4" }, null, _parent));
        _push(` Nuevo sprint</button>`);
      } else {
        _push(`<!---->`);
      }
      if ((_b = unref(projectRef)) == null ? void 0 : _b.id) {
        _push(`<button class="inline-flex min-h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 dark:text-slate-300 dark:ring-slate-700">Ir al backlog</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header>`);
      if (unref(noticeRef)) {
        _push(`<div role="alert" class="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">${ssrInterpolate(unref(noticeRef))}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(loadingRef)) {
        _push(`<div class="grid grid-cols-1 gap-3 py-3 sm:grid-cols-3"><!--[-->`);
        ssrRenderList(3, (i) => {
          _push(`<div class="h-40 animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800"></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 gap-5 lg:grid-cols-3"><div class="space-y-4 lg:col-span-1"><!--[-->`);
        ssrRenderList(unref(sprintGroups), (group) => {
          _push(`<section class="space-y-2"><h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500">${ssrInterpolate(group.label)}</h3>`);
          if (!group.items.length) {
            _push(`<div class="rounded-xl border border-dashed border-slate-200 p-4 text-xs text-slate-400 dark:border-slate-700">Sin sprints.</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--[-->`);
          ssrRenderList(group.items, (sprint) => {
            var _a2, _b2;
            _push(`<button type="button" class="${ssrRenderClass([unref(selectedSprintId) === sprint.id ? "border-sky-400 bg-sky-50 dark:bg-sky-500/10" : "border-slate-200 bg-white hover:border-sky-300 dark:border-slate-700 dark:bg-slate-900", "w-full rounded-xl border p-4 text-left transition"])}"><div class="flex items-start justify-between gap-2"><div class="min-w-0"><p class="truncate font-semibold text-slate-900 dark:text-white">${ssrInterpolate(sprint.name)}</p><p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(sprint.status === "active" ? "Activo" : sprint.status === "completed" ? "Completado" : "Planificado")}</p></div><span class="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600 dark:bg-slate-800 dark:text-slate-300">${ssrInterpolate((_a2 = sprint.completed_count) != null ? _a2 : 0)}/${ssrInterpolate((_b2 = sprint.cards_count) != null ? _b2 : 0)}</span></div>`);
            if (sprint.goal) {
              _push(`<p class="mt-2 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">${ssrInterpolate(sprint.goal)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<div class="mt-2 flex items-center gap-2 text-[11px] text-slate-400">`);
            _push(ssrRenderComponent(unref(Calendar), { class: "h-3.5 w-3.5" }, null, _parent));
            _push(`${ssrInterpolate(sprint.start_date ? sprint.start_date.slice(0, 10) : "Sin inicio")} \u2192 ${ssrInterpolate(sprint.end_date ? sprint.end_date.slice(0, 10) : "Sin fin")}</div><div class="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div class="h-full bg-sky-500" style="${ssrRenderStyle({ width: (sprint.points ? (sprint.completed_points || 0) / sprint.points * 100 : 0) + "%" })}"></div></div></button>`);
          });
          _push(`<!--]--></section>`);
        });
        _push(`<!--]--></div><div class="space-y-4 lg:col-span-2">`);
        if (!unref(selectedSprint)) {
          _push(`<div class="rounded-2xl border border-dashed border-slate-200 p-10 text-center text-sm text-slate-400 dark:border-slate-700">Selecciona un sprint para ver su detalle.</div>`);
        } else {
          _push(`<!--[--><section class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"><div class="flex flex-wrap items-start justify-between gap-3"><div><h3 class="text-lg font-semibold text-slate-900 dark:text-white">${ssrInterpolate(unref(selectedSprint).name)}</h3><p class="mt-1 text-sm text-slate-500 dark:text-slate-400">${ssrInterpolate(unref(selectedSprint).goal || "Sin objetivo")}</p></div><div class="flex flex-wrap items-center gap-2">`);
          if (unref(selectedSprint).status === "planned" && unref(canWriteRef) && ((_c = unref(permissionsRef)) == null ? void 0 : _c.manage)) {
            _push(`<button${ssrIncludeBooleanAttr(unref(actionBusy)) ? " disabled" : ""} class="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-emerald-600 px-3 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-50">`);
            _push(ssrRenderComponent(unref(Play), { class: "h-4 w-4" }, null, _parent));
            _push(` Iniciar</button>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(selectedSprint).status === "active" && unref(canWriteRef) && ((_d = unref(permissionsRef)) == null ? void 0 : _d.manage)) {
            _push(`<button${ssrIncludeBooleanAttr(unref(actionBusy)) ? " disabled" : ""} class="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-amber-600 px-3 text-sm font-semibold text-white hover:bg-amber-700 disabled:opacity-50">`);
            _push(ssrRenderComponent(unref(Square), { class: "h-4 w-4" }, null, _parent));
            _push(` Completar</button>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(selectedSprint).status === "active") {
            _push(`<button class="inline-flex min-h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 dark:text-slate-300 dark:ring-slate-700">Ver tablero del sprint</button>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(selectedSprint).status !== "active" && unref(canWriteRef) && ((_e = unref(permissionsRef)) == null ? void 0 : _e.manage)) {
            _push(`<button${ssrIncludeBooleanAttr(unref(actionBusy)) ? " disabled" : ""} class="inline-flex min-h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-rose-600 ring-1 ring-rose-200 hover:bg-rose-50 disabled:opacity-50 dark:ring-rose-800">`);
            _push(ssrRenderComponent(unref(Trash2), { class: "h-4 w-4" }, null, _parent));
            _push(` Eliminar</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4"><div class="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60"><p class="text-[11px] uppercase tracking-wider text-slate-400">Issues</p><p class="mt-1 text-lg font-semibold text-slate-900 dark:text-white">${ssrInterpolate((_f = unref(selectedSprint).cards_count) != null ? _f : 0)}</p></div><div class="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60"><p class="text-[11px] uppercase tracking-wider text-slate-400">Completados</p><p class="mt-1 text-lg font-semibold text-slate-900 dark:text-white">${ssrInterpolate((_g = unref(selectedSprint).completed_count) != null ? _g : 0)}</p></div><div class="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60"><p class="text-[11px] uppercase tracking-wider text-slate-400">Puntos</p><p class="mt-1 text-lg font-semibold text-slate-900 dark:text-white">${ssrInterpolate((_h = unref(selectedSprint).points) != null ? _h : 0)}</p></div><div class="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60"><p class="text-[11px] uppercase tracking-wider text-slate-400">Completados</p><p class="mt-1 text-lg font-semibold text-slate-900 dark:text-white">${ssrInterpolate((_i = unref(selectedSprint).completed_points) != null ? _i : 0)}</p></div></div></section><section class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"><h3 class="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-white">`);
          _push(ssrRenderComponent(unref(Target), { class: "h-4 w-4 text-slate-400" }, null, _parent));
          _push(` Burndown</h3>`);
          if (!unref(burndown).length) {
            _push(`<div class="text-sm text-slate-400">Sin fechas definidas o sin issues para calcular el burndown.</div>`);
          } else {
            _push(`<svg${ssrRenderAttr("viewBox", `0 0 ${Math.max(unref(burndown).length * 40, 200)} 160`)} class="w-full" role="img" aria-label="Burndown chart"><polyline${ssrRenderAttr("points", unref(burndown).map((p, i) => `${i * 40 + 20},${140 - p.ideal / Math.max(...unref(burndown).map((x) => x.estimated), 1) * 120}`).join(" "))} fill="none" stroke="#94a3b8" stroke-dasharray="4 4" stroke-width="2"></polyline><polyline${ssrRenderAttr("points", unref(burndown).map((p, i) => `${i * 40 + 20},${140 - p.remaining / Math.max(...unref(burndown).map((x) => x.estimated), 1) * 120}`).join(" "))} fill="none" stroke="#0ea5e9" stroke-width="2.5"></polyline><!--[-->`);
            ssrRenderList(unref(burndown), (p, i) => {
              _push(`<text${ssrRenderAttr("x", i * 40 + 20)} y="155" text-anchor="middle" class="fill-slate-400 text-[9px]">${ssrInterpolate(p.date.slice(5))}</text>`);
            });
            _push(`<!--]--></svg>`);
          }
          _push(`<div class="mt-2 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400"><span class="flex items-center gap-1.5"><span class="inline-block h-0.5 w-4 bg-sky-500"></span> Restante</span><span class="flex items-center gap-1.5"><span class="inline-block h-0.5 w-4 border-t-2 border-dashed border-slate-400"></span> Ideal</span></div></section><section class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"><h3 class="mb-3 text-sm font-semibold text-slate-800 dark:text-white">Issues del sprint</h3><ul class="divide-y divide-slate-100 dark:divide-slate-800"><!--[-->`);
          ssrRenderList(unref(sprintIssues), (issue) => {
            var _a2;
            _push(`<li class="flex items-center gap-3 py-2 text-sm"><span class="font-mono text-xs text-slate-500">${ssrInterpolate(issue.issue_key)}</span><span class="flex-1 truncate">${ssrInterpolate(issue.title)}</span><span class="text-xs text-slate-500">${ssrInterpolate(issue.status)}</span><span class="text-xs text-slate-400">${ssrInterpolate((_a2 = issue.story_points) != null ? _a2 : 0)} pts</span></li>`);
          });
          _push(`<!--]-->`);
          if (!unref(sprintIssues).length) {
            _push(`<li class="py-4 text-sm text-slate-400">No hay issues asignados a este sprint.</li>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</ul></section><!--]-->`);
        }
        _push(`</div></div>`);
      }
      _push(ssrRenderComponent(_component_AdminKanbanSprintDialog, {
        open: unref(sprintOpen),
        "project-id": props.projectId,
        "project-name": ((_j = unref(projectRef)) == null ? void 0 : _j.name) || "",
        "can-manage": unref(canWriteRef) && ((_k = unref(permissionsRef)) == null ? void 0 : _k.manage),
        onClose: ($event) => sprintOpen.value = false,
        onCreated: sprintCreated,
        onSaving: ($event) => sprintSaving.value = $event
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/Sprints.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sprints",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminKanbanSprints = _sfc_main$1;
      _push(ssrRenderComponent(_component_AdminKanbanSprints, mergeProps({
        "project-id": Number(_ctx.$route.params.project)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/kanban/[project]/sprints.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sprints-BCPwTvvW.mjs.map
