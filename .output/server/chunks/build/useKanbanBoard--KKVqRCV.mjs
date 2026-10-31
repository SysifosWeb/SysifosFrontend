import { ref, reactive, computed, watch, defineComponent, nextTick, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { X, Loader2 } from 'lucide-vue-next';
import { u as useApi, b as apiErrorMessage, a as apiStatus } from './useApi-B4bgMxIg.mjs';
import { g as boardColumns, K as KANBAN_COLUMNS } from './kanban-DnRkN1iU.mjs';
import { m as useState } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SprintDialog",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    projectId: {},
    projectName: {},
    canManage: { type: Boolean }
  },
  emits: ["close", "created", "saving"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useApi();
    const dialog = ref();
    const form = reactive({ name: "", goal: "", start_date: "", end_date: "" });
    const busy = ref(false);
    const error = ref("");
    watch(() => props.open, async (open) => {
      var _a, _b;
      await nextTick();
      if (open) {
        Object.assign(form, { name: "", goal: "", start_date: "", end_date: "" });
        error.value = "";
        (_a = dialog.value) == null ? void 0 : _a.showModal();
      } else (_b = dialog.value) == null ? void 0 : _b.close();
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        ref_key: "dialog",
        ref: dialog,
        "aria-labelledby": "sprint-heading",
        class: "admin-scope !m-auto w-[min(560px,calc(100vw-32px))] rounded-xl bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-slate-950/50 dark:bg-slate-900 dark:text-slate-100"
      }, _attrs))}><form class="space-y-5 p-6"><header class="flex items-start justify-between"><div><h2 id="sprint-heading" class="text-lg font-semibold">Nuevo sprint</h2><p class="mt-1 text-xs text-slate-500">${ssrInterpolate(__props.projectName)}</p></div><button type="button"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} aria-label="Cerrar creaci\xF3n de sprint" class="rounded-md p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">`);
      _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
      _push(`</button></header>`);
      if (unref(error)) {
        _push(`<p role="alert" class="rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<fieldset${ssrIncludeBooleanAttr(unref(busy) || !__props.canManage) ? " disabled" : ""} class="space-y-4"><label class="block space-y-1.5 text-xs font-semibold">Nombre del sprint<input${ssrRenderAttr("value", unref(form).name)} required minlength="3" maxlength="120"></label><label class="block space-y-1.5 text-xs font-semibold">Objetivo<textarea rows="3" maxlength="500">${ssrInterpolate(unref(form).goal)}</textarea></label><div class="grid grid-cols-2 gap-4"><label class="block space-y-1.5 text-xs font-semibold">Fecha de inicio<input${ssrRenderAttr("value", unref(form).start_date)} type="date"></label><label class="block space-y-1.5 text-xs font-semibold">Fecha de fin<input${ssrRenderAttr("value", unref(form).end_date)} type="date"${ssrRenderAttr("min", unref(form).start_date || void 0)}></label></div><p class="text-xs text-slate-500">Se crear\xE1 como planificado. La gesti\xF3n de sprints se ampliar\xE1 en la fase Scrum.</p></fieldset><footer class="flex justify-end gap-2 border-t border-slate-200 pt-4 dark:border-slate-800"><button type="button"${ssrIncludeBooleanAttr(unref(busy)) ? " disabled" : ""} class="rounded-lg px-3 py-2 text-sm text-slate-500">Cancelar</button><button type="submit"${ssrIncludeBooleanAttr(unref(busy) || !__props.canManage) ? " disabled" : ""} class="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">`);
      if (unref(busy)) {
        _push(ssrRenderComponent(unref(Loader2), { class: "h-4 w-4 animate-spin" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`Crear sprint</button></footer></form></dialog>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/admin/kanban/SprintDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function useKanbanBoard(projectId, planning = false, scope = "all", sprintId) {
  const api = useApi();
  const projectContext = useState("admin-active-project", () => null);
  const project = ref(null);
  const permissions = ref({ manage: false, collaborate: false, role: null });
  const lists = reactive({ backlog: [], todo: [], in_progress: [], review: [], done: [] });
  const users = ref([]);
  const online = ref([]);
  const labels = ref([]);
  const epics = ref([]);
  const epicCards = ref([]);
  const sprints = ref([]);
  const activities = ref([]);
  const columns = ref(boardColumns(void 0));
  const columnCounts = ref({});
  const wipWarnings = ref([]);
  const loading = ref(true);
  const busy = ref(false);
  const dragging = ref(false);
  const suspended = ref(false);
  const connected = ref(false);
  const retryable = ref(true);
  const notice = ref("");
  const canWrite = computed(() => connected.value && permissions.value.collaborate);
  let revision = -1;
  let fetching = false;
  let queued = false;
  let epoch = 0;
  let disposed = false;
  async function refresh(force = false) {
    var _a;
    if (fetching) {
      queued || (queued = force);
      return;
    }
    if (!force && (busy.value || dragging.value || suspended.value)) return;
    fetching = true;
    const started = epoch;
    const id = projectId.value;
    try {
      const query = { project_id: id };
      if (!planning && scope && scope !== "all") query.scope = scope;
      if (!planning && scope === "sprint" && (sprintId == null ? void 0 : sprintId.value)) query.sprint_id = sprintId.value;
      const { data } = await api.request(planning ? "kanban/backlog" : "kanban/board", { query });
      if (disposed || started !== epoch || dragging.value || id !== projectId.value) return;
      if (((_a = data == null ? void 0 : data.project) == null ? void 0 : _a.id) !== id || !Array.isArray(data.cards) || !Array.isArray(data.users) || typeof data.board_version !== "number") {
        throw new Error("KANBAN_INVALID_RESPONSE");
      }
      project.value = data.project;
      permissions.value = data.permissions;
      projectContext.value = { project: data.project, permissions: data.permissions };
      users.value = data.users;
      online.value = data.online_users;
      activities.value = data.activities;
      labels.value = data.labels || [];
      epics.value = data.epics || [];
      sprints.value = data.sprints || [];
      epicCards.value = data.epic_cards || [];
      columns.value = boardColumns(data.columns);
      columnCounts.value = data.column_counts || {};
      wipWarnings.value = data.wip_warnings || [];
      if (force || revision !== data.board_version) {
        for (const column of KANBAN_COLUMNS) lists[column.id] = data.cards.filter((card) => card.status === column.id);
        revision = data.board_version;
      }
      connected.value = true;
      retryable.value = true;
      notice.value = "";
    } catch (error) {
      if (started !== epoch || id !== projectId.value) return;
      connected.value = false;
      permissions.value = { manage: false, collaborate: false, role: null };
      const status = apiStatus(error);
      if ([401, 403, 404, 419].includes(status)) {
        for (const column of KANBAN_COLUMNS) lists[column.id] = [];
        project.value = null;
        activities.value = [];
        online.value = [];
        users.value = [];
        labels.value = [];
        epics.value = [];
        sprints.value = [];
        epicCards.value = [];
        projectContext.value = null;
        columns.value = boardColumns(void 0);
        columnCounts.value = {};
        wipWarnings.value = [];
      }
      retryable.value = ![403, 404].includes(status);
      notice.value = error instanceof Error && error.message === "KANBAN_INVALID_RESPONSE" ? "La API respondi\xF3 con un formato inesperado. Comprueba la versi\xF3n del backend." : apiErrorMessage(error, "No se pudo contactar con el Kanban. Comprueba la conexi\xF3n y vuelve a intentar.");
    } finally {
      fetching = false;
      if (started === epoch) loading.value = false;
      if (queued) {
        queued = false;
        await refresh(true);
      }
    }
  }
  function applyIssue(issue) {
    if (issue.kanban_project_id !== projectId.value) return;
    for (const column of KANBAN_COLUMNS) lists[column.id] = lists[column.id].filter((card) => card.id !== issue.id);
    if (!issue.parent_id && lists[issue.status]) {
      lists[issue.status].push(issue);
      lists[issue.status].sort((a, b) => a.position - b.position || a.id - b.id);
    }
    revision = -1;
  }
  async function move(issue, status, beforeId = null) {
    if (busy.value || !canWrite.value) return;
    busy.value = true;
    epoch++;
    revision = -1;
    const id = projectId.value;
    let failure = "";
    try {
      await api.request(`kanban/cards/${issue.id}/move`, {
        method: "PUT",
        query: { project_id: id },
        body: { status, before_id: beforeId, expected_version: issue.version }
      });
    } catch (error) {
      failure = apiErrorMessage(error);
    } finally {
      busy.value = false;
      dragging.value = false;
      await refresh(true);
      if (id === projectId.value && failure) notice.value = failure;
    }
  }
  async function updateIssue(issue, patch) {
    if (busy.value || !canWrite.value) return;
    busy.value = true;
    epoch++;
    revision = -1;
    const id = projectId.value;
    let failure = "";
    try {
      const { data } = await api.request(`kanban/cards/${issue.id}`, {
        method: "PUT",
        query: { project_id: id },
        body: { ...patch, expected_version: issue.version }
      });
      if (id === projectId.value && !disposed) applyIssue(data);
    } catch (error) {
      failure = apiErrorMessage(error);
    } finally {
      busy.value = false;
      await refresh(true);
      if (id === projectId.value && failure) notice.value = failure;
    }
  }
  function startDrag() {
    dragging.value = true;
    epoch++;
  }
  async function planIssue(issue, sprintId2, beforeId = null) {
    if (busy.value || !canWrite.value) return;
    const boardVersion = revision;
    busy.value = true;
    epoch++;
    revision = -1;
    const id = projectId.value;
    let failure = "";
    try {
      await api.request(`kanban/cards/${issue.id}/plan`, {
        method: "PUT",
        query: { project_id: id },
        body: { sprint_id: sprintId2, before_id: beforeId, expected_version: issue.version, expected_board_version: boardVersion }
      });
    } catch (error) {
      failure = apiErrorMessage(error);
    } finally {
      busy.value = false;
      await refresh(true);
      if (id === projectId.value && failure) notice.value = failure;
    }
  }
  function resetProject() {
    epoch++;
    revision = -1;
    loading.value = true;
    connected.value = false;
    retryable.value = true;
    notice.value = "";
    project.value = null;
    projectContext.value = null;
    permissions.value = { manage: false, collaborate: false, role: null };
    for (const column of KANBAN_COLUMNS) lists[column.id] = [];
    users.value = [];
    online.value = [];
    activities.value = [];
    labels.value = [];
    epics.value = [];
    sprints.value = [];
    epicCards.value = [];
    columns.value = boardColumns(void 0);
    columnCounts.value = {};
    wipWarnings.value = [];
    void refresh(true);
  }
  watch(projectId, resetProject);
  return {
    project,
    permissions,
    lists,
    users,
    online,
    labels,
    epics,
    sprints,
    activities,
    loading,
    busy,
    dragging,
    suspended,
    connected,
    retryable,
    notice,
    canWrite,
    columns,
    columnCounts,
    wipWarnings,
    epicCards,
    refresh,
    applyIssue,
    move,
    updateIssue,
    planIssue,
    startDrag
  };
}

export { _sfc_main as _, useKanbanBoard as u };
//# sourceMappingURL=useKanbanBoard--KKVqRCV.mjs.map
