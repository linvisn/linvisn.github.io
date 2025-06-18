<template>
    <div class="header mb-12 text-5xl font-bold tracking-wide z-50">
        <slot />
    </div>
</template>

<style scoped>
.header {
    text-shadow: -0.1em 0 rgba(255, 255, 255, .25);
}

.centered {
    text-align: center;
    text-shadow: 0 0.1em rgba(255, 255, 255, .25);
}
</style>