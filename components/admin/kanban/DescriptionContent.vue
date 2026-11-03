<script setup lang="ts">
import { githubDescriptionLabel, parseIssueDescription, privateImageReference } from '~/utils/issueDescription'
const props = defineProps<{ value: string }>()
const parts = computed(() => parseIssueDescription(props.value))
const failed = ref(new Set<string>())
watch(() => props.value, () => { failed.value = new Set() })
</script>

<template>
    <div class="whitespace-pre-wrap break-words text-sm leading-relaxed text-admin-muted dark:text-admin-muted">
        <template v-for="(part, index) in parts" :key="index">
            <span v-if="part.kind === 'text'">{{ part.text }}</span>
            <a v-else-if="part.kind === 'link'" :href="part.url" target="_blank" rel="noopener noreferrer" class="rounded-sm font-medium text-admin-accent underline underline-offset-2 focus-visible:outline focus-visible:outline-2 dark:text-admin-accent" :title="part.url">{{ githubDescriptionLabel(part.url!) || part.text || part.url }}</a>
            <AdminKanbanPrivateImage v-else-if="part.url && privateImageReference(part.url)" :reference="part.url" :alt="part.text" />
            <a v-else :href="part.url" target="_blank" rel="noopener noreferrer" class="my-3 block rounded-lg border border-admin-line p-2 text-admin-accent dark:border-admin-line dark:text-admin-accent">
                <span v-if="failed.has(part.url!)">No se pudo cargar la imagen: {{ part.text || 'Abrir imagen' }}</span>
                <img v-else :src="part.url" :alt="part.text || 'Imagen de la descripción'" loading="lazy" decoding="async" referrerpolicy="no-referrer" class="max-h-96 max-w-full rounded object-contain" @error="failed.add(part.url!)" />
            </a>
        </template>
    </div>
</template>
