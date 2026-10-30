<script setup lang="ts">
import { Plus, SquareKanban, ArrowLeft, Activity, Shield } from 'lucide-vue-next'
import type { Issue, IssueStatus } from '~/types/kanban'
import type { LocationQueryRaw } from 'vue-router'
import { matchesIssue } from '~/utils/kanban'

const props = withDefaults(defineProps<{ mode?: 'board' | 'backlog' | 'epics' }>(), { mode: 'board' })
const planning = props.mode !== 'board'
const route = useRoute()
const router = useRouter()
const selectedProjectId = computed(() => Number(route.params.project))
const { project, permissions, lists, users, online, labels, epics, sprints, activities, loading, busy, dragging, suspended,
    connected, retryable, notice, canWrite, columns, columnCounts, wipWarnings, epicCards, refresh, applyIssue, move, updateIssue, planIssue, startDrag } = useKanbanBoard(selectedProjectId, planning)
const queryValue = (key: string) => typeof route.query[key] === 'string' ? String(route.query[key]) : ''
const query = ref(queryValue('q'))
const assigneeFilter = ref(queryValue('assignee'))
const priorityFilter = ref(queryValue('priority'))
const statusFilter = ref(queryValue('status'))
const typeFilter = ref(queryValue('type'))
const labelFilter = ref(queryValue('label'))
const epicFilter = ref(queryValue('epic'))
const sprintFilter = ref(queryValue('sprint'))
const viewMode = ref<'board' | 'list'>(route.query.view === 'list' ? 'list' : 'board')
const showActivity = ref(false)
const reduceMotion = ref(false)
const createStatus = ref<IssueStatus>('todo')
const createSprint = ref<number | null>(null)
const sprintOpen = ref(false)
const panelDirty = ref(false)
const createDirty = ref(false)
const panelSaving = ref(false)
const createSaving = ref(false)
const sprintSaving = ref(false)
const interacting = computed(() => busy.value || panelSaving.value || createSaving.value || sprintSaving.value)
const filtered = computed(() => Boolean(query.value || assigneeFilter.value || priorityFilter.value || statusFilter.value || typeFilter.value || labelFilter.value || epicFilter.value || sprintFilter.value))
const selectedIssueId = computed(() => {
    const value = queryValue('issue')
    return project.value && /^[1-9]\d*$/.test(value) && Number.isSafeInteger(Number(value)) ? Number(value) : null
})
const createOpen = computed(() => route.query.create === '1' && !!project.value)
watch(interacting, value => { suspended.value = value })
const viewTitle = computed(() => props.mode === 'backlog' ? 'Backlog' : props.mode === 'epics' ? 'Épicas' : viewMode.value === 'list' ? 'Issues' : 'Tablero')
useHead(() => ({ title: `${project.value?.name || 'Proyecto'} · ${viewTitle.value} · SysifosWeb`, meta: [{ name: 'robots', content: 'noindex, nofollow' }] }))

function matches(issue: Issue) {
    return matchesIssue(issue, { q: query.value, assignee: assigneeFilter.value, priority: priorityFilter.value,
        status: statusFilter.value, type: typeFilter.value, label: labelFilter.value, epic: epicFilter.value, sprint: sprintFilter.value })
}
const visibleIssues = computed(() => Object.values(lists).flat().filter(matches))
const allIssues = computed(() => Object.values(lists).flat().sort((a, b) => a.position - b.position || a.id - b.id))

watch([query, assigneeFilter, priorityFilter, statusFilter, typeFilter, labelFilter, epicFilter, sprintFilter, viewMode], ([q, assignee, priority, status, type, label, epic, sprint, view]) => {
    const next = { ...route.query }
    for (const [key, value] of Object.entries({ q, assignee, priority, status, type, label, epic, sprint, view: view === 'list' ? 'list' : '' })) {
        if (value) next[key] = value
        else delete next[key]
    }
    if (JSON.stringify(next) !== JSON.stringify(route.query)) void router.replace({ query: next })
})
watch(() => route.query, () => {
    query.value = queryValue('q'); assigneeFilter.value = queryValue('assignee'); priorityFilter.value = queryValue('priority')
    statusFilter.value = queryValue('status'); typeFilter.value = queryValue('type'); viewMode.value = route.query.view === 'list' ? 'list' : 'board'
    labelFilter.value = queryValue('label'); epicFilter.value = queryValue('epic'); sprintFilter.value = queryValue('sprint')
})
watch(selectedProjectId, () => { sprintOpen.value = false; createStatus.value = 'todo' })

