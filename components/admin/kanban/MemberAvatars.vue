<script setup lang="ts">
import type { Member } from '~/types/kanban'
import { issueInitials } from '~/utils/kanban'
defineProps<{ members: Member[] }>()
</script>

<template>
    <div class="flex -space-x-1.5" :aria-label="members.map(member => member.name).join(', ') || 'Sin asignar'">
        <span v-for="member in members.slice(0, 3)" :key="member.id" :title="member.name" class="flex h-6 w-6 items-center justify-center rounded-full bg-admin-tint text-[9px] font-bold text-admin-accent ring-2 ring-white dark:bg-admin-action-hover dark:text-admin-accent dark:ring-admin-line">{{ issueInitials(member.name) }}</span>
        <span v-if="members.length > 3" class="flex h-6 w-6 items-center justify-center rounded-full bg-admin-elevated text-[9px] font-bold text-admin-muted ring-2 ring-white dark:bg-admin-elevated dark:text-admin-ink dark:ring-admin-line">+{{ members.length - 3 }}</span>
    </div>
</template>
