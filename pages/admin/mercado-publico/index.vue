<script setup lang="ts">
import { Search, Landmark, ArrowRight, Loader2, X, Copy, ExternalLink, Check } from 'lucide-vue-next'

definePageMeta({ layout: 'admin' })
useHead({ title: 'Mercado Público · SysifosWeb' })
type Source = 'licitaciones' | 'compra-agil' | 'ordenes-compra'
type RecordItem = {
    codigo: string; nombre: string; descripcion: string | null; organismo: string | null
    estado: string | null; region: string | null; cierre: string | null; publicacion: string | null
    monto: number | null; moneda: string | null; fuente: Source
    productos?: { nombre: string; descripcion: string | null; cantidad: number | null }[]
    documentos?: { nombre: string }[]; proveedor?: string | null
}
type SearchResult = { data: RecordItem[]; meta: { total: number; total_paginas: number; pagina: number; consultado_en: string; advertencia: string } }
type ImportProject = { id: number; name: string; project_key: string; permissions: { manage: boolean; collaborate: boolean } }
type ImportedIssue = { id: number; kanban_project_id: number; issue_key: string; warning?: string }
const tabs: { id: Source; label: string; description: string }[] = [
    { id: 'licitaciones', label: 'Licitaciones', description: 'Convocatorias para ofrecer servicios y soluciones.' },
    { id: 'compra-agil', label: 'Compra Ágil', description: 'Solicitudes de cotización publicadas por organismos del Estado.' },
    { id: 'ordenes-compra', label: 'Órdenes de compra', description: 'Antecedentes de compras realizadas. No son convocatorias abiertas.' },
]
const stateOptions = computed(() => {
    if (source.value === 'compra-agil') {
        return [['publicada', 'Publicadas'], ['cerrada', 'Cerradas'], ['desierta', 'Desiertas'], ['cancelada', 'Canceladas'], ['proveedor_seleccionado', 'Proveedor seleccionado']]
    }
    if (source.value === 'ordenes-compra') {
        return [['todos', 'Todos'], ['enviadaproveedor', 'Enviadas a proveedor'], ['aceptada', 'Aceptadas'], ['cancelada', 'Canceladas'], ['recepcionconforme', 'Recepción conforme'], ['pendienterecepcion', 'Pendientes de recepción']]
    }
    return [['activas', 'Activas'], ['publicada', 'Publicadas'], ['cerrada', 'Cerradas'], ['adjudicada', 'Adjudicadas'], ['desierta', 'Desiertas'], ['revocada', 'Revocadas'], ['suspendida', 'Suspendidas'], ['todos', 'Todos']]
})
const regions = ['Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo', 'Valparaíso', "O’Higgins", 'Maule', 'Biobío', 'La Araucanía', 'Los Lagos', 'Aysén', 'Magallanes', 'Metropolitana', 'Los Ríos', 'Arica y Parinacota', 'Ñuble']
function day(offset = 0) {
    const date = new Date(); date.setDate(date.getDate() + offset)
    return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Santiago', year: 'numeric', month: '2-digit', day: '2-digit' }).format(date)
}
const source = ref<Source>('licitaciones')
const form = reactive({ q: 'web, software, informática, digitalización', excluir: '', codigo: '', estado: 'activas', fecha: '', desde: day(-14), hasta: day(), region: '' })
const token = useCookie('auth_token')
const config = useRuntimeConfig()
const base = `${String(config.public.apiUrl).replace(/\/$/, '')}/mercado-publico/procesos`
const headers = () => ({ Authorization: `Bearer ${token.value}`, Accept: 'application/json' })
const loading = ref(false)
const error = ref('')
const result = ref<SearchResult | null>(null)
const applied = ref<{ source: Source; query: Record<string, string | number> } | null>(null)
const page = ref(1)
const detailDialog = ref<HTMLDialogElement>()
const detail = ref<RecordItem | null>(null)
const detailLoading = ref(false)
const detailError = ref('')
const copied = ref(false)
const importProjects = ref<ImportProject[]>([])
const importProjectId = ref<number | null>(null)
const importProjectsLoading = ref(false)
const importing = ref(false)
const importError = ref('')
const importedIssue = ref<ImportedIssue | null>(null)
let searchVersion = 0
let detailVersion = 0
let disposed = false
const activeDescription = computed(() => tabs.find(tab => tab.id === source.value)?.description)

