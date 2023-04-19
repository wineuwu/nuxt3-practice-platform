
// https://nuxt.com/docs/api/configuration/nuxt-config
//https://github.com/antfu/unplugin-icons/issues/114
import Icons from 'unplugin-icons/vite'

// pinia: {
//   autoImports: [
//     // automatically imports `defineStore`
//     'defineStore', // import { defineStore } from 'pinia'
//     ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
//   ],
// },

export default defineNuxtConfig({
  css: ['/assets/main.css'],
  modules: [
    ['unplugin-icons/nuxt', { }],
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports:[
      'defineStore', // 自動引入 
    ]
  },
  runtimeConfig: {
    public: {
      googleClientId: '964693514174-qnm3p462j8v4okuum6umg9gd2uhsivb0.apps.googleusercontent.com' // 設定 google client ID  KEY
    }
  },
  vite: {
    plugins: [
      Icons({
        autoInstall: true 
      })
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
