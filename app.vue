<template>
<div class="flex flex-col min-h-screen justify-center">
  <header class="bg-white border-b font-normal m-auto border-[#f1f1f1] w-full py-2 top-0  left-0 fixed">
    <div class="flex mx-auto max-w-[1200px]  items-center justify-between">
      <h1 class="font-medium  text-shadow p-1 text-[26px]">
        <NuxtLink class="h-full w-full" to="/">HASHTATA</NuxtLink>
      </h1>
      <label for="search-bar " class=" rounded-full bg-[#f1f1f1] w-3/5">
        <input type="text" id="search-bar" class=" bg-transparent  outline-none w-full py-2 px-5 px-3 ">
      </label>
      <ul class="flex space-x-5 text-[16px] text-[17px] text-[#5a5a5a] items-center">
        <li class="rounded-sm  text-lg  inline-block"><icon-bell class="align-middle inline-block"/></li>
        <li class="border rounded-sm h-full border-[#3EB692] text-[#3EB692] inline-block" v-if="!isLogin"><NuxtLink class="py-1 px-3 inline-block" :to="`/login`">登入 / 註冊</NuxtLink></li>
        <li class="rounded-sm  text-base  pt-2 inline-block" v-else><NuxtLink class="border rounded-full object-contain  border-[#f1f1f1] h-[40px]  w-[40px] inline-block overflow-hidden" :class="{avatar: 'bg-[#f1f1f1]'}" :to="`/member`">
            <img :src="avatar" class="w-full " v-if="avatar">
        </NuxtLink></li>
      </ul>   
    </div>
  </header>
  
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  
  <footer class="bg-[#fcfcfc] text-center w-full py-2 text-[14px] text-[#626262] ">
    Copyright © 2023 WUKAIWEN. All rights reserved.
  </footer>
</div>
</template>

<script setup>

import IconBell from '~icons/mdi/bell';
import mainStore  from '@/store'

const $store = mainStore();
const avatar = computed(() => $store.memberInfo?.avatar || '');
const isLogin = computed(() => !!$store.memberInfo);



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

<style>
 h1 > a{
  font-weight: bold;
  color:white;
  -webkit-text-stroke: 1.2px #7e7e7e;
 }
</style>