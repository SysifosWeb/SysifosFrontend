<script setup lang="ts">
const props = defineProps<{ projectId: number; cardId: number; disabled: boolean; maxCharacters: number }>()
const emit = defineEmits<{ insert: [syntax: string]; busy: [value: boolean] }>()
const api = useApi()
const busy = ref(false)
const error = ref('')
async function upload(event: Event) {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]
    input.value = ''
    if (!file || props.disabled || busy.value) return
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type) || file.size > 5 * 1024 * 1024) { error.value = 'Selecciona PNG, JPEG o WebP de hasta 5 MB.'; return }
    const label = file.name.replace(/[\[\]\r\n]/g, '').slice(0, 100) || 'Captura de evidencia'
    // Leave room for the server-generated private reference before uploading.
    if (label.length + 120 > props.maxCharacters) { error.value = 'No queda espacio para otra imagen en este texto.'; return }
    busy.value = true; emit('busy', true); error.value = ''
    try {
        const body = new FormData(); body.append('image', file)
        const { data } = await api.request<{ data: { reference: string } }>(`kanban/cards/${props.cardId}/images`, { method: 'POST', query: { project_id: props.projectId }, body })
        emit('insert', `![${label}](${data.reference})`)
    } catch (failure) { error.value = apiErrorMessage(failure, 'No se pudo subir la captura. Tu texto se conserva.') }
    finally { busy.value = false; emit('busy', false) }
}
</script>

<template>
    <div class="space-y-1 text-xs">
        <label class="inline-flex cursor-pointer items-center gap-2 rounded border border-slate-300 px-3 py-2 font-semibold dark:border-slate-600">{{ busy ? 'Subiendo captura…' : 'Subir captura' }}<input type="file" accept="image/png,image/jpeg,image/webp" :disabled="disabled || busy" class="max-w-48 text-xs" @change="upload" /></label>
        <p class="text-slate-600 dark:text-slate-300">PNG, JPEG o WebP · hasta 5 MB · máximo 6000 × 6000 px. Privada para el proyecto. Se almacena al subirla, incluso si cancelas el borrador.</p>
        <p v-if="busy" role="status">Espera a que termine la subida.</p>
        <p v-if="error" role="alert" class="text-red-700 dark:text-red-300">{{ error }}</p>
    </div>
</template>
