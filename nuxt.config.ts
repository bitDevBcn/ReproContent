import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  css: ['~/assets/styles/main.css'],
  content: {
    
  },
  tailwindcss: {
    cssPath: '~/assets/styles/main.css',
    exposeConfig: true
  },

  compatibilityDate: '2025-02-09'
})