<script setup lang="ts">
import { ArrowLeft, Users, Archive, RotateCcw, Settings2, Search, X } from 'lucide-vue-next'
import type { ProjectContext } from '~/types/kanban'

definePageMeta({ layout: 'admin', validate: route => /^[1-9]\d*$/.test(String(route.params.project)) && Number.isSafeInteger(Number(route.params.project)) })
type Member = { id: number; name: string; role: string; active: boolean }
type Project = { id: number; name: string; project_key: string; description: string | null; owner_id: number | null; visibility: string; archived_at: string | null; config_version: number; members: Member[]; permissions: { manage: boolean; collaborate: boolean; role: string }; activity: { id: number; action: string; user?: { name: string }; created_at: string }[] }
const route = useRoute()
const api = useApi()
const projectContext = useState<ProjectContext | null>('admin-active-project', () => null)
const base = computed(() => `kanban/projects/${route.params.project}`)
const project = ref<Project | null>(null)
watch(project, value => { projectContext.value = value ? { project: value, permissions: value.permissions } : null })
let requestEpoch = 0
let disposed = false
const loading = ref(true)
const busy = ref(false)
const error = ref('')
const success = ref('')
const conflict = ref(false)
const form = reactive({ name: '', description: '', visibility: 'private', owner_id: null as number | null })
const candidateQuery = ref('')
const candidates = ref<{ id: number; name: string }[]>([])
const candidateRole = ref('collaborator')
const candidatePage = ref(1)
const candidateLastPage = ref(1)
const searching = ref(false)
const searchError = ref('')
const searched = ref(false)
const membershipRoles = { manager: 'Gestor', collaborator: 'Colaborador', viewer: 'Lector' }
const archiveDialog = ref<HTMLDialogElement>()
const editable = computed(() => Boolean(project.value?.permissions.manage && !project.value?.archived_at))
const boardLink = computed(() => ({ path: `/admin/kanban/${route.params.project}`, query: route.query }))
useHead(() => ({ title: `${project.value?.name || 'Proyecto'} · Configuración · SysifosWeb` }))

async function failure(cause: any) {
    const status = cause.statusCode || cause.status || cause.response?.status
    conflict.value = status === 409
    if ([403, 404].includes(status)) project.value = null
    const fields = cause.data?.errors
    error.value = fields ? Object.values(fields).flat().join(' ') : cause.data?.message || 'No se pudo guardar. Comprueba la conexión e inténtalo otra vez.'
}

function applyProject(value: Project) {
    project.value = value
    Object.assign(form, { name: value.name, description: value.description || '', visibility: value.visibility, owner_id: value.owner_id })
}
async function load() {
    const epoch = requestEpoch
    loading.value = true
    error.value = ''
    conflict.value = false
    try {
        const response = await api.request<{ data: Project }>(base.value)
        if (!disposed && epoch === requestEpoch) applyProject(response.data)
    } catch (cause) { if (!disposed && epoch === requestEpoch) await failure(cause) }
    finally { if (!disposed && epoch === requestEpoch) loading.value = false }
}
async function save() {
    if (busy.value || !editable.value || !project.value) return
    const epoch = requestEpoch
    busy.value = true
    error.value = ''
    success.value = ''
    try {
        const response = await api.request<{ data: Project }>(base.value, { method: 'PUT', body: {
            name: form.name, visibility: form.visibility, description: form.description || null,
            ...(form.owner_id ? { owner_id: form.owner_id } : {}),
            expected_config_version: project.value.config_version,
        } })
        if (disposed || epoch !== requestEpoch) return
        applyProject(response.data)
        success.value = 'Configuración guardada.'
    } catch (cause) { if (!disposed && epoch === requestEpoch) await failure(cause) }
    finally { if (!disposed && epoch === requestEpoch) busy.value = false }
}

async function searchMembers(page = 1) {
    if (candidateQuery.value.trim().length < 2 || !editable.value) return
    const epoch = requestEpoch
    const search = candidateQuery.value.trim()
    searching.value = true
    searchError.value = ''
    try {
        const response = await api.request<{ data: { id: number; name: string }[]; last_page: number }>(`${base.value}/candidates`, { query: { q: candidateQuery.value.trim(), page } })
        if (disposed || epoch !== requestEpoch || search !== candidateQuery.value.trim()) return
        searched.value = true
        candidates.value = response.data
        candidatePage.value = page
        candidateLastPage.value = response.last_page
    } catch { searchError.value = 'No se pudieron buscar usuarios. Reintenta la búsqueda.' }
    finally { searching.value = false }
}

