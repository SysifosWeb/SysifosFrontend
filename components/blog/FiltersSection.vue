<script setup>
defineProps({
    categories: {
        type: Array,
        required: true
    },
    modelValue: {
        type: String,
        required: true
    }
})
defineEmits(['update:modelValue'])
</script>

<template>
    <section class="py-6 bg-section-dark border-y border-white/5 relative z-10">
        <div class="max-w-[1200px] w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="flex items-center gap-2 overflow-x-auto w-full pb-2 md:pb-0 hide-scrollbar">
                <button
                    v-for="category in categories"
                    :key="category.id"
                    @click="$emit('update:modelValue', category.id)"
                    class="px-4 py-1.5 text-[0.8rem] font-medium transition-all rounded-full whitespace-nowrap"
                    :class="modelValue === category.id ? 'bg-white text-black' : 'text-white/60 hover:text-white hover:bg-white/5'"
                >
                    {{ category.name }}
                </button>
            </div>
            
            <div class="relative w-full md:w-64 flex-shrink-0">
                <input type="text" placeholder="Buscar artículos..." class="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors">
            </div>
        </div>
    </section>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
