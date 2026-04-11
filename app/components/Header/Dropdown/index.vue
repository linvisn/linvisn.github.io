<script setup>
import { vOnClickOutside } from "@vueuse/components"

defineProps({
  icon: String,
  label: String,
  isMenu: Boolean,
})

const isHovered = ref(false)
const isExpanded = ref(false)
const defaultClass = useHeaderClass()
const hoverClass = useHeaderHoverClass()
</script>

<template>
  <span class="dropdown relative" :class="[
    defaultClass,
    {
      [hoverClass]: isExpanded || isHovered,
      'text-3xl': isMenu,
      'gap-1': !isMenu,
    },
  ]" @click="isExpanded = !isExpanded" v-on-click-outside="() => {
    isExpanded = false
  }
    " @mouseover="isHovered = true" @mouseout="isHovered = false">
    <Icon :name="icon || ''" /> {{ label }}

    <AnimatePresence>
      <motion as-child v-if="isExpanded" :initial="{ opacity: 0, x: 10, y: 10 }" :animate="{ opacity: 1, x: 0, y: 0 }"
        :exit="{ opacity: 0, x: 10, y: 10 }">
        <HeaderDropdownMenu>
          <slot />
        </HeaderDropdownMenu>
      </motion>
    </AnimatePresence>
  </span>
</template>

<style scoped>
.dropdown {
  background: rgba(83, 255, 112, 0.5);
}

.hover {
  text-shadow: 0.1em 0 rgba(255, 255, 255, 0.25);

  background: rgba(40, 255, 183, 0.5);
}
</style>