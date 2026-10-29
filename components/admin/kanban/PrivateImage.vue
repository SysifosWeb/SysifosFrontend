<script setup lang="ts">
import { privateImageReference } from '~/utils/issueDescription'
const props = defineProps<{ reference: string; alt: string }>()
const api = useApi()
const source = ref('')
const error = ref('')
const loading = ref(false)
let sequence = 0
const container = ref<HTMLElement>()
let observer: IntersectionObserver | undefined
function release() { if (source.value) URL.revokeObjectURL(source.value); source.value = '' }
async function load() {
    const current = ++sequence
    release(); error.value = ''; loading.value = true
    const image = privateImageReference(props.reference)
    if (!image) { error.value = 'Referencia de imagen inválida.'; loading.value = false; return }
    try {
        const blob = await api.download(`kanban/cards/${image.cardId}/images/${image.filename}`, { project_id: image.projectId })
        if (current !== sequence) return
        if (!['image/png', 'image/jpeg', 'image/webp'].includes(blob.type)) throw new Error('Invalid image')
        source.value = URL.createObjectURL(blob)
    } catch (failure) {
        if (current === sequence) error.value = apiErrorMessage(failure, 'No se pudo cargar la captura.')
    } finally { if (current === sequence) loading.value = false }
}
function observe() {
    observer?.disconnect()
    sequence++; release(); error.value = ''; loading.value = false
    if (!container.value) return
    observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) { observer?.disconnect(); void load() }
    })
    observer.observe(container.value)
}
watch(() => props.reference, observe)
onMounted(observe)
onBeforeUnmount(() => { sequence++; observer?.disconnect(); release() })
</script>

<template>
    <span ref="container" class="my-3 block min-h-10 rounded-lg border border-slate-200 p-2 dark:border-slate-700">
        <span v-if="loading" role="status" class="text-xs">Cargando captura…</span>
        <span v-else-if="error" role="status" class="text-xs">{{ error }} <button type="button" class="underline" @click="load">Reintentar</button></span>
        <a v-else-if="source" :href="source" target="_blank" rel="noopener noreferrer" :aria-label="`Abrir captura: ${alt}`"><img :src="source" :alt="alt || 'Captura de evidencia'" class="max-h-96 max-w-full rounded object-contain" @error="error = 'No se pudo mostrar la captura.'" /></a>
        <span v-else class="text-xs">Captura adjunta</span>
    </span>
</template>
