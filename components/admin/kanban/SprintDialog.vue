<script setup lang="ts">
import { X, Loader2 } from 'lucide-vue-next'
const props = defineProps<{ open: boolean; projectId: number; projectName: string; canManage: boolean }>()
const emit = defineEmits<{ close: []; created: []; saving: [value: boolean] }>()
const api = useApi()
const dialog = ref<HTMLDialogElement>()
const form = reactive({ name: '', goal: '', start_date: '', end_date: '' })
const busy = ref(false)
const error = ref('')
watch(() => props.open, async open => {
    await nextTick()
    if (open) { Object.assign(form, { name: '', goal: '', start_date: '', end_date: '' }); error.value = ''; dialog.value?.showModal() }
    else dialog.value?.close()
}, { immediate: true })
async function create() {
    if (busy.value || !props.canManage) return
    busy.value = true; emit('saving', true); error.value = ''
    try {
        await api.request('kanban/sprints', { method: 'POST', query: { project_id: props.projectId }, body: {
            name: form.name.trim(), goal: form.goal.trim() || null, start_date: form.start_date || null, end_date: form.end_date || null,
        } })
        emit('created')
    } catch (failure) { error.value = apiErrorMessage(failure) }
    finally { busy.value = false; emit('saving', false) }
}
</script>

<template>
    <dialog ref="dialog" aria-labelledby="sprint-heading" class="admin-scope !m-auto w-[min(560px,calc(100vw-32px))] rounded-xl bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-slate-950/50 dark:bg-slate-900 dark:text-slate-100" @cancel.prevent="!busy && emit('close')">
        <form class="space-y-5 p-6" @submit.prevent="create"><header class="flex items-start justify-between"><div><h2 id="sprint-heading" class="text-lg font-semibold">Nuevo sprint</h2><p class="mt-1 text-xs text-slate-500">{{ projectName }}</p></div><button type="button" :disabled="busy" aria-label="Cerrar creación de sprint" class="rounded-md p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" @click="emit('close')"><X class="h-4 w-4" /></button></header><p v-if="error" role="alert" class="rounded-lg bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">{{ error }}</p><fieldset :disabled="busy || !canManage" class="space-y-4"><label class="block space-y-1.5 text-xs font-semibold">Nombre del sprint<input v-model="form.name" required minlength="3" maxlength="120" /></label><label class="block space-y-1.5 text-xs font-semibold">Objetivo<textarea v-model="form.goal" rows="3" maxlength="500" /></label><div class="grid grid-cols-2 gap-4"><label class="block space-y-1.5 text-xs font-semibold">Fecha de inicio<input v-model="form.start_date" type="date" /></label><label class="block space-y-1.5 text-xs font-semibold">Fecha de fin<input v-model="form.end_date" type="date" :min="form.start_date || undefined" /></label></div><p class="text-xs text-slate-500">Se creará como planificado. La gestión de sprints se ampliará en la fase Scrum.</p></fieldset><footer class="flex justify-end gap-2 border-t border-slate-200 pt-4 dark:border-slate-800"><button type="button" :disabled="busy" class="rounded-lg px-3 py-2 text-sm text-slate-500" @click="emit('close')">Cancelar</button><button type="submit" :disabled="busy || !canManage" class="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"><Loader2 v-if="busy" class="h-4 w-4 animate-spin" />Crear sprint</button></footer></form>
    </dialog>
</template>
