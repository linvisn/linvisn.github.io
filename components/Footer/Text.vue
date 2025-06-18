<template>
  <span class="text px-3 py-1 border border-white/25 rounded-md text-xl font-medium tracking-tight">
      <slot />
  </span>
</template>

<style scoped>
.text {
    background: rgba(255, 255, 255, .25);
    
    box-shadow: 0 0 1.5em rgba(255, 255, 255, .25);
}
</style>