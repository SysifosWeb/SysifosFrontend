<script setup lang="ts">
import draggable from 'vuedraggable'
import { Plus, Search, X, GripVertical, Calendar, Activity, RefreshCw, Trash2, Loader2, SquareKanban } from 'lucide-vue-next'

definePageMeta({ layout: 'admin' })
useHead({ title: 'Kanban · SysifosWeb', meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

type Member = { id: number; name: string }
type Card = { id: number; title: string; description: string | null; status: string; priority: string; due_date: string | null; version: number; assignees: Member[]; editor?: Member; position: number }
type Log = { id: number; user?: Member; action: string; card_title: string; to_status: string | null; created_at: string }
type Board = { cards: Card[]; users: Member[]; online_users: Member[]; activities: Log[]; board_version: number }
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
const loading = ref(true)
const busy = ref(false)
const dragging = ref(false)
const connected = ref(false)
const retryable = ref(true)
const showActivity = ref(false)
const notice = ref('')
const query = ref('')
const assigneeFilter = ref('')
const priorityFilter = ref('')
const filtered = computed(() => Boolean(query.value || assigneeFilter.value || priorityFilter.value))
const token = useCookie('auth_token')
const config = useRuntimeConfig()
const base = `${config.public.apiUrl}kanban`
const headers = () => ({ Authorization: `Bearer ${token.value}`, Accept: 'application/json' })
const dialog = ref<HTMLDialogElement>()
const editing = ref<Card | null>(null)
const modalError = ref('')
const confirmingDelete = ref(false)
const form = reactive({ title: '', description: '', status: 'todo', priority: 'medium', due_date: '', assignee_ids: [] as number[] })
let revision = -1
let fetching = false
let refreshQueued = false
let epoch = 0
let timer: ReturnType<typeof setInterval> | undefined

function matches(card: Card) {
    return (!query.value || `${card.title} ${card.description || ''}`.toLocaleLowerCase().includes(query.value.toLocaleLowerCase()))
        && (!assigneeFilter.value || card.assignees.some(u => u.id === Number(assigneeFilter.value)))
        && (!priorityFilter.value || card.priority === priorityFilter.value)
}
const visibleCount = computed(() => Object.values(lists).flat().filter(matches).length)
const initials = (name: string) => name.split(' ').filter(Boolean).slice(0, 2).map(s => s[0]).join('').toUpperCase()
const columnLabel = (id: string | null) => columns.find(c => c.id === id)?.label || id
const dateLabel = (date: string) => new Date(`${date.slice(0, 10)}T12:00:00`).toLocaleDateString('es-CL', { day: 'numeric', month: 'short' })
const overdue = (card: Card) => card.status !== 'done' && !!card.due_date && card.due_date.slice(0, 10) < new Date().toLocaleDateString('en-CA')

async function fetchBoard(force = false) {
    if (fetching) { refreshQueued ||= force; return }
    if (!force && (dragging.value || busy.value)) return
    fetching = true
    const started = epoch
    try {
        const response = await $fetch<{ data: Board }>(`${base}/board`, { headers: headers() })
        if (started !== epoch || dragging.value) return
        const board = response.data
        if (!board || !Array.isArray(board.cards) || !Array.isArray(board.users)
            || !Array.isArray(board.online_users) || !Array.isArray(board.activities)
            || typeof board.board_version !== 'number') {
            throw new Error('KANBAN_INVALID_RESPONSE')
        }
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
        connected.value = false
        const status = error.statusCode || error.status || error.response?.status
        retryable.value = ![403, 404].includes(status)
        if ([401, 419].includes(status)) {
            token.value = null
            await navigateTo('/admin/login')
        } else if (status === 404) {
            notice.value = 'La API configurada no tiene las rutas del Kanban (HTTP 404). En desarrollo, conecta el frontend al backend local; en producción, despliega el backend actualizado y ejecuta sus migraciones.'
        } else if (status === 403) {
            notice.value = 'Tu cuenta no tiene acceso al tablero. Se requiere un usuario activo administrador o editor.'
        } else if (status >= 500) {
            notice.value = `El servidor del Kanban devolvió un error (HTTP ${status}). Comprueba las migraciones y los registros del backend.`
        } else if (error.message === 'KANBAN_INVALID_RESPONSE') {
            retryable.value = false
            notice.value = 'La API respondió con un formato inesperado. Comprueba que el proxy apunta al backend del proyecto.'
        } else {
            notice.value = 'No se pudo contactar con el servidor del Kanban. Comprueba que el backend está activo y reintenta la conexión.'
        }
    } finally {
        fetching = false
        loading.value = false
        if (refreshQueued) { refreshQueued = false; fetchBoard(true) }
    }
}

function errorMessage(error: any) {
    if ((error.statusCode || error.status) === 409) return 'Otra persona cambió la tarjeta o su columna. Se actualizó el tablero; cierra el editor y vuelve a abrir la tarjeta para revisar sus cambios.'
    const errors = error.data?.errors
    return errors ? Object.values(errors).flat().join(' ') : 'No se pudo guardar el cambio. Inténtalo nuevamente.'
}

async function dropped(status: string, event: any) {
    const change = event.added || event.moved
    if (!change) return
    const card = change.element as Card
    const index = lists[status].findIndex(c => c.id === card.id)
    const before = lists[status][index + 1]?.id ?? null
    busy.value = true
    epoch++
    revision = -1
    let failure = ''
    try {
        await $fetch(`${base}/cards/${card.id}/move`, {
            method: 'PUT', headers: headers(),
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

async function moveTo(card: Card, status: string) {
    if (busy.value || status === card.status) return
    busy.value = true
    epoch++
    revision = -1
    let failure = ''
    try {
        await $fetch(`${base}/cards/${card.id}/move`, { method: 'PUT', headers: headers(), body: { status, before_id: null, expected_version: card.version } })
    } catch (error) { failure = errorMessage(error) }
    finally {
        busy.value = false
        await fetchBoard(true)
        if (failure) notice.value = failure
    }
}

function openCard(card: Card | null = null, status = 'todo') {
    if (busy.value || dragging.value) return
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
    if (busy.value) return
    busy.value = true
    epoch++
    try {
        const body: Record<string, any> = { title: form.title.trim(), description: form.description, priority: form.priority, due_date: form.due_date || null, assignee_ids: form.assignee_ids }
        if (editing.value) body.expected_version = editing.value.version
        else body.status = form.status
        await $fetch(editing.value ? `${base}/cards/${editing.value.id}` : `${base}/cards`, {
            method: editing.value ? 'PUT' : 'POST', headers: headers(), body,
        })
        dialog.value?.close()
    } catch (error) { modalError.value = errorMessage(error) }
    finally { busy.value = false; await fetchBoard(true) }
}

async function deleteCard() {
    if (!editing.value || busy.value) return
    busy.value = true
    epoch++
    try {
        await $fetch(`${base}/cards/${editing.value.id}`, { method: 'DELETE', headers: headers(), body: { expected_version: editing.value.version } })
        dialog.value?.close()
    } catch (error) { modalError.value = errorMessage(error) }
    finally { busy.value = false; await fetchBoard(true) }
}

onMounted(() => {
    fetchBoard()
    timer = setInterval(() => { if (retryable.value && document.visibilityState === 'visible') fetchBoard() }, 5000)
})
onBeforeUnmount(() => { clearInterval(timer); epoch++ })
</script>

<template>
    <div class="space-y-5">
        <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
                <h2 class="flex items-center gap-2 font-display text-2xl font-bold text-slate-900 dark:text-white"><SquareKanban class="h-6 w-6 text-sky-500" /> Tablero del equipo</h2>
                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Del primer paso a la entrega. Un espacio compartido para avanzar juntos.</p>
            </div>
            <button :disabled="loading || busy || !connected" class="rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 disabled:opacity-50" @click="openCard()"><Plus class="mr-1 inline h-4 w-4" /> Nueva tarea</button>
        </div>

        <div class="flex flex-wrap items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
            <div class="relative min-w-[180px] flex-1"><Search class="absolute left-3 top-3 h-4 w-4 text-slate-400" /><input v-model="query" type="text" aria-label="Buscar tareas" placeholder="Buscar tareas…" class="!pl-9" /></div>
            <select v-model="assigneeFilter" aria-label="Filtrar por responsable" class="!w-auto"><option value="">Todo el equipo</option><option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option></select>
            <select v-model="priorityFilter" aria-label="Filtrar por prioridad" class="!w-auto"><option value="">Todas las prioridades</option><option v-for="(label, id) in priorities" :key="id" :value="id">{{ label }}</option></select>
            <button v-if="filtered" aria-label="Limpiar filtros" class="p-2 text-slate-500" @click="query = ''; assigneeFilter = ''; priorityFilter = ''"><X class="h-4 w-4" /></button>
            <button aria-label="Actualizar tablero" :disabled="busy || dragging" class="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" @click="fetchBoard(true)"><RefreshCw class="h-4 w-4" /></button>
            <button :aria-expanded="showActivity" class="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 ring-1 ring-slate-200 dark:text-slate-300 dark:ring-slate-700" @click="showActivity = !showActivity"><Activity class="mr-1 inline h-4 w-4" /> Actividad</button>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>{{ visibleCount }} tareas <span v-if="filtered">· Quita los filtros para arrastrar y reordenar.</span><span v-else>· Arrastra desde el asa o abre una tarjeta para editarla.</span></span>
            <div class="flex items-center gap-2"><div class="flex -space-x-1.5"><span v-for="member in online" :key="member.id" :title="`${member.name} está en el tablero`" class="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-[10px] font-bold text-sky-700 ring-2 ring-white dark:bg-sky-900 dark:text-sky-200 dark:ring-slate-950">{{ initials(member.name) }}</span></div><span class="h-2 w-2 rounded-full" :class="connected ? 'bg-emerald-500' : 'bg-amber-500'" /><span>{{ busy ? 'Guardando…' : connected ? 'Sincronización cada 5 s' : 'Sin conexión' }}</span></div>
        </div>
        <p v-if="notice" role="alert" class="rounded-xl border border-amber-300/50 bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">{{ notice }}</p>
        <div v-if="loading" class="flex h-64 items-center justify-center"><Loader2 class="h-8 w-8 animate-spin text-sky-500" /></div>

        <div v-else class="flex gap-4 overflow-x-auto pb-5 scrollbar-thin" aria-label="Columnas Kanban">
            <section v-for="column in columns" :key="column.id" :data-column="column.id" class="w-[280px] min-w-[280px] flex-1 rounded-2xl bg-slate-200/50 p-3 dark:bg-slate-900/70">
                <header class="mb-3 flex items-center gap-2 px-1 py-2"><span class="h-2.5 w-2.5 rounded-full" :style="{ background: column.color }" /><h3 class="text-sm font-semibold text-slate-700 dark:text-slate-200">{{ column.label }}</h3><span class="rounded-md bg-white/70 px-1.5 text-xs text-slate-500 dark:bg-slate-800">{{ lists[column.id].filter(matches).length }}</span><button :aria-label="`Agregar tarea en ${column.label}`" :disabled="busy || !connected" class="ml-auto rounded-lg p-1 text-slate-400 hover:bg-white dark:hover:bg-slate-800" @click="openCard(null, column.id)"><Plus class="h-4 w-4" /></button></header>
                <draggable v-model="lists[column.id]" item-key="id" group="team-board" handle=".drag-handle" :animation="180" :force-fallback="true" :fallback-tolerance="4" :disabled="filtered || busy || !connected" :delay="120" :delay-on-touch-only="true" :touch-start-threshold="5" ghost-class="kanban-ghost" drag-class="kanban-drag" class="min-h-[160px] space-y-3" @start="dragging = true; epoch++" @end="dragging = false" @change="dropped(column.id, $event)">
                    <template #item="{ element: card }">
                        <article v-show="matches(card)" :data-card="card.id" class="rounded-xl bg-white p-3.5 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-800 dark:ring-slate-700/60">
                            <div class="mb-2 flex items-center justify-between gap-2"><span class="rounded-md px-2 py-0.5 text-[10px] font-bold" :class="card.priority === 'urgent' ? 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300' : card.priority === 'high' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300' : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-300'">{{ priorities[card.priority] }}</span><button :aria-label="`Arrastrar ${card.title}`" :disabled="filtered || busy" class="drag-handle cursor-grab touch-none rounded p-1 text-slate-400 active:cursor-grabbing"><GripVertical class="h-4 w-4" /></button></div>
                            <button :disabled="busy || dragging" class="block w-full text-left text-sm font-semibold leading-relaxed text-slate-800 hover:text-sky-600 disabled:cursor-wait dark:text-slate-100 dark:hover:text-sky-400" @click="openCard(card)">{{ card.title }}</button>
                            <p v-if="card.description" class="mt-1.5 line-clamp-2 whitespace-pre-line text-xs leading-relaxed text-slate-500 dark:text-slate-400">{{ card.description }}</p>
                            <div class="mt-4 flex min-h-6 items-center justify-between gap-2"><span v-if="card.due_date" class="flex items-center gap-1 text-[11px]" :class="overdue(card) ? 'font-semibold text-red-500' : 'text-slate-400'"><Calendar class="h-3 w-3" />{{ dateLabel(card.due_date) }}</span><span v-else class="text-[10px] text-slate-400">#{{ card.id }}</span><div class="flex -space-x-1"><span v-for="member in card.assignees" :key="member.id" :title="member.name" class="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-[9px] font-bold text-sky-700 ring-2 ring-white dark:bg-sky-900 dark:text-sky-200 dark:ring-slate-800">{{ initials(member.name) }}</span></div></div>
                            <select :value="card.status" :aria-label="`Mover ${card.title} a otra columna`" :disabled="busy || !connected" class="mt-3 !border-0 !bg-transparent !px-0 !py-1 !text-xs !text-slate-500 !shadow-none" @change="moveTo(card, ($event.target as HTMLSelectElement).value)"><option v-for="destination in columns" :key="destination.id" :value="destination.id">{{ destination.label }}</option></select>
                        </article>
                    </template>
                </draggable>
                <p v-if="!lists[column.id].filter(matches).length" class="py-3 text-center text-xs text-slate-400">{{ filtered ? 'Sin coincidencias' : 'Arrastra una tarea aquí' }}</p>
                <button :disabled="busy || !connected" class="mt-3 w-full rounded-lg py-2 text-left text-xs text-slate-500 hover:bg-white/60 dark:hover:bg-slate-800" @click="openCard(null, column.id)"><Plus class="mr-1 inline h-3.5 w-3.5" /> Agregar tarea</button>
            </section>
        </div>

        <section v-if="showActivity" class="rounded-2xl bg-white p-5 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800"><h3 class="mb-4 font-semibold text-slate-800 dark:text-white">Últimos cambios del equipo</h3><p v-if="!activities.length" class="text-sm text-slate-500">La actividad aparecerá cuando el equipo empiece a trabajar.</p><ul class="space-y-3"><li v-for="log in activities" :key="log.id" class="text-sm text-slate-600 dark:text-slate-400"><strong class="text-slate-800 dark:text-slate-200">{{ log.user?.name || 'Usuario' }}</strong> {{ ({ created: 'creó', updated: 'actualizó', moved: 'movió', deleted: 'eliminó' } as Record<string, string>)[log.action] }} «{{ log.card_title }}»<span v-if="log.action === 'moved'"> a {{ columnLabel(log.to_status) }}</span><time class="ml-2 text-xs text-slate-400">{{ new Date(log.created_at).toLocaleString('es-CL') }}</time></li></ul></section>

        <dialog ref="dialog" aria-labelledby="task-heading" class="admin-scope m-auto max-h-[90vh] w-[min(560px,calc(100vw-32px))] overflow-y-auto rounded-2xl bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-slate-950/60 dark:bg-slate-900 dark:text-slate-100" @cancel="busy && $event.preventDefault()">
            <form class="space-y-5 p-6" @submit.prevent="saveCard">
                <header class="flex items-center justify-between"><h3 id="task-heading" class="text-lg font-bold">{{ editing ? 'Editar tarea' : 'Nueva tarea' }}</h3><button type="button" aria-label="Cerrar editor" :disabled="busy" class="p-2 text-slate-400" @click="dialog?.close()"><X class="h-5 w-5" /></button></header>
                <p v-if="modalError" role="alert" class="rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">{{ modalError }}</p>
                <div v-if="confirmingDelete" class="rounded-xl border border-red-300/40 bg-red-50 p-3 dark:bg-red-500/10"><p class="mb-3 text-sm text-red-700 dark:text-red-300">¿Eliminar esta tarea? Esta acción no se puede deshacer.</p><div class="flex gap-2"><button type="button" :disabled="busy" class="rounded-lg bg-red-500 px-3 py-2 text-sm font-semibold text-white" @click="deleteCard">Sí, eliminar</button><button type="button" :disabled="busy" class="rounded-lg px-3 py-2 text-sm text-slate-500" @click="confirmingDelete = false">Conservar tarea</button></div></div>
                <label class="block text-sm font-medium">Título<input v-model="form.title" type="text" required minlength="2" maxlength="255" placeholder="¿Qué hay que hacer?" class="mt-1.5" /></label>
                <label class="block text-sm font-medium">Descripción<textarea v-model="form.description" rows="4" maxlength="5000" placeholder="Contexto, objetivos y próximos pasos…" class="mt-1.5" /></label>
                <div class="grid grid-cols-2 gap-4"><label class="text-sm font-medium">Prioridad<select v-model="form.priority" class="mt-1.5"><option v-for="(label, id) in priorities" :key="id" :value="id">{{ label }}</option></select></label><label class="text-sm font-medium">Fecha límite<input v-model="form.due_date" type="date" class="mt-1.5" /></label></div>
                <label v-if="!editing" class="block text-sm font-medium">Columna<select v-model="form.status" class="mt-1.5"><option v-for="column in columns" :key="column.id" :value="column.id">{{ column.label }}</option></select></label>
                <fieldset><legend class="mb-2 text-sm font-medium">Responsables</legend><div class="flex max-h-40 flex-wrap gap-2 overflow-y-auto"><label v-for="member in users" :key="member.id" class="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm dark:border-slate-700"><input v-model="form.assignee_ids" type="checkbox" :value="member.id" class="accent-sky-500" />{{ member.name }}</label></div><p class="mt-2 text-xs text-slate-400">Puedes asignar la tarea a varias personas.</p></fieldset>
                <footer class="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800"><button v-if="editing" type="button" :disabled="busy" class="rounded-lg p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10" aria-label="Eliminar tarea" @click="confirmingDelete = true"><Trash2 class="h-4 w-4" /></button><span v-else /><div class="flex gap-2"><button type="button" :disabled="busy" class="rounded-xl px-4 py-2 text-sm text-slate-500" @click="dialog?.close()">Cancelar</button><button type="submit" :disabled="busy" class="rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"><Loader2 v-if="busy" class="mr-1 inline h-4 w-4 animate-spin" />{{ busy ? 'Guardando…' : 'Guardar tarea' }}</button></div></footer>
            </form>
        </dialog>
    </div>
</template>

<style>
.kanban-ghost { opacity: .3; outline: 2px dashed #38bdf8; }
.kanban-drag { box-shadow: 0 12px 30px rgb(0 0 0 / .18); }
</style>
