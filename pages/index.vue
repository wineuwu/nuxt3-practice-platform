<template>
 
</template>

<script setup>


onMounted(async() => { 
  let res = await useFetch('/api/member');
  console.log(res.value)
})
  
</script>

<style  scoped>

</style>
