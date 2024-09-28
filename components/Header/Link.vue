<script setup>
const isHovered = ref(false)
const defaultClass = useHeaderClass()
const hoverClass = useHeaderHoverClass()
</script>

<template>
    <a class="link gap-2" :class="[defaultClass], { [hoverClass]: isHovered }" @mouseover="isHovered = true" @mouseout="isHovered = false">
        <slot />
    </a>
</template>

<style scoped>
.link {
    background: rgba(255, 132, 83, 0.5);
}

.hover {
    text-shadow: 0.1em 0 rgba(28, 182, 202, 0.75);

    background: rgba(145, 60, 255, 0.5);
}
</style>