async function messageFor(error: any): Promise<string> {
    const status = error.statusCode || error.status || error.response?.status
    if ([401, 419].includes(status)) {
        token.value = null
        await navigateTo('/admin/login')
        return 'Tu sesión venció. Inicia sesión nuevamente.'
    }
    if (status === 403) return 'Esta sección está disponible para administradores activos.'
    if (status === 429) return 'Has realizado varias consultas seguidas. Espera un minuto antes de volver a buscar.'
    if (status === 422) return Object.values(error.data?.errors || {}).flat().join(' ') || 'Revisa los filtros de búsqueda.'
    if (status === 404) return 'No se encontró el proceso o la integración aún no está disponible en este servidor.'
    return error.data?.message || 'No se pudo completar la consulta. Intenta nuevamente.'
}
function selectSource(next: Source) {
    searchVersion++; detailVersion++
    source.value = next
    form.estado = next === 'licitaciones' ? 'activas' : next === 'compra-agil' ? 'publicada' : 'todos'
    form.q = next === 'compra-agil' ? 'web' : 'web, software, informática, digitalización'
    form.excluir = ''; form.codigo = ''; form.fecha = ''
    result.value = null; applied.value = null; error.value = ''; loading.value = false; page.value = 1
    detailDialog.value?.close()
}
function buildQuery(): Record<string, string | number> {
    if (form.codigo.trim()) return { codigo: form.codigo.trim(), por_pagina: 15 }
    const query: Record<string, string | number> = { estado: form.estado, por_pagina: 15 }
    if (form.q.trim()) query.q = form.q.trim()
    if (source.value === 'compra-agil') {
        query.desde = form.desde; query.hasta = form.hasta
        if (form.region) query.region = form.region
    } else {
        if (form.fecha) query.fecha = form.fecha
        if (form.excluir.trim()) query.excluir = form.excluir.trim()
    }
    return query
}
async function search(nextPage = 1, reuse = false) {
    const current = reuse && applied.value ? applied.value : { source: source.value, query: buildQuery() }
    applied.value = current
    const version = ++searchVersion
    loading.value = true; error.value = ''; result.value = null
    try {
        const response = await $fetch<SearchResult>(`${base}/${current.source}`, { headers: headers(), query: { ...current.query, pagina: nextPage }, retry: 0, timeout: 50000 })
        if (disposed || version !== searchVersion) return
        if (!Array.isArray(response.data) || !response.meta || typeof response.meta.total !== 'number') throw new Error('Respuesta inesperada del servidor.')
        result.value = response; page.value = nextPage
    } catch (e: any) {
        if (!disposed && version === searchVersion) error.value = await messageFor(e)
    } finally {
        if (!disposed && version === searchVersion) loading.value = false
    }
}
async function openDetail(item: RecordItem) {
    const version = ++detailVersion
    detail.value = null; detailError.value = ''; copied.value = false; detailLoading.value = true
    importedIssue.value = null; importError.value = ''
    detailDialog.value?.showModal()
    void loadImportProjects(version)
    try {
        const response = await $fetch<{ data: RecordItem }>(`${base}/${item.fuente}/${encodeURIComponent(item.codigo)}`, { headers: headers(), retry: 0, timeout: 50000 })
        if (!disposed && version === detailVersion) detail.value = response.data
    } catch (e: any) {
        if (!disposed && version === detailVersion) detailError.value = await messageFor(e)
    } finally {
        if (!disposed && version === detailVersion) detailLoading.value = false
    }
}
async function loadImportProjects(version: number) {
    importProjectsLoading.value = true
    importProjects.value = []
    try {
        const response = await $fetch<{ data: ImportProject[] }>(`${String(config.public.apiUrl).replace(/\/$/, '')}/kanban/projects`, {
            headers: headers(), query: { per_page: 100 }, retry: 0
        })
        if (disposed || version !== detailVersion) return
        importProjects.value = response.data.filter(project => project.permissions.manage && project.permissions.collaborate)
        if (!importProjects.value.some(project => project.id === importProjectId.value)) {
            importProjectId.value = importProjects.value.length === 1 ? importProjects.value[0]!.id : null
        }
    } catch (e: any) {
        if (!disposed && version === detailVersion) importError.value = await messageFor(e)
    } finally {
        if (!disposed && version === detailVersion) importProjectsLoading.value = false
    }
}
function money(item: RecordItem) {
    if (item.monto === null || item.monto === undefined) return 'Monto no informado'
    return `${new Intl.NumberFormat('es-CL', { maximumFractionDigits: 2 }).format(Number(item.monto))} ${item.moneda || ''}`.trim()
}
function dateText(value: string | null | undefined) {
    if (!value) return 'No informada'
    if (/Z$|[+-]\d{2}:\d{2}$/.test(value)) {
        const date = new Date(value)
        if (!Number.isNaN(date.getTime())) return new Intl.DateTimeFormat('es-CL', { timeZone: 'America/Santiago', dateStyle: 'short', timeStyle: 'short' }).format(date)
    }
    const match = value.match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})/)
    return match ? `${match[3]}/${match[2]}/${match[1]} ${match[4]}:${match[5]}` : value
}
async function copySummary() {
    if (!detail.value) return
    const d = detail.value
    try {
        await navigator.clipboard.writeText(`${d.codigo} — ${d.nombre}\nOrganismo: ${d.organismo || 'No informado'}\nEstado: ${d.estado || 'No informado'}\nMonto: ${money(d)}\nCierre: ${dateText(d.cierre)}\n\n${d.descripcion || ''}\n\n${(d.productos || []).map(p => `${p.nombre}: ${p.descripcion || ''}`).join('\n')}\n\nPendiente: revisar bases, requisitos, costos y condiciones de pago.`)
        copied.value = true
    } catch { detailError.value = 'No se pudo copiar. Puedes seleccionar y copiar el texto del detalle.' }
}
async function convertToIssue() {
    if (!detail.value || !importProjectId.value || importing.value || importedIssue.value) return
    const version = detailVersion
    const item = detail.value
    const projectId = importProjectId.value
    importing.value = true; importError.value = ''
    try {
        const response = await $fetch<{ data: ImportedIssue }>(`${String(config.public.apiUrl).replace(/\/$/, '')}/kanban/import`, {
            method: 'POST',
            headers: headers(),
            query: { project_id: projectId },
            body: { source: item.fuente, code: item.codigo },
            retry: 0, timeout: 50000
        })
        if (!disposed && version === detailVersion) importedIssue.value = response.data
    } catch (e: any) {
        if (!disposed && version === detailVersion) importError.value = await messageFor(e)
    } finally {
        if (!disposed) importing.value = false
    }
}

