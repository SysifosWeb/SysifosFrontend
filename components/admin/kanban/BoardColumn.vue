<script setup lang="ts">
import draggable from 'vuedraggable'
import { Plus } from 'lucide-vue-next'
import type { Column, Issue, IssueStatus } from '~/types/kanban'
const props = defineProps<{ column: Column; columns: Column[]; cards: Issue[]; projectId: number; canWrite: boolean; disabled: boolean; filtered: boolean; reduceMotion: boolean; matches: (issue: Issue) => boolean }>()
const emit = defineEmits<{
    'update:cards': [cards: Issue[]]; open: [issue: Issue]; create: [status: IssueStatus]; move: [issue: Issue, status: IssueStatus]
    start: []; end: []; drop: [status: IssueStatus, issue: Issue, beforeId: number | null]
}>()
const visibleCount = computed(() => props.cards.filter(props.matches).length)
function dropped(event: { added?: { element: Issue }; moved?: { element: Issue } }) {
    const change = event.added || event.moved
    if (!change) return
    const index = props.cards.findIndex(card => card.id === change.element.id)
    emit('drop', props.column.id, change.element, props.cards[index + 1]?.id ?? null)
}
</script>

<template>
    <section :data-column="column.id" class="flex w-[300px] min-w-[300px] flex-1 flex-col rounded-xl bg-slate-200/60 p-2.5 ring-1 ring-slate-300/50 dark:bg-black/30 dark:ring-white/10">
        <header class="mb-2.5 flex items-center gap-2 px-1.5 py-1.5"><span class="h-2.5 w-2.5 shrink-0 rounded-full" :style="{ background: column.color }" /><h3 class="text-[11px] font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">{{ column.label }}</h3><span class="ml-auto rounded-full bg-white/80 px-2 py-0.5 text-[11px] font-semibold tabular-nums text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ visibleCount }}</span><button v-if="canWrite" :aria-label="`Agregar issue en ${column.label}`" :disabled="disabled" class="flex h-7 w-7 items-center justify-center rounded-md text-slate-500 hover:bg-white hover:text-sky-600 dark:hover:bg-slate-800" @click="emit('create', column.id)"><Plus class="h-4 w-4" /></button></header>
        <draggable :model-value="cards" item-key="id" :group="`project-${projectId}`" handle=".drag-handle" :animation="reduceMotion ? 0 : 180" :force-fallback="true" :fallback-tolerance="4" :disabled="filtered || disabled || !canWrite" :delay="120" :delay-on-touch-only="true" :touch-start-threshold="5" ghost-class="kanban-ghost" drag-class="kanban-drag" class="flex min-h-[160px] flex-1 flex-col gap-2" @update:model-value="emit('update:cards', $event)" @start="emit('start')" @end="emit('end')" @change="dropped">
            <template #item="{ element: issue }"><AdminKanbanIssueCard v-show="matches(issue)" :issue="issue" :columns="columns" :disabled="disabled" :readonly="!canWrite" :drag-disabled="filtered || disabled || !canWrite" @open="emit('open', $event)" @move="(card, status) => emit('move', card, status)" /></template>
        </draggable>
        <p v-if="!visibleCount" class="rounded-lg border border-dashed border-slate-300/70 px-3 py-6 text-center text-xs text-slate-400 dark:border-slate-700">{{ filtered ? 'Sin coincidencias' : 'Arrastra un issue aquí' }}</p>
        <button v-if="canWrite" :disabled="disabled" class="mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-slate-300 py-2 text-xs font-medium text-slate-500 hover:border-sky-400 hover:text-sky-600 disabled:opacity-50 dark:border-slate-700 dark:text-slate-400" @click="emit('create', column.id)"><Plus class="h-3.5 w-3.5" /> Crear issue</button>
    </section>
</template>