function canNavigate(): boolean {
    if (interacting.value || dragging.value) return false
    return !(panelDirty.value || createDirty.value) || window.confirm('Hay cambios sin guardar. ¿Quieres descartarlos y continuar?')
}
onBeforeRouteLeave(() => canNavigate())
onBeforeRouteUpdate((to, from) => {
    if (to.params.project !== from.params.project || to.query.issue !== from.query.issue || to.query.create !== from.query.create) return canNavigate()
})
function openIssue(id: number) {
    if (busy.value || dragging.value || !connected.value) return
    const next: LocationQueryRaw = { ...route.query, issue: String(id) }
    delete next.create
    void router.push({ query: next })
}
function closeIssue() { const next = { ...route.query }; delete next.issue; void router.replace({ query: next }) }
function openCreate(status: IssueStatus = props.mode === 'backlog' ? 'backlog' : 'todo', sprintId: number | null = null) {
    if (!canWrite.value || interacting.value || dragging.value) return
    createStatus.value = status
    createSprint.value = sprintId
    void router.push({ query: { ...route.query, create: '1' } })
}
function createPlanned(sprintId: number | null) { openCreate('backlog', sprintId) }
function closeCreate() { const next = { ...route.query }; delete next.create; void router.replace({ query: next }) }
function issueCreated(issue: Issue) {
    createDirty.value = false; createSaving.value = false
    applyIssue(issue)
    const next: LocationQueryRaw = { ...route.query, issue: String(issue.id) }
    delete next.create
    void router.replace({ query: next })
    void refresh(true)
}
function issueSaved(issue: Issue) { applyIssue(issue); void refresh(true) }
function issueDeleted() { panelDirty.value = false; panelSaving.value = false; closeIssue(); void refresh(true) }
function dropped(status: IssueStatus, issue: Issue, beforeId: number | null) { void move(issue, status, beforeId) }
async function sprintCreated() { sprintOpen.value = false; sprintSaving.value = false; await refresh(true); notice.value = 'Sprint creado correctamente.' }
onMounted(() => { reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches })
</script>