watch(importProjectId, () => { importedIssue.value = null; importError.value = '' })
onBeforeUnmount(() => { disposed = true; searchVersion++; detailVersion++ })
</script>

<template>
    <div class="space-y-6">
        <header>
            <p class="mb-2 text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400">Desarrollo comercial</p>
            <h2 class="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white"><Landmark class="h-7 w-7 text-sky-500" /> Mercado Público</h2>
            <p class="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">Encuentren requerimientos para Sysifosweb y revisen sus antecedentes antes de preparar una oferta.</p>
        </header>
        <nav aria-label="Tipo de consulta" class="flex flex-wrap gap-2">
            <button v-for="tab in tabs" :key="tab.id" type="button" :aria-pressed="source === tab.id" class="rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500" :class="source === tab.id ? 'bg-sky-600 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-800'" @click="selectSource(tab.id)">{{ tab.label }}</button>
        </nav>
        <form class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 sm:p-6" @submit.prevent="search()">
            <p class="mb-5 text-sm text-slate-600 dark:text-slate-300">{{ activeDescription }}</p>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <label class="mp-label">Código exacto <input v-model="form.codigo" class="mp-input" maxlength="100" placeholder="Opcional: buscar un proceso específico" /></label>
                <label class="mp-label">Estado<select v-model="form.estado" class="mp-input" :disabled="!!form.codigo.trim()"><option v-for="option in stateOptions" :key="option[0]" :value="option[0]">{{ option[1] }}</option></select></label>
                <label v-if="source !== 'compra-agil'" class="mp-label">Fecha de consulta<input v-model="form.fecha" type="date" class="mp-input" :disabled="!!form.codigo.trim()" /><span class="mp-help">{{ source === 'licitaciones' && form.estado === 'activas' ? 'Activas consulta las publicadas actualmente.' : 'Sin fecha: consulta el día actual.' }}</span></label>
                <label class="mp-label" :class="source !== 'compra-agil' ? 'lg:col-span-2' : ''">{{ source === 'compra-agil' ? 'Buscar por palabras' : 'Incluir alguna de estas palabras' }}<input v-model="form.q" class="mp-input" maxlength="200" :disabled="!!form.codigo.trim()" :placeholder="source === 'compra-agil' ? 'Por ejemplo, desarrollo web' : 'web, software, soporte'" /><span class="mp-help">{{ source === 'compra-agil' ? 'Búsqueda de la API en nombre y descripción.' : 'Separa alternativas con comas. Busca en los datos disponibles del listado.' }}</span></label>
                <label v-if="source !== 'compra-agil'" class="mp-label">Excluir palabras<input v-model="form.excluir" class="mp-input" maxlength="200" placeholder="Por ejemplo: hardware, licencias" :disabled="!!form.codigo.trim()" /></label>
                <template v-if="source === 'compra-agil'">
                    <label class="mp-label">Publicada desde<input v-model="form.desde" class="mp-input" type="date" :required="!form.codigo.trim()" :disabled="!!form.codigo.trim()" /></label>
                    <label class="mp-label">Publicada hasta<input v-model="form.hasta" class="mp-input" type="date" :min="form.desde" :required="!form.codigo.trim()" :disabled="!!form.codigo.trim()" /></label>
                    <label class="mp-label">Región del comprador<select v-model="form.region" class="mp-input" :disabled="!!form.codigo.trim()"><option value="">Todas las regiones</option><option v-for="(region, index) in regions" :key="region" :value="String(index + 1)">{{ region }}</option></select></label>
                </template>
            </div>
            <div class="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
                <p class="max-w-xl text-xs leading-relaxed text-slate-500 dark:text-slate-400">Una coincidencia no confirma que cumplan los requisitos. Los montos y fechas deben contrastarse con las bases y el portal oficial.</p>
                <button type="submit" :disabled="loading" class="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-50"><Loader2 v-if="loading" class="h-4 w-4 animate-spin" /><Search v-else class="h-4 w-4" />{{ loading ? 'Consultando…' : 'Buscar' }}</button>
            </div>
        </form>
        <div v-if="error" role="alert" class="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200">{{ error }}</div>
        <section aria-live="polite" :aria-busy="loading" class="space-y-4">
            <div v-if="loading" role="status" class="rounded-2xl border border-dashed border-slate-300 py-14 text-center text-slate-500 dark:border-slate-700"><Loader2 class="mx-auto mb-3 h-7 w-7 animate-spin text-sky-500" />Consultando Mercado Público. Puede tardar unos segundos.</div>
            <template v-else-if="result">
                <div class="flex flex-wrap items-center justify-between gap-3"><h3 class="font-semibold text-slate-900 dark:text-white">{{ result.meta.total }} resultados</h3><p class="text-xs text-slate-500">Consulta: {{ dateText(result.meta.consultado_en) }}</p></div>
                <p class="rounded-xl bg-sky-50 p-3 text-sm text-sky-900 dark:bg-sky-500/10 dark:text-sky-200">{{ result.meta.advertencia }}</p>
                <div v-if="!result.data.length" class="rounded-2xl bg-white p-10 text-center text-slate-500 ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">No hay resultados para estos filtros. Prueba otra palabra o amplía las fechas.</div>
                <article v-for="item in result.data" :key="item.codigo" class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
                    <div class="flex flex-col justify-between gap-4 sm:flex-row">
                        <div class="min-w-0 flex-1"><div class="mb-2 flex flex-wrap items-center gap-2 text-xs"><span class="font-mono text-slate-500 dark:text-slate-400">{{ item.codigo }}</span><span v-if="item.estado" class="rounded-full bg-slate-100 px-2 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ item.estado }}</span></div><h4 class="break-words font-semibold text-slate-900 dark:text-white">{{ item.nombre }}</h4><p class="mt-2 text-sm text-slate-500 dark:text-slate-400">{{ item.organismo || 'Organismo disponible en el detalle' }}<span v-if="item.region"> · {{ item.region }}</span></p></div>
                        <div class="shrink-0 sm:text-right"><p class="font-semibold text-slate-900 dark:text-white">{{ money(item) }}</p><p v-if="source !== 'ordenes-compra'" class="mt-2 text-xs text-slate-500 dark:text-slate-400">Cierre: {{ dateText(item.cierre) }}</p><button class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:underline dark:text-sky-400" @click="openDetail(item)">Revisar detalle <ArrowRight class="h-4 w-4" /></button></div>
                    </div>
                </article>
                <div v-if="result.meta.total_paginas > 1" class="flex items-center justify-between gap-3"><button class="mp-secondary" :disabled="page <= 1" @click="search(page - 1, true)">Anterior</button><p class="text-sm text-slate-500">Página {{ page }} de {{ result.meta.total_paginas }}</p><button class="mp-secondary" :disabled="page >= result.meta.total_paginas" @click="search(page + 1, true)">Siguiente</button></div>
            </template>
            <div v-else-if="!error" class="rounded-2xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700"><Search class="mx-auto mb-3 h-8 w-8 text-slate-400" /><h3 class="font-semibold text-slate-800 dark:text-slate-200">Comienza por una búsqueda</h3><p class="mt-2 text-sm text-slate-500">Los filtros iniciales incluyen servicios tecnológicos. Puedes cambiarlos para explorar otros requerimientos.</p></div>
        </section>
        <dialog ref="detailDialog" aria-labelledby="procurement-title" class="m-auto w-[calc(100%-2rem)] max-w-3xl rounded-2xl bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/60 dark:bg-slate-900 dark:text-white" @close="detailVersion++">
            <div class="max-h-[85vh] overflow-y-auto p-6">
                <div class="mb-5 flex items-center justify-between gap-3"><h3 id="procurement-title" class="text-lg font-bold">Detalle del proceso</h3><button aria-label="Cerrar detalle" class="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800" @click="detailDialog?.close()"><X class="h-5 w-5" /></button></div>
                <p v-if="detailLoading" role="status" class="flex items-center gap-2 py-10"><Loader2 class="h-5 w-5 animate-spin" />Cargando antecedentes…</p>
                <p v-if="detailError" role="alert" class="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-800 dark:bg-red-950 dark:text-red-200">{{ detailError }}</p>
                <div v-if="detail" class="space-y-5">
                    <div><p class="mb-2 font-mono text-xs text-slate-500">{{ detail.codigo }}</p><h4 class="text-xl font-bold">{{ detail.nombre }}</h4><p class="mt-2 text-sm text-slate-500 dark:text-slate-400">{{ detail.organismo || 'Organismo no informado' }}</p></div>
                    <dl class="grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-4 text-sm dark:bg-slate-800"><div><dt class="text-slate-500 dark:text-slate-400">Monto informado</dt><dd class="mt-1 font-semibold">{{ money(detail) }}</dd></div><div><dt class="text-slate-500 dark:text-slate-400">Estado</dt><dd class="mt-1">{{ detail.estado || 'No informado' }}</dd></div><div v-if="detail.fuente !== 'ordenes-compra'"><dt class="text-slate-500 dark:text-slate-400">Cierre</dt><dd class="mt-1">{{ dateText(detail.cierre) }}</dd></div><div v-if="detail.proveedor"><dt class="text-slate-500 dark:text-slate-400">Proveedor</dt><dd class="mt-1">{{ detail.proveedor }}</dd></div></dl>
                    <section><h5 class="mb-2 font-semibold">Descripción</h5><p class="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{ detail.descripcion || 'La API no informó una descripción. Revisa los documentos en Mercado Público.' }}</p></section>
                    <section v-if="detail.productos?.length"><h5 class="mb-2 font-semibold">Servicios o productos solicitados</h5><ul class="space-y-3"><li v-for="(product, index) in detail.productos" :key="index" class="rounded-xl border border-slate-200 p-3 text-sm dark:border-slate-700"><p class="font-semibold">{{ product.nombre }} <span v-if="product.cantidad !== null" class="font-normal text-slate-500">· Cantidad: {{ product.cantidad }}</span></p><p v-if="product.descripcion" class="mt-1 whitespace-pre-wrap break-words text-slate-600 dark:text-slate-300">{{ product.descripcion }}</p></li></ul></section>
                    <section v-if="detail.documentos?.length"><h5 class="mb-2 font-semibold">Documentos informados</h5><ul class="list-inside list-disc text-sm text-slate-600 dark:text-slate-300"><li v-for="(document, index) in detail.documentos" :key="index">{{ document.nombre }}</li></ul><p class="mt-2 text-xs text-slate-500">Descarga los archivos desde el proceso en el portal oficial.</p></section>
                    <div class="rounded-xl bg-amber-50 p-4 text-sm text-amber-900 dark:bg-amber-500/10 dark:text-amber-200">Antes de ofertar, revisen requisitos acreditables, plazo de entrega, costos iniciales, garantías y condiciones de pago. Este detalle todavía no es una evaluación de viabilidad.</div>
                    <section aria-labelledby="import-issue-title" class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                        <h5 id="import-issue-title" class="mb-3 font-semibold">Llevar al backlog del proyecto</h5>
                        <p v-if="importProjectsLoading" role="status" class="text-sm text-slate-500">Cargando proyectos…</p>
                        <div v-else-if="importProjects.length" class="flex flex-wrap items-end gap-3">
                            <label class="mp-label min-w-0 flex-1">Proyecto destino
                                <select v-model="importProjectId" class="mp-input" :disabled="importing">
                                    <option :value="null" disabled>Selecciona un proyecto</option>
                                    <option v-for="project in importProjects" :key="project.id" :value="project.id">{{ project.project_key }} · {{ project.name }}</option>
                                </select>
                            </label>
                            <button type="button" :disabled="!importProjectId || importing || !!importedIssue" class="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-50" @click="convertToIssue">
                                <Loader2 v-if="importing" class="h-4 w-4 animate-spin" /><Check v-else class="h-4 w-4" />{{ importing ? 'Creando issue…' : importedIssue ? 'Proceso vinculado' : 'Convertir a issue' }}
                            </button>
                        </div>
                        <p v-else-if="!importError" class="text-sm text-slate-500 dark:text-slate-400">No tienes proyectos activos con permiso de gestión para importar este proceso.</p>
                        <p v-if="importError" role="alert" class="mt-3 text-sm text-red-700 dark:text-red-300">{{ importError }}</p>
                        <div v-if="importedIssue" role="status" class="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200">
                            <p>{{ importedIssue.warning || `Issue ${importedIssue.issue_key} creado en el backlog.` }}</p>
                            <NuxtLink :to="`/admin/kanban/${importedIssue.kanban_project_id}`" class="mt-2 inline-flex items-center gap-1 font-semibold underline">Abrir tablero · {{ importedIssue.issue_key }}<ArrowRight class="h-4 w-4" /></NuxtLink>
                        </div>
                    </section>
                    <footer class="flex flex-wrap gap-3 border-t border-slate-200 pt-4 dark:border-slate-800"><button class="mp-secondary" @click="copySummary"><Copy class="h-4 w-4" />{{ copied ? 'Resumen copiado' : 'Copiar resumen para analizar' }}</button><a href="https://www.mercadopublico.cl/" target="_blank" rel="noopener noreferrer" class="mp-secondary"><ExternalLink class="h-4 w-4" />Abrir Mercado Público</a></footer>
                </div>
            </div>
        </dialog>
    </div>
</template>

<style scoped>
.mp-label { @apply block text-sm font-medium text-slate-700 dark:text-slate-200; }
.mp-input { @apply mt-2 block w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 disabled:opacity-40 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100; }
.mp-help { @apply mt-1.5 block text-xs font-normal text-slate-500 dark:text-slate-400; }
.mp-secondary { @apply inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 disabled:opacity-40 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-700; }
</style>
