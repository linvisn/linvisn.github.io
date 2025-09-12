<script setup>
defineProps({
    image: String
})
</script>

<template>
    <div class="subheader flex items-center flex-row gap-2 w-full mb-4 text-4xl font-semibold">
        <img class="w-16" :src="image" v-if="image"> <slot />
    </div>
</template>

<style scoped>
.subheader {
    text-shadow: -0.15em 0 rgba(0, 0, 0, .25);
}
</style>