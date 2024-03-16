// https://nuxt.com/docs/api/configuration/nuxt-config
// import {resolve} from "path";

export default defineNuxtConfig({
  // alias: {
  //   "@": resolve(__dirname, '/'),
  // }, 
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content'
  ],
  content: {
    // ... options
  }
})