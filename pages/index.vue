<template>
    <Page>
        <PageHeader>Welcome to my website</PageHeader>
        
        <div class="flex justify-between flex-wrap">
            <PageText class="basis-full lg:basis-1/2">I am a beginner Front-End developer, who has a passion of making web apps using Nuxt 3 and Vue.js 3</PageText>
            <div class="basis-full lg:basis-1/4">
                <PageImage :image="'/mandarin-duck.jpg'" :label="'Literally me'" />
            </div>
        </div>
    </Page>
</template>