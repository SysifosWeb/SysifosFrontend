<script setup lang="ts">
import type { BoardConfiguration, IssueStatus } from '~/types/kanban'
import { KANBAN_COLUMNS } from '~/utils/kanban'
const model = defineModel<BoardConfiguration>({ required: true })
defineProps<{ disabled: boolean }>()
function transition(from: IssueStatus, to: IssueStatus, event: Event) {
    const targets = model.value.transitions[from]
    model.value.transitions[from] = (event.target as HTMLInputElement).checked ? [...new Set([...targets, to])] : targets.filter(status => status !== to)
}
function allTransitions() { for (const state of KANBAN_COLUMNS) model.value.transitions[state.id] = KANBAN_COLUMNS.map(item => item.id) }
</script>

<template>
    <fieldset :disabled="disabled" class="min-w-0 space-y-5 border-t border-slate-200 pt-5 dark:border-slate-700">
        <legend class="px-1 text-sm font-semibold">Columnas y flujo del tablero</legend>
        <p class="text-xs text-slate-600 dark:text-slate-300">Conservamos los cinco estados y sus identificadores. Puedes cambiar nombres y límites. Un WIP vacío no tiene límite; cero avisa desde la primera tarjeta. El WIP no bloquea movimientos.</p>
        <div v-for="column in KANBAN_COLUMNS" :key="column.id" class="grid grid-cols-[minmax(0,1fr)_100px] gap-3">
            <label class="block text-xs">Nombre · {{ column.id }}<input v-model="model.columns[column.id].label" required maxlength="60" /></label>
            <label class="block text-xs">Límite WIP<input type="number" :value="model.columns[column.id].wip ?? ''" min="0" max="9999" step="1" placeholder="Sin límite" @input="model.columns[column.id].wip = ($event.target as HTMLInputElement).value === '' ? null : Number(($event.target as HTMLInputElement).value)" /></label>
        </div>
        <details>
            <summary class="cursor-pointer py-2 text-sm font-semibold">Transiciones permitidas</summary>
            <p class="my-2 text-xs text-slate-600 dark:text-slate-300">Filas: origen. Columnas: destino. Desmarcar impide ese cambio en el tablero, detalle y API. Reordenar dentro del mismo estado siempre está permitido. La creación inicial y la sincronización editorial automática no son transiciones.</p>
            <div class="overflow-x-auto"><table class="w-full text-left text-xs"><caption class="sr-only">Flujo de estados del proyecto</caption><thead><tr><th scope="col" class="p-2">Desde / hacia</th><th v-for="target in KANBAN_COLUMNS" :key="target.id" scope="col" class="p-2">{{ model.columns[target.id].label }}</th></tr></thead><tbody><tr v-for="source in KANBAN_COLUMNS" :key="source.id"><th scope="row" class="p-2">{{ model.columns[source.id].label }}</th><td v-for="target in KANBAN_COLUMNS" :key="target.id" class="p-2"><span v-if="source.id === target.id" title="Reordenar siempre está permitido">✓</span><input v-else type="checkbox" :aria-label="`Permitir ${model.columns[source.id].label} a ${model.columns[target.id].label}`" :checked="model.transitions[source.id].includes(target.id)" @change="transition(source.id, target.id, $event)" /></td></tr></tbody></table></div>
            <button type="button" :disabled="disabled" class="mt-3 text-xs font-semibold underline" @click="allTransitions">Permitir todas las transiciones</button>
        </details>
    </fieldset>
</template>
