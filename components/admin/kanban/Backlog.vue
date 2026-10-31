<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({ name: 'AdminKanbanBacklog' })
import { ArrowUp, ArrowDown, Plus } from 'lucide-vue-next'
import type { Issue, Sprint, Column } from '~/types/kanban'
import { planningOrder, issueDate } from '~/utils/kanban'
const props = defineProps<{ issues: Issue[]; sprints: Sprint[]; columns: Column[]; canWrite: boolean; disabled: boolean; filtered: boolean; matches: (issue: Issue) => boolean }>()
const emit = defineEmits<{ open: [issue: Issue]; plan: [issue: Issue, sprintId: number | null, beforeId: number | null]; create: [sprintId: number | null] }>()
const groups = computed(() => [
    { id: null, name: 'Backlog · Sin sprint', status: 'planned', start_date: null, end_date: null },
    ...props.sprints,
    ...props.issues.filter(issue => issue.sprint && !props.sprints.some(sprint => sprint.id === issue.sprint_id))
        .map(issue => issue.sprint!).filter((sprint, index, items) => items.findIndex(item => item.id === sprint.id) === index),
].map(sprint => ({ ...sprint, issues: planningOrder(props.issues.filter(issue => issue.sprint_id === sprint.id)) })))
function assign(issue: Issue, event: Event) {
    const select = event.target as HTMLSelectElement
    const sprintId = select.value ? Number(select.value) : null
    select.value = String(issue.sprint_id ?? '')
    if (sprintId !== issue.sprint_id) emit('plan', issue, sprintId, null)
}
function reorder(issues: Issue[], index: number, direction: -1 | 1) {
    const issue = issues[index]
    if (!issue) return
    const before = direction === -1 ? issues[index - 1] : issues[index + 2]
    emit('plan', issue, issue.sprint_id, before?.id ?? null)
}
</script>

<template>
    <div class="space-y-5" aria-label="Planificación del backlog">
        <p class="text-sm text-slate-600 dark:text-slate-300">Planifica sin cambiar estados. El orden se comparte con el tablero. Los sprints cerrados se muestran como historial.</p>
        <section v-for="group in groups" :key="group.id ?? 'backlog'" :aria-label="group.name" class="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
            <header class="flex flex-wrap items-center gap-3 bg-slate-50 p-4 dark:bg-slate-800/60"><h3 class="font-semibold">{{ group.name }}</h3><span class="text-xs text-slate-500 dark:text-slate-300">{{ group.issues.filter(matches).length }} / {{ group.issues.length }} issues · {{ group.status === 'active' ? 'Activo' : group.status === 'completed' ? 'Cerrado' : 'Planificado' }}</span><span v-if="group.start_date || group.end_date" class="text-xs text-slate-500 dark:text-slate-300">{{ group.start_date ? issueDate(group.start_date) : 'Sin inicio' }} → {{ group.end_date ? issueDate(group.end_date) : 'Sin fin' }}</span><button v-if="canWrite && group.status !== 'completed'" :disabled="disabled" class="ml-auto inline-flex items-center gap-1 text-sm font-medium text-sky-700 disabled:opacity-50 dark:text-sky-300" @click="emit('create', group.id)"><Plus class="h-4 w-4" />Crear issue</button></header>
            <ul class="divide-y divide-slate-100 dark:divide-slate-800"><li v-for="(issue, index) in group.issues" v-show="matches(issue)" :key="issue.id" :data-planned-issue="issue.id" class="flex flex-wrap items-center gap-3 px-4 py-3">
                <AdminKanbanIssueTypeIcon :type="issue.type" /><button :disabled="disabled" class="min-w-40 flex-1 text-left text-sm hover:text-sky-600" @click="emit('open', issue)"><span class="mr-2 text-xs text-slate-500 dark:text-slate-400">{{ issue.issue_key }}</span>{{ issue.title }}</button>
                <span class="text-xs text-slate-600 dark:text-slate-300">{{ columns.find(column => column.id === issue.status)?.label }}</span><AdminKanbanMemberAvatars :members="issue.assignees" />
                <select :value="issue.sprint_id ?? ''" :aria-label="`Sprint de ${issue.issue_key}`" :disabled="disabled || !canWrite || group.status === 'completed'" class="!min-h-9 !w-auto !max-w-48 !py-1 !text-xs" @change="assign(issue, $event)"><option value="">Sin sprint</option><option v-for="sprint in sprints" :key="sprint.id" :value="sprint.id">{{ sprint.name }}</option><option v-if="group.status === 'completed'" :value="group.id">{{ group.name }} · Cerrado</option></select>
                <div v-if="canWrite && group.status !== 'completed'" class="flex gap-1"><button :aria-label="`Subir ${issue.issue_key}`" :disabled="disabled || filtered || index === 0" class="rounded p-2 hover:bg-slate-100 disabled:opacity-30 dark:hover:bg-slate-800" @click="reorder(group.issues, index, -1)"><ArrowUp class="h-4 w-4" /></button><button :aria-label="`Bajar ${issue.issue_key}`" :disabled="disabled || filtered || index === group.issues.length - 1" class="rounded p-2 hover:bg-slate-100 disabled:opacity-30 dark:hover:bg-slate-800" @click="reorder(group.issues, index, 1)"><ArrowDown class="h-4 w-4" /></button></div>
            </li></ul><p v-if="!group.issues.some(matches)" class="p-5 text-sm text-slate-500 dark:text-slate-400">{{ filtered ? 'Sin coincidencias con estos filtros.' : 'Todavía no hay issues en este grupo.' }}</p>
        </section>
    </div>
</template>