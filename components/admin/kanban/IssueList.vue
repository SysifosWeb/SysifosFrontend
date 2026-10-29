<script setup lang="ts">
import type { Column, Issue, IssueStatus } from '~/types/kanban'
import { issueDate, issueOverdue } from '~/utils/kanban'
defineProps<{ issues: Issue[]; columns: Column[]; canWrite: boolean; disabled: boolean; filtered: boolean }>()
const emit = defineEmits<{ open: [issue: Issue]; move: [issue: Issue, status: IssueStatus] }>()
function changeStatus(issue: Issue, event: Event) {
    const select = event.target as HTMLSelectElement
    const status = select.value as IssueStatus
    select.value = issue.status
    if (status !== issue.status) emit('move', issue, status)
}
</script>

<template>
    <section aria-label="Lista de issues" class="overflow-x-auto rounded-xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-[#1a1920]">
        <table class="w-full min-w-[800px] text-left text-sm">
            <thead class="border-b border-slate-200 bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:bg-slate-800/40"><tr><th class="px-4 py-3 font-semibold">Issue</th><th class="w-36 px-3 py-3 font-semibold">Estado</th><th class="px-3 py-3 font-semibold">Prioridad</th><th class="px-3 py-3 font-semibold">Responsables</th><th class="px-3 py-3 font-semibold">Vencimiento</th></tr></thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                <tr v-if="!issues.length"><td colspan="5" class="px-4 py-12 text-center text-slate-500">{{ filtered ? 'No hay issues que coincidan con estos filtros.' : 'Este proyecto todavía no tiene issues.' }}</td></tr>
                <tr v-for="issue in issues" :key="issue.id" class="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td class="max-w-md px-4 py-3"><button :disabled="disabled" class="flex w-full items-start gap-2.5 text-left hover:text-sky-600 dark:hover:text-sky-400" @click="emit('open', issue)"><AdminKanbanIssueTypeIcon :type="issue.type" class="mt-0.5" /><span class="min-w-0"><span class="block text-[11px] font-semibold text-slate-400">{{ issue.issue_key }}</span><span class="line-clamp-2 font-medium text-slate-800 dark:text-slate-100">{{ issue.title }}</span></span></button></td>
                    <td class="px-3 py-3"><select :value="issue.status" :disabled="disabled || !canWrite" :aria-label="`Estado de ${issue.issue_key}`" class="!min-h-8 !py-1 !text-xs" @change="changeStatus(issue, $event)"><option v-for="column in columns" :key="column.id" :value="column.id">{{ column.label }}</option></select></td>
                    <td class="px-3 py-3"><AdminKanbanPriorityBadge :priority="issue.priority" /></td>
                    <td class="px-3 py-3"><AdminKanbanMemberAvatars v-if="issue.assignees.length" :members="issue.assignees" /><span v-else class="text-xs text-slate-400">Sin asignar</span></td>
                    <td class="whitespace-nowrap px-3 py-3 text-xs" :class="issueOverdue(issue) ? 'font-semibold text-red-500' : 'text-slate-500 dark:text-slate-400'">{{ issue.due_date ? issueDate(issue.due_date) : 'Sin fecha' }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
