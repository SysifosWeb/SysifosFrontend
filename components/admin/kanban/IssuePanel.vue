<script setup lang="ts">
import { X, Loader2, RefreshCw, Trash2, Check, GitBranch, ExternalLink, MessageSquare, Activity } from 'lucide-vue-next'
import type { Column, Issue, IssueDetail, IssuePatch, IssueReference, Label, Member } from '~/types/kanban'
import { ISSUE_PRIORITIES, ISSUE_TYPES, issueInitials, canTransition } from '~/utils/kanban'

const props = defineProps<{
    issueId: number | null; projectId: number; projectName: string; canWrite: boolean
    users: Member[]; labels: Label[]; epics: IssueReference[]; columns: Column[]
}>()
const emit = defineEmits<{ close: []; saved: [issue: Issue]; deleted: []; open: [id: number]; dirty: [value: boolean]; saving: [value: boolean] }>()
const api = useApi()
const dialog = ref<HTMLDialogElement>()
const issue = ref<IssueDetail | null>(null)
const loading = ref(false)
const saving = ref(false)
const mediaBusy = ref(false)
watch(mediaBusy, value => emit('saving', saving.value || value))
const error = ref('')
const saved = ref(false)
const discard = ref(false)
const confirmingDelete = ref(false)
const tab = ref<'activity' | 'comments'>('activity')
const textDirty = reactive(new Set<string>())
const assigneeOpen = ref(false)
const assigneeDraft = ref<number[]>([])
const labelOpen = ref(false)
const labelDraft = ref<number[]>([])
const subtaskTitle = ref('')
watch(subtaskTitle, value => markDirty('subtask', !!value.trim()))
let sequence = 0
let disposed = false

const sameIds = (first: number[], second: number[]) => JSON.stringify([...first].sort((a, b) => a - b)) === JSON.stringify([...second].sort((a, b) => a - b))
const dirty = computed(() => textDirty.size > 0
    || (assigneeOpen.value && !sameIds(assigneeDraft.value, issue.value?.assignees.map(user => user.id) || []))
    || (labelOpen.value && !sameIds(labelDraft.value, issue.value?.labels.map(label => label.id) || [])))
watch(dirty, value => emit('dirty', value))
const assigneeOptions = computed(() => [...props.users, ...(issue.value?.assignees || []).filter(member => !props.users.some(user => user.id === member.id))])
const typeOptions = computed(() => ISSUE_TYPES.filter(type => type.value !== 'subtask' || issue.value?.type === 'subtask'))
const epicOptions = computed(() => {
    const options = props.epics.filter(epic => epic.id !== issue.value?.id)
    if (issue.value?.epic && !options.some(epic => epic.id === issue.value?.epic?.id)) options.push(issue.value.epic)
    return options
})
function markDirty(field: string, value: boolean) { if (value) textDirty.add(field); else textDirty.delete(field) }
function clearDrafts() { textDirty.clear(); subtaskTitle.value = ''; assigneeOpen.value = false; labelOpen.value = false; discard.value = false; emit('dirty', false) }

async function loadIssue(initial = false): Promise<void> {
    if (!props.issueId) return
    const started = ++sequence
    const id = props.issueId
    const projectId = props.projectId
    if (initial) { loading.value = true; issue.value = null; error.value = '' }
    try {
        const { data } = await api.request<{ data: IssueDetail }>(`kanban/cards/${id}`, { query: { project_id: projectId } })
        if (disposed || started !== sequence || props.issueId !== id || props.projectId !== projectId) return
        issue.value = data
    } catch (failure) {
        if (disposed || started !== sequence) return
        if ([401, 403, 404, 419].includes(apiStatus(failure))) { issue.value = null; clearDrafts() }
        error.value = apiErrorMessage(failure, 'No se pudo cargar el detalle. Vuelve a intentar.')
    } finally {
        if (!disposed && started === sequence) loading.value = false
    }
}

watch([() => props.issueId, () => props.projectId], async ([id]) => {
    sequence++; clearDrafts(); error.value = ''; saved.value = false; confirmingDelete.value = false; tab.value = 'activity'
    await nextTick()
    if (!id) { dialog.value?.close(); issue.value = null; return }
    if (!dialog.value?.open) dialog.value?.showModal()
    await loadIssue(true)
}, { immediate: true })

