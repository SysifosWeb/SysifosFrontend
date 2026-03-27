<script setup>
  const props = defineProps({
    title: String,
    description: String
  })
</script>
<template>
  <section class="bg-gradient-to-r from-blue-900 to-cyan-600 text-white py-20 pt-36">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-6">
                    {{title}}
                </h1>
                <p class="text-xl text-blue-100 max-w-3xl mx-auto">
                    {{description}}
                </p>
            </div>
        </section>
</template>