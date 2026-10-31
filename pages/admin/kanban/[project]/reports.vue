<script setup lang="ts">
definePageMeta({ layout: 'admin', validate: route => /^[1-9]\d*$/.test(String(route.params.project)) && Number.isSafeInteger(Number(route.params.project)) })
</script>
<template><AdminKanbanReports :project-id="Number($route.params.project)" /></template>