function close(force = false) {
    if (saving.value || mediaBusy.value) return
    if (!force && dirty.value) { discard.value = true; return }
    clearDrafts(); emit('close')
}

async function saveIssue(patch: IssuePatch): Promise<boolean> {
    if (!issue.value || saving.value || mediaBusy.value || !props.canWrite) return false
    const id = issue.value.id
    const projectId = props.projectId
    const version = issue.value.version
    saving.value = true; emit('saving', true); error.value = ''; saved.value = false
    try {
        const { data } = await api.request<{ data: Issue }>(`kanban/cards/${id}`, {
            method: 'PUT', query: { project_id: projectId }, body: { ...patch, expected_version: version },
        })
        if (disposed || props.issueId !== id || props.projectId !== projectId || !issue.value) return false
        issue.value = { ...issue.value, ...data }
        emit('saved', data); saved.value = true
        await loadIssue()
        return true
    } catch (failure) {
        if (disposed || props.issueId !== id) return false
        if (apiStatus(failure) === 409) {
            await loadIssue()
            error.value = 'Otra persona modificó este issue. Se cargó la versión actual y se conservó tu borrador. Revisa los cambios antes de guardar otra vez.'
        } else {
            error.value = apiErrorMessage(failure)
            if ([403, 404].includes(apiStatus(failure))) await loadIssue()
        }
        return false
    } finally {
        saving.value = false; emit('saving', false)
    }
}

async function addComment(body: string): Promise<boolean> {
    if (!issue.value || saving.value || mediaBusy.value || !props.canWrite || !body.trim()) return false
    const id = issue.value.id
    const projectId = props.projectId
    saving.value = true; emit('saving', true); error.value = ''
    try {
        await api.request(`kanban/cards/${id}/comments`, { method: 'POST', query: { project_id: projectId }, body: { body } })
        await loadIssue()
        saved.value = true
        return true
    } catch (failure) { error.value = apiErrorMessage(failure, 'No se pudo publicar el comentario. Tu borrador se conserva.'); return false }
    finally { saving.value = false; emit('saving', false) }
}

async function createSubtask() {
    if (!issue.value || saving.value || mediaBusy.value || !props.canWrite || subtaskTitle.value.trim().length < 2) return
    saving.value = true; emit('saving', true); error.value = ''
    try {
        await api.request('kanban/cards', { method: 'POST', query: { project_id: props.projectId },
            body: { title: subtaskTitle.value.trim(), type: 'subtask', parent_id: issue.value.id, status: 'todo' } })
        subtaskTitle.value = ''; textDirty.delete('subtask')
        await loadIssue()
        if (issue.value) emit('saved', issue.value)
    } catch (failure) { error.value = apiErrorMessage(failure) }
    finally { saving.value = false; emit('saving', false) }
}
async function changeSubtask(child: Issue, event: Event) {
    const select = event.target as HTMLSelectElement
    const status = select.value as Issue['status']
    select.value = child.status
    if (saving.value || mediaBusy.value || !props.canWrite || status === child.status) return
    saving.value = true; emit('saving', true); error.value = ''
    try {
        await api.request(`kanban/cards/${child.id}`, { method: 'PUT', query: { project_id: props.projectId }, body: { status, expected_version: child.version } })
        await loadIssue()
        if (issue.value) emit('saved', issue.value)
    } catch (failure) {
        if (apiStatus(failure) === 409) await loadIssue()
        error.value = apiErrorMessage(failure)
    } finally { saving.value = false; emit('saving', false) }
}

