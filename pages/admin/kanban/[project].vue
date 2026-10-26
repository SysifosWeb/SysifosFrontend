<script setup lang="ts">
import draggable from 'vuedraggable'
import { Plus, Search, X, GripVertical, Calendar, Activity, RefreshCw, Trash2, Loader2, SquareKanban, ArrowLeft, Rows3 } from 'lucide-vue-next'

definePageMeta({
    layout: 'admin',
    validate: route => typeof route.params.project === 'string'
        && /^[1-9]\d*$/.test(route.params.project)
        && Number.isSafeInteger(Number(route.params.project)),
})

type Member = { id: number; name: string }
type Project = { id: number; name: string; description: string | null; project_key: string; archived_at: string | null }
type Card = { id: number; title: string; description: string | null; status: string; priority: string; due_date: string | null; version: number; assignees: Member[]; editor?: Member; position: number }
type Log = { id: number; user?: Member; action: string; card_title: string; to_status: string | null; created_at: string }
type Permissions = { manage: boolean; collaborate: boolean; role: string }
type Board = { permissions: Permissions; project: Project; cards: Card[]; users: Member[]; online_users: Member[]; activities: Log[]; board_version: number }
const route = useRoute()
const router = useRouter()
const selectedProjectId = computed(() => Number(route.params.project))
const selectedProject = ref<Project | null>(null)
const permissions = ref<Permissions>({ manage: false, collaborate: false, role: 'viewer' })
const canWrite = computed(() => connected.value && permissions.value.collaborate)
const projectQuery = () => ({ project_id: selectedProjectId.value })
useHead(() => ({ title: `${selectedProject.value?.name || 'Tablero'} · Kanban · SysifosWeb`, meta: [{ name: 'robots', content: 'noindex, nofollow' }] }))
const columns = [
    { id: 'backlog', label: 'Ideas', color: '#94a3b8' },
    { id: 'todo', label: 'Por hacer', color: '#38bdf8' },
    { id: 'in_progress', label: 'En progreso', color: '#a78bfa' },
    { id: 'review', label: 'En revisión', color: '#fbbf24' },
    { id: 'done', label: 'Completado', color: '#34d399' },
]
const priorities: Record<string, string> = { low: 'Baja', medium: 'Media', high: 'Alta', urgent: 'Urgente' }
const lists = reactive<Record<string, Card[]>>(Object.fromEntries(columns.map(c => [c.id, []])))
const users = ref<Member[]>([])
const online = ref<Member[]>([])
const activities = ref<Log[]>([])
const reduceMotion = ref(false)
const loading = ref(true)
const busy = ref(false)
const dragging = ref(false)
const connected = ref(false)
const retryable = ref(true)
const showActivity = ref(false)
const notice = ref('')
const query = ref(typeof route.query.q === 'string' ? route.query.q : '')
const assigneeFilter = ref(typeof route.query.assignee === 'string' ? route.query.assignee : '')
const priorityFilter = ref(typeof route.query.priority === 'string' ? route.query.priority : '')
const statusFilter = ref(typeof route.query.status === 'string' ? route.query.status : '')
const viewMode = ref(route.query.view === 'list' ? 'list' : 'board')
const filtered = computed(() => Boolean(query.value || assigneeFilter.value || priorityFilter.value || statusFilter.value))
const token = useCookie('auth_token')
const config = useRuntimeConfig()
const base = `${config.public.apiUrl}kanban`
const headers = () => ({ Authorization: `Bearer ${token.value}`, Accept: 'application/json' })
const dialog = ref<HTMLDialogElement>()
const editing = ref<Card | null>(null)
const assigneeOptions = computed(() => [
    ...users.value,
    ...(editing.value?.assignees || []).filter(member => !users.value.some(user => user.id === member.id))
])
const modalError = ref('')
const confirmingDelete = ref(false)
const form = reactive({ title: '', description: '', status: 'todo', priority: 'medium', due_date: '', assignee_ids: [] as number[] })
let revision = -1
let fetching = false
let refreshQueued = false
let epoch = 0
let disposed = false
let timer: ReturnType<typeof setInterval> | undefined

