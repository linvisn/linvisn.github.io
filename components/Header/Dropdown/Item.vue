<script setup>
const isHovered = ref(false)
</script>

<template>
    <a class="item w-full px-4 py-1 text-xl font-medium tracking-normal border-t border-white/20 transition-all duration-300" :class="{ 'hover': isHovered }" @mouseover="isHovered = true" @mouseout="isHovered = false">
        <slot />
    </a>
</template>

<style scoped>
.item {
    background: rgba(255, 255, 255, 0.05);
}
.hover {
    background: rgba(255, 255, 255, 0.15);
}
</style>