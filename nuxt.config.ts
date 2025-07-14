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
  googleFonts: {
    families: {
      'IBM Plex Sans': '100..700'
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@vueuse/nuxt'],
})