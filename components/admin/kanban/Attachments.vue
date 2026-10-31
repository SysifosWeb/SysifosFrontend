<script setup lang="ts">
type Attachment = { id: number; name: string; mime: string; size: number; can_delete: boolean }
type Image = { filename: string; reference: string; referenced: boolean; can_delete: boolean }
const props = defineProps<{ projectId: number; cardId: number; canWrite: boolean; disabled: boolean }>()
const emit = defineEmits<{ busy: [value: boolean]; changed: [] }>()
const api = useApi()
const attachments = ref<Attachment[]>([])
const images = ref<Image[]>([])
const error = ref('')
const busy = ref(false)
const confirming = ref('')
let disposed = false
async function load() {
    try {
        const [files, captures] = await Promise.all([
            api.request<{ data: Attachment[] }>(`kanban/cards/${props.cardId}/attachments`, { query: { project_id: props.projectId } }),
            api.request<{ data: Image[] }>(`kanban/cards/${props.cardId}/images`, { query: { project_id: props.projectId } }),
        ])
        if (!disposed) { attachments.value = files.data; images.value = captures.data }
    } catch (failure) { if (!disposed) error.value = apiErrorMessage(failure) }
}
async function upload(event: Event) {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]; input.value = ''
    if (!file || busy.value || props.disabled || !props.canWrite) return
    if (file.size > 5 * 1024 * 1024) { error.value = 'El límite por archivo es 5 MB.'; return }
    busy.value = true; emit('busy', true); error.value = ''
    try {
        const body = new FormData(); body.append('file', file)
        await api.request(`kanban/cards/${props.cardId}/attachments`, { method: 'POST', query: { project_id: props.projectId }, body })
        await load(); emit('changed')
    } catch (failure) { error.value = apiErrorMessage(failure) }
    finally { busy.value = false; emit('busy', false) }
}
async function remove(kind: 'attachments' | 'images', id: number | string) {
    if (busy.value || props.disabled || !props.canWrite) return
    busy.value = true; emit('busy', true); error.value = ''
    try {
        await api.request(`kanban/cards/${props.cardId}/${kind}/${id}`, { method: 'DELETE', query: { project_id: props.projectId } })
        confirming.value = ''; await load(); emit('changed')
    } catch (failure) { error.value = apiStatus(failure) === 409 ? 'La captura sigue referenciada. Quita sus referencias guardadas antes de eliminarla.' : apiErrorMessage(failure) }
    finally { busy.value = false; emit('busy', false) }
}
async function download(file: Attachment) {
    if (busy.value) return
    busy.value = true; emit('busy', true); error.value = ''
    try {
        const blob = await api.download(`kanban/cards/${props.cardId}/attachments/${file.id}`, { project_id: props.projectId })
        const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = file.name; link.click()
        setTimeout(() => URL.revokeObjectURL(url), 1000)
    } catch (failure) { error.value = apiErrorMessage(failure) }
    finally { busy.value = false; emit('busy', false) }
}
onMounted(load)
onBeforeUnmount(() => { disposed = true })
</script>
<template>
    <section aria-label="Adjuntos del issue" class="space-y-3">
        <div class="flex items-center justify-between gap-3"><h3 class="text-sm font-semibold">Adjuntos privados</h3><button :disabled="busy || disabled" class="text-xs font-semibold text-sky-700 underline dark:text-sky-300" @click="load">Actualizar adjuntos</button></div>
        <p v-if="error" role="alert" class="text-sm text-amber-800 dark:text-amber-200">{{ error }} <button class="underline" @click="load">Actualizar archivos</button></p>
        <label v-if="canWrite" class="block text-xs font-medium">Subir adjunto (PNG, JPEG, WebP, PDF o TXT; máximo 5 MB)<input type="file" accept=".png,.jpg,.jpeg,.webp,.pdf,.txt" :disabled="busy || disabled" class="mt-2 block max-w-full !w-full !text-xs" @change="upload" /></label>
        <p v-if="!attachments.length" class="text-xs text-slate-500 dark:text-slate-400">Sin adjuntos descargables. Las capturas insertadas en texto se gestionan por separado.</p>
        <ul class="space-y-2"><li v-for="file in attachments" :key="file.id" class="rounded-lg border border-slate-200 p-3 text-xs dark:border-slate-700"><button :disabled="busy || disabled" class="font-semibold text-sky-700 underline dark:text-sky-300" @click="download(file)">Descargar {{ file.name }}</button><span class="ml-2 text-slate-500 dark:text-slate-400">{{ Math.ceil(file.size / 1024) }} KB</span><button v-if="canWrite && file.can_delete" :disabled="busy || disabled" class="ml-3 text-red-700 underline dark:text-red-400" @click="confirming = `attachments/${file.id}`">Eliminar adjunto</button><div v-if="confirming === `attachments/${file.id}`" role="alert" class="mt-2">¿Eliminar el archivo permanentemente? <button :disabled="busy" class="mr-3 underline" @click="remove('attachments', file.id)">Confirmar eliminación</button><button @click="confirming = ''">Conservar archivo</button></div></li></ul>
        <details v-if="images.length"><summary class="cursor-pointer text-xs font-semibold">Capturas guardadas · {{ images.length }}</summary><p class="my-2 text-xs text-slate-500 dark:text-slate-400">Solo los gestores pueden eliminar capturas sin referencias guardadas. Comprueba también los borradores antes de borrar.</p><ul class="space-y-2"><li v-for="image in images" :key="image.filename" class="break-all rounded border border-slate-200 p-2 text-xs dark:border-slate-700"><span>{{ image.filename }} · {{ image.referenced ? 'En uso' : 'Sin referencias guardadas' }}</span><button v-if="canWrite && image.can_delete" :disabled="busy || disabled" class="ml-2 text-red-700 underline dark:text-red-400" @click="confirming = `images/${image.filename}`">Eliminar captura</button><div v-if="confirming === `images/${image.filename}`" role="alert">¿Eliminar esta captura permanentemente? <button :disabled="busy" class="mr-3 underline" @click="remove('images', image.filename)">Confirmar eliminación</button><button @click="confirming = ''">Conservar captura</button></div></li></ul></details>
    </section>
</template>
