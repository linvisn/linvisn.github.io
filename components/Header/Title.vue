<template>
    <div class="title flex items-center justify-center text-6xl font-bold italic">
        <slot />
    </div>
</template>

<style scoped>
.title {
    text-shadow: -0.1em 0 rgba(255, 255, 0, .25);
}
</style>