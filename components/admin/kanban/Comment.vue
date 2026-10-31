<script setup lang="ts">
import type { IssueComment, Member } from '~/types/kanban'
const props = defineProps<{ comment: IssueComment; projectId: number; cardId: number; users: Member[]; canWrite: boolean; disabled: boolean; refresh: () => Promise<void> }>()
const emit = defineEmits<{ dirty: [value: boolean]; busy: [value: boolean] }>()
const api = useApi()
const busy = ref(false)
const error = ref('')
const confirming = ref(false)
async function mutate(body?: string): Promise<boolean> {
    if (busy.value || props.disabled || !props.canWrite) return false
    busy.value = true; emit('busy', true); error.value = ''
    try {
        await api.request(`kanban/cards/${props.projectId}/comments/${props.comment.id}`, {
            method: body === undefined ? 'DELETE' : 'PUT', body: { body, expected_version: props.comment.version },
        })
        emit('dirty', false); confirming.value = false; await props.refresh(); return true
    } catch (failure) {
        if (apiStatus(failure) === 409) await props.refresh()
        error.value = apiStatus(failure) === 409 ? 'El comentario cambió. Revisa la versión actual; tu borrador se conserva.' : apiErrorMessage(failure)
        return false
    } finally { busy.value = false; emit('busy', false) }
}
onBeforeUnmount(() => emit('dirty', false))
</script>
<template>
    <article class="space-y-2 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
        <p class="text-xs"><strong>{{ comment.user?.name || 'Usuario eliminado' }}</strong><time class="ml-2 text-slate-500 dark:text-slate-400">{{ new Date(comment.created_at).toLocaleString('es-CL') }}</time><span v-if="comment.edited_at" class="ml-1 text-slate-500 dark:text-slate-400">(editado)</span></p>
        <p v-if="error" role="alert" class="text-sm text-amber-800 dark:text-amber-200">{{ error }}</p>
        <AdminKanbanInlineEdit :label="`Comentario #${comment.id}`" :value="comment.body" :readonly="!canWrite || !comment.can_update" :busy="busy || disabled" :save="mutate" :mention-users="users" :upload-context="{ projectId, cardId }" multiline description :maxlength="5000" @dirty="emit('dirty', $event)" @uploading="emit('busy', $event)" />
        <button v-if="canWrite && comment.can_delete && !confirming" :disabled="busy || disabled" class="text-xs font-semibold text-red-700 underline dark:text-red-400" @click="confirming = true">Eliminar comentario #{{ comment.id }}</button>
        <div v-if="confirming" role="alert" class="text-sm"><p>¿Eliminar este comentario? No se puede deshacer.</p><button :disabled="busy || disabled" class="mr-3 text-red-700 underline dark:text-red-400" @click="mutate()">Confirmar eliminación</button><button :disabled="busy" class="underline" @click="confirming = false">Conservar comentario</button></div>
    </article>
</template>
