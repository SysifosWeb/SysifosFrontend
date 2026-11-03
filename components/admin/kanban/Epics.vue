<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({ name: 'AdminKanbanEpics' })
import type { Issue } from '~/types/kanban'
import { issueProgress, issueDate } from '~/utils/kanban'
const props = defineProps<{ epics: Issue[]; issues: Issue[]; disabled: boolean; matches: (issue: Issue) => boolean }>()
const emit = defineEmits<{ open: [issue: Issue] }>()
const groups = computed(() => props.epics.map(epic => {
    const children = props.issues.filter(issue => issue.epic_id === epic.id)
    return { epic, children, progress: issueProgress(children) }
}).filter(group => props.matches(group.epic) || group.children.some(props.matches)))
</script>

<template>
    <div class="space-y-5" aria-label="Épicas del proyecto">
        <p class="text-sm text-admin-muted dark:text-admin-muted">El progreso cuenta issues principales completados, sin duplicar subtareas ni reducirse al filtrar. Abre una épica para editar fechas y responsables.</p>
        <section v-for="group in groups" :key="group.epic.id" class="rounded-xl border border-admin-line bg-admin-surface p-5 dark:border-admin-line dark:bg-admin-surface">
            <button :disabled="disabled" class="flex items-center gap-2 text-left font-semibold hover:text-admin-accent" @click="emit('open', group.epic)"><AdminKanbanIssueTypeIcon type="epic" />
            <span class="text-xs text-admin-muted dark:text-admin-muted">{{ group.epic.issue_key }}</span>{{ group.epic.title }}</button>
            <div class="my-3 flex flex-wrap items-center gap-4 text-xs text-admin-muted dark:text-admin-muted"><span>{{ group.progress.done }}/{{ group.progress.total }} completados · {{ group.progress.percent }}%</span>
            <AdminKanbanMemberAvatars :members="group.epic.assignees" />
            <span>{{ group.epic.assignees.map(user => user.name).join(', ') || 'Sin responsable' }}</span>
            <span>{{ group.epic.start_date ? issueDate(group.epic.start_date) : 'Sin inicio' }} → {{ group.epic.due_date ? issueDate(group.epic.due_date) : 'Sin fecha límite' }}</span></div>
            <progress :value="group.progress.done" :max="group.progress.total || 1" :aria-label="`Progreso de ${group.epic.issue_key}`" class="h-2 w-full accent-sky-600" />
            <ul class="mt-3 divide-y divide-admin-line dark:divide-admin-line"><li v-for="issue in group.children.filter(matches)" :key="issue.id"><button :disabled="disabled" class="flex w-full items-center gap-2 py-3 text-left text-sm hover:text-admin-accent" @click="emit('open', issue)"><AdminKanbanIssueTypeIcon :type="issue.type" />
            <span class="text-xs text-admin-muted dark:text-admin-muted">{{ issue.issue_key }}</span>{{ issue.title }}
            <span v-if="issue.status === 'done'" class="ml-auto text-xs text-emerald-700 dark:text-emerald-400">Completado</span></button></li></ul>
            <p v-if="!group.children.length" class="mt-3 text-sm text-admin-muted dark:text-admin-muted">Sin issues asociados. Asigna esta épica desde el detalle de una tarea o historia.</p>
        </section><p v-if="!groups.length" class="rounded-xl border border-dashed border-admin-line p-8 text-center text-sm text-admin-muted dark:border-admin-line dark:text-admin-muted">No hay épicas que coincidan. Crea un issue de tipo Épica para empezar.</p>
    </div>
</template>