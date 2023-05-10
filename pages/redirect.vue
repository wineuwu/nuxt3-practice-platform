<template>
  <section class="mt-20">Loading ...</section>
</template>
<script setup>
  import mainStore  from '@/store'
  const $store = mainStore();
  const router = useRouter();
  const memberID = computed(() => $store.memberInfo.id)
  

  setTimeout(() => {
    router.push({ path: `/member/${memberID.value}` });
  }, 2000);

</script>

<style lang="scss" scoped>
</style>