function changeMemberRole(member: Member, event: Event) {
    const select = event.target as HTMLSelectElement
    const role = select.value
    select.value = member.role
    setMember(member.id, role)
}
async function setMember(userId: number, role: string) {
    if (busy.value || !editable.value || !project.value) return
    const epoch = requestEpoch
    busy.value = true
    error.value = ''
    success.value = ''
    try {
        const response = await api.request<{ data: Project }>(`${base.value}/members`, { method: 'PUT', body: { user_id: userId, role, expected_config_version: project.value.config_version } })
        if (disposed || epoch !== requestEpoch) return
        // Member edits do not replace unsaved project fields.
        project.value = response.data
        candidates.value = candidates.value.filter(candidate => candidate.id !== userId)
        success.value = 'Miembro actualizado.'
    } catch (cause) { if (!disposed && epoch === requestEpoch) await failure(cause) }
    finally { if (!disposed && epoch === requestEpoch) busy.value = false }
}
async function removeMember(member: Member) {
    if (busy.value || !editable.value || !project.value) return
    const epoch = requestEpoch
    busy.value = true
    error.value = ''
    success.value = ''
    try {
        await api.request(`${base.value}/members/${member.id}`, { method: 'DELETE', body: { expected_config_version: project.value.config_version } })
        const response = await api.request<{ data: Project }>(base.value)
        if (disposed || epoch !== requestEpoch) return
        project.value = response.data
        success.value = 'Miembro retirado.'
    } catch (cause) { if (!disposed && epoch === requestEpoch) await failure(cause) }
    finally { if (!disposed && epoch === requestEpoch) busy.value = false }
}
async function toggleArchive() {
    if (busy.value || !project.value?.permissions.manage) return
    const epoch = requestEpoch
    busy.value = true
    error.value = ''
    success.value = ''
    try {
        const response = await api.request<{ data: Project }>(`${base.value}/archive`, { method: 'PUT', body: { archived: !project.value.archived_at, expected_config_version: project.value.config_version } })
        if (disposed || epoch !== requestEpoch) return
        project.value = response.data
        archiveDialog.value?.close()
        success.value = response.data.archived_at ? 'Proyecto archivado. Sus tareas e historial se conservan.' : 'Proyecto recuperado.'
    } catch (cause) { if (!disposed && epoch === requestEpoch) { await failure(cause); archiveDialog.value?.close() } }
    finally { if (!disposed && epoch === requestEpoch) busy.value = false }
}
const activityLabels: Record<string, string> = { project_updated: 'actualizó la configuración', project_archived: 'archivó el proyecto', project_restored: 'recuperó el proyecto', member_updated: 'actualizó un miembro', member_removed: 'retiró un miembro' }
watch(() => route.params.project, () => { requestEpoch++; busy.value = false; project.value = null; candidates.value = []; success.value = ''; load() })
onBeforeUnmount(() => { disposed = true; requestEpoch++ })
onMounted(load)
</script>

