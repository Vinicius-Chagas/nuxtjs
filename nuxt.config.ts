// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@nuxtjs/tailwindcss','@nuxtjs/apollo'],
  srcDir: 'src',
  components: [{
    path: '@/components',
    pathPrefix: false
  }],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://localhost:3333/graphql/',
      }
    },
  }
})