function matches(card: Card) {
    return (!query.value || `${card.title} ${card.description || ''}`.toLocaleLowerCase().includes(query.value.toLocaleLowerCase()))
        && (!assigneeFilter.value || card.assignees.some(u => u.id === Number(assigneeFilter.value)))
        && (!priorityFilter.value || card.priority === priorityFilter.value)
        && (!statusFilter.value || card.status === statusFilter.value)
}
const visibleCount = computed(() => Object.values(lists).flat().filter(matches).length)
const visibleCards = computed(() => Object.values(lists).flat().filter(matches))
const initials = (name: string) => name.split(' ').filter(Boolean).slice(0, 2).map(s => s[0]).join('').toUpperCase()
const columnLabel = (id: string | null) => columns.find(c => c.id === id)?.label || id
const dateLabel = (date: string) => new Date(`${date.slice(0, 10)}T12:00:00`).toLocaleDateString('es-CL', { day: 'numeric', month: 'short' })
const overdue = (card: Card) => card.status !== 'done' && !!card.due_date && card.due_date.slice(0, 10) < new Date().toLocaleDateString('en-CA')

watch([query, assigneeFilter, priorityFilter, statusFilter, viewMode], ([search, assignee, priority, status, view]) => {
    const nextQuery = { ...route.query }
    const values: Record<string, string> = { q: search, assignee, priority, status, view: view === 'list' ? 'list' : '' }
    for (const [key, value] of Object.entries(values)) {
        if (value) nextQuery[key] = value
        else delete nextQuery[key]
    }
    if (JSON.stringify(nextQuery) !== JSON.stringify(route.query)) {
        router.replace({ query: nextQuery })
    }
})

watch(() => route.query, routeQuery => {
    query.value = typeof routeQuery.q === 'string' ? routeQuery.q : ''
    assigneeFilter.value = typeof routeQuery.assignee === 'string' ? routeQuery.assignee : ''
    priorityFilter.value = typeof routeQuery.priority === 'string' ? routeQuery.priority : ''
    statusFilter.value = typeof routeQuery.status === 'string' ? routeQuery.status : ''
    viewMode.value = routeQuery.view === 'list' ? 'list' : 'board'
})

async function fetchBoard(force = false) {
    if (disposed) return
    if (fetching) { refreshQueued ||= force; return }
    if (!force && (dragging.value || busy.value)) return
    fetching = true
    const started = epoch
    const projectId = selectedProjectId.value
    try {
        const response = await $fetch<{ data: Board }>(`${base}/board`, { headers: headers(), query: { project_id: projectId } })
        if (started !== epoch || dragging.value) return
        const board = response.data
        if (!board || board.project?.id !== projectId || typeof board.project.name !== 'string'
            || !Array.isArray(board.cards) || !Array.isArray(board.users)
            || !Array.isArray(board.online_users) || !Array.isArray(board.activities)
            || typeof board.board_version !== 'number') {
            throw new Error('KANBAN_INVALID_RESPONSE')
        }
        permissions.value = board.permissions || { manage: false, collaborate: false, role: 'viewer' }
        selectedProject.value = board.project
        users.value = board.users
        online.value = board.online_users
        activities.value = board.activities
        if (force || revision !== board.board_version) {
            for (const column of columns) lists[column.id] = board.cards.filter(c => c.status === column.id)
            revision = board.board_version
        }
        connected.value = true
        retryable.value = true
        notice.value = ''
    } catch (error: any) {
        if (started !== epoch) return
        connected.value = false
        permissions.value = { manage: false, collaborate: false, role: 'viewer' }
        if ([401, 403, 404, 419].includes(error.statusCode || error.status || error.response?.status)) {
            for (const column of columns) lists[column.id] = []
            activities.value = []
            online.value = []
            selectedProject.value = null
            users.value = []
            dialog.value?.close()
        }
        const status = error.statusCode || error.status || error.response?.status
        retryable.value = ![403, 404].includes(status)
        if ([401, 419].includes(status)) {
            token.value = null
            await navigateTo('/admin/login')
        } else if (status === 404) {
            notice.value = 'No se encontró este proyecto. Vuelve a la lista de proyectos para elegir otro tablero.'
        } else if (status === 403) {
            notice.value = 'Tu cuenta no tiene acceso al tablero. Comprueba que tu cuenta está activa y pertenece al proyecto.'
        } else if (status >= 500) {
            notice.value = `El servidor del Kanban devolvió un error (HTTP ${status}). Comprueba las migraciones y los registros del backend.`
        } else if (error.message === 'KANBAN_INVALID_RESPONSE') {
            retryable.value = false
            notice.value = 'La API respondió con un formato inesperado. Comprueba que el backend incluye los tableros por proyecto y que el proxy apunta a la API correcta.'
        } else {
            notice.value = 'No se pudo contactar con el servidor del Kanban. Comprueba que el backend está activo y reintenta la conexión.'
        }
    } finally {
        fetching = false
        if (started === epoch) loading.value = false
        if (refreshQueued) { refreshQueued = false; await fetchBoard(true) }
    }
}

