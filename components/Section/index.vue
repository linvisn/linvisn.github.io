<script setup>
defineProps({
    removeBottomPadding: Boolean
})
</script>

<template>
    <section class="container mx-auto p-8  lg:p-16 " :class="{ ['pb-0 lg:pb-0']: removeBottomPadding }">
        <slot />
    </section>
</template>