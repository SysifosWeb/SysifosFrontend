<script setup lang="ts">
import { Pencil, Check, X, Loader2 } from 'lucide-vue-next'
import { descriptionUrl } from '~/utils/issueDescription'
const props = withDefaults(defineProps<{
    label: string; value: string; readonly: boolean; busy: boolean; save: (value: string) => Promise<boolean>
    multiline?: boolean; heading?: boolean; placeholder?: string; maxlength?: number; minlength?: number; description?: boolean
    uploadContext?: { projectId: number; cardId: number }
}>(), { multiline: false, heading: false, placeholder: 'Sin definir', maxlength: 255, minlength: 0 })
const emit = defineEmits<{ dirty: [value: boolean]; uploading: [value: boolean] }>()
const uploading = ref(false)
function uploadBusy(value: boolean) { uploading.value = value; emit('uploading', value) }
function insertUpload(syntax: string) { draft.value += `${draft.value ? '\n' : ''}${syntax}` }
const editing = ref(false)
const draft = ref('')
const original = ref('')
const input = ref<HTMLInputElement | HTMLTextAreaElement>()
const attachment = ref<'image' | 'link' | null>(null)
const attachmentUrl = ref('')
const attachmentText = ref('')
const attachmentError = ref('')
function insertAttachment() {
    const url = descriptionUrl(attachmentUrl.value.trim(), attachment.value === 'image')
    if (!url) { attachmentError.value = attachment.value === 'image' ? 'Usa una URL HTTPS válida.' : 'Usa una URL HTTP o HTTPS válida.'; return }
    const label = attachmentText.value.replace(/[\[\]\r\n]/g, '').trim() || (attachment.value === 'image' ? 'Imagen' : 'Enlace')
    const syntax = `${attachment.value === 'image' ? '!' : ''}[${label}](${url.replace(/\(/g, '%28').replace(/\)/g, '%29')})`
    const text = `${draft.value}${draft.value ? '\n' : ''}${syntax}`
    if (text.length > props.maxlength) { attachmentError.value = `La descripción admite hasta ${props.maxlength} caracteres.`; return }
    draft.value = text; attachment.value = null; attachmentUrl.value = ''; attachmentText.value = ''; attachmentError.value = ''
    void nextTick(() => input.value?.focus())
}
const dirty = computed(() => editing.value && (uploading.value || draft.value !== original.value || (attachment.value !== null && !!(attachmentUrl.value || attachmentText.value))))
watch(dirty, value => emit('dirty', value))
function edit() {
    if (props.readonly || props.busy) return
    draft.value = props.value; original.value = props.value; editing.value = true; attachment.value = null; attachmentUrl.value = ''; attachmentText.value = ''; attachmentError.value = ''
    void nextTick(() => input.value?.focus())
}
function cancel() { if (!props.busy && !uploading.value) editing.value = false }
async function submit() {
    if (props.busy || props.readonly || uploading.value) return
    if (attachment.value && (attachmentUrl.value || attachmentText.value)) { attachmentError.value = 'Inserta el contenido o cancela la inserción antes de guardar.'; return }
    if (!dirty.value || await props.save(draft.value)) editing.value = false
}
onBeforeUnmount(() => emit('dirty', false))
</script>