<template>
    <div class="project-settings">
        <NuxtLink :to="boardLink" class="back-link"><ArrowLeft :size="16" /> Volver al tablero</NuxtLink>
        <header class="page-heading"><div><p>{{ project?.project_key || 'Proyecto' }}</p><h2>{{ project?.name || 'Configuración del proyecto' }}</h2></div><span v-if="project?.archived_at" class="tag">Archivado · Solo lectura</span></header>
        <nav v-if="project" class="project-tabs" aria-label="Vistas del proyecto"><NuxtLink :to="boardLink">Tablero y lista</NuxtLink><span aria-current="page">Configuración y miembros</span></nav>
        <p v-if="loading" role="status" class="panel">Cargando configuración…</p>
        <div v-if="error" role="alert" class="message error"><p>{{ error }}</p><button v-if="conflict" :disabled="busy" @click="load">Descartar borrador y cargar versión actual</button><button v-else-if="!project" @click="load">Reintentar</button></div>
        <p v-if="success" role="status" class="message">{{ success }}</p>
        <template v-if="project && !loading">
            <p v-if="!project.permissions.manage" class="message">Puedes consultar el proyecto. Solo sus gestores pueden cambiar la configuración y los miembros.</p>
            <div class="settings-grid">
                <section class="panel">
                    <h3><Settings2 :size="18" /> Configuración</h3>
                    <form @submit.prevent="save">
                        <fieldset :disabled="!editable || busy">
                            <label>Nombre<input type="text" v-model="form.name" required minlength="2" maxlength="120" /></label>
                            <label>Clave del proyecto<input type="text" :value="project.project_key" readonly disabled /><small>La clave es estable y no cambia al renombrar el proyecto.</small></label>
                            <label>Descripción<textarea v-model="form.description" rows="4" maxlength="2000" /></label>
                            <label>Responsable<select v-model="form.owner_id"><option v-if="!form.owner_id" :value="null" disabled>Selecciona un miembro</option><option v-for="member in project.members.filter(m => m.active)" :key="member.id" :value="member.id">{{ member.name }}</option></select><small>Al transferir la responsabilidad, esa persona recibe el rol de gestor.</small></label>
                            <label>Acceso<select v-model="form.visibility"><option value="private">Privado: miembros y administradores globales</option><option value="team">Equipo: también administradores y editores activos</option></select></label>
                            <p class="hint">{{ form.visibility === 'private' ? 'Solo las personas incorporadas al proyecto y los administradores globales pueden consultarlo.' : 'Los administradores y editores activos pueden colaborar. Un rol explícito de lector limita la edición de los editores.' }}</p>
                            <button v-if="project.permissions.manage" class="primary" type="submit">{{ busy ? 'Guardando…' : 'Guardar configuración' }}</button>
                        </fieldset>
                    </form>
                </section>
                <aside class="settings-side">
                <section class="panel">
                    <h3><Users :size="18" /> Miembros</h3>
                    <p class="hint">Gestor: configura el proyecto. Colaborador: trabaja en las tareas. Lector: solo consulta.</p>
                    <ul class="members">
                        <li v-for="member in project.members" :key="member.id"><div><strong>{{ member.name }}</strong><small>{{ member.id === project.owner_id ? 'Responsable del proyecto' : !member.active ? 'Cuenta inactiva' : membershipRoles[member.role as keyof typeof membershipRoles] }}</small></div>
                            <select v-if="editable" :value="member.role" :disabled="busy || member.id === project.owner_id || !member.active" :aria-label="`Rol de ${member.name}`" @change="changeMemberRole(member, $event)"><option v-for="(label, role) in membershipRoles" :key="role" :value="role">{{ label }}</option></select>
                            <button v-if="editable && member.id !== project.owner_id" :disabled="busy" :aria-label="`Retirar a ${member.name}`" class="icon-button" @click="removeMember(member)"><X :size="16" /></button>
                        </li>
                    </ul>
                    <p v-if="!project.members.length" class="hint">Sin miembros explícitos. El acceso depende de la visibilidad y de los administradores globales.</p>
                    <form v-if="editable" class="member-search" @submit.prevent="searchMembers()"><label>Incorporar un usuario existente<input type="search" v-model="candidateQuery" minlength="2" maxlength="120" required placeholder="Nombre o correo exacto" /></label><button :disabled="searching || busy" class="secondary"><Search :size="16" /> Buscar</button></form>
                    <p v-if="searchError" role="alert" class="hint">{{ searchError }}</p>
                    <p v-if="searching" role="status" class="hint">Buscando usuarios…</p><p v-else-if="searched && !candidates.length" role="status" class="hint">No hay usuarios nuevos que incorporar con esta búsqueda.</p>
                    <template v-if="candidates.length && editable">
                        <label>Rol al incorporar<select v-model="candidateRole"><option v-for="(label, role) in membershipRoles" :key="role" :value="role">{{ label }}</option></select></label>
                        <ul class="members"><li v-for="candidate in candidates" :key="candidate.id"><strong>{{ candidate.name }}</strong><button :disabled="busy" class="secondary" @click="setMember(candidate.id, candidateRole)">Incorporar</button></li></ul>
                        <div v-if="candidateLastPage > 1" class="pagination"><button :disabled="searching || candidatePage <= 1" @click="searchMembers(candidatePage - 1)">Anterior</button><span>{{ candidatePage }} / {{ candidateLastPage }}</span><button :disabled="searching || candidatePage >= candidateLastPage" @click="searchMembers(candidatePage + 1)">Siguiente</button></div>
                    </template>
                </section>
                <section v-if="project.permissions.manage" class="panel archive-panel"><h3><Archive :size="18" /> {{ project.archived_at ? 'Recuperar proyecto' : 'Archivar proyecto' }}</h3><p class="hint">Archivar conserva las tareas, los miembros y el historial. El proyecto queda disponible en Archivados y no admite cambios hasta recuperarlo.</p><button :disabled="busy" class="secondary" @click="archiveDialog?.showModal()"><RotateCcw v-if="project.archived_at" :size="16" />{{ project.archived_at ? 'Recuperar proyecto' : 'Archivar proyecto' }}</button></section>
                </aside>
                <section v-if="project.activity.length" class="panel history"><h3>Historial de configuración</h3><ul><li v-for="event in project.activity" :key="event.id"><p><strong>{{ event.user?.name || 'Usuario eliminado' }}</strong> {{ activityLabels[event.action] }}.</p><time>{{ new Date(event.created_at).toLocaleString('es-CL', { timeZone: 'America/Santiago' }) }}</time></li></ul></section>

            </div>
        </template>
        <dialog ref="archiveDialog" aria-labelledby="archive-heading" @cancel="busy && $event.preventDefault()"><form @submit.prevent="toggleArchive"><h3 id="archive-heading">{{ project?.archived_at ? 'Recuperar' : 'Archivar' }} {{ project?.name }}</h3><p>{{ project?.archived_at ? 'El equipo podrá volver a trabajar en sus tareas.' : 'El proyecto quedará en modo de solo lectura. Puedes recuperarlo después.' }}</p><div class="dialog-actions"><button :disabled="busy" type="button" class="secondary" @click="archiveDialog?.close()">Cancelar</button><button :disabled="busy" class="primary">{{ busy ? 'Guardando…' : 'Confirmar' }}</button></div></form></dialog>
    </div>