function changeSelect(field: 'status' | 'priority' | 'type' | 'epic_id', event: Event) {
    if (!issue.value) return
    const select = event.target as HTMLSelectElement
    const value = field === 'epic_id' ? (select.value ? Number(select.value) : null) : select.value
    select.value = String(issue.value[field] ?? '')
    if (value !== issue.value[field]) void saveIssue({ [field]: value } as IssuePatch)
}
function changeDate(field: 'start_date' | 'due_date', event: Event) {
    if (!issue.value) return
    const input = event.target as HTMLInputElement
    const value = input.value || null
    input.value = issue.value[field]?.slice(0, 10) || ''
    if (value !== (issue.value[field]?.slice(0, 10) || null)) void saveIssue({ [field]: value })
}
function changePoints(event: Event) {
    if (!issue.value) return
    const input = event.target as HTMLInputElement
    if (!input.checkValidity()) { input.reportValidity(); return }
    const value = input.value === '' ? null : Number(input.value)
    input.value = issue.value.story_points === null ? '' : String(issue.value.story_points)
    if (value !== issue.value.story_points) void saveIssue({ story_points: value })
}
async function saveAssignees() { if (await saveIssue({ assignee_ids: assigneeDraft.value })) assigneeOpen.value = false }
async function saveLabels() { if (await saveIssue({ label_ids: labelDraft.value })) labelOpen.value = false }
async function removeIssue() {
    if (!issue.value || saving.value || !props.canWrite) return
    saving.value = true; emit('saving', true); error.value = ''
    try {
        await api.request(`kanban/cards/${issue.value.id}`, { method: 'DELETE', query: { project_id: props.projectId }, body: { expected_version: issue.value.version } })
        clearDrafts(); saving.value = false; emit('saving', false); emit('deleted')
    } catch (failure) {
        error.value = apiErrorMessage(failure)
        if (apiStatus(failure) === 409) await loadIssue()
    } finally { saving.value = false; emit('saving', false) }
}
function outsideClick(event: MouseEvent) {
    if (event.target !== dialog.value) return
    const rect = dialog.value.getBoundingClientRect()
    if (event.clientX < rect.left || event.clientX > rect.right) close()
}
const fullDate = (value: string) => new Date(value).toLocaleString('es-CL', { dateStyle: 'medium', timeStyle: 'short' })
function tabKey(event: KeyboardEvent) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    tab.value = event.key === 'Home' ? 'activity' : event.key === 'End' ? 'comments' : tab.value === 'activity' ? 'comments' : 'activity'
    void nextTick(() => dialog.value?.querySelector<HTMLButtonElement>(`#issue-${tab.value}-tab`)?.focus())
}
onBeforeUnmount(() => { disposed = true; sequence++; emit('dirty', false) })
</script>

