import { defineStore } from 'pinia';

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const name = ref('Eduardo')
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, name, doubleCount, increment }
// })
// auth-> https://fufong79570.medium.com/%E4%B8%B2%E6%8E%A5google-%E7%AC%AC%E4%B8%89%E6%96%B9%E7%99%BB%E5%85%A5-%E5%AF%A6%E4%BD%9C-node-js-b750821cde90

//  https://ithelp.ithome.com.tw/articles/10304289
export default defineStore('mainStore', { 
  state: () => { 
    return {
      userInfo: {
        "id": "100913734274595051050",
        "name": "Winnie Wu",
        "avatar": "",
        "emailVerified": true
      }
    }
   }
 })