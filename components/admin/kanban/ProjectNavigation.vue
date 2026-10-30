<script setup lang="ts">
import { SquareKanban, Rows3, Settings2, ListTodo, Layers } from 'lucide-vue-next'
import type { ProjectContext } from '~/types/kanban'
const props = defineProps<{ context: ProjectContext; collapsed: boolean }>()
const emit = defineEmits<{ navigate: [] }>()
const route = useRoute()
const links = computed(() => {
    const base = `/admin/kanban/${props.context.project.id}`
    return [
        { name: 'Tablero', path: base, view: undefined, icon: SquareKanban, active: route.path === base && route.query.view !== 'list' },
        { name: 'Issues', path: base, view: 'list', icon: Rows3, active: route.path === base && route.query.view === 'list' },
        { name: 'Backlog', path: `${base}/backlog`, view: undefined, icon: ListTodo, active: route.path === `${base}/backlog` },
        { name: 'Épicas', path: `${base}/epics`, view: undefined, icon: Layers, active: route.path === `${base}/epics` },
        { name: 'Configuración', path: `/admin/projects/${props.context.project.id}/settings`, view: undefined, icon: Settings2, active: route.path === `/admin/projects/${props.context.project.id}/settings` },
    ]
})
</script>

<template>
    <section class="border-t border-white/10 pt-5" aria-label="Proyecto activo">
        <div class="mb-3 flex items-center gap-2 px-2" :class="collapsed ? 'lg:justify-center lg:px-0' : ''"><span class="flex h-8 min-w-8 max-w-12 items-center justify-center rounded-md bg-sky-500/20 px-1 text-[10px] font-semibold text-sky-300" :title="context.project.name">{{ context.project.project_key.slice(0, 4) }}</span><div class="min-w-0" :class="collapsed ? 'lg:hidden' : ''"><p class="text-[10px] uppercase tracking-wider text-slate-400">Proyecto</p><p class="truncate text-xs font-semibold text-white" :title="context.project.name">{{ context.project.name }}</p></div></div>
        <div class="space-y-1"><NuxtLink v-for="link in links" :key="link.name" :to="{ path: link.path, query: { ...route.query, view: link.view } }" :aria-current="link.active ? 'page' : undefined" class="flex min-h-10 items-center gap-3 rounded-lg px-3 text-sm text-slate-400 hover:bg-white/5 hover:text-white aria-[current=page]:bg-white/10 aria-[current=page]:text-white" :class="collapsed ? 'lg:justify-center lg:px-0' : ''" :aria-label="`${link.name} del proyecto`" :title="link.name" @click="emit('navigate')"><component :is="link.icon" class="h-[18px] w-[18px]" /><span :class="collapsed ? 'lg:hidden' : ''">{{ link.name }}</span></NuxtLink></div>
    </section>
</template>
