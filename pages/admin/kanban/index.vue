<script setup lang="ts">
import { Plus, X, FolderOpen, FolderPlus, SquareKanban, ArrowUpRight, RefreshCw, Loader2 } from 'lucide-vue-next'

definePageMeta({
    layout: 'admin',
    middleware: to => {
        const id = typeof to.query.project === 'string' ? Number(to.query.project) : NaN
        if (!Number.isSafeInteger(id) || id <= 0) return
        const query = { ...to.query }
        delete query.project
        return navigateTo({ path: `/admin/kanban/${id}`, query }, { replace: true })
    },
})
useHead({ title: 'Proyectos Kanban · SysifosWeb', meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

type Project = { id: number; name: string; description: string | null; cards_count: number; project_key: string; archived_at: string | null; visibility: string; permissions: { manage: boolean; collaborate: boolean; role: string } }
const route = useRoute()
const search = ref(typeof route.query.q === 'string' ? route.query.q : '')
const archived = ref(route.query.archived === '1')
const page = ref(Math.max(1, Number(route.query.page) || 1))
const total = ref(0)
const lastPage = ref(1)
const canCreate = ref(false)
const appliedSearch = ref(search.value)
function applyFilters() { appliedSearch.value = search.value.trim(); page.value = 1; fetchProjects(true) }
watch([archived, page], () => fetchProjects(true))
const projects = ref<Project[]>([])
const loading = ref(true)
const refreshing = ref(false)
const busy = ref(false)
const connected = ref(false)
const retryable = ref(true)
const notice = ref('')
const projectError = ref('')
const projectDialog = ref<HTMLDialogElement>()
const dialogOpen = ref(false)
const form = reactive({ name: '', description: '', project_key: '', visibility: 'private' })
const api = useApi()
let fetching = false
let refreshQueued = false
let disposed = false
let timer: ReturnType<typeof setInterval> | undefined

async function fetchProjects(force = false) {
    if (disposed) return
    if (fetching) { refreshQueued ||= force; return }
    if (!force && (busy.value || dialogOpen.value)) return
    fetching = true
    refreshing.value = true
    const requested = { q: appliedSearch.value, archived: archived.value ? 1 : 0, page: page.value, per_page: 24 }
    const isCurrent = () => requested.q === appliedSearch.value && requested.archived === (archived.value ? 1 : 0) && requested.page === page.value
    try {
        const response = await api.request<{ data: Project[]; meta: { total: number; current_page: number; last_page: number; can_create: boolean } }>('kanban/projects', { query: requested })
        if (disposed || !isCurrent()) return
        total.value = response.meta.total
        lastPage.value = response.meta.last_page
        canCreate.value = response.meta.can_create
        await navigateTo({ query: { q: appliedSearch.value || undefined, archived: archived.value ? '1' : undefined, page: page.value > 1 ? String(page.value) : undefined } }, { replace: true })
        if (disposed) return
        if (!Array.isArray(response.data) || response.data.some(project => !project
            || !Number.isSafeInteger(project.id) || project.id <= 0 || typeof project.name !== 'string'
            || typeof project.cards_count !== 'number')) {
            throw new Error('KANBAN_INVALID_RESPONSE')
        }
        projects.value = response.data
        connected.value = true
        retryable.value = true
        notice.value = ''
    } catch (error: any) {
        if (disposed) return
        connected.value = false
        const status = error.statusCode || error.status || error.response?.status
        if ([401, 403, 404, 419].includes(status)) projects.value = []
        retryable.value = ![403, 404].includes(status)
        if (status === 403) {
            notice.value = 'Tu cuenta no tiene acceso a los proyectos Kanban. Comprueba que tu cuenta está activa y pertenece a un proyecto.'
        } else if (status === 404) {
            notice.value = 'No se encontró la API de proyectos Kanban. Comprueba que el backend está actualizado y que sus migraciones están aplicadas.'
        } else if (error.message === 'KANBAN_INVALID_RESPONSE') {
            retryable.value = false
            notice.value = 'La API respondió con un formato inesperado para los proyectos Kanban. Comprueba la versión del backend.'
        } else {
            notice.value = 'No se pudieron cargar los proyectos Kanban. Comprueba la conexión y vuelve a intentarlo.'
        }
    } finally {
        fetching = false
        refreshing.value = false
        if (!disposed) loading.value = false
        if (refreshQueued) { refreshQueued = false; await fetchProjects(true) }
    }
}

function openProject() {
    if (loading.value || busy.value || !connected.value || !canCreate.value) return
    Object.assign(form, { name: '', description: '', project_key: '', visibility: 'private' })
    projectError.value = ''
    dialogOpen.value = true
    projectDialog.value?.showModal()
}

async function createProject() {
    if (busy.value) return
    busy.value = true
    projectError.value = ''
    try {
        const response = await api.request<{ data: Project }>('kanban/projects', {
            method: 'POST',
            body: { name: form.name.trim(), description: form.description.trim() || null, project_key: form.project_key.trim().toUpperCase(), visibility: form.visibility },
        })
        if (!Number.isSafeInteger(response.data?.id) || response.data.id <= 0) throw new Error('KANBAN_INVALID_RESPONSE')
        projectDialog.value?.close()
        await navigateTo(`/admin/kanban/${response.data.id}`)
    } catch (error: any) {
        if (disposed) return
        projectError.value = apiErrorMessage(error, 'No se pudo crear el proyecto. Inténtalo nuevamente.')
    } finally {
        busy.value = false
        if (!disposed) await fetchProjects(true)
    }
}

onMounted(() => {
    fetchProjects()
    timer = setInterval(() => { if (retryable.value && document.visibilityState === 'visible') fetchProjects() }, 20000)
})
onBeforeUnmount(() => { clearInterval(timer); disposed = true })
</script>

<template>
    <div class="space-y-6">
        <header class="flex flex-wrap items-start justify-between gap-4">
            <div>
                <h2 class="flex items-center gap-2 font-display text-2xl font-bold text-admin-ink dark:text-admin-ink"><FolderOpen class="h-6 w-6 text-admin-accent" /> Proyectos</h2>
                <p class="mt-1 text-sm text-admin-muted dark:text-admin-muted">Elige un proyecto para abrir su tablero o crea uno nuevo para comenzar.</p>
            </div>
            <div class="flex items-center gap-2">
                <button aria-label="Actualizar proyectos" :disabled="loading || busy" class="flex h-11 w-11 items-center justify-center rounded-xl bg-admin-surface text-admin-muted ring-1 ring-admin-line hover:text-admin-accent disabled:opacity-50 dark:bg-admin-surface dark:text-admin-muted dark:ring-admin-line" @click="fetchProjects(true)"><RefreshCw class="h-4 w-4" /></button>
                <button v-if="canCreate" :disabled="loading || busy || !connected" class="inline-flex min-h-11 items-center gap-2 rounded-xl bg-admin-action px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-admin-action disabled:opacity-50" @click="openProject"><Plus class="h-4 w-4" /> Crear proyecto Kanban</button>
            </div>
        </header>

        <form class="flex flex-wrap items-end gap-3" @submit.prevent="applyFilters">
            <label class="min-w-0 flex-1 text-sm font-medium text-admin-ink dark:text-admin-ink">Buscar proyectos<input v-model="search" type="search" maxlength="120" placeholder="Nombre o clave del proyecto" class="mt-1 min-h-11 w-full rounded-xl border border-admin-line bg-admin-surface px-3 text-admin-ink placeholder:text-admin-muted dark:border-admin-line dark:bg-admin-surface dark:text-admin-ink dark:placeholder:text-admin-muted" /></label>
            <button :disabled="refreshing" class="min-h-11 rounded-xl bg-admin-action px-4 text-sm font-semibold text-white">Buscar</button>
            <label class="flex min-h-11 items-center gap-2 text-sm text-admin-ink dark:text-admin-ink"><input v-model="archived" type="checkbox" @change="page = 1" /> Archivados</label>
            <button v-if="appliedSearch" type="button" class="min-h-11 px-3 text-sm underline" @click="search = ''; applyFilters()">Limpiar búsqueda</button>
        </form>
        <p v-if="refreshing && !loading" role="status" class="text-sm text-admin-muted">Actualizando proyectos…</p>
        <div v-if="notice" role="alert" class="rounded-xl border border-amber-300/50 bg-amber-50 p-4 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">
            <p>{{ notice }}</p>
            <button v-if="retryable" :disabled="loading || busy" class="mt-2 font-semibold underline underline-offset-2" @click="fetchProjects(true)">Reintentar conexión</button>
        </div>

        <div v-if="loading" role="status" class="flex h-64 flex-col items-center justify-center gap-3"><Loader2 class="h-8 w-8 animate-spin text-admin-accent" /><p class="text-sm text-admin-muted dark:text-admin-muted">Cargando proyectos…</p></div>

        <section v-else-if="connected && !projects.length" aria-labelledby="empty-projects-heading" class="flex flex-col items-center rounded-2xl bg-admin-surface px-6 py-16 text-center shadow-sm ring-1 ring-admin-line dark:bg-admin-surface dark:ring-admin-line">
            <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-admin-tint text-admin-accent dark:bg-admin-action/10"><FolderPlus class="h-8 w-8" /></div>
            <h3 id="empty-projects-heading" class="text-lg font-bold text-admin-ink dark:text-admin-ink">{{ appliedSearch || archived ? 'No hay proyectos con estos filtros' : 'Todavía no hay proyectos' }}</h3>
            <p class="mt-2 max-w-md text-sm leading-relaxed text-admin-muted dark:text-admin-muted">Los proyectos que puedes consultar aparecerán aquí. Cambia los filtros o crea un proyecto si tienes permiso.</p>
            <button v-if="canCreate && !archived" :disabled="busy" class="mt-6 inline-flex items-center gap-2 rounded-xl bg-admin-action px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-admin-action disabled:opacity-50" @click="openProject"><Plus class="h-4 w-4" /> Crear proyecto Kanban</button>
        </section>

        <section v-else-if="projects.length" aria-label="Proyectos Kanban" class="space-y-4">
            <p class="text-xs font-medium text-admin-muted dark:text-admin-muted">{{ total }} {{ total === 1 ? 'proyecto' : 'proyectos' }} · Solo se muestran proyectos a los que tienes acceso.</p>
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                <NuxtLink v-for="project in projects" :key="project.id" :to="`/admin/kanban/${project.id}`" :aria-label="`Abrir tablero de ${project.name}`" :data-project="project.id" class="group flex min-w-0 flex-col rounded-2xl bg-admin-surface p-5 shadow-sm ring-1 ring-admin-line transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-admin-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-admin-accent dark:bg-admin-surface dark:ring-admin-line dark:hover:ring-admin-accent">
                    <div class="mb-4 flex items-start justify-between gap-3">
                        <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-admin-tint text-admin-accent dark:bg-admin-action/10"><FolderOpen class="h-5 w-5" /></div>
                        <span class="rounded-lg bg-admin-elevated px-2 py-1 text-[11px] font-medium text-admin-muted dark:bg-admin-elevated dark:text-admin-muted">{{ project.project_key }}</span>
                    </div>
                    <p class="mb-2 text-xs text-admin-muted">{{ project.archived_at ? 'Archivado · Solo lectura' : project.visibility === 'private' ? 'Privado · Miembros del proyecto' : 'Equipo · Administradores y editores' }}</p>
                    <h3 class="break-words font-display text-lg font-semibold text-admin-ink transition-colors group-hover:text-admin-accent dark:text-admin-ink dark:group-hover:text-admin-accent">{{ project.name }}</h3>
                    <p class="mb-5 mt-2 line-clamp-3 whitespace-pre-line break-words text-sm leading-relaxed text-admin-muted dark:text-admin-muted">{{ project.description || 'Organiza y sigue las tareas de este proyecto.' }}</p>
                    <div class="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-admin-line pt-4 dark:border-admin-line">
                        <span class="flex items-center gap-1.5 text-xs font-medium text-admin-muted dark:text-admin-muted"><SquareKanban class="h-4 w-4" />{{ project.cards_count }} {{ project.cards_count === 1 ? 'tarea' : 'tareas' }}</span>
                        <span class="flex items-center gap-1.5 text-sm font-semibold text-admin-accent dark:text-admin-accent">Abrir tablero<ArrowUpRight class="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                    </div>
                </NuxtLink>
            </div>
        </section>

        <nav v-if="lastPage > 1" aria-label="Páginas de proyectos" class="flex items-center justify-between gap-3 text-sm">
            <button :disabled="page <= 1 || busy || refreshing" class="min-h-11 rounded-xl border px-4 disabled:opacity-40" @click="page--">Anterior</button><span>Página {{ page }} de {{ lastPage }}</span><button :disabled="page >= lastPage || busy || refreshing" class="min-h-11 rounded-xl border px-4 disabled:opacity-40" @click="page++">Siguiente</button>
        </nav>
        <dialog ref="projectDialog" aria-labelledby="project-heading" class="admin-scope m-auto max-h-[90vh] w-[min(520px,calc(100vw-32px))] overflow-y-auto rounded-2xl bg-admin-surface p-0 text-admin-ink shadow-2xl backdrop:bg-admin-canvas/60 dark:bg-admin-surface dark:text-admin-ink" @close="dialogOpen = false" @cancel="busy && $event.preventDefault()">
            <form class="space-y-5 p-6" @submit.prevent="createProject">
                <header class="flex items-center justify-between gap-3"><h3 id="project-heading" class="text-lg font-bold">Crear proyecto Kanban</h3><button type="button" aria-label="Cerrar creación de proyecto" :disabled="busy" class="flex h-11 w-11 items-center justify-center text-admin-muted" @click="projectDialog?.close()"><X class="h-5 w-5" /></button></header>
                <p class="text-sm text-admin-muted dark:text-admin-muted">Cada proyecto tendrá su propio tablero, tareas e historial de actividad. El acceso depende de los miembros y de la visibilidad que elijas.</p>
                <p v-if="projectError" role="alert" class="rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">{{ projectError }}</p>
                <label class="block text-sm font-medium">Nombre del proyecto<input v-model="form.name" type="text" required minlength="2" maxlength="120" placeholder="Por ejemplo, Sitio web de un cliente" class="mt-1.5 w-full rounded-xl border border-admin-line bg-admin-surface px-3 py-2.5 text-sm text-admin-ink dark:border-admin-line dark:bg-admin-surface dark:text-admin-ink" /></label>
                <label class="block text-sm font-medium">Clave estable<input v-model="form.project_key" type="text" required minlength="2" maxlength="16" pattern="[A-Z][A-Z0-9]{1,15}" placeholder="WEB" class="mt-1.5 min-h-11 uppercase" @input="form.project_key = form.project_key.toUpperCase()" /><span class="mt-1 block text-xs text-admin-muted">De 2 a 16 letras mayúsculas o números. Empieza por una letra. No podrá modificarse.</span></label>
                <label class="block text-sm font-medium">Acceso<select v-model="form.visibility" class="mt-1.5 min-h-11"><option value="private">Privado: solo miembros y administradores globales</option><option value="team">Equipo: también administradores y editores activos</option></select></label>
                <label class="block text-sm font-medium">Descripción del proyecto<textarea v-model="form.description" rows="3" maxlength="2000" placeholder="Objetivo, contexto o alcance del proyecto…" class="mt-1.5 w-full rounded-xl border border-admin-line bg-admin-surface px-3 py-2.5 text-sm text-admin-ink dark:border-admin-line dark:bg-admin-surface dark:text-admin-ink" /></label>
                <footer class="flex justify-end gap-2 border-t border-admin-line pt-4 dark:border-admin-line"><button type="button" :disabled="busy" class="rounded-xl min-h-11 px-4 py-2 text-sm text-admin-muted" @click="projectDialog?.close()">Cancelar</button><button type="submit" :disabled="busy" class="rounded-xl bg-admin-action min-h-11 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"><Loader2 v-if="busy" class="mr-1 inline h-4 w-4 animate-spin" />{{ busy ? 'Creando…' : 'Crear proyecto' }}</button></footer>
            </form>
        </dialog>
    </div>
</template>
