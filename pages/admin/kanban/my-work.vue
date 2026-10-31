<template>
    <div class="space-y-6">
        <header class="flex flex-wrap items-start justify-between gap-4">
            <div class="min-w-0">
                <p class="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Productividad</p>
                <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Mi trabajo</h2>
                <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Issues asignados, vencidos, próximos, modificados recientemente y creados por ti.</p>
            </div>
            <button class="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-sky-600 px-3 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-50" :disabled="loading" @click="refresh">
                Actualizar
            </button>
        </header>

        <p v-if="error" class="rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-900 dark:border-rose-900/40 dark:bg-rose-950/40 dark:text-rose-200">
            No se pudo cargar tu trabajo. {{ error }}
        </p>

        <div v-if="loading" class="grid gap-3">
            <div v-for="i in 4" :key="i" class="h-24 animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800" />
        </div>

        <template v-else>
            <section v-for="section in sections" :key="section.key" class="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <div class="mb-3 flex items-center justify-between gap-3">
                    <h3 class="text-sm font-semibold text-slate-900 dark:text-white">{{ section.title }}</h3>
                    <span class="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ section.items.length }}</span>
                </div>
                <p v-if="!section.items.length" class="text-sm text-slate-500 dark:text-slate-400">Sin resultados.</p>
                <ul v-else class="divide-y divide-slate-100 dark:divide-slate-800">
                    <li v-for="issue in section.items" :key="issue.id" class="py-2">
                        <button class="flex w-full items-start gap-3 text-left hover:text-sky-600 dark:hover:text-sky-400" @click="openIssue(issue)">
                            <span class="mt-0.5 shrink-0 rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ issue.issue_key }}</span>
                            <span class="min-w-0 flex-1">
                                <span class="block truncate text-sm font-medium text-slate-900 dark:text-white">{{ issue.title }}</span>
                                <span class="block text-xs text-slate-500 dark:text-slate-400">
                                    {{ issue.project?.name || issue.project?.project_key || 'Proyecto' }} · {{ statusLabel(issue.status) }}{{ issue.due_date ? ' · vence ' + issueDate(issue.due_date) : '' }}
                                </span>
                            </span>
                            <span v-if="issueOverdue(issue)" class="shrink-0 rounded-full bg-rose-100 px-2 py-0.5 text-[11px] font-semibold text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">Vencido</span>
                        </button>
                    </li>
                </ul>
            </section>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useApi } from '~/composables/useApi'
import type { Issue } from '~/types/kanban'
import { issueDate, issueOverdue } from '~/utils/kanban'

definePageMeta({ layout: 'admin' })

const api = useApi()
const router = useRouter()
const loading = ref(true)
const error = ref('')
const data = ref<any>(null)

const sections = computed(() => [
    { key: 'assigned', title: 'Asignados a mí', items: data.value?.assigned || [] },
    { key: 'overdue', title: 'Vencidos', items: data.value?.overdue || [] },
    { key: 'upcoming', title: 'Próximos (7 días)', items: data.value?.upcoming || [] },
    { key: 'recently_modified', title: 'Modificados recientemente', items: data.value?.recently_modified || [] },
    { key: 'created_by_me', title: 'Creados por mí', items: data.value?.created_by_me || [] },
])

const statusLabel = (status: string) => ({ backlog: 'Backlog', todo: 'Por hacer', in_progress: 'En curso', review: 'En revisión', done: 'Hecho' }[status] || status)

async function refresh() {
    loading.value = true
    error.value = ''
    try {
        const res = await api.request<any>('kanban/my-work')
        data.value = res?.data || res
    } catch (e: any) {
        error.value = e?.data?.message || e?.message || 'Error de conexión'
        data.value = null
    } finally {
        loading.value = false
    }
}

function openIssue(issue: Issue) {
    const projectId = issue.kanban_project_id
    void router.push({ path: `/admin/kanban/${projectId}`, query: { issue: String(issue.id) } })
}

onMounted(refresh)
useHead({ title: 'Mi trabajo · SysifosWeb' })
</script>
