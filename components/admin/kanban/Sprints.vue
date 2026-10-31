<script setup lang="ts">
import { Play, Square, Trash2, Plus, Calendar, Target, BarChart3 } from 'lucide-vue-next'
import type { Sprint, Issue } from '~/types/kanban'
import { burndownSeries } from '~/utils/kanban'

const props = defineProps<{ projectId: number }>()
const emit = defineEmits<{ navigate: [] }>()

const route = useRoute()
const router = useRouter()
const api = useApi()
const board = useKanbanBoard(computed(() => props.projectId), true)
const { project: projectRef, permissions: permissionsRef, lists: listsRef, sprints: sprintsRef, loading: loadingRef, busy: busyRef, connected: connectedRef, retryable: retryableRef, notice: noticeRef, canWrite: canWriteRef, refresh: refreshFn } = board
const allIssues = computed(() => Object.values(listsRef).flat() as Issue[])

const sprintOpen = ref(false)
const sprintSaving = ref(false)
const selectedSprintId = ref<number | null>(null)
const actionBusy = ref(false)

watch(() => sprintsRef.value, (value) => {
    if (!selectedSprintId.value && value?.length) selectedSprintId.value = value[0].id
}, { immediate: true })

const sprintIssues = computed(() => {
    if (!selectedSprintId.value) return []
    return allIssues.value.filter(issue => issue.sprint_id === selectedSprintId.value)
})

const selectedSprint = computed(() => sprintsRef.value?.find((sprint: Sprint) => sprint.id === selectedSprintId.value) || null)

const burndown = computed(() => burndownSeries(selectedSprint.value, sprintIssues.value))

const sprintGroups = computed(() => ([
    { key: 'active', label: 'Sprint activo', items: (sprintsRef.value || []).filter((s: Sprint) => s.status === 'active') },
    { key: 'planned', label: 'Planificados', items: (sprintsRef.value || []).filter((s: Sprint) => s.status === 'planned') },
    { key: 'completed', label: 'Completados', items: (sprintsRef.value || []).filter((s: Sprint) => s.status === 'completed') },
]))

async function startSprint(sprint: Sprint) {
    if (actionBusy.value) return
    actionBusy.value = true
    try {
        await api.request(`kanban/sprints/${sprint.id}/start`, { method: 'POST', query: { project_id: props.projectId } })
        await refreshFn(true)
        selectedSprintId.value = sprint.id
    } catch (error) { alert(apiErrorMessage(error)) } finally { actionBusy.value = false }
}

async function completeSprint(sprint: Sprint) {
    if (actionBusy.value) return
    actionBusy.value = true
    try {
        await api.request(`kanban/sprints/${sprint.id}/complete`, { method: 'POST', query: { project_id: props.projectId } })
        await refreshFn(true)
    } catch (error) { alert(apiErrorMessage(error)) } finally { actionBusy.value = false }
}

async function deleteSprint(sprint: Sprint) {
    if (actionBusy.value) return
    if (!confirm('¿Eliminar este sprint?')) return
    actionBusy.value = true
    try {
        await api.request(`kanban/sprints/${sprint.id}`, { method: 'DELETE', query: { project_id: props.projectId } })
        await refreshFn(true)
        if (selectedSprintId.value === sprint.id) selectedSprintId.value = sprintsRef.value?.[0]?.id || null
    } catch (error) { alert(apiErrorMessage(error)) } finally { actionBusy.value = false }
}

function sprintCreated() {
    sprintOpen.value = false
    sprintSaving.value = false
    void refreshFn(true)
}

function viewActiveSprint() {
    void router.push(`/admin/kanban/${props.projectId}?scope=active`)
}
</script>

