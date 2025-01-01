<script setup>
defineProps({
    image: String,
    label: String
})

const isHovered = ref(false)
</script>

<template>
    <div class="icon relative w-20 lg:w-24 m-1 p-3 border-2 border-transparent hover:border-white/25 rounded-md duration-300" @mouseover="isHovered = true" @mouseout="isHovered = false">
        <img :src="image">
        <span class="label absolute left-1/2 -translate-x-1/2 px-1 text-base font-medium text-center border-2 border-black/25 rounded-lg bg-yellow-500/75 duration-200 z-10" :class="{ '-top-8 w-28 opacity-100': isHovered }, { 'top-0 w-full opacity-0': !isHovered }">{{ label }}</span>
    </div>
</template>

<style scoped>
.icon {
    background: rgba(179, 29, 166, 0.5);
}
.icon:hover {
    background: rgba(128, 155, 231, 0.75);
    
    box-shadow: 0 0 1em rgba(255, 255, 255, 0.5);
}
.primary {
    background: rgba(230, 213, 64, 0.5);
}

.icon img {
    filter: drop-shadow(0.2em 0.2em 0.15em rgba(255, 255, 255, 0.25));
}
.icon:hover img {
    filter: drop-shadow(0.15em 0.15em 0 rgba(255, 255, 255, 0.5));
}
.primary img {
    filter: drop-shadow(0.2em 0.2em 0.15em rgba(0, 0, 0, 0.25));
}
.primary:hover img {
    filter: drop-shadow(0.15em 0.15em 0 rgba(0, 0, 0, 0.5));
}

.label {
    backdrop-filter: blur(10px) brightness(75%);

    box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
}
</style>