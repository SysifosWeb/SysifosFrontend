<script setup lang="ts">
import { SquareCheck, Bug, BookOpen, Layers, GitBranch } from 'lucide-vue-next'
import type { IssueType } from '~/types/kanban'
import { ISSUE_TYPES } from '~/utils/kanban'
const props = defineProps<{ type: IssueType }>()
const icons = { task: SquareCheck, story: BookOpen, bug: Bug, epic: Layers, subtask: GitBranch }
const colors = { task: 'text-sky-500', story: 'text-emerald-500', bug: 'text-red-500', epic: 'text-violet-500', subtask: 'text-slate-500' }
const label = computed(() => ISSUE_TYPES.find(item => item.value === props.type)?.label || props.type)
</script>

<template>
    <span class="inline-flex shrink-0 items-center" role="img" :aria-label="label" :title="label"><component :is="icons[type] || SquareCheck" class="h-4 w-4" :class="colors[type]" aria-hidden="true" /></span>
</template>
