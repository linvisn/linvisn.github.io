<template>
    <Page>
        <PageHeader>Projects</PageHeader>
        
        <PageCard id="naholosy">
            <div class="basis-full lg:basis-1/2">
                <PageSubheader class="mb-4">naholosy</PageSubheader>
                <PageText>Тренажер наголосів з української мови для підготовки до ЗНО та НМТ</PageText>
            </div>
            <div class="basis-full lg:basis-1/3">
                <PageImage :image="'/naholosy-screenshot.png'" :label="'Несе корОва дрОва'" />
                <PageButton :link="'https://naholosy.deno.dev/'">Check it out!</PageButton>
            </div>
        </PageCard>

        <PageCard id="linTime">
            <div class="basis-full lg:basis-1/2">
                <PageSubheader>lintime</PageSubheader>
                <PageBadge class="border-white/25 bg-slate-500/75">deprecated</PageBadge>
                <PageText>A simple app with usual Timer, Tabata Timer and Stopwatch, created with Nuxt 3</PageText>
            </div>
            <div class="basis-full lg:basis-1/3">
                <PageImage :image="'/lintime-screenshot.png'" :label="'My first Nuxt project'" />
                <PageButton :link="'https://lintime.deno.dev/'">Check it out!</PageButton>
            </div>
        </PageCard>
    </Page>
</template>