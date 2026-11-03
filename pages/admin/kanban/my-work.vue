<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ArrowUpRight, ChevronLeft, ChevronRight, RefreshCw, Search, ListChecks } from 'lucide-vue-next'
import { useApi } from '~/composables/useApi'
import { issueDate, issueOverdue } from '~/utils/kanban'
import { filterWork, type WorkIssue, type WorkView } from '~/utils/myWork'

definePageMeta({ layout: 'admin' })
useHead({ title: 'Mi trabajo · SysifosWeb' })
const api = useApi()
const route = useRoute()
const router = useRouter()
const loading = ref(true)
const refreshing = ref(false)
const error = ref('')
const data = ref<Partial<Record<WorkView, WorkIssue[]>> | null>(null)
const definitions = [
    { key: 'overdue', title: 'Vencidas', empty: 'No tienes tareas vencidas.', description: 'Tareas asignadas a ti cuya fecha de entrega ya pasó.' },
    { key: 'assigned', title: 'Asignadas a mí', empty: 'No tienes tareas asignadas pendientes.', description: 'Tu trabajo pendiente, ordenado para decidir qué atender primero.' },
    { key: 'upcoming', title: 'Próximos 7 días', empty: 'No tienes entregas previstas para los próximos 7 días.', description: 'Tareas asignadas a ti con vencimiento durante los próximos 7 días.' },
    { key: 'recently_modified', title: 'Actividad reciente', empty: 'Todavía no hay tareas modificadas recientemente.', description: 'Últimas tareas modificadas en los proyectos a los que tienes acceso.' },
    { key: 'created_by_me', title: 'Creadas por mí', empty: 'Todavía no has creado tareas.', description: 'Tareas que creaste, incluidas las que ya se completaron.' },
] satisfies { key: WorkView; title: string; empty: string; description: string }[]
const query = (key: string) => typeof route.query[key] === 'string' ? String(route.query[key]) : ''
const defaultView = computed<WorkView>(() => data.value?.overdue?.length ? 'overdue' : data.value?.assigned?.length ? 'assigned' : definitions.find(view => data.value?.[view.key]?.length)?.key || 'assigned')
const selected = computed(() => definitions.find(view => view.key === query('view')) || definitions.find(view => view.key === defaultView.value)!)
const search = ref(query('q'))
watch(() => query('q'), value => { search.value = value })
let searchTimer: ReturnType<typeof setTimeout> | undefined
watch(search, value => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(() => { if (value !== query('q')) void setQuery({ q: value, page: '' }) }, 200)
})
onBeforeUnmount(() => clearTimeout(searchTimer))
async function setQuery(values: Record<string, string>) {
    const next = { ...route.query }
    for (const [key, value] of Object.entries(values)) { if (value) next[key] = value; else delete next[key] }
    await router.replace({ query: next })
}
const items = computed(() => data.value?.[selected.value.key] || [])
const projects = computed(() => [...new Map(items.value.map(issue => [issue.kanban_project_id, issue.project?.name || issue.project?.project_key || 'Proyecto'])).entries()])
const statuses = computed(() => [...new Map(items.value.map(issue => [issue.status, statusLabel(issue)])).entries()])
const filtered = computed(() => filterWork(items.value, { search: search.value, project: query('project'), status: query('status'), sort: query('sort') || (selected.value.key === 'recently_modified' ? 'updated' : 'attention') }))
const pageSize = 8
const pageCount = computed(() => Math.max(1, Math.ceil(filtered.value.length / pageSize)))
const page = computed(() => Math.min(pageCount.value, Math.max(1, Number.parseInt(query('page'), 10) || 1)))
const visible = computed(() => filtered.value.slice((page.value - 1) * pageSize, page.value * pageSize))
const hasFilters = computed(() => Boolean(search.value || query('project') || query('status')))
function statusLabel(issue: WorkIssue) {
    return issue.status_label || issue.status_name || ({ backlog: 'Backlog', todo: 'Por hacer', in_progress: 'En curso', review: 'En revisión', done: 'Hecho' } as Record<string, string>)[issue.status] || issue.status
}
async function refresh() {
    if (refreshing.value) return
    refreshing.value = true
    error.value = ''
    try {
        const response = await api.request<{ data: Partial<Record<WorkView, WorkIssue[]>> }>('kanban/my-work')
        data.value = response?.data || {}
    } catch {
        error.value = 'No se pudo actualizar tu trabajo. Inténtalo nuevamente.'
    } finally { loading.value = false; refreshing.value = false }
}
onMounted(refresh)
</script>

