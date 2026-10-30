<script setup lang="ts">
import { Calendar, GripVertical, MessageSquare, GitBranch } from 'lucide-vue-next'
import type { Column, Issue, IssueStatus, IssuePatch, IssuePriority, Member } from '~/types/kanban'
import { issueDate, issueOverdue, canTransition, ISSUE_PRIORITIES } from '~/utils/kanban'
const props = defineProps<{ issue: Issue; columns: Column[]; users: Member[]; disabled: boolean; readonly: boolean; dragDisabled: boolean }>()
const emit = defineEmits<{ open: [issue: Issue]; move: [issue: Issue, status: IssueStatus]; patch: [issue: Issue, patch: IssuePatch] }>()
const assigneeOptions = computed(() => [...props.users, ...props.issue.assignees.filter(user => !props.users.some(member => member.id === user.id))])
function changePriority(event: Event) {
    const select = event.target as HTMLSelectElement
    const value = select.value as IssuePriority
    select.value = props.issue.priority
    if (value !== props.issue.priority) emit('patch', props.issue, { priority: value })
}
function changeAssignees(event: Event) {
    const select = event.target as HTMLSelectElement
    const ids = [...select.selectedOptions].map(option => Number(option.value))
    for (const option of select.options) option.selected = props.issue.assignees.some(user => user.id === Number(option.value))
    emit('patch', props.issue, { assignee_ids: ids })
}
function changeStatus(issue: Issue, event: Event) {
    const select = event.target as HTMLSelectElement
    const status = select.value as IssueStatus
    select.value = issue.status
    if (status !== issue.status) emit('move', issue, status)
}
</script>

<template>
    <article :data-card="issue.id" class="group flex flex-col gap-2 rounded-lg bg-white p-3 shadow-sm ring-1 ring-slate-200 transition hover:ring-sky-400/70 dark:bg-slate-800 dark:ring-slate-700/70 dark:hover:ring-sky-500/60">
        <div class="flex items-center justify-between gap-2">
            <button :disabled="disabled" class="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400" :aria-label="`Abrir ${issue.issue_key}`" @click="emit('open', issue)"><AdminKanbanIssueTypeIcon :type="issue.type" />{{ issue.issue_key || `#${issue.id}` }}</button>
            <div class="flex items-center gap-1"><AdminKanbanPriorityBadge :priority="issue.priority" /><button :aria-label="`Arrastrar ${issue.title}`" :disabled="dragDisabled" class="drag-handle -mr-1.5 flex h-9 w-9 cursor-grab touch-none items-center justify-center rounded text-slate-400 hover:text-slate-600 active:cursor-grabbing disabled:cursor-default dark:text-slate-500 dark:hover:text-slate-300"><GripVertical class="h-4 w-4" /></button></div>
        </div>
        <button :disabled="disabled" class="line-clamp-2 w-full text-left text-sm font-medium leading-snug text-slate-800 hover:text-sky-600 disabled:cursor-wait dark:text-slate-100 dark:hover:text-sky-400" @click="emit('open', issue)">{{ issue.title }}</button>
        <p v-if="issue.description" class="line-clamp-2 whitespace-pre-line text-xs leading-relaxed text-slate-500 dark:text-slate-400">{{ issue.description }}</p>
        <div v-if="issue.labels.length" class="flex flex-wrap gap-1"><span v-for="label in issue.labels.slice(0, 2)" :key="label.id" class="inline-flex max-w-[130px] items-center gap-1 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600 dark:bg-slate-700 dark:text-slate-300"><span class="h-1.5 w-1.5 shrink-0 rounded-full" :style="{ backgroundColor: label.color }" /><span class="truncate">{{ label.name }}</span></span></div>
        <div class="flex items-center justify-between gap-2 pt-1">
            <div class="flex items-center gap-2 text-[11px] text-slate-400">
                <span v-if="issue.due_date" class="flex items-center gap-1" :class="{ 'font-semibold text-red-500': issueOverdue(issue) }"><Calendar class="h-3 w-3" />{{ issueDate(issue.due_date) }}</span>
                <span v-if="issue.comments_count" class="flex items-center gap-1" :aria-label="`${issue.comments_count} comentarios`"><MessageSquare class="h-3 w-3" />{{ issue.comments_count }}</span>
                <span v-if="issue.subtasks_count" class="flex items-center gap-1" :aria-label="`${issue.subtasks_count} subtareas`"><GitBranch class="h-3 w-3" />{{ issue.subtasks_count }}</span>
            </div>
            <AdminKanbanMemberAvatars :members="issue.assignees" />
        </div>
        <select :value="issue.status" :aria-label="`Mover ${issue.title} a otra columna`" :disabled="disabled || readonly" class="!min-h-8 !bg-slate-50 !py-1.5 !text-xs dark:!bg-slate-700/50" @change="changeStatus(issue, $event)"><option v-for="column in columns" :key="column.id" :value="column.id" :disabled="!canTransition(columns, issue.status, column.id)">{{ column.label }}</option></select>
        <details v-if="!readonly" class="text-xs text-slate-600 dark:text-slate-300"><summary class="cursor-pointer rounded py-1.5 font-medium">Editar prioridad y responsables</summary><div class="mt-2 space-y-3">
            <label class="block">Prioridad<select :value="issue.priority" :aria-label="`Prioridad de ${issue.issue_key}`" :disabled="disabled" class="!min-h-9 !py-1 !text-xs" @change="changePriority"><option v-for="(label, priority) in ISSUE_PRIORITIES" :key="priority" :value="priority">{{ label }}</option></select></label>
            <label class="block">Responsables<select :value="issue.assignees.map(user => String(user.id))" :aria-label="`Responsables de ${issue.issue_key}`" multiple :disabled="disabled" :size="Math.max(2, Math.min(4, assigneeOptions.length))" class="!text-xs" @change="changeAssignees"><option v-for="user in assigneeOptions" :key="user.id" :value="String(user.id)" :disabled="!users.some(member => member.id === user.id)">{{ user.name }}{{ !users.some(member => member.id === user.id) ? ' (sin acceso)' : '' }}</option></select></label>
            <p class="text-[11px]">Los cambios se guardan al seleccionar. Ctrl/Cmd permite elegir varias personas.</p><button :disabled="disabled || !issue.assignees.length" class="font-medium underline disabled:opacity-50" @click="emit('patch', issue, { assignee_ids: [] })">Quitar responsables</button>
        </div></details>
    </article>
</template>
