const KANBAN_COLUMNS = [
  { id: "backlog", label: "Ideas", color: "#94a3b8" },
  { id: "todo", label: "Por hacer", color: "#38bdf8" },
  { id: "in_progress", label: "En progreso", color: "#a78bfa" },
  { id: "review", label: "En revisi\xF3n", color: "#fbbf24" },
  { id: "done", label: "Completado", color: "#34d399" }
];
const ISSUE_TYPES = [
  { value: "task", label: "Tarea" },
  { value: "story", label: "Historia" },
  { value: "bug", label: "Bug" },
  { value: "epic", label: "\xC9pica" },
  { value: "subtask", label: "Subtarea" }
];
const ISSUE_PRIORITIES = { low: "Baja", medium: "Media", high: "Alta", urgent: "Urgente" };
function issueProgress(issues) {
  const done = issues.filter((issue) => issue.status === "done").length;
  return { done, total: issues.length, percent: issues.length ? Math.round(done / issues.length * 100) : 0 };
}
function planningOrder(issues) {
  return [...issues].sort((a, b) => a.position - b.position || a.id - b.id);
}
function boardColumns(input) {
  const source = Array.isArray(input) ? input : [];
  return KANBAN_COLUMNS.map((fallback) => {
    const column = source.find((value) => (value == null ? void 0 : value.status) === fallback.id);
    if (!column) return { ...fallback };
    return {
      ...fallback,
      label: typeof column.label === "string" && column.label.trim() ? column.label.trim() : fallback.label,
      color: typeof column.color === "string" && /^#[\da-f]{6}$/i.test(column.color) ? column.color : fallback.color,
      wip: Number.isInteger(column.wip) && column.wip >= 0 ? column.wip : null,
      transitions: Array.isArray(column.transitions) ? column.transitions.filter((status) => KANBAN_COLUMNS.some((item) => item.id === status)) : void 0
    };
  });
}
function canTransition(columns, from, to) {
  var _a;
  const allowed = (_a = columns.find((column) => column.id === from)) == null ? void 0 : _a.transitions;
  return from === to || !allowed || allowed.includes(to);
}
function boardConfiguration(columns = {}, transitions = {}) {
  const normalized = boardColumns(KANBAN_COLUMNS.map((column) => ({ ...columns[column.id], status: column.id, transitions: transitions[column.id] })));
  return {
    columns: Object.fromEntries(normalized.map((column) => {
      var _a;
      return [column.id, { label: column.label, wip: (_a = column.wip) != null ? _a : null }];
    })),
    transitions: Object.fromEntries(normalized.map((column) => {
      var _a;
      return [column.id, (_a = column.transitions) != null ? _a : KANBAN_COLUMNS.map((item) => item.id)];
    }))
  };
}
function matchesIssue(issue, filters) {
  const text = (filters.q || "").trim().toLocaleLowerCase();
  return (!text || `${issue.issue_key} ${issue.title} ${issue.description || ""}`.toLocaleLowerCase().includes(text)) && (!filters.assignee || issue.assignees.some((user) => user.id === Number(filters.assignee))) && (!filters.priority || issue.priority === filters.priority) && (!filters.status || issue.status === filters.status) && (!filters.type || issue.type === filters.type) && (!filters.label || issue.labels.some((label) => label.id === Number(filters.label))) && (!filters.epic || issue.epic_id === Number(filters.epic)) && (!filters.sprint || issue.sprint_id === Number(filters.sprint));
}
const issueInitials = (name) => name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
const issueDate = (date) => (/* @__PURE__ */ new Date(`${date.slice(0, 10)}T12:00:00`)).toLocaleDateString("es-CL", { day: "numeric", month: "short" });
const issueOverdue = (issue) => issue.status !== "done" && !!issue.due_date && issue.due_date.slice(0, 10) < (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA");
const issueActivityVerbs = {
  created: "cre\xF3",
  updated: "actualiz\xF3",
  moved: "movi\xF3",
  deleted: "elimin\xF3",
  project_updated: "actualiz\xF3 el proyecto",
  project_archived: "archiv\xF3 el proyecto",
  project_restored: "recuper\xF3 el proyecto",
  member_updated: "actualiz\xF3 los miembros de",
  member_removed: "retir\xF3 un miembro de",
  label_created: "cre\xF3 la etiqueta",
  label_updated: "actualiz\xF3 la etiqueta",
  label_deleted: "elimin\xF3 la etiqueta",
  comment_created: "coment\xF3 en",
  comment_updated: "edit\xF3 un comentario en",
  comment_deleted: "elimin\xF3 un comentario en",
  sprint_changed: "cambi\xF3 el sprint de"
};

export { ISSUE_PRIORITIES as I, KANBAN_COLUMNS as K, ISSUE_TYPES as a, boardColumns as b, issueDate as c, issueProgress as d, canTransition as e, issueOverdue as f, issueActivityVerbs as g, boardConfiguration as h, issueInitials as i, matchesIssue as m, planningOrder as p };
//# sourceMappingURL=kanban-Dgq-owKx.mjs.map
