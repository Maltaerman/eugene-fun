// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  app: {
    head: {
      title: 'Eugene fun',
  
      htmlAttrs: { lang: 'en' },
  
      link: [
        { href: '/favicon.ico' },
      ]
    }
  }
})
