
// https://nuxt.com/docs/api/configuration/nuxt-config
//https://github.com/antfu/unplugin-icons/issues/114
import Icons from 'unplugin-icons/vite'

export default defineNuxtConfig({
  css: ['/assets/main.css'],
  modules: [
    ['unplugin-icons/nuxt', { }],
    '@pinia/nuxt',
  ],
  components: {
    dirs: ["~/components/global"], // 這邊可以設定 components
    global: true,
  },
  pinia: {
    autoImports:[
      'defineStore', // 自動引入 
    ]
  },

  runtimeConfig: {
    public: {
      googleClientId: '964693514174-qnm3p462j8v4okuum6umg9gd2uhsivb0.apps.googleusercontent.com', // 設定 google client ID  KEY,
      dbPassword: 'rty79910326' // 設定 DB Password
    }
  },
  vite: {
    plugins: [
      Icons({
        autoInstall: true 
      })
    ]
  },
  "nitro":{
    plugins: ["~/server/db/index.js"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
