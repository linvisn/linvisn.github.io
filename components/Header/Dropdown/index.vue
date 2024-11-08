<script setup>
import { vOnClickOutside } from '@vueuse/components'

defineProps({
    icon: String,
    label: String,
    isMenu: Boolean
})

const isHovered = ref(false)
const isExpanded = ref(false)
const defaultClass = useHeaderClass()
const hoverClass = useHeaderHoverClass()
</script>

<template>
    <span class="dropdown relative" :class="[defaultClass], { [hoverClass]: isExpanded || isHovered, 'text-3xl': isMenu, 'gap-2': !isMenu }" @click="isExpanded = !isExpanded" v-on-click-outside="() => { isExpanded = false }" @mouseover="isHovered = true" @mouseout="isHovered = false">
        <i class="bi" :class="icon"></i> {{ label }}
        <span>
            <i v-if="isExpanded" class="bi bi-caret-up-fill"></i>
            <i v-else class="bi bi-caret-down-fill"></i>
        </span>

        <HeaderDropdownMenu v-show="isExpanded">
            <slot />
        </HeaderDropdownMenu>
    </span>
</template>

<style scoped>
.dropdown {
    background: rgba(255, 215, 83, 0.5);
}

.hover {
    text-shadow: 0.1em 0 rgba(15, 209, 167, 0.75);
    
    background: rgba(97, 211, 116, 0.5);
}
</style>