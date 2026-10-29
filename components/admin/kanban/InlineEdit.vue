<script setup lang="ts">
import { Pencil, Check, X, Loader2 } from 'lucide-vue-next'
const props = withDefaults(defineProps<{
    label: string; value: string; readonly: boolean; busy: boolean; save: (value: string) => Promise<boolean>
    multiline?: boolean; heading?: boolean; placeholder?: string; maxlength?: number; minlength?: number
}>(), { multiline: false, heading: false, placeholder: 'Sin definir', maxlength: 255, minlength: 0 })
const emit = defineEmits<{ dirty: [value: boolean] }>()
const editing = ref(false)
const draft = ref('')
const original = ref('')
const input = ref<HTMLInputElement | HTMLTextAreaElement>()
const dirty = computed(() => editing.value && draft.value !== original.value)
watch(dirty, value => emit('dirty', value))
function edit() {
    if (props.readonly || props.busy) return
    draft.value = props.value; original.value = props.value; editing.value = true
    void nextTick(() => input.value?.focus())
}
function cancel() { editing.value = false }
async function submit() {
    if (props.busy || props.readonly) return
    if (!dirty.value || await props.save(draft.value)) editing.value = false
}
onBeforeUnmount(() => emit('dirty', false))
</script>

<template>
    <div>
        <form v-if="editing" class="space-y-2" @submit.prevent="submit" @keydown.esc.stop.prevent="cancel">
            <label class="sr-only" :for="`inline-${label}`">{{ label }}</label>
            <textarea v-if="multiline" :id="`inline-${label}`" ref="input" v-model="draft" rows="6" :maxlength="maxlength" :disabled="busy || readonly" class="!text-sm !font-normal" />
            <input v-else :id="`inline-${label}`" ref="input" v-model="draft" :required="minlength > 0" :minlength="minlength" :maxlength="maxlength" :disabled="busy || readonly" :class="heading ? '!text-xl !font-semibold' : '!text-sm'" />
            <p v-if="value !== original" class="rounded-md bg-amber-50 p-2 text-xs text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">Valor actual en el servidor: <span class="line-clamp-3 whitespace-pre-wrap">{{ value || 'Sin definir' }}</span></p>
            <div class="flex items-center gap-2"><button type="submit" :disabled="busy || readonly" class="inline-flex min-h-8 items-center gap-1 rounded-md bg-sky-600 px-3 text-xs font-semibold text-white hover:bg-sky-700 disabled:opacity-50"><Loader2 v-if="busy" class="h-3 w-3 animate-spin" /><Check v-else class="h-3 w-3" />Guardar</button><button type="button" :disabled="busy" class="inline-flex min-h-8 items-center gap-1 rounded-md px-2 text-xs text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800" @click="cancel"><X class="h-3 w-3" />Cancelar</button></div>
        </form>
        <div v-else-if="readonly" class="whitespace-pre-wrap break-words" :class="heading ? 'text-xl font-semibold leading-snug text-slate-900 dark:text-white' : 'text-sm leading-relaxed text-slate-600 dark:text-slate-300'">{{ value || placeholder }}</div>
        <button v-else type="button" :disabled="busy" :aria-label="`Editar ${label.toLowerCase()}`" class="group -ml-2 flex w-[calc(100%+1rem)] items-start gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500 disabled:opacity-60 dark:hover:bg-slate-800/60" @click="edit"><span class="min-w-0 flex-1 whitespace-pre-wrap break-words" :class="heading ? 'text-xl font-semibold leading-snug text-slate-900 dark:text-white' : value ? 'text-sm leading-relaxed text-slate-600 dark:text-slate-300' : 'text-sm text-slate-400'">{{ value || placeholder }}</span><Pencil class="mt-1 h-3.5 w-3.5 shrink-0 text-slate-400 opacity-0 group-hover:opacity-100 group-focus:opacity-100" /></button>
    </div>
</template>