<template>
    <div class="space-y-5">
        <NuxtLink to="/admin/kanban" class="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"><ArrowLeft class="h-3.5 w-3.5" />Todos los proyectos</NuxtLink>
        <header class="flex flex-wrap items-start justify-between gap-4">
            <div class="min-w-0 w-full sm:w-auto sm:flex-1"><div class="flex items-center gap-3"><span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400"><SquareKanban class="h-5 w-5" /></span><div><p class="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{{ project?.project_key || 'Proyecto' }} · {{ viewTitle }}</p><h2 class="break-words text-xl font-semibold text-slate-900 dark:text-white">{{ project?.name || 'Cargando proyecto…' }}</h2></div></div><p class="mt-2 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">{{ project?.description }}</p></div>
            <div class="flex items-center gap-2"><button v-if="canWrite && permissions.manage" :disabled="interacting || dragging" class="inline-flex min-h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 dark:text-slate-300 dark:ring-slate-700 dark:hover:bg-slate-800" @click="sprintOpen = true"><Shield class="h-4 w-4" />Nuevo sprint</button><button v-if="canWrite" :disabled="loading || interacting || dragging" class="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-sky-600 px-4 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-50" @click="openCreate()"><Plus class="h-4 w-4" />Crear issue</button></div>
        </header>
        <div class="flex flex-wrap items-center gap-4 border-b border-slate-200 pb-3 dark:border-slate-800"><nav v-if="project" aria-label="Vistas del proyecto" class="flex flex-wrap items-center gap-4 text-sm font-medium"><NuxtLink v-for="item in [{ name: 'Tablero', suffix: '', view: undefined }, { name: 'Issues', suffix: '', view: 'list' }, { name: 'Backlog', suffix: '/backlog', view: undefined }, { name: 'Épicas', suffix: '/epics', view: undefined }]" :key="item.name" :to="{ path: `/admin/kanban/${selectedProjectId}${item.suffix}`, query: { ...route.query, view: item.view } }" :aria-current="viewTitle === item.name ? 'page' : undefined" class="text-slate-600 aria-[current=page]:text-sky-600 dark:text-slate-300 dark:aria-[current=page]:text-sky-400">{{ item.name }}</NuxtLink><NuxtLink :to="{ path: `/admin/projects/${selectedProjectId}/settings`, query: route.query }" class="text-slate-500 hover:text-sky-600 dark:text-slate-400">Configuración y miembros</NuxtLink></nav><span v-if="project?.archived_at || (project && !permissions.collaborate)" class="ml-auto rounded bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-slate-800">{{ project?.archived_at ? 'Archivado · Solo lectura' : 'Solo lectura' }}</span></div>
        <AdminKanbanFilterBar v-model:query="query" v-model:assignee="assigneeFilter" v-model:priority="priorityFilter" v-model:status="statusFilter" v-model:type="typeFilter" v-model:label="labelFilter" v-model:epic="epicFilter" v-model:sprint="sprintFilter" v-model:view="viewMode" :planning="planning" :users="users" :columns="columns" :labels="labels" :epics="epics" :sprints="sprints" :disabled="interacting || dragging" :show-activity="showActivity" @refresh="refresh(true)" @activity="showActivity = !showActivity" />
        <p v-if="wipWarnings.length" role="status" class="rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-700 dark:bg-amber-950/50 dark:text-amber-200">Límite WIP superado en: {{ columns.filter(column => wipWarnings.includes(column.id)).map(column => column.label).join(', ') }}. Los límites son orientativos y cuentan las tarjetas principales del proyecto, incluso con filtros.</p>
        <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400"><span>{{ visibleIssues.length }} issues <span v-if="filtered">· Quita los filtros para reordenar.</span><span v-else>· Abre un issue para consultar o editar su detalle.</span></span><div class="flex items-center gap-2"><AdminKanbanMemberAvatars :members="online" /><span class="h-2 w-2 rounded-full" :class="connected ? 'bg-emerald-500' : 'bg-amber-500'" /><span>{{ interacting ? 'Guardando…' : connected ? 'Sincronización cada 15 s' : 'Sin conexión' }}</span></div></div>
        <div v-if="notice" role="alert" class="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200"><p>{{ notice }}</p><div v-if="!connected" class="mt-2 flex gap-3"><NuxtLink to="/admin/kanban" class="font-semibold underline">Ver proyectos</NuxtLink><button v-if="retryable" class="font-semibold underline" @click="refresh(true)">Reintentar conexión</button></div></div>
        <div v-if="loading" role="status" class="grid grid-cols-1 gap-3 py-3 sm:grid-cols-3"><span class="sr-only">Cargando tablero…</span><div v-for="index in 3" :key="index" class="h-64 animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800" /></div>
        <AdminKanbanBacklog v-else-if="mode === 'backlog'" :issues="allIssues" :sprints="sprints" :columns="columns" :can-write="canWrite" :disabled="interacting" :filtered="filtered" :matches="matches" @open="openIssue($event.id)" @plan="planIssue" @create="createPlanned" />
        <AdminKanbanEpics v-else-if="mode === 'epics'" :epics="epicCards" :issues="allIssues" :disabled="interacting" :matches="matches" @open="openIssue($event.id)" />
        <AdminKanbanIssueList v-else-if="viewMode === 'list'" :issues="visibleIssues" :columns="columns" :can-write="canWrite" :disabled="interacting || dragging" :filtered="filtered" @open="openIssue($event.id)" @move="move" />
        <div v-else class="scrollbar-thin flex gap-3 overflow-x-auto pb-5" aria-label="Columnas Kanban"><AdminKanbanBoardColumn v-for="column in columns" :key="`${selectedProjectId}-${column.id}`" v-model:cards="lists[column.id]" :column="column" :columns="columns" :users="users" :total="columnCounts[column.id] ?? lists[column.id].length" :warning="wipWarnings.includes(column.id)" :project-id="selectedProjectId" :can-write="canWrite" :disabled="interacting" :filtered="filtered" :reduce-motion="reduceMotion" :matches="matches" @open="openIssue($event.id)" @create="openCreate" @move="move" @patch="updateIssue" @start="startDrag" @end="dragging = false" @drop="dropped" /></div>
        <section v-if="showActivity" class="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"><h3 class="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-white"><Activity class="h-4 w-4 text-slate-400" />Últimos cambios</h3><AdminKanbanActivityTimeline :activities="activities" :columns="columns" :users="users" :labels="labels" /></section>
        <AdminKanbanIssuePanel :issue-id="selectedIssueId" :project-id="selectedProjectId" :project-name="project?.name || ''" :can-write="canWrite" :users="users" :labels="labels" :epics="epics" :columns="columns" @close="closeIssue" @saved="issueSaved" @deleted="issueDeleted" @open="openIssue" @dirty="panelDirty = $event" @saving="panelSaving = $event" />
        <AdminKanbanIssueCreateDialog :open="createOpen" :project="project" :status="planning ? 'backlog' : createStatus" :sprint-id="planning ? createSprint : null" :initial-type="mode === 'epics' ? 'epic' : 'task'" :can-write="canWrite" @close="closeCreate" @created="issueCreated" @dirty="createDirty = $event" @saving="createSaving = $event" />
        <AdminKanbanSprintDialog :open="sprintOpen" :project-id="selectedProjectId" :project-name="project?.name || ''" :can-manage="canWrite && permissions.manage" @close="sprintOpen = false" @created="sprintCreated" @saving="sprintSaving = $event" />
    </div>
</template>

<style>
.kanban-ghost, .kanban-drag { pointer-events: none; }
.kanban-ghost { opacity: .3; outline: 2px dashed #38bdf8; }
.kanban-drag { box-shadow: 0 12px 30px rgb(0 0 0 / .18); }
</style>