watch(selectedProjectId, () => {
    epoch++
    revision = -1
    loading.value = true
    connected.value = false
    retryable.value = true
    notice.value = ''
    query.value = ''
    assigneeFilter.value = ''
    priorityFilter.value = ''
    statusFilter.value = ''
    selectedProject.value = null
    for (const column of columns) lists[column.id] = []
    online.value = []
    activities.value = []
    dialog.value?.close()
    fetchBoard(true)
})

function errorMessage(error: any) {
    if ((error.statusCode || error.status) === 409) return 'Otra persona cambió la tarjeta o su columna. Se actualizó el tablero; cierra el editor y vuelve a abrir la tarjeta para revisar sus cambios.'
    const errors = error.data?.errors
    return errors ? Object.values(errors).flat().join(' ') : 'No se pudo guardar el cambio. Inténtalo nuevamente.'
}

async function dropped(status: string, event: any) {
    const change = event.added || event.moved
    if (!change || !canWrite.value) return
    const card = change.element as Card
    const index = lists[status].findIndex(c => c.id === card.id)
    const before = lists[status][index + 1]?.id ?? null
    busy.value = true
    epoch++
    revision = -1
    let failure = ''
    try {
        await $fetch(`${base}/cards/${card.id}/move`, {
            method: 'PUT', headers: headers(), query: projectQuery(),
            body: { status, before_id: before, expected_version: card.version },
        })
    } catch (error) { failure = errorMessage(error) }
    finally {
        dragging.value = false
        busy.value = false
        await fetchBoard(true)
        if (failure) notice.value = failure
    }
}

function changeStatus(card: Card, event: Event) {
    const select = event.target as HTMLSelectElement
    const status = select.value
    select.value = card.status
    moveTo(card, status)
}

async function moveTo(card: Card, status: string) {
    if (busy.value || !canWrite.value || status === card.status) return
    busy.value = true
    epoch++
    revision = -1
    let failure = ''
    try {
        await $fetch(`${base}/cards/${card.id}/move`, { method: 'PUT', headers: headers(), query: projectQuery(), body: { status, before_id: null, expected_version: card.version } })
    } catch (error) { failure = errorMessage(error) }
    finally {
        busy.value = false
        await fetchBoard(true)
        if (failure) notice.value = failure
    }
}

function openCard(card: Card | null = null, status = 'todo') {
    if (loading.value || busy.value || dragging.value || !connected.value || (!card && !canWrite.value)) return
    editing.value = card ? structuredClone(toRaw(card)) : null
    Object.assign(form, {
        title: card?.title || '', description: card?.description || '',
        status: card?.status || status, priority: card?.priority || 'medium',
        due_date: card?.due_date?.slice(0, 10) || '', assignee_ids: card?.assignees.map(u => u.id) || [],
    })
    modalError.value = ''
    confirmingDelete.value = false
    dialog.value?.showModal()
}

