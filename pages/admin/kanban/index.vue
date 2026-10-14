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

type Project = { id: number; name: string; description: string | null; cards_count: number }
const projects = ref<Project[]>([])
const loading = ref(true)
const busy = ref(false)
const connected = ref(false)
const retryable = ref(true)
const notice = ref('')
const projectError = ref('')
const projectDialog = ref<HTMLDialogElement>()
const dialogOpen = ref(false)
const form = reactive({ name: '', description: '' })
const token = useCookie('auth_token')
const config = useRuntimeConfig()
const base = `${config.public.apiUrl}kanban`
const headers = () => ({ Authorization: `Bearer ${token.value}`, Accept: 'application/json' })
let fetching = false
let refreshQueued = false
let disposed = false
let timer: ReturnType<typeof setInterval> | undefined

async function fetchProjects(force = false) {
    if (disposed) return
    if (fetching) { refreshQueued ||= force; return }
    if (!force && (busy.value || dialogOpen.value)) return
    fetching = true
    try {
        const response = await $fetch<{ data: Project[] }>(`${base}/projects`, { headers: headers() })
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
        retryable.value = ![403, 404].includes(status)
        if ([401, 419].includes(status)) {
            token.value = null
            await navigateTo('/admin/login')
        } else if (status === 403) {
            notice.value = 'Tu cuenta no tiene acceso a los proyectos Kanban. Se requiere un usuario activo administrador o editor.'
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
        if (!disposed) loading.value = false
        if (refreshQueued) { refreshQueued = false; await fetchProjects(true) }
    }
}

function openProject() {
    if (loading.value || busy.value || !connected.value) return
    Object.assign(form, { name: '', description: '' })
    projectError.value = ''
    dialogOpen.value = true
    projectDialog.value?.showModal()
}

async function createProject() {
    if (busy.value) return
    busy.value = true
    projectError.value = ''
    try {
        const response = await $fetch<{ data: Project }>(`${base}/projects`, {
            method: 'POST', headers: headers(),
            body: { name: form.name.trim(), description: form.description.trim() || null },
        })
        if (!Number.isSafeInteger(response.data?.id) || response.data.id <= 0) throw new Error('KANBAN_INVALID_RESPONSE')
        projectDialog.value?.close()
        await navigateTo(`/admin/kanban/${response.data.id}`)
    } catch (error: any) {
        if (disposed) return
        const status = error.statusCode || error.status || error.response?.status
        if ([401, 419].includes(status)) {
            token.value = null
            await navigateTo('/admin/login')
        } else {
            const errors = error.data?.errors
            projectError.value = errors ? Object.values(errors).flat().join(' ') : 'No se pudo crear el proyecto. Inténtalo nuevamente.'
        }
    } finally {
        busy.value = false
        if (!disposed) await fetchProjects(true)
    }
}

onMounted(() => {
    fetchProjects()
    timer = setInterval(() => { if (retryable.value && document.visibilityState === 'visible') fetchProjects() }, 5000)
})
onBeforeUnmount(() => { clearInterval(timer); disposed = true })
</script>

<template>
    <div class="space-y-6">
        <header class="flex flex-wrap items-start justify-between gap-4">
            <div>
                <h2 class="flex items-center gap-2 font-display text-2xl font-bold text-slate-900 dark:text-white"><FolderOpen class="h-6 w-6 text-sky-500" /> Proyectos Kanban</h2>
                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Elige un proyecto para abrir su tablero o crea uno nuevo para comenzar.</p>
            </div>
            <div class="flex items-center gap-2">
                <button aria-label="Actualizar proyectos" :disabled="loading || busy" class="rounded-xl bg-white p-2.5 text-slate-500 ring-1 ring-slate-200 hover:text-sky-600 disabled:opacity-50 dark:bg-slate-900 dark:text-slate-400 dark:ring-slate-800" @click="fetchProjects(true)"><RefreshCw class="h-4 w-4" /></button>
                <button v-if="projects.length" :disabled="loading || busy || !connected" class="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 disabled:opacity-50" @click="openProject"><Plus class="h-4 w-4" /> Crear proyecto Kanban</button>
            </div>
        </header>

        <div v-if="notice" role="alert" class="rounded-xl border border-amber-300/50 bg-amber-50 p-4 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">
            <p>{{ notice }}</p>
            <button v-if="retryable" :disabled="loading || busy" class="mt-2 font-semibold underline underline-offset-2" @click="fetchProjects(true)">Reintentar conexión</button>
        </div>

        <div v-if="loading" role="status" class="flex h-64 flex-col items-center justify-center gap-3"><Loader2 class="h-8 w-8 animate-spin text-sky-500" /><p class="text-sm text-slate-500 dark:text-slate-400">Cargando proyectos…</p></div>

        <section v-else-if="connected && !projects.length" aria-labelledby="empty-projects-heading" class="flex flex-col items-center rounded-2xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
            <div class="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 dark:bg-sky-500/10"><FolderPlus class="h-8 w-8" /></div>
            <h3 id="empty-projects-heading" class="text-lg font-bold text-slate-900 dark:text-white">Todavía no hay proyectos Kanban</h3>
            <p class="mt-2 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">Crea tu primer proyecto para organizar sus tareas en un tablero y trabajar junto al equipo.</p>
            <button :disabled="busy" class="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 disabled:opacity-50" @click="openProject"><Plus class="h-4 w-4" /> Crear proyecto Kanban</button>
        </section>

        <section v-else-if="projects.length" aria-label="Proyectos Kanban" class="space-y-4">
            <p class="text-xs font-medium text-slate-500 dark:text-slate-400">{{ projects.length }} {{ projects.length === 1 ? 'proyecto' : 'proyectos' }} · Un tablero para cada objetivo del equipo.</p>
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                <NuxtLink v-for="project in projects" :key="project.id" :to="`/admin/kanban/${project.id}`" :aria-label="`Abrir tablero de ${project.name}`" :data-project="project.id" class="group flex min-w-0 flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:ring-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 dark:bg-slate-900 dark:ring-slate-800 dark:hover:ring-sky-700">
                    <div class="mb-4 flex items-start justify-between gap-3">
                        <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-500 dark:bg-sky-500/10"><FolderOpen class="h-5 w-5" /></div>
                        <span class="rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">Proyecto #{{ project.id }}</span>
                    </div>
                    <h3 class="break-words font-display text-lg font-semibold text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">{{ project.name }}</h3>
                    <p class="mb-5 mt-2 line-clamp-3 whitespace-pre-line break-words text-sm leading-relaxed text-slate-500 dark:text-slate-400">{{ project.description || 'Organiza y sigue las tareas de este proyecto.' }}</p>
                    <div class="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                        <span class="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400"><SquareKanban class="h-4 w-4" />{{ project.cards_count }} {{ project.cards_count === 1 ? 'tarea' : 'tareas' }}</span>
                        <span class="flex items-center gap-1.5 text-sm font-semibold text-sky-600 dark:text-sky-400">Abrir tablero<ArrowUpRight class="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                    </div>
                </NuxtLink>
            </div>
        </section>

        <dialog ref="projectDialog" aria-labelledby="project-heading" class="admin-scope m-auto max-h-[90vh] w-[min(520px,calc(100vw-32px))] overflow-y-auto rounded-2xl bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-slate-950/60 dark:bg-slate-900 dark:text-slate-100" @close="dialogOpen = false" @cancel="busy && $event.preventDefault()">
            <form class="space-y-5 p-6" @submit.prevent="createProject">
                <header class="flex items-center justify-between gap-3"><h3 id="project-heading" class="text-lg font-bold">Crear proyecto Kanban</h3><button type="button" aria-label="Cerrar creación de proyecto" :disabled="busy" class="p-2 text-slate-400" @click="projectDialog?.close()"><X class="h-5 w-5" /></button></header>
                <p class="text-sm text-slate-500 dark:text-slate-400">Cada proyecto tendrá su propio tablero, tareas e historial de actividad. Los administradores y editores podrán trabajar juntos en él.</p>
                <p v-if="projectError" role="alert" class="rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">{{ projectError }}</p>
                <label class="block text-sm font-medium">Nombre del proyecto<input v-model="form.name" type="text" required minlength="2" maxlength="120" placeholder="Por ejemplo, Sitio web de un cliente" class="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" /></label>
                <label class="block text-sm font-medium">Descripción del proyecto<textarea v-model="form.description" rows="3" maxlength="2000" placeholder="Objetivo, contexto o alcance del proyecto…" class="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" /></label>
                <footer class="flex justify-end gap-2 border-t border-slate-200 pt-4 dark:border-slate-800"><button type="button" :disabled="busy" class="rounded-xl px-4 py-2 text-sm text-slate-500" @click="projectDialog?.close()">Cancelar</button><button type="submit" :disabled="busy" class="rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"><Loader2 v-if="busy" class="mr-1 inline h-4 w-4 animate-spin" />{{ busy ? 'Creando…' : 'Crear proyecto' }}</button></footer>
            </form>
        </dialog>
    </div>
</template>
