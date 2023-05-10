<template>
  <div class="bg-white flex items-center">
    <div
      class="border rounded flex flex-col mx-auto  shadow  text-base pt-5 w-[450px] items-center"
    >
      <div class="border-b text-center w-full">
        <span class="cursor-pointer border-b-2 py-2 px-5 inline-block" 
        :class="currentStatus === 'login'?  'border-[#3EB692]': 'border-transparent'"
        @click="setStatus('login')"
          >登入</span
        ><span class="cursor-pointer border-b-2 py-2 px-5 inline-block "    :class="currentStatus !== 'login'?  'border-[#3EB692]': 'border-transparent'" @click="setStatus('rigister')">註冊</span>
      </div>
      <div
        class="flex flex-col space-y-5  text-center w-full py-10 px-12 "
        v-if="currentStatus === 'login'"
        >
        <button class="border rounded-sm border-[#69696999]  py-2 px-10  block">
          <icon-google class=" pb-1 inline-block align-middle"/> <span class="ml-2 text-[#7a7a7a] inline-block">透過 Google 登入</span>
        </button>
        
        <label class="border py-2 inline-block relative" for="memberEmail">
          <icon-email class="m-auto text-lg top-0 bottom-0  left-2 text-[#696969] absolute"/>
          <input class="h-full outline-none w-full pl-10" type="text" name=""  id="memberEmail" placeholder="請輸入Email">
        </label>
        <label class="border py-2 inline-block relative" for="memberPassword">
        <icon-lock class="m-auto text-lg top-0 bottom-0  left-2 text-[#696969] absolute"/>
        <input class="h-full outline-none w-full pl-10" type="password" name=""  id="memberPassword" placeholder="請輸入密碼">
      </label>
        <label for="privacy-contract" class="text-[#3c3c3c] text-[14px]">
          <input type="checkbox" name="" id="privacy-contract">
          登入註冊即代表您同意 <a href="#"  class="underline">使用者</a> 及 <a href="#"  class="underline">隱私權政策</a>
        </label>
        <button class="border rounded-sm bg-[#3EB692] text-shadow text-white  py-2 px-10 block ">
          登入
        </button>
      </div>
      <div
      class="flex flex-col space-y-4  text-center w-full py-10 px-12 "
      v-else
      >  
      <button class="border rounded-sm border-[#69696999]  py-2 px-10  block" @click="handleGoogleLogin">
          <icon-google class=" pb-1 inline-block align-middle"/> <span class="ml-2 text-[#7a7a7a] inline-block">透過 Google 註冊</span>
      </button>
      <label class="border py-2 inline-block relative" for="memberID">
        <icon-user class="m-auto text-lg top-0 bottom-0  left-2 text-[#696969] absolute"/>
        <input class="h-full outline-none w-full pl-10" type="text" name=""  id="memberID" placeholder="請輸入ID">
      </label>
      <label class="border py-2 inline-block relative" for="memberEmail">
        <icon-email class="m-auto text-lg top-0 bottom-0  left-2 text-[#696969] absolute"/>
        <input class="h-full outline-none w-full pl-10" type="text" name=""  id="memberEmail" placeholder="請輸入Email">
      </label>
      <label class="border py-2 inline-block relative" for="memberPassword">
        <icon-lock class="m-auto text-lg top-0 bottom-0  left-2 text-[#696969] absolute"/>
        <input class="h-full outline-none w-full pl-10" type="password" name=""  id="memberPassword" placeholder="請輸入密碼">
      </label>
      <label for="privacy-contract" class="text-[#3c3c3c] text-[14px]">
        <input type="checkbox" name="" id="privacy-contract">
        登入註冊即代表您同意 <a href="#"  class="underline">使用者</a> 及 <a href="#"  class="underline">隱私權政策</a>
      </label>
      <button class="border rounded-sm bg-[#3EB692] text-shadow text-white  py-2 px-10 block ">
        註冊
        </button>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import IconUser from '~icons/mdi/user-circle';
import IconLock from '~icons/material-symbols/lock';
import IconGoogle from '~icons/logos/google-icon';
import IconEmail from '~icons/ic/baseline-email';
import mainStore  from '@/store'
import { googleTokenLogin } from 'vue3-google-login';

const runtimeConfig = useRuntimeConfig()
const { googleClientId: GOOGLE_CLIENT_ID } = runtimeConfig.public
const userInfo = ref(null);


const handleGoogleLogin = async() => {
  let accessToken = await googleTokenLogin({
    clientId: GOOGLE_CLIENT_ID
  }).then((res) => res?.access_token)

  if (!accessToken) {
    return '登入失敗'
  }
  // 這邊是包好的ofetch
  const { data } = await useFetch('/api/auth/google', {
    method: 'POST',
    body: {
      accessToken
    },
    initialCache: false
  })
  
  const router = useRouter();
  const $store = mainStore();
  

  if(data.value.id){
    await $store.updateMemberData(data.value)
    await router.push({ path: "/redirect" });
  }


  // console.log(data.value.avatar)
}

const currentStatus = ref("login");
const status = ["rigister", "login"];

const setStatus = (s) => {
  currentStatus.value = s;
};

</script>

<style lang="scss" scoped></style>
