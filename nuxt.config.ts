// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/mandarin-duck.jpg' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  fonts: {
    defaults: {
      weights: ['100 700']
    },
    families: [
      { name: 'IBM Plex Sans', provider: 'google' }
    ]
  },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/fonts', '@nuxt/icon'],
})