async function saveCard() {
    if (busy.value || !canWrite.value) return
    busy.value = true
    epoch++
    try {
        const body: Record<string, any> = { title: form.title.trim(), description: form.description, priority: form.priority, due_date: form.due_date || null, assignee_ids: form.assignee_ids }
        if (editing.value) body.expected_version = editing.value.version
        else body.status = form.status
        await $fetch(editing.value ? `${base}/cards/${editing.value.id}` : `${base}/cards`, {
            method: editing.value ? 'PUT' : 'POST', headers: headers(), query: projectQuery(), body,
        })
        dialog.value?.close()
    } catch (error) { modalError.value = errorMessage(error) }
    finally { busy.value = false; await fetchBoard(true) }
}

async function deleteCard() {
    if (!editing.value || busy.value || !canWrite.value) return
    busy.value = true
    epoch++
    try {
        await $fetch(`${base}/cards/${editing.value.id}`, { method: 'DELETE', headers: headers(), query: projectQuery(), body: { expected_version: editing.value.version } })
        dialog.value?.close()
    } catch (error) { modalError.value = errorMessage(error) }
    finally { busy.value = false; await fetchBoard(true) }
}

onMounted(() => {
    reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    fetchBoard()
    timer = setInterval(() => { if (retryable.value && document.visibilityState === 'visible') fetchBoard() }, 15000)
})
onBeforeUnmount(() => { clearInterval(timer); disposed = true; epoch++ })
</script>

