<script setup lang="ts">
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  FileCode2,
  List,
  ListOrdered,
  Quote,
  Link2,
  Unlink,
  Image as ImageIcon,
  Minus,
  Table as TableIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo2,
  Redo2,
  RemoveFormatting,
  Eye,
  Code2,
} from 'lucide-vue-next'
import { sanitizeArticleHtml } from '~/utils/sanitizeHtml'

const props = withDefaults(defineProps<{
  modelValue: string
  placeholder?: string
  minHeight?: string
}>(), {
  modelValue: '',
  placeholder: 'Escribe aquí el contenido completo del artículo...',
  minHeight: '420px',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const editorRef = ref<HTMLElement | null>(null)
const sourceMode = ref(false)
const sourceHtml = ref(props.modelValue || '')
const activeFormats = ref<Record<string, boolean>>({})
const currentBlock = ref('p')

const linkModal = ref({ open: false, url: '', text: '' })
const imageModal = ref({ open: false, url: '', alt: '' })

const wordCount = computed(() => {
  const plain = (props.modelValue || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return plain ? plain.split(' ').length : 0
})

const readingMinutes = computed(() => Math.max(1, Math.ceil(wordCount.value / 200)))

watch(() => props.modelValue, (val) => {
  const safe = sanitizeArticleHtml(val)
  if (sourceMode.value) {
    if (sourceHtml.value !== safe) sourceHtml.value = safe
    return
  }
  if (editorRef.value && editorRef.value.innerHTML !== safe) {
    editorRef.value.innerHTML = safe
  }
})

onMounted(() => {
  if (editorRef.value) {
    editorRef.value.innerHTML = sanitizeArticleHtml(props.modelValue)
  }
  document.addEventListener('selectionchange', refreshToolbarState)
})

onBeforeUnmount(() => {
  document.removeEventListener('selectionchange', refreshToolbarState)
})

function refreshToolbarState() {
  if (sourceMode.value || !editorRef.value) return
  const sel = window.getSelection()
  if (!sel || !sel.anchorNode || !editorRef.value.contains(sel.anchorNode)) return

  activeFormats.value = {
    bold: document.queryCommandState('bold'),
    italic: document.queryCommandState('italic'),
    underline: document.queryCommandState('underline'),
    strikeThrough: document.queryCommandState('strikeThrough'),
    insertUnorderedList: document.queryCommandState('insertUnorderedList'),
    insertOrderedList: document.queryCommandState('insertOrderedList'),
    justifyLeft: document.queryCommandState('justifyLeft'),
    justifyCenter: document.queryCommandState('justifyCenter'),
    justifyRight: document.queryCommandState('justifyRight'),
  }

  const block = String(document.queryCommandValue('formatBlock') || 'p').toLowerCase().replace(/[<>]/g, '')
  currentBlock.value = ['p', 'h2', 'h3', 'h4', 'blockquote', 'pre'].includes(block) ? block : 'p'
}

function syncFromEditor() {
  if (!editorRef.value) return
  const clean = sanitizeArticleHtml(editorRef.value.innerHTML)
  emit('update:modelValue', clean)
}

function exec(command: string, value?: string) {
  if (sourceMode.value) return
  editorRef.value?.focus()
  document.execCommand(command, false, value)
  syncFromEditor()
  refreshToolbarState()
}

function applyBlock(tag: string) {
  exec('formatBlock', `<${tag}>`)
}

function wrapInlineCode() {
  if (sourceMode.value || !editorRef.value) return
  editorRef.value.focus()
  const sel = window.getSelection()
  if (!sel || sel.rangeCount === 0) return
  const text = sel.toString() || 'código'
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  document.execCommand('insertHTML', false, `<code>${escaped}</code>`)
  syncFromEditor()
}

function insertTable() {
  const html = `<table><thead><tr><th>Columna 1</th><th>Columna 2</th><th>Columna 3</th></tr></thead><tbody><tr><td>Dato 1</td><td>Dato 2</td><td>Dato 3</td></tr><tr><td>Dato 4</td><td>Dato 5</td><td>Dato 6</td></tr></tbody></table><p><br></p>`
  exec('insertHTML', html)
}

function openLinkModal() {
  const sel = window.getSelection()
  linkModal.value = { open: true, url: 'https://', text: sel ? sel.toString() : '' }
}

function isSafeHref(url: string): boolean {
  const trimmed = url.trim()
  return /^(https?:\/\/|mailto:|\/|#)/i.test(trimmed)
}

function confirmLink() {
  const url = linkModal.value.url.trim()
  if (!isSafeHref(url)) return
  const label = (linkModal.value.text || url).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const safeUrl = url.replace(/"/g, '&quot;')
  exec('insertHTML', `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${label}</a>`)
  linkModal.value.open = false
}

function openImageModal() {
  imageModal.value = { open: true, url: '', alt: '' }
}

function confirmImage() {
  const url = imageModal.value.url.trim()
  if (!/^(https?:\/\/|\/)/i.test(url)) return
  const safeUrl = url.replace(/"/g, '&quot;')
  const safeAlt = (imageModal.value.alt || '').replace(/"/g, '&quot;')
  exec('insertHTML', `<figure><img src="${safeUrl}" alt="${safeAlt}" loading="lazy" /></figure><p><br></p>`)
  imageModal.value.open = false
}

function handlePaste(e: ClipboardEvent) {
  if (sourceMode.value) return
  const html = e.clipboardData?.getData('text/html')
  if (html) {
    e.preventDefault()
    document.execCommand('insertHTML', false, sanitizeArticleHtml(html))
    syncFromEditor()
  }
}

function toggleSourceMode() {
  if (!sourceMode.value) {
    sourceHtml.value = sanitizeArticleHtml(editorRef.value?.innerHTML || props.modelValue)
    sourceMode.value = true
  } else {
    const clean = sanitizeArticleHtml(sourceHtml.value)
    emit('update:modelValue', clean)
    sourceMode.value = false
    nextTick(() => {
      if (editorRef.value) editorRef.value.innerHTML = clean
    })
  }
}

function onSourceInput() {
  emit('update:modelValue', sanitizeArticleHtml(sourceHtml.value))
}
</script>

<template>
  <div class="rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 overflow-hidden shadow-sm">
    <!-- Barra de herramientas -->
    <div class="flex flex-wrap items-center gap-1 px-2.5 py-2 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/80">
      <button type="button" title="Deshacer" :disabled="sourceMode" @click="exec('undo')" class="editor-btn">
        <Undo2 class="w-4 h-4" />
      </button>
      <button type="button" title="Rehacer" :disabled="sourceMode" @click="exec('redo')" class="editor-btn">
        <Redo2 class="w-4 h-4" />
      </button>

      <span class="mx-1 h-5 w-px bg-gray-300 dark:bg-gray-600" />

      <select
        :value="currentBlock"
        :disabled="sourceMode"
        aria-label="Tipo de bloque"
        @change="applyBlock(($event.target as HTMLSelectElement).value)"
        class="h-8 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-2 text-xs font-medium text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="p">Párrafo</option>
        <option value="h2">Título H2</option>
        <option value="h3">Subtítulo H3</option>
        <option value="h4">Subtítulo H4</option>
        <option value="blockquote">Cita</option>
        <option value="pre">Bloque de código</option>
      </select>

      <span class="mx-1 h-5 w-px bg-gray-300 dark:bg-gray-600" />

      <button type="button" title="Negrita" :disabled="sourceMode" :class="['editor-btn', activeFormats.bold && 'editor-btn-active']" @click="exec('bold')">
        <Bold class="w-4 h-4" />
      </button>
      <button type="button" title="Cursiva" :disabled="sourceMode" :class="['editor-btn', activeFormats.italic && 'editor-btn-active']" @click="exec('italic')">
        <Italic class="w-4 h-4" />
      </button>
      <button type="button" title="Subrayado" :disabled="sourceMode" :class="['editor-btn', activeFormats.underline && 'editor-btn-active']" @click="exec('underline')">
        <Underline class="w-4 h-4" />
      </button>
      <button type="button" title="Tachado" :disabled="sourceMode" :class="['editor-btn', activeFormats.strikeThrough && 'editor-btn-active']" @click="exec('strikeThrough')">
        <Strikethrough class="w-4 h-4" />
      </button>
      <button type="button" title="Código en línea" :disabled="sourceMode" @click="wrapInlineCode" class="editor-btn">
        <Code class="w-4 h-4" />
      </button>

      <span class="mx-1 h-5 w-px bg-gray-300 dark:bg-gray-600" />

      <button type="button" title="Lista con viñetas" :disabled="sourceMode" :class="['editor-btn', activeFormats.insertUnorderedList && 'editor-btn-active']" @click="exec('insertUnorderedList')">
        <List class="w-4 h-4" />
      </button>
      <button type="button" title="Lista numerada" :disabled="sourceMode" :class="['editor-btn', activeFormats.insertOrderedList && 'editor-btn-active']" @click="exec('insertOrderedList')">
        <ListOrdered class="w-4 h-4" />
      </button>
      <button type="button" title="Cita" :disabled="sourceMode" @click="applyBlock('blockquote')" class="editor-btn">
        <Quote class="w-4 h-4" />
      </button>
      <button type="button" title="Bloque de código" :disabled="sourceMode" @click="applyBlock('pre')" class="editor-btn">
        <FileCode2 class="w-4 h-4" />
      </button>

      <span class="mx-1 h-5 w-px bg-gray-300 dark:bg-gray-600" />

      <button type="button" title="Alinear izquierda" :disabled="sourceMode" :class="['editor-btn', activeFormats.justifyLeft && 'editor-btn-active']" @click="exec('justifyLeft')">
        <AlignLeft class="w-4 h-4" />
      </button>
      <button type="button" title="Centrar" :disabled="sourceMode" :class="['editor-btn', activeFormats.justifyCenter && 'editor-btn-active']" @click="exec('justifyCenter')">
        <AlignCenter class="w-4 h-4" />
      </button>
      <button type="button" title="Alinear derecha" :disabled="sourceMode" :class="['editor-btn', activeFormats.justifyRight && 'editor-btn-active']" @click="exec('justifyRight')">
        <AlignRight class="w-4 h-4" />
      </button>

      <span class="mx-1 h-5 w-px bg-gray-300 dark:bg-gray-600" />

      <button type="button" title="Insertar enlace" :disabled="sourceMode" @click="openLinkModal" class="editor-btn">
        <Link2 class="w-4 h-4" />
      </button>
      <button type="button" title="Quitar enlace" :disabled="sourceMode" @click="exec('unlink')" class="editor-btn">
        <Unlink class="w-4 h-4" />
      </button>
      <button type="button" title="Insertar imagen por URL" :disabled="sourceMode" @click="openImageModal" class="editor-btn">
        <ImageIcon class="w-4 h-4" />
      </button>
      <button type="button" title="Insertar tabla 3x3" :disabled="sourceMode" @click="insertTable" class="editor-btn">
        <TableIcon class="w-4 h-4" />
      </button>
      <button type="button" title="Línea divisoria" :disabled="sourceMode" @click="exec('insertHorizontalRule')" class="editor-btn">
        <Minus class="w-4 h-4" />
      </button>
      <button type="button" title="Limpiar formato" :disabled="sourceMode" @click="exec('removeFormat')" class="editor-btn">
        <RemoveFormatting class="w-4 h-4" />
      </button>

      <button
        type="button"
        class="ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-200/70 dark:hover:bg-gray-700 transition-colors"
        @click="toggleSourceMode"
      >
        <Eye v-if="sourceMode" class="w-3.5 h-3.5" />
        <Code2 v-else class="w-3.5 h-3.5" />
        {{ sourceMode ? 'Vista visual' : 'HTML' }}
      </button>
    </div>

    <!-- Modales simples de enlace e imagen -->
    <div v-if="linkModal.open" class="flex flex-wrap items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-950/40 border-b border-blue-200 dark:border-blue-800 text-xs">
      <input v-model="linkModal.url" type="url" placeholder="https://ejemplo.com" class="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white flex-1 min-w-[180px]" />
      <input v-model="linkModal.text" type="text" placeholder="Texto del enlace" class="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white flex-1 min-w-[140px]" />
      <button type="button" @click="confirmLink" class="px-3 py-1 rounded bg-blue-600 text-white font-medium hover:bg-blue-700">Insertar</button>
      <button type="button" @click="linkModal.open = false" class="px-2 py-1 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Cancelar</button>
    </div>

    <div v-if="imageModal.open" class="flex flex-wrap items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-950/40 border-b border-blue-200 dark:border-blue-800 text-xs">
      <input v-model="imageModal.url" type="url" placeholder="https://... o /storage/..." class="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white flex-1 min-w-[200px]" />
      <input v-model="imageModal.alt" type="text" placeholder="Texto alternativo (alt)" class="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white flex-1 min-w-[140px]" />
      <button type="button" @click="confirmImage" class="px-3 py-1 rounded bg-blue-600 text-white font-medium hover:bg-blue-700">Insertar imagen</button>
      <button type="button" @click="imageModal.open = false" class="px-2 py-1 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Cancelar</button>
    </div>

    <!-- Área editable -->
    <textarea
      v-if="sourceMode"
      v-model="sourceHtml"
      :style="{ minHeight }"
      @input="onSourceInput"
      class="w-full p-4 font-mono text-xs bg-gray-950 text-emerald-300 focus:outline-none resize-y"
    />
    <div
      v-else
      ref="editorRef"
      contenteditable="true"
      :data-placeholder="placeholder"
      :style="{ minHeight }"
      @input="syncFromEditor"
      @paste="handlePaste"
      @keyup="refreshToolbarState"
      @mouseup="refreshToolbarState"
      class="article-editor-surface prose prose-sm sm:prose dark:prose-invert max-w-none p-4 focus:outline-none overflow-y-auto"
    />

    <!-- Pie con estadísticas -->
    <div class="flex items-center justify-between px-3 py-1.5 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 text-xs text-gray-500 dark:text-gray-400">
      <span>Editor nativo SysifosWeb</span>
      <span>{{ wordCount }} palabras · ~{{ readingMinutes }} min lectura</span>
    </div>
  </div>
</template>

<style scoped>
.editor-btn {
  @apply p-1.5 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700 disabled:opacity-40 disabled:pointer-events-none transition-colors;
}
.editor-btn-active {
  @apply bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300;
}
.article-editor-surface:empty::before {
  content: attr(data-placeholder);
  color: #9ca3af;
  pointer-events: none;
}
</style>
