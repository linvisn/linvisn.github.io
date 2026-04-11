<template>
  <div class="title flex items-center justify-center text-6xl font-bold italic duration-300 cursor-pointer">
    <slot />
  </div>
</template>

<style scoped>
.title {
  text-shadow: 0.075em 0 rgba(255, 0, 0, 0.25);
}

.title:hover {
  text-shadow: -0.075em 0 rgba(255, 255, 0, 0.375);
}
</style>