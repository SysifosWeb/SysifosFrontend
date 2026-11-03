<script setup lang="ts">
import type { IssuePriority } from '~/types/kanban'
import { ISSUE_PRIORITIES } from '~/utils/kanban'
defineProps<{ priority: IssuePriority }>()
const colors = {
    urgent: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300',
    high: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
    medium: 'bg-admin-elevated text-admin-muted dark:bg-admin-elevated/70 dark:text-admin-muted',
    low: 'bg-admin-elevated text-admin-muted dark:bg-admin-elevated/50 dark:text-admin-muted',
}
</script>

<template><span class="inline-flex w-fit rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide" :class="colors[priority]">{{ ISSUE_PRIORITIES[priority] }}</span></template>