<template>
    <div class="space-y-5">
        <NuxtLink to="/admin/kanban" :aria-disabled="busy || dragging" class="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300" :class="{ 'opacity-50': busy || dragging }" @click="(busy || dragging) && $event.preventDefault()"><ArrowLeft class="h-4 w-4" /> Todos los proyectos</NuxtLink>
        <div class="flex flex-wrap items-start justify-between gap-4">
            <div class="min-w-0 w-full sm:w-auto sm:flex-1">
                <h2 class="flex items-start gap-2 font-display text-2xl font-bold text-slate-900 dark:text-white"><SquareKanban class="mt-1 h-6 w-6 shrink-0 text-sky-500" /><span class="break-words">{{ selectedProject?.name || 'Tablero Kanban' }}</span></h2>
                <p class="mt-1 whitespace-pre-line break-words text-sm text-slate-500 dark:text-slate-400">{{ selectedProject?.description || 'Organiza las tareas de este proyecto y avanza junto al equipo.' }}</p>
            </div>
            <button v-if="canWrite" :disabled="loading || busy || dragging || !connected" class="min-h-11 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 disabled:opacity-50" @click="openCard()"><Plus class="mr-1 inline h-4 w-4" /> Nueva tarea</button>
        </div>

        <nav v-if="selectedProject" aria-label="Vistas del proyecto" class="flex flex-wrap items-center gap-4 text-sm text-slate-700 dark:text-slate-200">
            <span class="font-semibold">{{ selectedProject.project_key }}</span>
            <span v-if="selectedProject.archived_at" class="rounded-full bg-slate-100 px-3 py-2 dark:bg-slate-800">Archivado · Solo lectura</span>
            <span v-else-if="!canWrite">Solo lectura</span>
            <NuxtLink :to="{ path: `/admin/projects/${selectedProjectId}/settings`, query: route.query }" class="inline-flex min-h-11 items-center underline underline-offset-4">Configuración y miembros</NuxtLink>
        </nav>
        <div class="flex flex-wrap items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
            <div class="relative min-w-[180px] flex-1"><Search class="absolute left-3 top-3 h-4 w-4 text-slate-400" /><input v-model="query" type="text" aria-label="Buscar tareas" placeholder="Buscar tareas…" class="!min-h-11 !pl-9" /></div>
            <select v-model="assigneeFilter" aria-label="Filtrar por responsable" class="!min-h-11 !w-auto !text-slate-700 dark:!text-slate-200"><option value="">Todo el equipo</option><option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option></select>
            <select v-model="priorityFilter" aria-label="Filtrar por prioridad" class="!min-h-11 !w-auto !text-slate-700 dark:!text-slate-200"><option value="">Todas las prioridades</option><option v-for="(label, id) in priorities" :key="id" :value="id">{{ label }}</option></select>
            <select v-model="statusFilter" aria-label="Filtrar por estado" class="!min-h-11 !w-auto !text-slate-700 dark:!text-slate-200"><option value="">Todos los estados</option><option v-for="column in columns" :key="column.id" :value="column.id">{{ column.label }}</option></select>
            <button v-if="filtered" aria-label="Limpiar filtros" class="flex h-11 w-11 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" @click="query = ''; assigneeFilter = ''; priorityFilter = ''; statusFilter = ''"><X class="h-4 w-4" /></button>
            <button aria-label="Actualizar tablero" :disabled="busy || dragging" class="flex h-11 w-11 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" @click="fetchBoard(true)"><RefreshCw class="h-4 w-4" /></button>
            <button :aria-expanded="showActivity" class="min-h-11 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 ring-1 ring-slate-200 dark:text-slate-300 dark:ring-slate-700" @click="showActivity = !showActivity"><Activity class="mr-1 inline h-4 w-4" /> Actividad</button>
            <div class="flex rounded-lg bg-slate-100 p-1 dark:bg-slate-800" role="group" aria-label="Vista de tareas">
                <button :aria-pressed="viewMode === 'board'" class="min-h-11 rounded-md px-3 text-sm font-medium" :class="viewMode === 'board' ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white' : 'text-slate-500 dark:text-slate-300'" @click="viewMode = 'board'"><SquareKanban class="mr-1 inline h-4 w-4" /> Tablero</button>
                <button :aria-pressed="viewMode === 'list'" class="min-h-11 rounded-md px-3 text-sm font-medium" :class="viewMode === 'list' ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white' : 'text-slate-500 dark:text-slate-300'" @click="viewMode = 'list'"><Rows3 class="mr-1 inline h-4 w-4" /> Lista</button>
            </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>{{ visibleCount }} tareas <span v-if="filtered">· Quita los filtros para arrastrar y reordenar.</span><span v-else-if="canWrite">· Arrastra desde el asa o abre una tarjeta para editarla.</span><span v-else>· Abre una tarea para consultar su detalle.</span></span>
            <div class="flex items-center gap-2"><div class="flex -space-x-1.5"><span v-for="member in online" :key="member.id" :title="`${member.name} está en el tablero`" class="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-[10px] font-bold text-sky-700 ring-2 ring-white dark:bg-sky-900 dark:text-sky-200 dark:ring-slate-950">{{ initials(member.name) }}</span></div><span class="h-2 w-2 rounded-full" :class="connected ? 'bg-emerald-500' : 'bg-amber-500'" /><span>{{ busy ? 'Guardando…' : connected ? 'Sincronización cada 15 s' : 'Sin conexión' }}</span></div>
        </div>
        <div v-if="notice" role="alert" class="rounded-xl border border-amber-300/50 bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">
            <p>{{ notice }}</p>
            <div v-if="!connected" class="mt-2 flex flex-wrap gap-3">
                <NuxtLink to="/admin/kanban" class="font-semibold underline underline-offset-2">Ver proyectos</NuxtLink>
                <button v-if="retryable" class="font-semibold underline underline-offset-2" @click="fetchBoard(true)">Reintentar conexión</button>
            </div>
        </div>
        <div v-if="loading" class="flex h-64 items-center justify-center"><Loader2 class="h-8 w-8 animate-spin text-sky-500" /></div>

        <section v-else-if="viewMode === 'list'" aria-label="Lista de tareas" class="overflow-x-auto rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div class="grid min-w-[720px] grid-cols-[minmax(220px,2fr)_minmax(120px,1fr)_minmax(100px,0.8fr)_minmax(130px,1fr)_minmax(100px,0.8fr)] gap-3 border-b border-slate-200 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <span>Tarea</span><span>Estado</span><span>Prioridad</span><span>Responsables</span><span>Vencimiento</span>
            </div>
            <div v-if="!visibleCards.length" class="px-4 py-12 text-center text-sm text-slate-500 dark:text-slate-400">{{ filtered ? 'No hay tareas que coincidan con estos filtros.' : 'Este proyecto todavía no tiene tareas.' }}</div>
            <article v-for="card in visibleCards" :key="card.id" class="grid min-w-[720px] grid-cols-[minmax(220px,2fr)_minmax(120px,1fr)_minmax(100px,0.8fr)_minmax(130px,1fr)_minmax(100px,0.8fr)] items-center gap-3 border-b border-slate-100 px-4 py-3 last:border-0 dark:border-slate-800">
                <button :disabled="busy || dragging" class="min-w-0 text-left disabled:cursor-wait" @click="openCard(card)"><span class="block truncate text-sm font-semibold text-slate-800 hover:text-sky-600 dark:text-slate-100 dark:hover:text-sky-400">{{ card.title }}</span><span class="text-xs text-slate-400">#{{ card.id }}</span></button>
                <select :value="card.status" :aria-label="`Estado de ${card.title}`" :disabled="busy || !canWrite" class="!m-0 !min-h-11 !py-1 !text-xs" @change="changeStatus(card, $event)"><option v-for="column in columns" :key="column.id" :value="column.id">{{ column.label }}</option></select>
                <span class="w-fit rounded-md px-2 py-1 text-xs font-medium" :class="card.priority === 'urgent' ? 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300' : card.priority === 'high' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'">{{ priorities[card.priority] }}</span>
                <div class="flex -space-x-1.5"><span v-for="member in card.assignees" :key="member.id" :title="member.name" class="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-[10px] font-bold text-sky-700 ring-2 ring-white dark:bg-sky-900 dark:text-sky-200 dark:ring-slate-900">{{ initials(member.name) }}</span><span v-if="!card.assignees.length" class="text-xs text-slate-400">Sin asignar</span></div>
                <span class="flex items-center gap-1 text-xs" :class="overdue(card) ? 'font-semibold text-red-600' : 'text-slate-500 dark:text-slate-400'"><Calendar class="h-3.5 w-3.5" />{{ card.due_date ? dateLabel(card.due_date) : 'Sin fecha' }}</span>
            </article>
        </section>

        <div v-else class="flex gap-4 overflow-x-auto pb-5 scrollbar-thin" aria-label="Columnas Kanban">
            <section v-for="column in columns" :key="`${selectedProjectId}-${column.id}`" :data-column="column.id" class="w-[280px] min-w-[280px] flex-1 rounded-2xl bg-slate-200/50 p-3 dark:bg-slate-900/70">
                <header class="mb-3 flex items-center gap-2 px-1 py-2"><span class="h-2.5 w-2.5 rounded-full" :style="{ background: column.color }" /><h3 class="text-sm font-semibold text-slate-700 dark:text-slate-200">{{ column.label }}</h3><span class="rounded-md bg-white/70 px-1.5 text-xs text-slate-500 dark:bg-slate-800">{{ lists[column.id].filter(matches).length }}</span><button v-if="canWrite" :aria-label="`Agregar tarea en ${column.label}`" :disabled="busy || !canWrite" class="ml-auto flex h-11 w-11 items-center justify-center rounded-lg text-slate-400 hover:bg-white dark:hover:bg-slate-800" @click="openCard(null, column.id)"><Plus class="h-4 w-4" /></button></header>
                <draggable v-model="lists[column.id]" item-key="id" :group="`project-${selectedProjectId}`" handle=".drag-handle" :animation="reduceMotion ? 0 : 180" :force-fallback="true" :fallback-tolerance="4" :disabled="filtered || busy || !canWrite" :delay="120" :delay-on-touch-only="true" :touch-start-threshold="5" ghost-class="kanban-ghost" drag-class="kanban-drag" class="min-h-[160px] space-y-3" @start="dragging = true; epoch++" @end="dragging = false" @change="dropped(column.id, $event)">
                    <template #item="{ element: card }">
                        <article v-show="matches(card)" :data-card="card.id" class="rounded-xl bg-white p-3.5 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-800 dark:ring-slate-700/60">
                            <div class="mb-2 flex items-center justify-between gap-2"><span class="rounded-md px-2 py-0.5 text-[10px] font-bold" :class="card.priority === 'urgent' ? 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300' : card.priority === 'high' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300' : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-300'">{{ priorities[card.priority] }}</span><button :aria-label="`Arrastrar ${card.title}`" :disabled="filtered || busy || !canWrite" class="drag-handle cursor-grab touch-none flex h-11 w-11 items-center justify-center rounded text-slate-400 active:cursor-grabbing"><GripVertical class="h-4 w-4" /></button></div>
                            <button :disabled="busy || dragging" class="block w-full text-left text-sm font-semibold leading-relaxed text-slate-800 hover:text-sky-600 disabled:cursor-wait dark:text-slate-100 dark:hover:text-sky-400" @click="openCard(card)">{{ card.title }}</button>
                            <p v-if="card.description" class="mt-1.5 line-clamp-2 whitespace-pre-line text-xs leading-relaxed text-slate-500 dark:text-slate-400">{{ card.description }}</p>
                            <div class="mt-4 flex min-h-6 items-center justify-between gap-2"><span v-if="card.due_date" class="flex items-center gap-1 text-[11px]" :class="overdue(card) ? 'font-semibold text-red-500' : 'text-slate-400'"><Calendar class="h-3 w-3" />{{ dateLabel(card.due_date) }}</span><span v-else class="text-[10px] text-slate-400">#{{ card.id }}</span><div class="flex -space-x-1"><span v-for="member in card.assignees" :key="member.id" :title="member.name" class="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-[9px] font-bold text-sky-700 ring-2 ring-white dark:bg-sky-900 dark:text-sky-200 dark:ring-slate-800">{{ initials(member.name) }}</span></div></div>
                            <select :value="card.status" :aria-label="`Mover ${card.title} a otra columna`" :disabled="busy || !canWrite" class="mt-3 !border-0 !bg-transparent !px-0 !py-1 !text-xs !text-slate-500 !shadow-none" @change="changeStatus(card, $event)"><option v-for="destination in columns" :key="destination.id" :value="destination.id">{{ destination.label }}</option></select>
                        </article>
                    </template>
                </draggable>
                <p v-if="!lists[column.id].filter(matches).length" class="py-3 text-center text-xs text-slate-400">{{ filtered ? 'Sin coincidencias' : 'Arrastra una tarea aquí' }}</p>
                <button v-if="canWrite" :disabled="busy || !canWrite" class="mt-3 w-full rounded-lg py-2 text-left text-xs text-slate-500 hover:bg-white/60 dark:hover:bg-slate-800" @click="openCard(null, column.id)"><Plus class="mr-1 inline h-3.5 w-3.5" /> Agregar tarea</button>
            </section>
        </div>

        <section v-if="showActivity" class="rounded-2xl bg-white p-5 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800"><h3 class="mb-4 font-semibold text-slate-800 dark:text-white">Últimos cambios · {{ selectedProject?.name }}</h3><p v-if="!activities.length" class="text-sm text-slate-500">La actividad aparecerá cuando el equipo empiece a trabajar en este proyecto.</p><ul class="space-y-3"><li v-for="log in activities" :key="log.id" class="text-sm text-slate-600 dark:text-slate-400"><strong class="text-slate-800 dark:text-slate-200">{{ log.user?.name || 'Usuario' }}</strong> {{ ({ created: 'creó', updated: 'actualizó', moved: 'movió', deleted: 'eliminó', project_updated: 'actualizó el proyecto', project_archived: 'archivó el proyecto', project_restored: 'recuperó el proyecto', member_updated: 'actualizó los miembros de', member_removed: 'retiró un miembro de' } as Record<string, string>)[log.action] }} «{{ log.card_title }}»<span v-if="log.action === 'moved'"> a {{ columnLabel(log.to_status) }}</span><time class="ml-2 text-xs text-slate-400">{{ new Date(log.created_at).toLocaleString('es-CL') }}</time></li></ul></section>

        <dialog ref="dialog" aria-labelledby="task-heading" class="admin-scope m-auto max-h-[90vh] w-[min(560px,calc(100vw-32px))] overflow-y-auto rounded-2xl bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-slate-950/60 dark:bg-slate-900 dark:text-slate-100" @cancel="busy && $event.preventDefault()">
            <form class="space-y-5 p-6" @submit.prevent="saveCard">
                <header class="flex items-center justify-between"><h3 id="task-heading" class="text-lg font-bold">{{ !canWrite ? 'Detalle de tarea' : editing ? 'Editar tarea' : 'Nueva tarea' }}</h3><button type="button" aria-label="Cerrar editor" :disabled="busy" class="flex h-11 w-11 items-center justify-center text-slate-400" @click="dialog?.close()"><X class="h-5 w-5" /></button></header>
                <p class="text-xs text-slate-500 dark:text-slate-400">Proyecto: {{ selectedProject?.name }}</p>
                <p v-if="modalError" role="alert" class="rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">{{ modalError }}</p>
                <div v-if="confirmingDelete" class="rounded-xl border border-red-300/40 bg-red-50 p-3 dark:bg-red-500/10"><p class="mb-3 text-sm text-red-700 dark:text-red-300">¿Eliminar esta tarea? Esta acción no se puede deshacer.</p><div class="flex gap-2"><button type="button" :disabled="busy" class="rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white" @click="deleteCard">Sí, eliminar</button><button type="button" :disabled="busy" class="rounded-lg px-3 py-2 text-sm text-slate-500" @click="confirmingDelete = false">Conservar tarea</button></div></div>
                <fieldset :disabled="!canWrite || busy" class="space-y-5">
                <label class="block text-sm font-medium">Título<input v-model="form.title" type="text" required minlength="2" maxlength="255" placeholder="¿Qué hay que hacer?" class="mt-1.5" /></label>
                <label class="block text-sm font-medium">Descripción<textarea v-model="form.description" rows="4" maxlength="5000" placeholder="Contexto, objetivos y próximos pasos…" class="mt-1.5" /></label>
                <div class="grid grid-cols-2 gap-4"><label class="text-sm font-medium">Prioridad<select v-model="form.priority" class="mt-1.5"><option v-for="(label, id) in priorities" :key="id" :value="id">{{ label }}</option></select></label><label class="text-sm font-medium">Fecha límite<input v-model="form.due_date" type="date" class="mt-1.5" /></label></div>
                <label v-if="!editing" class="block text-sm font-medium">Columna<select v-model="form.status" class="mt-1.5"><option v-for="column in columns" :key="column.id" :value="column.id">{{ column.label }}</option></select></label>
                <fieldset><legend class="mb-2 text-sm font-medium">Responsables</legend><div class="flex max-h-40 flex-wrap gap-2 overflow-y-auto"><label v-for="member in assigneeOptions" :key="member.id" class="flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm dark:border-slate-700"><input v-model="form.assignee_ids" type="checkbox" :value="member.id" class="accent-sky-500" />{{ member.name }}<span v-if="!users.some(user => user.id === member.id)" class="text-xs">(sin acceso actual; desmarca para guardar)</span></label></div><p class="mt-2 text-xs text-slate-400">Puedes asignar la tarea a varias personas.</p></fieldset>
                </fieldset>
                <footer class="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800"><button v-if="editing && canWrite" type="button" :disabled="busy" class="flex h-11 w-11 items-center justify-center rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10" aria-label="Eliminar tarea" @click="confirmingDelete = true"><Trash2 class="h-4 w-4" /></button><span v-else /><div class="flex gap-2"><button type="button" :disabled="busy" class="min-h-11 rounded-xl px-4 py-2 text-sm text-slate-500" @click="dialog?.close()">Cancelar</button><button v-if="canWrite" type="submit" :disabled="busy" class="min-h-11 rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"><Loader2 v-if="busy" class="mr-1 inline h-4 w-4 animate-spin" />{{ busy ? 'Guardando…' : 'Guardar tarea' }}</button></div></footer>
            </form>
        </dialog>
    </div>
</template>

<style>
.kanban-ghost, .kanban-drag { pointer-events: none; }
.kanban-ghost { opacity: .3; outline: 2px dashed #38bdf8; }
.kanban-drag { box-shadow: 0 12px 30px rgb(0 0 0 / .18); }
</style>
