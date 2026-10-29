<script setup lang="ts">
import { Search, X, RefreshCw, Activity, SquareKanban, Rows3 } from 'lucide-vue-next'
import type { Column, Member } from '~/types/kanban'
import { ISSUE_PRIORITIES, ISSUE_TYPES } from '~/utils/kanban'
defineProps<{ users: Member[]; columns: Column[]; disabled: boolean; showActivity: boolean }>()
const emit = defineEmits<{ refresh: []; activity: [] }>()
const query = defineModel<string>('query', { required: true })
const assignee = defineModel<string>('assignee', { required: true })
const priority = defineModel<string>('priority', { required: true })
const status = defineModel<string>('status', { required: true })
const type = defineModel<string>('type', { required: true })
const view = defineModel<'board' | 'list'>('view', { required: true })
const filtered = computed(() => Boolean(query.value || assignee.value || priority.value || status.value || type.value))
function clear() { query.value = ''; assignee.value = ''; priority.value = ''; status.value = ''; type.value = '' }
</script>

<template>
    <div class="flex flex-wrap items-center gap-2 rounded-xl border border-slate-200/80 bg-white p-3 dark:border-slate-800 dark:bg-[#1a1920]">
        <div class="relative min-w-[180px] flex-1"><Search class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input v-model="query" type="search" maxlength="200" aria-label="Buscar issues" placeholder="Buscar por título o clave…" class="!min-h-10 !pl-9" /></div>
        <select v-model="assignee" aria-label="Filtrar por responsable" class="!min-h-10 !w-auto"><option value="">Todo el equipo</option><option v-for="user in users" :key="user.id" :value="String(user.id)">{{ user.name }}</option></select>
        <select v-model="priority" aria-label="Filtrar por prioridad" class="!min-h-10 !w-auto"><option value="">Prioridad</option><option v-for="(label, id) in ISSUE_PRIORITIES" :key="id" :value="id">{{ label }}</option></select>
        <select v-model="type" aria-label="Filtrar por tipo" class="!min-h-10 !w-auto"><option value="">Tipo</option><option v-for="item in ISSUE_TYPES.filter(item => item.value !== 'subtask')" :key="item.value" :value="item.value">{{ item.label }}</option></select>
        <select v-model="status" aria-label="Filtrar por estado" class="!min-h-10 !w-auto"><option value="">Estado</option><option v-for="column in columns" :key="column.id" :value="column.id">{{ column.label }}</option></select>
        <div class="ml-auto flex items-center gap-1"><button v-if="filtered" aria-label="Limpiar filtros" class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" @click="clear"><X class="h-4 w-4" /></button><button aria-label="Actualizar tablero" :disabled="disabled" class="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 disabled:opacity-50 dark:hover:bg-slate-800" @click="emit('refresh')"><RefreshCw class="h-4 w-4" /></button><button :aria-expanded="showActivity" class="inline-flex min-h-10 items-center rounded-lg px-2 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800" @click="emit('activity')"><Activity class="mr-1 h-4 w-4" />Actividad</button><div class="flex rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800" role="group" aria-label="Vista de issues"><button :aria-pressed="view === 'board'" aria-label="Vista tablero" class="flex h-9 w-9 items-center justify-center rounded-md" :class="view === 'board' ? 'bg-white text-sky-600 shadow-sm dark:bg-slate-700 dark:text-sky-300' : 'text-slate-500'" @click="view = 'board'"><SquareKanban class="h-4 w-4" /></button><button :aria-pressed="view === 'list'" aria-label="Vista lista" class="flex h-9 w-9 items-center justify-center rounded-md" :class="view === 'list' ? 'bg-white text-sky-600 shadow-sm dark:bg-slate-700 dark:text-sky-300' : 'text-slate-500'" @click="view = 'list'"><Rows3 class="h-4 w-4" /></button></div></div>
    </div>
</template>
