<script setup lang="ts">
import type { Activity, Column, Label, Member } from '~/types/kanban'
import { ISSUE_PRIORITIES, ISSUE_TYPES, issueActivityVerbs } from '~/utils/kanban'
const props = withDefaults(defineProps<{ activities: Activity[]; columns: Column[]; users?: Member[]; labels?: Label[] }>(), { users: () => [], labels: () => [] })
const fields: Record<string, string> = { title: 'Título', description: 'Descripción', type: 'Tipo', status: 'Estado', stage: 'Etapa', priority: 'Prioridad', story_points: 'Estimación', due_date: 'Fecha límite', start_date: 'Fecha de inicio', assignee_ids: 'Responsables', label_ids: 'Etiquetas', epic_id: 'Épica', parent_id: 'Padre', sprint_id: 'Sprint' }
function valueText(field: string, value: unknown): string {
    if (value === null || value === undefined || value === '' || (Array.isArray(value) && !value.length)) return 'Sin definir'
    if (field === 'status') return props.columns.find(column => column.id === value)?.label || String(value)
    if (field === 'priority') return ISSUE_PRIORITIES[value as keyof typeof ISSUE_PRIORITIES] || String(value)
    if (field === 'type') return ISSUE_TYPES.find(type => type.value === value)?.label || String(value)
    if (Array.isArray(value)) {
        const options = field === 'assignee_ids' ? props.users : props.labels
        return value.map(id => options.find(option => option.id === id)?.name || `#${id}`).join(', ')
    }
    return String(value).slice(0, 180)
}
</script>

<template>
    <p v-if="!activities.length" class="py-3 text-sm text-slate-500 dark:text-slate-400">Todavía no hay actividad.</p>
    <ol v-else class="relative space-y-5 before:absolute before:bottom-1 before:left-[5px] before:top-1 before:w-px before:bg-slate-200 dark:before:bg-slate-700">
        <li v-for="log in activities" :key="log.id" class="relative pl-6 text-[13px] text-slate-600 dark:text-slate-400">
            <span class="absolute left-0 top-[6px] h-2.5 w-2.5 rounded-full ring-4 ring-white dark:ring-slate-900" :class="log.action.includes('deleted') ? 'bg-red-400' : log.action === 'moved' ? 'bg-amber-400' : 'bg-sky-400'" />
            <p><strong class="font-semibold text-slate-800 dark:text-slate-200">{{ log.user?.name || 'Usuario' }}</strong> {{ issueActivityVerbs[log.action] || 'modificó' }} «{{ log.card_title }}»<span v-if="log.action === 'moved'"> a {{ columns.find(column => column.id === log.to_status)?.label || log.to_status }}</span>.</p>
            <dl v-if="log.metadata?.changes?.length" class="mt-2 space-y-1 rounded-lg bg-slate-50 px-3 py-2 text-xs dark:bg-slate-800/60"><div v-for="change in log.metadata.changes" :key="change.field" class="flex flex-wrap gap-x-1"><dt class="font-medium text-slate-700 dark:text-slate-300">{{ fields[change.field] || change.field }}:</dt><dd class="min-w-0 break-words">{{ valueText(change.field, change.before) }} <span aria-label="cambió a">→</span> <span class="text-slate-800 dark:text-slate-200">{{ valueText(change.field, change.after) }}</span></dd></div></dl>
            <time class="mt-1 block text-[11px] text-slate-400" :datetime="log.created_at">{{ new Date(log.created_at).toLocaleString('es-CL') }}</time>
        </li>
    </ol>
</template>
