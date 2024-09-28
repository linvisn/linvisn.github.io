<script setup>
const skills = ref([
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg',
        isPrimary: true
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
        isPrimary: true
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        isPrimary: true
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
        isPrimary: true
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        isPrimary: true
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        isPrimary: true
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        isPrimary: true
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        isPrimary: true
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg'
    }
])
</script>

<template>
    <div>
        <Section :removeBottomPadding="true" id="home">
            <SectionHeader>Welcome to my page</SectionHeader>

            <div class="flex justify-between flex-wrap">
                <SectionText class="basis-full lg:basis-1/2">I am a beginner Front-End developer, who has a passion of making web apps using Nuxt 3 and Vue.js 3</SectionText>
                <SectionImage class="basis-full lg:basis-1/4" src="/mandarin-duck.jpg" />
            </div>

            <SectionDivider />
        </Section>

        <Section :removeBottomPadding="true" id="skills">
            <SectionHeader class="centered">Skills</SectionHeader>
            
            <div class="flex justify-center">
                <div class="flex flex-row justify-center flex-wrap lg:w-3/4">
                    <SectionIcon v-for="skill in skills" :class="{ 'primary': skill.isPrimary }" :image="skill.image" />
                </div>
            </div>

            <SectionDivider />
        </Section>

        <Section>
            <SectionHeader>Projects</SectionHeader>
            
            <SectionCard id="linTime">
                <div class="basis-full lg:basis-1/2">
                    <SectionSubheader :image="'/linTime.png'">linTime</SectionSubheader>
                    <SectionText>A simple app with usual Timer, Tabata Timer and Stopwatch, created with Nuxt 3</SectionText>
                </div>

                <div class="basis-full lg:basis-1/3">
                    <SectionImage src="/linTime-screenshot.png" />

                    <SectionButton :link="'https://linvisn.github.io/linTime/'">Check it out!</SectionButton>
                </div>
            </SectionCard>
        </Section>
    </div>
</template>