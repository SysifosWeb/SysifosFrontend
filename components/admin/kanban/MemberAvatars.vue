<script setup lang="ts">
import type { Member } from '~/types/kanban'
import { issueInitials } from '~/utils/kanban'
defineProps<{ members: Member[] }>()
</script>

<template>
    <div class="flex -space-x-1.5" :aria-label="members.map(member => member.name).join(', ') || 'Sin asignar'">
        <span v-for="member in members.slice(0, 3)" :key="member.id" :title="member.name" class="flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-[9px] font-bold text-sky-700 ring-2 ring-white dark:bg-sky-900 dark:text-sky-200 dark:ring-slate-800">{{ issueInitials(member.name) }}</span>
        <span v-if="members.length > 3" class="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[9px] font-bold text-slate-600 ring-2 ring-white dark:bg-slate-700 dark:text-slate-200 dark:ring-slate-800">+{{ members.length - 3 }}</span>
    </div>
</template>
