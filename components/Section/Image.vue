<script setup>
defineProps({
    image: String,
    label: String
})
</script>

<template>
    <div :label="label" class="img relative w-full border-2 rounded-lg duration-300 cursor-pointer
        after:absolute after:top-0 after:left-0 after:flex after:items-center after:justify-center after:w-full after:h-full
        after:text-2xl after:font-bold after:rounded-lg after:bg-black/25 after:backdrop-blur-sm after:opacity-0 hover:after:opacity-100 
        after:content-[attr(label)]
    ">
        <img class="w-full rounded-lg" :src="image">
    </div>
</template>

<style scoped>
.img::after {
    transition: inherit;
}
</style>