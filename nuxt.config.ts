// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    '@morev/vue-transitions/nuxt',
  ],
  tailwindcss: { exposeConfig: true},
  headlessui: { prefix: 'H'},
  app: {
    head: {
      title: 'Dashboard',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico'}
      ]
    }
  }
})
