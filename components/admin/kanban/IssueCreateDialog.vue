<script setup lang="ts">
import { Plus, X, Loader2 } from 'lucide-vue-next'
import type { Issue, IssueStatus, IssueType, Project } from '~/types/kanban'
import { ISSUE_TYPES } from '~/utils/kanban'
const props = defineProps<{ open: boolean; project: Project | null; status: IssueStatus; canWrite: boolean }>()
const emit = defineEmits<{ close: []; created: [issue: Issue]; dirty: [value: boolean]; saving: [value: boolean] }>()
const api = useApi()
const dialog = ref<HTMLDialogElement>()
const titleInput = ref<HTMLInputElement>()
const title = ref('')
const type = ref<IssueType>('task')
const busy = ref(false)
const error = ref('')
const discard = ref(false)
const dirty = computed(() => !!title.value.trim())
watch(dirty, value => emit('dirty', value))
watch(() => props.open, async open => {
    await nextTick()
    if (open) {
        title.value = ''; type.value = 'task'; error.value = ''; discard.value = false
        dialog.value?.showModal(); titleInput.value?.focus()
    } else dialog.value?.close()
}, { immediate: true })
function close(force = false) {
    if (busy.value) return
    if (!force && dirty.value) { discard.value = true; return }
    title.value = ''; emit('dirty', false); emit('close')
}
async function create() {
    if (busy.value || !props.project || !props.canWrite) return
    busy.value = true; emit('saving', true); error.value = ''
    try {
        const { data } = await api.request<{ data: Issue }>('kanban/cards', {
            method: 'POST', query: { project_id: props.project.id }, body: { title: title.value.trim(), type: type.value, status: props.status },
        })
        title.value = ''; emit('dirty', false); busy.value = false; emit('saving', false); emit('created', data)
    } catch (failure) { error.value = apiErrorMessage(failure) }
    finally { busy.value = false; emit('saving', false) }
}
</script>

<template>
    <dialog ref="dialog" aria-labelledby="quick-issue-heading" class="admin-scope !m-auto w-[min(520px,calc(100vw-32px))] rounded-xl bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/50 dark:bg-slate-900 dark:text-slate-100" @cancel.prevent="close()">
        <form class="space-y-5 p-6" @submit.prevent="create">
            <header class="flex items-center justify-between"><h2 id="quick-issue-heading" class="text-lg font-semibold">Crear issue</h2><button type="button" aria-label="Cerrar creación de issue" :disabled="busy" class="rounded-md p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" @click="close()"><X class="h-4 w-4" /></button></header>
            <p v-if="error" role="alert" class="rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-300">{{ error }}</p>
            <p v-if="!canWrite" role="status" class="rounded-lg bg-slate-50 p-3 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">La creación no está disponible en este momento. Tu borrador se conserva.</p>
            <div v-if="discard" role="alert" class="rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-200"><p>¿Descartar el título que escribiste?</p><div class="mt-2 flex gap-3"><button type="button" class="font-semibold underline" @click="close(true)">Descartar y cerrar</button><button type="button" class="underline" @click="discard = false">Seguir escribiendo</button></div></div>
            <label class="block space-y-1.5 text-xs font-semibold">Proyecto<input :value="`${project?.project_key || ''} · ${project?.name || ''}`" readonly /></label>
            <label class="block space-y-1.5 text-xs font-semibold">Tipo<select v-model="type" :disabled="busy || !canWrite"><option v-for="item in ISSUE_TYPES.filter(item => item.value !== 'subtask')" :key="item.value" :value="item.value">{{ item.label }}</option></select></label>
            <label class="block space-y-1.5 text-xs font-semibold">Título<input ref="titleInput" v-model="title" required minlength="2" maxlength="255" :disabled="busy || !canWrite" placeholder="¿Qué hay que hacer?" /></label>
            <p class="text-xs leading-relaxed text-slate-500 dark:text-slate-400">Completa la descripción, los responsables y el resto de los campos desde el detalle.</p>
            <footer class="flex justify-end gap-2 border-t border-slate-200 pt-4 dark:border-slate-800"><button type="button" :disabled="busy" class="rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" @click="close()">Cancelar</button><button type="submit" :disabled="busy || !canWrite" class="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-50"><Loader2 v-if="busy" class="h-4 w-4 animate-spin" /><Plus v-else class="h-4 w-4" />{{ busy ? 'Creando…' : 'Crear y abrir' }}</button></footer>
        </form>
    </dialog>
</template>
