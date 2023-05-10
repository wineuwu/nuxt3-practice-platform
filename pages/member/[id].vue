<template>
  <section class="border h-full w-full text-gray-500">
    <div class="w-1/2">
      <div></div>
    </div>
    <div class="w-1/2">
      <ul class="w-full">
      <li class="block">
        UserName: {{ $store.memberInfo?.name|| "winnie" }}
      </li>
      <li class="block">
        Email:  {{ $store.memberInfo?.email || 'asgh03226@gmail.com' }}
      </li>
      <li>
        
      </li>
    </ul>
    </div>
  </section>
</template>

<script setup>
import mainStore  from '@/store';

const $store = mainStore();


</script>

<style lang="scss" scoped>
</style>
