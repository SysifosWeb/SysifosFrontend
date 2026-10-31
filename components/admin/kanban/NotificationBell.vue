<script setup lang="ts">
import { Bell, RefreshCw } from 'lucide-vue-next'
type Notice = { id: string; read_at: string | null; created_at: string; data: { project_id: number; card_id: number; issue_key: string; title: string; actor: string; kind: string } }
const api = useApi()
const router = useRouter()
const token = useCookie('auth_token')
const notices = ref<Notice[]>([])
const unread = ref(0)
const page = ref(1)
const lastPage = ref(1)
const busy = ref(false)
const error = ref('')
const dropdown = ref<HTMLDetailsElement>()
const labels: Record<string, string> = { assigned: 'te asignó un issue', comment: 'comentó un issue', status_changed: 'cambió el estado', mention: 'te mencionó' }
let disposed = false
let epoch = 0
let timer: ReturnType<typeof setInterval> | undefined
async function refresh(append = false) {
    if (busy.value || !token.value) return
    const started = epoch
    busy.value = true; error.value = ''
    try {
        const next = append ? page.value + 1 : 1
        const response = await api.request<{ data: Notice[]; meta: { unread_count: number; last_page: number } }>('kanban/notifications', { query: { page: next } })
        if (disposed || started !== epoch) return
        notices.value = append ? [...notices.value, ...response.data.filter(item => !notices.value.some(current => current.id === item.id))] : response.data
        unread.value = response.meta.unread_count; lastPage.value = response.meta.last_page; page.value = next
    } catch (failure) {
        if (disposed || started !== epoch) return
        notices.value = []; unread.value = 0; error.value = apiErrorMessage(failure, 'No se pudieron cargar las notificaciones.')
    } finally { if (!disposed && started === epoch) busy.value = false }
}
async function read(id?: string) {
    if (busy.value) return
    const started = epoch
    busy.value = true; error.value = ''
    try { await api.request(id ? `kanban/notifications/${id}/read` : 'kanban/notifications/read-all', { method: 'PUT' }) }
    catch (failure) { error.value = apiErrorMessage(failure); return false }
    finally { busy.value = false }
    if (disposed || started !== epoch) return false
    await refresh(); return true
}
async function open(notice: Notice) {
    if (!await read(notice.id)) return
    if (dropdown.value) dropdown.value.open = false
    await router.push({ path: `/admin/kanban/${notice.data.project_id}`, query: { issue: String(notice.data.card_id) } })
}
watch(token, () => { epoch++; notices.value = []; unread.value = 0; busy.value = false; if (token.value) void refresh() })
onMounted(() => { void refresh(); timer = setInterval(() => { if (document.visibilityState === 'visible' && (!dropdown.value?.open || page.value === 1)) void refresh() }, 15000) })
onBeforeUnmount(() => { disposed = true; epoch++; clearInterval(timer) })
</script>
<template>
    <details ref="dropdown" class="relative" @keydown.esc.stop="dropdown && (dropdown.open = false)">
        <summary :aria-label="`Notificaciones${unread ? `, ${unread} sin leer` : ''}`" class="relative flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg text-slate-600 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:bg-slate-800"><Bell class="h-[18px] w-[18px]" /><span v-if="unread" class="absolute right-0 top-0 rounded-full bg-red-600 px-1 text-[10px] font-semibold text-white">{{ unread > 99 ? '99+' : unread }}</span></summary>
        <section aria-label="Notificaciones internas" class="absolute right-0 z-50 mt-2 max-h-[75vh] w-[min(360px,calc(100vw-32px))] overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <header class="mb-3 flex items-center gap-2"><h2 class="flex-1 text-sm font-semibold">Notificaciones</h2><button :disabled="busy" aria-label="Actualizar notificaciones" class="rounded p-1" @click="refresh()"><RefreshCw class="h-4 w-4" /></button><button :disabled="busy || !unread" class="text-xs text-sky-700 underline dark:text-sky-300" @click="read()">Marcar leídas</button></header>
            <p v-if="error" role="alert" class="mb-2 text-xs text-amber-800 dark:text-amber-200">{{ error }}</p><p v-if="!notices.length" class="py-3 text-sm text-slate-500 dark:text-slate-400">{{ busy ? 'Cargando…' : 'No hay notificaciones disponibles.' }}</p>
            <ul class="divide-y divide-slate-100 dark:divide-slate-800"><li v-for="notice in notices" :key="notice.id"><button :disabled="busy" class="w-full rounded p-2 text-left text-xs hover:bg-slate-50 dark:hover:bg-slate-800" :class="!notice.read_at ? 'font-semibold' : ''" @click="open(notice)"><span class="block">{{ notice.data.actor }} {{ labels[notice.data.kind] || 'actualizó un issue' }}</span><span class="mt-1 block text-sky-700 dark:text-sky-300">{{ notice.data.issue_key }} · {{ notice.data.title }}</span><time class="mt-1 block text-[11px] text-slate-500 dark:text-slate-400">{{ new Date(notice.created_at).toLocaleString('es-CL') }}</time></button></li></ul><button v-if="page < lastPage" :disabled="busy" class="mt-3 text-xs font-semibold underline" @click="refresh(true)">Ver más notificaciones</button>
        </section>
    </details>
</template>
