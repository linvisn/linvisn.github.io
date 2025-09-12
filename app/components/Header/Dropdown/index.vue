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
        <Icon :name="icon || ''" /> {{ label }}
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
    background: rgba(83, 255, 112, .5);
}

.hover {
    text-shadow: 0.1em 0 rgba(255, 255, 255, .25);
    
    background: rgba(40, 255, 183, .5);
}
</style>