</template>

<style scoped>
.project-settings { color:#25222c; font-size:14px; }
.back-link { display:inline-flex; align-items:center; gap:8px; min-height:44px; font-weight:600; }
.page-heading { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:16px 0; }
.page-heading p,.hint,small,time { color:#696473; font-size:12px; line-height:1.6; }
h2 { font-size:24px; font-weight:600; overflow-wrap:anywhere; }
h3 { display:flex; align-items:center; gap:8px; font-size:16px; font-weight:600; margin-bottom:16px; }
.project-tabs { display:flex; gap:20px; flex-wrap:wrap; margin-bottom:20px; }
.project-tabs>* { min-height:44px; display:flex; align-items:center; }
.project-tabs [aria-current] { border-bottom:2px solid #8a6bb0; font-weight:600; }
.settings-grid { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:20px; align-items:start; }
.settings-side { display:grid; gap:20px; min-width:0; }
.history { grid-column:1/-1; }
.panel { min-width:0; background:#fff; border:1px solid #eeebf2; border-radius:20px; padding:24px; }
label { display:block; margin-bottom:18px; font-weight:500; }
label small { display:block; margin-top:5px; font-weight:400; }
input,select,textarea { display:block; width:100%; margin-top:8px; min-height:44px; }
select { text-overflow:ellipsis; }
input[type="search"] { border:1px solid #ded9e5; border-radius:12px; background:#fff; padding:10px 12px; color:#25222c; }
input::placeholder { color:#696473; }
:global(.dark .project-settings input[type="search"]) { background:#2b2832; color:#f4f1f7; border-color:#51475e; }
:global(.dark .project-settings input::placeholder) { color:#b9b2c3; }
fieldset:disabled { opacity:.8; }
button { min-height:44px; }
.primary,.secondary { display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:10px 16px; border-radius:12px; font-weight:600; }
.primary { background:#25222c; color:white; }
.secondary { background:#f3eff8; color:#352c40; }
button:disabled { opacity:.45; cursor:not-allowed; }
.message { background:#f3eff8; padding:16px; border-radius:12px; margin-bottom:16px; }
.message button { text-decoration:underline; font-weight:600; }
.error { background:#fff4ec; color:#7d3b20; }
.members { margin:16px 0; }
.members li { display:flex; gap:8px; align-items:center; border-bottom:1px solid #eeebf2; padding:10px 0; min-width:0; }
.members li>div,.members li>strong { flex:1; min-width:0; overflow-wrap:anywhere; }
.members select { width:130px; margin:0; flex-shrink:0; }
.members strong { font-weight:600; } .members small { display:block; }
.icon-button { width:44px; display:grid; place-items:center; flex-shrink:0; }
.member-search { margin-top:24px; } .member-search label { margin-bottom:8px; }
.pagination,.dialog-actions { display:flex; justify-content:space-between; align-items:center; gap:12px; }
.history li { margin-top:16px; }
.archive-panel .secondary { margin-top:16px; }
.tag { padding:6px 12px; border-radius:999px; background:#eee8f5; white-space:nowrap; }
dialog { margin:auto; max-height:90dvh; width:min(480px,calc(100vw - 32px)); border-radius:20px; padding:24px; color:#25222c; }
dialog::backdrop { background:rgb(0 0 0 / .5); }
.dialog-actions { margin-top:24px; justify-content:flex-end; }
.project-settings :is(button,a,input,select,textarea):focus-visible { outline:2px solid #765494; outline-offset:3px; }
:global(.dark .project-settings) { color:#f4f1f7; }
:global(.dark .project-settings .panel),:global(.dark .project-settings dialog) { background:#211f26; color:#f4f1f7; border-color:#38323f; }
:global(.dark .project-settings .hint),:global(.dark .project-settings small),:global(.dark .project-settings time),:global(.dark .project-settings .page-heading p) { color:#b9b2c3; }
:global(.dark .project-settings .secondary),:global(.dark .project-settings .message) { background:#382e45; color:#eee4f6; }
@media(max-width:900px) { .settings-grid { grid-template-columns:1fr; } }
@media(max-width:480px) { .panel { padding:18px; } .page-heading { flex-wrap:wrap; } .members li { flex-wrap:wrap; } .members li>div { flex-basis:100%; } .members select { flex:1; } }
@media(prefers-reduced-motion:reduce) { * { scroll-behavior:auto; transition:none; } }
</style>
