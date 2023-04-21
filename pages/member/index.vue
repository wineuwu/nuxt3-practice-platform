<template>

</template>

<script setup>
  import mainStore  from '@/store'
  
  const $store = mainStore();
  const avatar = computed(() => $store.memberInfo?.avatar);
  const leftNav = ['Profilo', 'Accounts',  'Newsletter', 'Logout'];
    
</script>

<style lang="scss" scoped>
</style>
