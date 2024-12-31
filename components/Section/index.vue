<script setup>
defineProps({
    addBottomPadding: Boolean
})
</script>

<template>
    <section class="container mx-auto p-8 pb-0 lg:p-16 lg:pb-0" :class="{ ['pb-8 lg:pb-8']: addBottomPadding }">
        <slot />
    </section>
</template>