<script setup lang="ts">
import type { IssuePriority } from '~/types/kanban'
import { ISSUE_PRIORITIES } from '~/utils/kanban'
defineProps<{ priority: IssuePriority }>()
const colors = {
    urgent: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300',
    high: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
    medium: 'bg-slate-100 text-slate-600 dark:bg-slate-700/70 dark:text-slate-300',
    low: 'bg-slate-100 text-slate-500 dark:bg-slate-700/50 dark:text-slate-400',
}
</script>

<template><span class="inline-flex w-fit rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide" :class="colors[priority]">{{ ISSUE_PRIORITIES[priority] }}</span></template>
