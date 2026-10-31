<script setup lang="ts">
import { CalendarRange, AlertCircle } from 'lucide-vue-next'
import type { Issue } from '~/types/kanban'

defineOptions({ name: 'AdminKanbanTimeline' })

const props = defineProps<{ projectId: number }>()

const api = useApi()
const loading = ref(true)
const error = ref('')
const items = ref<Issue[]>([])

async function load() {
    loading.value = true
    error.value = ''
    try {
        const { data } = await api.request<{ data: Issue[] }>('/kanban/timeline', { query: { project_id: props.projectId } })
        items.value = Array.isArray(data) ? data : []
    } catch (e) {
        error.value = 'No se pudo cargar la línea de tiempo.'
        items.value = []
    } finally {
        loading.value = false
    }
}

onMounted(load)
watch(() => props.projectId, load)

const dateRange = computed(() => {
    const dates = items.value.flatMap((issue) => [issue.start_date, issue.due_date]).filter(Boolean) as string[]
    if (!dates.length) return null
    const values = dates.map((date) => new Date(`${date.slice(0, 10)}T00:00:00`).getTime())
    return { start: Math.min(...values), end: Math.max(...values) }
})

const totalDays = computed(() => {
    if (!dateRange.value) return 1
    return Math.max(1, Math.round((dateRange.value.end - dateRange.value.start) / 86400000) + 1)
})

function dayOffset(date: string | null) {
    if (!date || !dateRange.value) return 0
    return Math.max(0, Math.round((new Date(`${date.slice(0, 10)}T00:00:00`).getTime() - dateRange.value.start) / 86400000))
}

function barStyle(issue: any) {
    const start = issue.start_date || issue.due_date
    const end = issue.due_date || issue.start_date
    if (!start || !end || !dateRange.value) {
        return 'left: 0%; width: 2%;'
    }
    const left = (dayOffset(start) / totalDays.value) * 100
    const startMs = new Date(start.slice(0, 10) + 'T00:00:00').getTime()
    const endMs = new Date(end.slice(0, 10) + 'T00:00:00').getTime()
    const diffDays = Math.round((endMs - startMs) / 86400000)
    const span = diffDays + 1
    const safeSpan = span > 0 ? span : 1
    const width = (safeSpan / totalDays.value) * 100
    return 'left: ' + left + '%; width: ' + Math.max(1.5, width) + '%;'
}

const groups = computed(() => {
    const map = new Map<number | null, { epic: Issue | null; issues: Issue[] }>()
    for (const issue of items.value) {
        const key = issue.epic_id || null
        if (!map.has(key)) map.set(key, { epic: null, issues: [] })
        map.get(key)!.issues.push(issue)
    }
    // attach epic metadata when available in items
    for (const issue of items.value) {
        if (issue.type === 'epic') {
            const group = map.get(issue.id)
            if (group) group.epic = issue
        }
    }
    const result: { epic: Issue | null; issues: Issue[]; key: string }[] = []
    for (const [key, group] of map) {
        const epicItem = key ? items.value.find((issue) => issue.id === key) || group.epic : null
        result.push({ epic: epicItem, issues: group.issues.filter((issue) => issue.type !== 'epic' || issue.id !== key), key: key ? String(key) : 'none' })
    }
    // ensure epics with no children still render
    for (const issue of items.value) {
        if (issue.type === 'epic' && !map.has(issue.id)) {
            result.push({ epic: issue, issues: [], key: String(issue.id) })
        }
    }
    return result.sort((a, b) => (a.epic?.start_date || a.issues[0]?.start_date || '').localeCompare(b.epic?.start_date || b.issues[0]?.start_date || ''))
})

const standalone = computed(() => items.value.filter((issue) => !issue.epic_id))
</script>

<template>
    <div class="space-y-5">
        <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"><CalendarRange class="h-4 w-4" />Línea de tiempo (Gantt) agrupada por épica</div>
        <div v-if="loading" class="h-48 animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800" />
        <div v-else-if="error" class="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300">{{ error }}</div>
        <div v-else-if="!items.length" class="rounded-xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">No hay issues con fechas de inicio o fin para mostrar.</div>
        <div v-else class="space-y-6">
            <div v-for="group in groups" :key="group.key" class="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                <div class="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-white">
                    <span v-if="group.epic" class="text-xs text-slate-500 dark:text-slate-400">{{ group.epic.issue_key }}</span>
                    {{ group.epic?.title || 'Sin épica' }}
                </div>
                <div class="relative h-10 w-full rounded bg-slate-100 dark:bg-slate-800">
                    <div v-if="group.epic && (group.epic.start_date || group.epic.due_date)" class="absolute top-1 h-8 rounded bg-sky-500/80 text-xs text-white flex items-center px-2" :style="barStyle(group.epic)">{{ group.epic.issue_key }}</div>
                </div>
                <div v-for="issue in group.issues" :key="issue.id" class="relative mt-2 h-8 w-full rounded bg-slate-50 dark:bg-slate-800/50">
                    <div class="absolute top-0.5 h-7 rounded bg-indigo-500/80 text-xs text-white flex items-center px-2" :style="barStyle(issue)">{{ issue.issue_key }} · {{ issue.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