<template>
    <div class="work-inbox text-admin-ink">
        <header class="flex flex-wrap items-start justify-between gap-4">
            <div class="min-w-0 flex-1"><h2 class="font-display text-2xl font-semibold tracking-tight">Mi trabajo</h2><p class="mt-1 text-sm text-admin-muted">Lo que necesita tu atención, en un solo lugar.</p></div>
            <button class="inline-flex min-h-11 items-center gap-2 rounded-lg border border-admin-line px-3 text-sm font-medium hover:bg-admin-soft disabled:opacity-50" :disabled="refreshing" @click="refresh"><RefreshCw :size="16" :class="{ 'animate-spin': refreshing }" aria-hidden="true" /> {{ refreshing ? 'Actualizando…' : 'Actualizar' }}</button>
        </header>
        <p v-if="error" role="alert" class="mt-5 rounded-lg border border-rose-300 bg-rose-50 p-3 text-sm text-rose-900 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-200">{{ error }} <span v-if="data">Se conserva la última información cargada.</span></p>
        <div v-if="loading" class="mt-6 space-y-3" role="status" aria-label="Cargando tu trabajo"><div v-for="i in 3" :key="i" class="h-12 animate-pulse rounded-lg bg-admin-elevated" /></div>
        <template v-else-if="data">
            <nav class="mt-6 flex gap-1 overflow-x-auto border-b border-admin-line pb-3" aria-label="Filtrar mi trabajo">
                <button v-for="view in definitions" :key="view.key" :aria-pressed="selected.key === view.key" class="inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 text-sm transition-colors hover:bg-admin-soft" :class="selected.key === view.key ? 'bg-admin-elevated font-semibold text-admin-ink' : 'text-admin-muted'" @click="setQuery({ view: view.key, project: '', status: '', page: '' })">{{ view.title }} <span class="text-xs tabular-nums" :class="view.key === 'overdue' && data.overdue?.length ? 'text-rose-700 dark:text-rose-300' : 'text-admin-muted'">{{ data[view.key]?.length || 0 }}</span></button>
            </nav>
            <section class="mt-5" :aria-label="selected.title">
                <div class="mb-4 flex flex-wrap items-center justify-between gap-3"><p class="text-sm text-admin-muted">{{ selected.description }}</p><span class="text-xs text-admin-muted">{{ selected.key === 'recently_modified' ? 'Hasta 20 tareas recientes' : 'Hasta 50 tareas por vista' }}</span></div>
                <div v-if="items.length" class="work-filters mb-4">
                    <label class="relative block min-w-0"><span class="sr-only">Buscar en esta vista</span><Search :size="16" class="pointer-events-none absolute left-3 top-3.5 text-admin-muted" aria-hidden="true" /><input v-model="search" type="search" name="work-search" placeholder="Buscar por tarea, clave o proyecto…" class="!pl-9" /></label>
                    <label><span class="sr-only">Proyecto</span><select :value="query('project')" @change="setQuery({ project: ($event.target as HTMLSelectElement).value, page: '' })"><option value="">Todos los proyectos</option><option v-for="[id, name] in projects" :key="id" :value="id">{{ name }}</option></select></label>
                    <label><span class="sr-only">Estado</span><select :value="query('status')" @change="setQuery({ status: ($event.target as HTMLSelectElement).value, page: '' })"><option value="">Todos los estados</option><option v-for="[id, name] in statuses" :key="id" :value="id">{{ name }}</option></select></label>
                    <label><span class="sr-only">Ordenar tareas</span><select :value="query('sort') || (selected.key === 'recently_modified' ? 'updated' : 'attention')" @change="setQuery({ sort: ($event.target as HTMLSelectElement).value, page: '' })"><option value="attention">Vencimiento y prioridad</option><option value="updated">Modificación reciente</option><option value="due">Fecha de entrega</option></select></label>
                </div>
                <div v-if="!items.length || !filtered.length" class="flex flex-wrap items-center gap-3 rounded-xl bg-admin-soft px-5 py-6">
                    <ListChecks :size="22" class="shrink-0 text-admin-muted" aria-hidden="true" /><div class="min-w-0 flex-1"><h3 class="text-sm font-semibold">{{ hasFilters ? 'No hay coincidencias' : selected.empty }}</h3><p class="mt-1 text-sm text-admin-muted">{{ hasFilters ? 'Prueba con otra búsqueda o quita los filtros.' : 'Puedes consultar otra vista o abrir tus proyectos.' }}</p></div>
                    <button v-if="hasFilters" class="min-h-11 text-sm font-semibold text-admin-accent" @click="search = ''; setQuery({ q: '', project: '', status: '', page: '' })">Limpiar filtros</button><NuxtLink v-else to="/admin/kanban" class="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-admin-accent">Ver proyectos <ArrowUpRight :size="16" aria-hidden="true" /></NuxtLink>
                </div>
                <ul v-else class="overflow-hidden rounded-xl border border-admin-line bg-admin-surface" aria-label="Tareas de la vista seleccionada">
                    <li v-for="issue in visible" :key="issue.id" class="border-b border-admin-line last:border-0"><NuxtLink :to="{ path: `/admin/kanban/${issue.kanban_project_id}`, query: { issue: String(issue.id) } }" class="work-row group px-4 py-3 hover:bg-admin-soft">
                        <div class="min-w-0"><div class="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-admin-muted"><span class="font-mono">{{ issue.issue_key }}</span><span>{{ issue.project?.name || issue.project?.project_key || 'Proyecto' }}</span></div><span class="block truncate text-sm font-semibold group-hover:text-admin-accent">{{ issue.title }}</span></div>
                        <span class="text-xs text-admin-muted">{{ statusLabel(issue) }}</span><span class="text-xs" :class="issueOverdue(issue) ? 'font-semibold text-rose-700 dark:text-rose-300' : 'text-admin-muted'">{{ issue.due_date ? (issueOverdue(issue) ? 'Venció ' : 'Entrega ') + issueDate(issue.due_date) : 'Sin fecha' }}</span><ArrowUpRight :size="16" class="work-arrow text-admin-muted" aria-hidden="true" />
                    </NuxtLink></li>
                </ul>
                <div v-if="filtered.length" class="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-admin-muted" role="status" aria-live="polite"><span>{{ (page - 1) * pageSize + 1 }}–{{ Math.min(page * pageSize, filtered.length) }} de {{ filtered.length }} tareas en esta vista</span><div v-if="pageCount > 1" class="flex items-center gap-2"><button aria-label="Página anterior" class="grid min-h-11 min-w-11 place-items-center rounded-lg border border-admin-line hover:bg-admin-soft disabled:opacity-40" :disabled="page === 1" @click="setQuery({ page: String(page - 1) })"><ChevronLeft :size="16" aria-hidden="true" /></button><span>{{ page }} / {{ pageCount }}</span><button aria-label="Página siguiente" class="grid min-h-11 min-w-11 place-items-center rounded-lg border border-admin-line hover:bg-admin-soft disabled:opacity-40" :disabled="page === pageCount" @click="setQuery({ page: String(page + 1) })"><ChevronRight :size="16" aria-hidden="true" /></button></div></div>
            </section>
        </template>
    </div>
</template>

<style scoped>
.work-inbox { max-width:1200px; margin-inline:auto; }
.work-filters { display:grid; grid-template-columns:minmax(200px,1.6fr) repeat(3,minmax(130px,1fr)); gap:10px; }
.work-row { display:grid; grid-template-columns:minmax(0,1fr) 110px 150px 16px; gap:16px; align-items:center; min-height:64px; }
@media(max-width:900px) { .work-filters { grid-template-columns:repeat(2,minmax(0,1fr)); } }
@media(max-width:639px) { .work-filters { grid-template-columns:repeat(2,minmax(0,1fr)); } .work-filters>label:first-child,.work-filters>label:last-child { grid-column:1/-1; } .work-row { grid-template-columns:minmax(0,1fr) auto; gap:8px; } .work-row>div { grid-column:1/-1; } .work-arrow { display:none; } }
</style>
