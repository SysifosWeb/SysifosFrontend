<script setup lang="ts">
import { BarChart3, TrendingUp, Clock, Users } from 'lucide-vue-next'

defineOptions({ name: 'AdminKanbanReports' })

const props = defineProps<{ projectId: number }>()

const api = useApi()
const loading = ref(true)
const error = ref('')
const report = ref<any>(null)

async function load() {
    loading.value = true
    error.value = ''
    try {
        const { data } = await api.request<any>('/kanban/reports', { query: { project_id: props.projectId } })
        report.value = data
    } catch (e) {
        error.value = 'No se pudieron cargar los reportes.'
        report.value = null
    } finally {
        loading.value = false
    }
}

onMounted(load)
watch(() => props.projectId, load)

const byStatus = computed(() => report.value?.by_status || report.value?.status || [])
const byPriority = computed(() => report.value?.by_priority || report.value?.priority || [])
const byAssignee = computed(() => report.value?.by_assignee || report.value?.assignee || [])
const series = computed(() => report.value?.created_vs_resolved || report.value?.created_resolved || [])
const avgResolution = computed(() => report.value?.average_resolution_days ?? report.value?.avg_resolution ?? null)

const maxStatus = computed(() => Math.max(1, ...byStatus.value.map((x: any) => x.count || 0)))
const maxPriority = computed(() => Math.max(1, ...byPriority.value.map((x: any) => x.count || 0)))
const maxAssignee = computed(() => Math.max(1, ...byAssignee.value.map((x: any) => x.count || 0)))

const svgPoints = computed(() => {
    if (!series.value.length) return ''
    const width = 400
    const height = 160
    const max = Math.max(1, ...series.value.flatMap((x: any) => [x.created || 0, x.resolved || 0]))
    return series.value.map((x: any, i: number) => {
        const px = (i / Math.max(1, series.value.length - 1)) * width
        const py = height - ((x.created || 0) / max) * height
        return `${px},${py}`
    }).join(' ')
})
const svgResolved = computed(() => {
    if (!series.value.length) return ''
    const width = 400
    const height = 160
    const max = Math.max(1, ...series.value.flatMap((x: any) => [x.created || 0, x.resolved || 0]))
    return series.value.map((x: any, i: number) => {
        const px = (i / Math.max(1, series.value.length - 1)) * width
        const py = height - ((x.resolved || 0) / max) * height
        return `${px},${py}`
    }).join(' ')
})
</script>