<template>
    <div class="space-y-5">
        <header class="flex flex-wrap items-start justify-between gap-4">
            <div>
                <h2 class="flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-white"><BarChart3 class="h-5 w-5 text-sky-500" /> Sprints</h2>
                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Planificación Scrum: crea, inicia y cierra sprints. Asigna issues desde el backlog.</p>
            </div>
            <div class="flex items-center gap-2">
                <button v-if="canWriteRef && permissionsRef?.manage" :disabled="loadingRef || busyRef" class="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-sky-600 px-4 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-50" @click="sprintOpen = true"><Plus class="h-4 w-4" /> Nuevo sprint</button>
                <button v-if="projectRef?.id" class="inline-flex min-h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 dark:text-slate-300 dark:ring-slate-700" @click="void router.push(`/admin/kanban/${props.projectId}/backlog`)">Ir al backlog</button>
            </div>
        </header>

        <div v-if="noticeRef" role="alert" class="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">{{ noticeRef }}</div>

        <div v-if="loadingRef" class="grid grid-cols-1 gap-3 py-3 sm:grid-cols-3"><div v-for="i in 3" :key="i" class="h-40 animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800" /></div>

        <div v-else class="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div class="space-y-4 lg:col-span-1">
                <section v-for="group in sprintGroups" :key="group.key" class="space-y-2">
                    <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500">{{ group.label }}</h3>
                    <div v-if="!group.items.length" class="rounded-xl border border-dashed border-slate-200 p-4 text-xs text-slate-400 dark:border-slate-700">Sin sprints.</div>
                    <button v-for="sprint in group.items" :key="sprint.id" type="button" class="w-full rounded-xl border p-4 text-left transition" :class="selectedSprintId === sprint.id ? 'border-sky-400 bg-sky-50 dark:bg-sky-500/10' : 'border-slate-200 bg-white hover:border-sky-300 dark:border-slate-700 dark:bg-slate-900'" @click="selectedSprintId = sprint.id">
                        <div class="flex items-start justify-between gap-2">
                            <div class="min-w-0">
                                <p class="truncate font-semibold text-slate-900 dark:text-white">{{ sprint.name }}</p>
                                <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{{ sprint.status === 'active' ? 'Activo' : sprint.status === 'completed' ? 'Completado' : 'Planificado' }}</p>
                            </div>
                            <span class="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ sprint.completed_count ?? 0 }}/{{ sprint.cards_count ?? 0 }}</span>
                        </div>
                        <p v-if="sprint.goal" class="mt-2 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">{{ sprint.goal }}</p>
                        <div class="mt-2 flex items-center gap-2 text-[11px] text-slate-400"><Calendar class="h-3.5 w-3.5" />{{ sprint.start_date ? sprint.start_date.slice(0,10) : 'Sin inicio' }} → {{ sprint.end_date ? sprint.end_date.slice(0,10) : 'Sin fin' }}</div>
                        <div class="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div class="h-full bg-sky-500" :style="{ width: (sprint.points ? ((sprint.completed_points || 0) / sprint.points * 100) : 0) + '%' }" /></div>
                    </button>
                </section>
            </div>

            <div class="space-y-4 lg:col-span-2">
                <div v-if="!selectedSprint" class="rounded-2xl border border-dashed border-slate-200 p-10 text-center text-sm text-slate-400 dark:border-slate-700">Selecciona un sprint para ver su detalle.</div>
                <template v-else>
                    <section class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
                        <div class="flex flex-wrap items-start justify-between gap-3">
                            <div>
                                <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{{ selectedSprint.name }}</h3>
                                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">{{ selectedSprint.goal || 'Sin objetivo' }}</p>
                            </div>
                            <div class="flex flex-wrap items-center gap-2">
                                <button v-if="selectedSprint.status === 'planned' && canWriteRef && permissionsRef?.manage" :disabled="actionBusy" class="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-emerald-600 px-3 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-50" @click="startSprint(selectedSprint)"><Play class="h-4 w-4" /> Iniciar</button>
                                <button v-if="selectedSprint.status === 'active' && canWriteRef && permissionsRef?.manage" :disabled="actionBusy" class="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-amber-600 px-3 text-sm font-semibold text-white hover:bg-amber-700 disabled:opacity-50" @click="completeSprint(selectedSprint)"><Square class="h-4 w-4" /> Completar</button>
                                <button v-if="selectedSprint.status === 'active'" class="inline-flex min-h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 dark:text-slate-300 dark:ring-slate-700" @click="viewActiveSprint">Ver tablero del sprint</button>
                                <button v-if="selectedSprint.status !== 'active' && canWriteRef && permissionsRef?.manage" :disabled="actionBusy" class="inline-flex min-h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-rose-600 ring-1 ring-rose-200 hover:bg-rose-50 disabled:opacity-50 dark:ring-rose-800" @click="deleteSprint(selectedSprint)"><Trash2 class="h-4 w-4" /> Eliminar</button>
                            </div>
                        </div>
                        <div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            <div class="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60"><p class="text-[11px] uppercase tracking-wider text-slate-400">Issues</p><p class="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{{ selectedSprint.cards_count ?? 0 }}</p></div>
                            <div class="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60"><p class="text-[11px] uppercase tracking-wider text-slate-400">Completados</p><p class="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{{ selectedSprint.completed_count ?? 0 }}</p></div>
                            <div class="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60"><p class="text-[11px] uppercase tracking-wider text-slate-400">Puntos</p><p class="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{{ selectedSprint.points ?? 0 }}</p></div>
                            <div class="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60"><p class="text-[11px] uppercase tracking-wider text-slate-400">Completados</p><p class="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{{ selectedSprint.completed_points ?? 0 }}</p></div>
                        </div>
                    </section>

                    <section class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
                        <h3 class="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-white"><Target class="h-4 w-4 text-slate-400" /> Burndown</h3>
                        <div v-if="!burndown.length" class="text-sm text-slate-400">Sin fechas definidas o sin issues para calcular el burndown.</div>
                        <svg v-else :viewBox="`0 0 ${Math.max(burndown.length * 40, 200) } 160`" class="w-full" role="img" aria-label="Burndown chart">
                            <polyline :points="burndown.map((p, i) => `${i * 40 + 20},${140 - (p.ideal / Math.max(...burndown.map(x=>x.estimated),1)) * 120}`).join(' ')" fill="none" stroke="#94a3b8" stroke-dasharray="4 4" stroke-width="2" />
                            <polyline :points="burndown.map((p, i) => `${i * 40 + 20},${140 - (p.remaining / Math.max(...burndown.map(x=>x.estimated),1)) * 120}`).join(' ')" fill="none" stroke="#0ea5e9" stroke-width="2.5" />
                            <text v-for="(p, i) in burndown" :key="p.date" :x="i * 40 + 20" y="155" text-anchor="middle" class="fill-slate-400 text-[9px]">{{ p.date.slice(5) }}</text>
                        </svg>
                        <div class="mt-2 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                            <span class="flex items-center gap-1.5"><span class="inline-block h-0.5 w-4 bg-sky-500" /> Restante</span>
                            <span class="flex items-center gap-1.5"><span class="inline-block h-0.5 w-4 border-t-2 border-dashed border-slate-400" /> Ideal</span>
                        </div>
                    </section>

                    <section class="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
                        <h3 class="mb-3 text-sm font-semibold text-slate-800 dark:text-white">Issues del sprint</h3>
                        <ul class="divide-y divide-slate-100 dark:divide-slate-800">
                            <li v-for="issue in sprintIssues" :key="issue.id" class="flex items-center gap-3 py-2 text-sm">
                                <span class="font-mono text-xs text-slate-500">{{ issue.issue_key }}</span>
                                <span class="flex-1 truncate">{{ issue.title }}</span>
                                <span class="text-xs text-slate-500">{{ issue.status }}</span>
                                <span class="text-xs text-slate-400">{{ issue.story_points ?? 0 }} pts</span>
                            </li>
                            <li v-if="!sprintIssues.length" class="py-4 text-sm text-slate-400">No hay issues asignados a este sprint.</li>
                        </ul>
                    </section>
                </template>
            </div>
        </div>

        <AdminKanbanSprintDialog :open="sprintOpen" :project-id="props.projectId" :project-name="projectRef?.name || ''" :can-manage="canWriteRef && permissionsRef?.manage" @close="sprintOpen = false" @created="sprintCreated" @saving="sprintSaving = $event" />
    </div>
</template>