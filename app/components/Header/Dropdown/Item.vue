<script setup>
const isHovered = ref(false)
</script>

<template>
    <NuxtLink class="item flex items-center gap-1 w-full px-4 py-1 text-xl font-medium tracking-normal border-t border-white/20 transition-all duration-300" :class="{ 'hover': isHovered }" @mouseover="isHovered = true" @mouseout="isHovered = false">
        <slot />
    </NuxtLink>
</template>

<style scoped>
.item {
    background: rgba(255, 255, 255, .1);
}
.hover {
    background: rgba(255, 255, 255, .15);
}
</style>