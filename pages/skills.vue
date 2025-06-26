<script setup>
const skills = ref([
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg',
        isPrimary: true,
        label: 'Nuxt 3'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
        isPrimary: true,
        label: 'Vue.js 3'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        isPrimary: true,
        label: 'Tailwind'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
        isPrimary: true,
        label: 'Bootstrap 5'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        isPrimary: true,
        label: 'Javascript'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
        isPrimary: true,
        label: 'C'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        isPrimary: true,
        label: 'Git'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        label: 'HTML'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        label: 'CSS'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        label: 'Python'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
        label: 'C Sharp'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
        label: 'Unity'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
        label: 'Node.js'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
        label: 'Flask'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
        label: 'Java'
    },
    { 
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
        label: 'SQLite'
    }
])
</script>

<template>
    <Page>
        <PageHeader class="centered">Skills</PageHeader>
        
        <div class="flex justify-center">
            <div class="flex flex-row justify-center flex-wrap lg:w-3/4">
                <PageIcon v-for="skill in skills" :class="{ 'primary': skill.isPrimary }" :image="skill.image" :label="skill.label" />
            </div>
        </div>
    </Page>
</template>