<template>
    <div class="menu absolute top-20 lg:top-16 right-0 flex flex-col flex-wrap w-48 py-2 border-2 border-white/25 rounded-lg cursor-default">
        <slot />
    </div>
</template>

<style scoped>
.menu {
    text-shadow: none;

    background: rgb(110, 54, 167);
}
</style>