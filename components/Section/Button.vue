<script setup>
defineProps({
    link: String
})
</script>

<template>
    <div class="flex justify-center w-full">
        <a :href="link" target="_blank" class="button relative px-4 py-2 mt-6 font-medium hover:font-semibold hover:tracking-wider rounded cursor-pointer 
            before:blur hover:before:blur-lg 
            after:rounded-md
        ">
            <slot />
        </a>
    </div>
</template>

<style scoped>
.button {
    font-size: 1.375rem;
    line-height: 1.875rem;
    
    background: rgb(61, 64, 202);
}
.button:hover {
    background: rgb(88, 6, 77) !important;
}

.button::before, .button::after {
    content: '';
    box-sizing: content-box;

    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    
    height: 100%;
    width: 100%;
    padding: 0.15rem;

    background: conic-gradient(from var(--angle), transparent, rgba(255, 255, 135, 0.5), rgba(255, 135, 255, 0.5), transparent);

    animation: 2s spin ease-in-out infinite;
    transition: inherit;
    z-index: -1;
}
</style>