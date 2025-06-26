<template>
    <div class="card flex justify-between flex-wrap p-8 mb-8 border border-white/25 rounded-2xl">
        <slot />
    </div>
</template>

<style scoped>
.card {
    background: rgba(255, 255, 255, .1);
    
    box-shadow: 0 0 1.5em rgba(255, 255, 255, .1);
}
</style>