<template>
    <div class="space-y-5">
        <div class="flex items-center gap-2 text-sm text-admin-muted dark:text-admin-muted"><BarChart3 class="h-4 w-4" />Reportes y métricas</div>
        <div v-if="loading" class="h-48 animate-pulse rounded-xl bg-admin-elevated dark:bg-admin-elevated" />
        <div v-else-if="error" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300">{{ error }}</div>
        <div v-else-if="!report" class="rounded-xl border border-dashed border-admin-line p-8 text-center text-sm text-admin-muted dark:border-admin-line dark:text-admin-muted">Sin datos.</div>
        <div v-else class="space-y-6">
            <div class="grid gap-4 sm:grid-cols-3">
                <div class="rounded-xl border border-admin-line bg-admin-surface p-4 dark:border-admin-line dark:bg-admin-surface">
                    <p class="text-xs text-admin-muted dark:text-admin-muted">Total issues</p>
                    <p class="text-2xl font-semibold text-admin-ink dark:text-admin-ink">{{ report.total_issues ?? report.total ?? 0 }}</p>
                </div>
                <div class="rounded-xl border border-admin-line bg-admin-surface p-4 dark:border-admin-line dark:bg-admin-surface">
                    <p class="text-xs text-admin-muted dark:text-admin-muted">Resueltos</p>
                    <p class="text-2xl font-semibold text-admin-ink dark:text-admin-ink">{{ report.resolved_count ?? report.done_count ?? 0 }}</p>
                </div>
                <div class="rounded-xl border border-admin-line bg-admin-surface p-4 dark:border-admin-line dark:bg-admin-surface">
                    <p class="text-xs text-admin-muted dark:text-admin-muted">Promedio resolución (días)</p>
                    <p class="text-2xl font-semibold text-admin-ink dark:text-admin-ink">{{ avgResolution ?? '—' }}</p>
                </div>
            </div>

            <section class="rounded-xl border border-admin-line bg-admin-surface p-4 dark:border-admin-line dark:bg-admin-surface">
                <h3 class="mb-3 text-sm font-semibold text-admin-ink dark:text-admin-ink">Issues por estado</h3>
                <div class="space-y-2">
                    <div v-for="row in byStatus" :key="row.status" class="flex items-center gap-3">
                        <span class="w-24 text-xs text-admin-muted dark:text-admin-muted">{{ row.status }}</span>
                        <div class="h-3 flex-1 rounded bg-admin-elevated dark:bg-admin-elevated"><div class="h-3 rounded bg-admin-action" :style="{ width: ((row.count / maxStatus) * 100) + '%' }" /></div>
                        <span class="w-8 text-right text-xs text-admin-muted">{{ row.count }}</span>
                    </div>
                </div>
            </section>

            <section class="rounded-xl border border-admin-line bg-admin-surface p-4 dark:border-admin-line dark:bg-admin-surface">
                <h3 class="mb-3 text-sm font-semibold text-admin-ink dark:text-admin-ink">Issues por prioridad</h3>
                <div class="space-y-2">
                    <div v-for="row in byPriority" :key="row.priority" class="flex items-center gap-3">
                        <span class="w-24 text-xs text-admin-muted dark:text-admin-muted">{{ row.priority }}</span>
                        <div class="h-3 flex-1 rounded bg-admin-elevated dark:bg-admin-elevated"><div class="h-3 rounded bg-indigo-500" :style="{ width: ((row.count / maxPriority) * 100) + '%' }" /></div>
                        <span class="w-8 text-right text-xs text-admin-muted">{{ row.count }}</span>
                    </div>
                </div>
            </section>

            <section class="rounded-xl border border-admin-line bg-admin-surface p-4 dark:border-admin-line dark:bg-admin-surface">
                <h3 class="mb-3 text-sm font-semibold text-admin-ink dark:text-admin-ink">Issues por responsable</h3>
                <div class="space-y-2">
                    <div v-for="row in byAssignee" :key="row.name" class="flex items-center gap-3">
                        <span class="w-32 truncate text-xs text-admin-muted dark:text-admin-muted">{{ row.name }}</span>
                        <div class="h-3 flex-1 rounded bg-admin-elevated dark:bg-admin-elevated"><div class="h-3 rounded bg-emerald-500" :style="{ width: ((row.count / maxAssignee) * 100) + '%' }" /></div>
                        <span class="w-8 text-right text-xs text-admin-muted">{{ row.count }}</span>
                    </div>
                </div>
            </section>

            <section class="rounded-xl border border-admin-line bg-admin-surface p-4 dark:border-admin-line dark:bg-admin-surface">
                <h3 class="mb-3 text-sm font-semibold text-admin-ink dark:text-admin-ink">Creados vs resueltos</h3>
                <svg viewBox="0 0 400 160" class="h-40 w-full">
                    <polyline :points="svgPoints" fill="none" stroke="#38bdf8" stroke-width="2" />
                    <polyline :points="svgResolved" fill="none" stroke="#34d399" stroke-width="2" />
                </svg>
                <div class="mt-2 flex gap-4 text-xs text-admin-muted dark:text-admin-muted">
                    <span><span class="inline-block h-2 w-2 rounded-full bg-admin-action" /> Creados</span>
                    <span><span class="inline-block h-2 w-2 rounded-full bg-emerald-400" /> Resueltos</span>
                </div>
            </section>
        </div>
    </div>
</template>
