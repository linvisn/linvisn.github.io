<template>
    <div class="title flex items-center justify-center text-6xl font-semibold italic duration-500 hover:font-bold cursor-pointer">
        <slot />
    </div>
</template>

<style scoped>
.title {
    text-shadow: -0.1em 0 rgba(255, 255, 0, .25);
}
.title:hover {
    text-shadow: -0.1em 0 rgba(255, 255, 0, .375);
}
</style>