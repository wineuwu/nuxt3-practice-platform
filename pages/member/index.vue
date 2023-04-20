<template>
  <!-- avatar -->
  <div class="flex w-full">
    會員頁
  </div>
</template>

<script setup>
  import mainStore  from '@/store'
  const $store = mainStore();
  const avatar = computed(() => $store.memberInfo?.avatar);
  
</script>

<style lang="scss" scoped>
</style>
