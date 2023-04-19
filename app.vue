<template>
  <header class="bg-white border-b font-normal m-auto border-[#f1f1f1] w-full py-2 top-0  left-0 fixed">
    <div class="flex mx-auto max-w-[960px]  items-center justify-between">
      <div class="rounded-full h-[50px] w-[50px] overflow-hidden">
        <img class="h-full w-full" src="https://picsum.photos/300/200/?random=10">
      </div>
      <ul class="space-x-5 text-[16px] text-[17px] text-[#5a5a5a]">
        <li class="rounded-sm  text-xl  inline-block"><NuxtLink class="h-full inline-block" :to="`/login`"> <icon-cart class="align-middle inline-block"/></NuxtLink></li>
        <li class="border rounded-sm h-full border-[#3EB692] text-[#3EB692] inline-block"><NuxtLink class="py-1 px-3 inline-block" :to="`/login`">登入 / 註冊</NuxtLink></li>
      </ul>   
    </div>
  </header>

  <NuxtPage />

  <footer>
    
  </footer>

</template>

<script setup>
import IconCart from '~icons/ic/round-shopping-cart'


 const pagesis = [ 
  { path: '/',
    name: '首頁'
  },

  { path: '/login',
    name: '登入 / 註冊'
  },
 ]
 
//  const pages = ['', 'about', 'contact'];
 const config = useRuntimeConfig();
 
// public 是給client 端使用的KEY
//console.log(config.public.googleClientId)

</script>