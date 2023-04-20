<template>
  <section class="mt-20">登入成功!! 兩秒後即將去 會員頁</section>
</template>

<script setup>
  const router = useRouter();
  
  setTimeout(() => {
    router.push({ path: "/member" });
  }, 2000);
  
</script>

<style lang="scss" scoped>
</style>