<template>
    <dialog ref="dialog" aria-labelledby="issue-panel-heading" class="admin-scope issue-panel fixed inset-y-0 left-auto right-0 !m-0 h-dvh max-h-none w-full max-w-[1060px] border-l border-slate-200 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100" @cancel.prevent="close()" @click="outsideClick">
        <div class="flex h-full flex-col">
            <header class="flex min-h-16 shrink-0 items-center gap-3 border-b border-slate-200 px-5 dark:border-slate-800 sm:px-7">
                <AdminKanbanIssueTypeIcon v-if="issue" :type="issue.type" />
                <h2 id="issue-panel-heading" class="text-sm font-semibold">{{ issue?.issue_key || 'Detalle del issue' }}</h2>
                <span class="hidden truncate text-xs text-slate-400 sm:block">{{ projectName }}</span>
                <span v-if="saving" role="status" class="ml-auto inline-flex items-center gap-1.5 text-xs text-slate-500"><Loader2 class="h-3.5 w-3.5 animate-spin" />Guardando…</span>
                <span v-else-if="saved" role="status" class="ml-auto inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400"><Check class="h-3.5 w-3.5" />Guardado</span>
                <span v-else class="ml-auto" />
                <button :disabled="saving || dirty" aria-label="Actualizar detalle" class="rounded-lg p-2 text-slate-400 hover:bg-slate-100 disabled:opacity-40 dark:hover:bg-slate-800" @click="loadIssue()"><RefreshCw class="h-4 w-4" /></button>
                <button :disabled="saving" aria-label="Cerrar detalle de issue" class="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800" @click="close()"><X class="h-5 w-5" /></button>
            </header>
            <div class="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                <div v-if="error" role="alert" class="mx-5 mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">{{ error }}<button v-if="!issue && !loading" class="ml-2 font-semibold underline" @click="loadIssue(true)">Reintentar</button></div>
                <div v-if="discard" role="alert" class="mx-5 mt-4 rounded-lg border border-amber-200 p-4 text-sm dark:border-amber-500/20"><p>Hay cambios sin guardar. ¿Quieres descartarlos?</p><div class="mt-3 flex gap-4"><button class="font-semibold text-red-600 dark:text-red-400" @click="close(true)">Descartar y cerrar</button><button class="font-semibold text-sky-600 dark:text-sky-400" @click="discard = false">Seguir editando</button></div></div>
                <div v-if="loading" role="status" class="space-y-6 p-7"><span class="sr-only">Cargando detalle del issue…</span><div class="h-7 w-3/4 animate-pulse rounded bg-slate-100 dark:bg-slate-800" /><div class="h-32 animate-pulse rounded bg-slate-100 dark:bg-slate-800" /><div class="h-24 animate-pulse rounded bg-slate-100 dark:bg-slate-800" /></div>
                <div v-else-if="issue" :key="issue.id" class="grid min-h-full md:grid-cols-[minmax(0,1fr)_280px]">
                    <section class="min-w-0 space-y-7 p-5 sm:p-7">
                        <p v-if="!canWrite" class="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500 dark:bg-slate-800">Solo lectura. No tienes permiso para editar este proyecto o está archivado.</p>
                        <button v-if="issue.parent" class="inline-flex items-center gap-1.5 text-xs font-medium text-sky-600 hover:underline dark:text-sky-400" :disabled="saving || dirty" @click="emit('open', issue.parent.id)"><GitBranch class="h-3.5 w-3.5" />{{ issue.parent.issue_key }} · {{ issue.parent.title }}</button>
                        <AdminKanbanInlineEdit label="Título" :value="issue.title" :readonly="!canWrite" :busy="saving" :save="value => saveIssue({ title: value.trim() })" :minlength="2" heading @dirty="markDirty('title', $event)" />
                        <section aria-labelledby="issue-description-heading"><h3 id="issue-description-heading" class="mb-2 text-sm font-semibold">Descripción</h3><AdminKanbanInlineEdit label="Descripción" :value="issue.description || ''" :readonly="!canWrite" :busy="saving || mediaBusy" :save="value => saveIssue({ description: value || null })" :upload-context="{ projectId, cardId: issue.id }" :maxlength="5000" multiline description placeholder="Añadir contexto, objetivos y próximos pasos…" @dirty="markDirty('description', $event)" @uploading="mediaBusy = $event" /></section>
                        <section v-if="issue.type !== 'subtask'" aria-labelledby="issue-subtasks-heading">
                            <h3 id="issue-subtasks-heading" class="mb-3 flex items-center gap-2 text-sm font-semibold"><GitBranch class="h-4 w-4 text-slate-400" />Subtareas <span class="text-xs font-normal text-slate-500 dark:text-slate-400">{{ issue.subtasks.filter(child => child.status === 'done').length }}/{{ issue.subtasks.length }}</span></h3>
                            <progress v-if="issue.subtasks.length" :value="issue.subtasks.filter(child => child.status === 'done').length" :max="issue.subtasks.length" aria-label="Progreso de subtareas" class="mb-3 h-2 w-full accent-sky-600" />
                            <ul class="divide-y divide-slate-100 rounded-lg border border-slate-200 dark:divide-slate-800 dark:border-slate-700"><li v-for="child in issue.subtasks" :key="child.id" class="flex flex-wrap items-center gap-2 p-3"><button :disabled="saving || dirty" class="flex min-w-32 flex-1 items-start gap-2 text-left text-sm hover:text-sky-600" @click="emit('open', child.id)"><AdminKanbanIssueTypeIcon :type="child.type" /><span><span class="mr-2 text-xs text-slate-500 dark:text-slate-400">{{ child.issue_key }}</span>{{ child.title }}</span></button><select :value="child.status" :aria-label="`Estado de subtarea ${child.issue_key}`" :disabled="saving || mediaBusy || !canWrite" class="!min-h-9 !w-auto !max-w-40 !py-1 !text-xs" @change="changeSubtask(child, $event)"><option v-for="column in columns" :key="column.id" :value="column.id" :disabled="!canTransition(columns, child.status, column.id)">{{ column.label }}</option></select></li></ul>
                            <form v-if="canWrite" class="mt-3 flex items-end gap-2" @submit.prevent="createSubtask"><label class="min-w-0 flex-1 text-xs font-medium">Nueva subtarea<input v-model="subtaskTitle" required minlength="2" maxlength="255" :disabled="saving || mediaBusy" placeholder="¿Qué falta por hacer?" /></label><button :disabled="saving || mediaBusy || subtaskTitle.trim().length < 2" class="min-h-10 rounded-lg bg-sky-600 px-3 text-sm font-semibold text-white disabled:opacity-50">Crear subtarea</button></form>
                        </section>
                        <section v-if="issue.links.length" aria-labelledby="issue-links-heading"><h3 id="issue-links-heading" class="mb-2 text-sm font-semibold">Enlaces externos</h3><ul class="space-y-2 text-xs"><li v-for="link in issue.links" :key="link.id" class="rounded-lg border border-slate-200 px-3 py-2 dark:border-slate-700"><a v-if="link.url && /^https?:\/\//i.test(link.url)" :href="link.url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-sky-600 dark:text-sky-400">{{ link.title }}<ExternalLink class="h-3 w-3" /></a><span v-else>{{ link.title }}</span><p class="mt-1 text-slate-400">{{ link.provider }} · {{ link.external_id }}</p></li></ul></section>
                        <section aria-labelledby="issue-activity-heading">
                            <h3 id="issue-activity-heading" class="mb-3 text-sm font-semibold">Actividad</h3>
                            <div class="mb-5 flex gap-4 border-b border-slate-200 dark:border-slate-800" role="tablist" aria-label="Actividad del issue" @keydown="tabKey"><button id="issue-activity-tab" role="tab" :aria-selected="tab === 'activity'" :tabindex="tab === 'activity' ? 0 : -1" aria-controls="issue-activity-panel" class="inline-flex items-center gap-1.5 border-b-2 pb-2 text-xs font-semibold" :class="tab === 'activity' ? 'border-sky-500 text-sky-600 dark:text-sky-400' : 'border-transparent text-slate-500'" @click="tab = 'activity'"><Activity class="h-3.5 w-3.5" />Historial</button><button id="issue-comments-tab" role="tab" :aria-selected="tab === 'comments'" :tabindex="tab === 'comments' ? 0 : -1" aria-controls="issue-comments-panel" class="inline-flex items-center gap-1.5 border-b-2 pb-2 text-xs font-semibold" :class="tab === 'comments' ? 'border-sky-500 text-sky-600 dark:text-sky-400' : 'border-transparent text-slate-500'" @click="tab = 'comments'"><MessageSquare class="h-3.5 w-3.5" />Comentarios <span class="text-slate-400">{{ issue.comments.length }}</span></button></div>
                            <div v-show="tab === 'activity'" id="issue-activity-panel" role="tabpanel" aria-labelledby="issue-activity-tab"><AdminKanbanActivityTimeline :activities="issue.activities" :columns="columns" :users="users" :labels="labels" /></div>
                            <div v-show="tab === 'comments'" id="issue-comments-panel" role="tabpanel" aria-labelledby="issue-comments-tab" class="space-y-5">
                                <AdminKanbanInlineEdit v-if="canWrite" label="Comentario" value="" :readonly="!canWrite" :busy="saving || mediaBusy" :save="addComment" :upload-context="{ projectId, cardId: issue.id }" :maxlength="5000" multiline description placeholder="Escribe un comentario o adjunta capturas como evidencia." @dirty="markDirty('comment', $event)" @uploading="mediaBusy = $event" />
                                <p v-if="!issue.comments.length" class="text-sm text-slate-500">Todavía no hay comentarios.</p>
                                <ul v-else class="space-y-5"><li v-for="comment in issue.comments" :key="comment.id" class="flex gap-3"><span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-[10px] font-semibold text-sky-700 dark:bg-sky-900 dark:text-sky-200">{{ issueInitials(comment.user?.name || 'Usuario') }}</span><div class="min-w-0"><p class="text-xs"><strong>{{ comment.user?.name || 'Usuario eliminado' }}</strong><time class="ml-2 text-slate-400">{{ fullDate(comment.created_at) }}</time><span v-if="comment.edited_at" class="ml-1 text-slate-400">(editado)</span></p><AdminKanbanDescriptionContent class="mt-1" :value="comment.body" /></div></li></ul>
                            </div>
                        </section>
                    </section>
                    <aside aria-label="Campos del issue" class="space-y-5 border-t border-slate-200 bg-slate-50/60 p-5 dark:border-slate-800 dark:bg-slate-950/20 md:border-l md:border-t-0">
                        <label class="block space-y-1.5 text-xs font-semibold">Estado<select :value="issue.status" :disabled="saving || !canWrite" class="!text-sm" @change="changeSelect('status', $event)"><option v-for="column in columns" :key="column.id" :value="column.id" :disabled="!canTransition(columns, issue.status, column.id)">{{ column.label }}</option></select></label>
                        <div><p class="mb-1.5 text-xs font-semibold">Responsables</p><button v-if="!assigneeOpen" :disabled="saving || !canWrite" class="flex min-h-10 w-full items-center gap-2 rounded-lg border border-transparent px-2 py-1.5 text-left text-sm hover:border-slate-200 hover:bg-white disabled:cursor-default dark:hover:border-slate-700 dark:hover:bg-slate-800" @click="assigneeDraft = issue.assignees.map(user => user.id); assigneeOpen = true"><AdminKanbanMemberAvatars v-if="issue.assignees.length" :members="issue.assignees" /><span class="min-w-0 flex-1 truncate text-xs text-slate-500 dark:text-slate-300">{{ issue.assignees.map(user => user.name).join(', ') || 'Sin asignar' }}</span></button><form v-else class="space-y-2 rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800" @submit.prevent="saveAssignees" @keydown.esc.stop.prevent="assigneeOpen = false"><fieldset :disabled="saving || !canWrite" class="max-h-48 space-y-2 overflow-y-auto"><legend class="sr-only">Elegir responsables</legend><label v-for="user in assigneeOptions" :key="user.id" class="flex items-center gap-2 text-xs font-normal"><input v-model="assigneeDraft" type="checkbox" :value="user.id" />{{ user.name }}<span v-if="!users.some(member => member.id === user.id)" class="text-amber-600">(sin acceso)</span></label><p v-if="!assigneeOptions.length" class="text-xs text-slate-500">No hay colaboradores disponibles.</p></fieldset><div class="flex gap-2"><button :disabled="saving || !canWrite" class="rounded bg-sky-600 px-2 py-1 text-xs text-white">Guardar</button><button type="button" :disabled="saving" class="px-2 text-xs text-slate-500" @click="assigneeOpen = false">Cancelar</button></div></form></div>
                        <label class="block space-y-1.5 text-xs font-semibold">Prioridad<select :value="issue.priority" :disabled="saving || !canWrite" class="!text-sm" @change="changeSelect('priority', $event)"><option v-for="(label, value) in ISSUE_PRIORITIES" :key="value" :value="value">{{ label }}</option></select></label>
                        <label class="block space-y-1.5 text-xs font-semibold">Tipo<select :value="issue.type" :disabled="saving || !canWrite" class="!text-sm" @change="changeSelect('type', $event)"><option v-for="type in typeOptions" :key="type.value" :value="type.value">{{ type.label }}</option></select></label>
                        <label v-if="issue.type !== 'epic' && issue.type !== 'subtask'" class="block space-y-1.5 text-xs font-semibold">Épica<select :value="issue.epic_id || ''" :disabled="saving || !canWrite" class="!text-sm" @change="changeSelect('epic_id', $event)"><option value="">Sin épica</option><option v-for="epic in epicOptions" :key="epic.id" :value="epic.id">{{ epic.issue_key }} · {{ epic.title }}</option></select></label>
                        <div><p class="mb-1.5 text-xs font-semibold">Etiquetas</p><button v-if="!labelOpen" :disabled="saving || !canWrite" class="flex min-h-9 w-full flex-wrap gap-1.5 rounded-lg px-2 py-1.5 text-left hover:bg-white dark:hover:bg-slate-800" @click="labelDraft = issue.labels.map(label => label.id); labelOpen = true"><span v-for="label in issue.labels" :key="label.id" class="inline-flex items-center gap-1 rounded bg-slate-200/60 px-1.5 py-0.5 text-xs dark:bg-slate-700"><span class="h-1.5 w-1.5 rounded-full" :style="{ backgroundColor: label.color }" />{{ label.name }}</span><span v-if="!issue.labels.length" class="text-xs text-slate-400">Sin etiquetas</span></button><form v-else class="space-y-2 rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800" @submit.prevent="saveLabels" @keydown.esc.stop.prevent="labelOpen = false"><fieldset :disabled="saving || !canWrite" class="max-h-40 space-y-2 overflow-y-auto"><legend class="sr-only">Elegir etiquetas</legend><label v-for="label in labels" :key="label.id" class="flex items-center gap-2 text-xs font-normal"><input v-model="labelDraft" type="checkbox" :value="label.id" />{{ label.name }}</label><p v-if="!labels.length" class="text-xs text-slate-500">Este proyecto no tiene etiquetas.</p></fieldset><div class="flex gap-2"><button :disabled="saving || !canWrite" class="rounded bg-sky-600 px-2 py-1 text-xs text-white">Guardar</button><button type="button" :disabled="saving" class="px-2 text-xs text-slate-500" @click="labelOpen = false">Cancelar</button></div></form></div>
                        <label class="block space-y-1.5 text-xs font-semibold">Fecha de inicio<input type="date" :value="issue.start_date?.slice(0, 10) || ''" :disabled="saving || !canWrite" class="!text-xs" @change="changeDate('start_date', $event)" /></label>
                        <label class="block space-y-1.5 text-xs font-semibold">Fecha límite<input type="date" :value="issue.due_date?.slice(0, 10) || ''" :disabled="saving || !canWrite" class="!text-xs" @change="changeDate('due_date', $event)" /></label>
                        <label class="block space-y-1.5 text-xs font-semibold">Estimación · puntos<input type="number" min="0" max="100" step="0.5" :value="issue.story_points ?? ''" :disabled="saving || !canWrite" placeholder="Sin estimar" class="!text-xs" @change="changePoints" /></label>
                        <dl class="space-y-4 border-t border-slate-200 pt-4 text-xs dark:border-slate-800"><div><dt class="mb-1 font-semibold">Reportado por</dt><dd class="text-slate-500 dark:text-slate-400">{{ issue.creator?.name || 'Usuario eliminado' }}</dd></div><div v-if="issue.sprint"><dt class="mb-1 font-semibold">Sprint</dt><dd class="text-slate-500 dark:text-slate-400">{{ issue.sprint.name }}</dd></div><div><dt class="mb-1 font-semibold">Creado</dt><dd class="text-slate-500 dark:text-slate-400">{{ fullDate(issue.created_at) }}</dd></div><div><dt class="mb-1 font-semibold">Actualizado</dt><dd class="text-slate-500 dark:text-slate-400">{{ fullDate(issue.updated_at) }}<span v-if="issue.editor"> · {{ issue.editor.name }}</span></dd></div></dl>
                        <button v-if="canWrite && !confirmingDelete" :disabled="saving || dirty" class="inline-flex items-center gap-1.5 text-xs text-red-700 dark:text-red-400 hover:underline disabled:opacity-40" @click="confirmingDelete = true"><Trash2 class="h-3.5 w-3.5" />Eliminar issue</button>
                        <div v-if="confirmingDelete" class="rounded-lg border border-red-200 bg-red-50 p-3 text-xs dark:border-red-500/20 dark:bg-red-500/10"><p>¿Eliminar este issue? No se puede deshacer.</p><div class="mt-2 flex gap-3"><button :disabled="saving" class="font-semibold text-red-600 dark:text-red-300" @click="removeIssue">Eliminar</button><button :disabled="saving" class="text-slate-500" @click="confirmingDelete = false">Conservar</button></div></div>
                    </aside>
                </div>
            </div>
        </div>
    </dialog>
</template>

<style>
body:has(dialog.issue-panel[open]) { overflow: hidden; }
</style>