<template>
    <div>
        <form v-if="editing" class="space-y-2" @submit.prevent="submit" @keydown.esc.stop.prevent="cancel">
            <fieldset :disabled="busy || uploading || readonly" class="min-w-0 space-y-2">
            <label class="sr-only" :for="`inline-${label}`">{{ label }}</label>
            <textarea v-if="multiline" :id="`inline-${label}`" ref="input" v-model="draft" rows="6" :maxlength="maxlength" :disabled="busy || readonly" class="!text-sm !font-normal" />
            <input v-else :id="`inline-${label}`" ref="input" v-model="draft" :required="minlength > 0" :minlength="minlength" :maxlength="maxlength" :disabled="busy || readonly" :class="heading ? '!text-xl !font-semibold' : '!text-sm'" />
            <div v-if="description" class="space-y-2 text-xs">
                <div class="flex gap-3"><button v-for="kind in (['image', 'link'] as const)" :key="kind" type="button" :disabled="busy || readonly" class="font-semibold text-sky-700 underline dark:text-sky-300" @click="attachment = kind; attachmentError = ''">{{ kind === 'image' ? 'Añadir imagen por URL' : 'Añadir enlace' }}</button></div>
                <div v-if="attachment" class="space-y-2 rounded-lg border border-slate-200 p-3 dark:border-slate-700" @keydown.enter.stop.prevent="insertAttachment">
                    <label class="block">{{ attachment === 'image' ? 'URL HTTPS de la imagen' : 'URL del enlace' }}<input v-model="attachmentUrl" type="url" :disabled="busy || readonly" placeholder="https://…" /></label>
                    <label class="block">{{ attachment === 'image' ? 'Descripción de la imagen' : 'Texto del enlace' }}<input v-model="attachmentText" maxlength="200" :disabled="busy || readonly" /></label>
                    <p v-if="attachmentError" role="alert" class="text-red-700 dark:text-red-300">{{ attachmentError }}</p>
                    <button type="button" :disabled="busy || readonly" class="mr-3 font-semibold underline" @click="insertAttachment">Insertar</button><button type="button" :disabled="busy" class="underline" @click="attachment = null">Cancelar inserción</button>
                </div>
                <AdminKanbanImageUpload v-if="uploadContext" :project-id="uploadContext.projectId" :card-id="uploadContext.cardId" :disabled="busy || readonly || uploading" :max-characters="maxlength - draft.length - 1" @insert="insertUpload" @busy="uploadBusy" />
                <p class="text-slate-600 dark:text-slate-300">Pega enlaces de GitHub para reconocer repositorios, issues y PR. También puedes escribir ![Descripción](https://…/imagen.png). Las imágenes externas contactan su servidor al mostrarse.</p>
                <details v-if="draft"><summary class="cursor-pointer">Vista previa</summary><AdminKanbanDescriptionContent :value="draft" /></details>
            </div>
            <p v-if="value !== original" class="rounded-md bg-amber-50 p-2 text-xs text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">Valor actual en el servidor: <span class="line-clamp-3 whitespace-pre-wrap">{{ value || 'Sin definir' }}</span></p>
            <div class="flex items-center gap-2"><button type="submit" :disabled="busy || readonly" class="inline-flex min-h-8 items-center gap-1 rounded-md bg-sky-600 px-3 text-xs font-semibold text-white hover:bg-sky-700 disabled:opacity-50"><Loader2 v-if="busy" class="h-3 w-3 animate-spin" /><Check v-else class="h-3 w-3" />{{ label === 'Comentario' ? 'Publicar comentario' : 'Guardar' }}</button><button type="button" :disabled="busy" class="inline-flex min-h-8 items-center gap-1 rounded-md px-2 text-xs text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800" @click="cancel"><X class="h-3 w-3" />Cancelar</button></div>
            </fieldset>
        </form>
        <div v-else-if="description" class="space-y-2">
            <AdminKanbanDescriptionContent v-if="value" :value="value" />
            <p v-else class="text-sm text-slate-600 dark:text-slate-300">{{ placeholder }}</p>
            <button v-if="!readonly" type="button" :disabled="busy" :aria-label="label === 'Comentario' ? 'Añadir comentario' : `Editar ${label.toLowerCase()}`" class="inline-flex items-center gap-1.5 rounded px-2 py-1.5 text-xs font-semibold text-sky-700 hover:bg-slate-100 dark:text-sky-300 dark:hover:bg-slate-800" @click="edit"><Pencil class="h-3.5 w-3.5" />{{ label === 'Comentario' ? 'Añadir comentario' : 'Editar descripción' }}</button>
        </div>
        <div v-else-if="readonly" class="whitespace-pre-wrap break-words" :class="heading ? 'text-xl font-semibold leading-snug text-slate-900 dark:text-white' : 'text-sm leading-relaxed text-slate-600 dark:text-slate-300'">{{ value || placeholder }}</div>
        <button v-else type="button" :disabled="busy" :aria-label="`Editar ${label.toLowerCase()}`" class="group -ml-2 flex w-[calc(100%+1rem)] items-start gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500 disabled:opacity-60 dark:hover:bg-slate-800/60" @click="edit"><span class="min-w-0 flex-1 whitespace-pre-wrap break-words" :class="heading ? 'text-xl font-semibold leading-snug text-slate-900 dark:text-white' : value ? 'text-sm leading-relaxed text-slate-600 dark:text-slate-300' : 'text-sm text-slate-400'">{{ value || placeholder }}</span><Pencil class="mt-1 h-3.5 w-3.5 shrink-0 text-slate-400 opacity-0 group-hover:opacity-100 group-focus:opacity-100" /></button>
    </div>
</template>
