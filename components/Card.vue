<template>
    <div class="border rounded-xl object-cover border-[#f1f1f1] shadow overflow-hidden h-auto absolute ">
      <img :src="imgSrc" class="w-full" ref="cardDom">
    </div>
</template>
<script setup>

  const props = defineProps({
    imgSrc: {
      type: String,
    },
    cardTitle: {
      type: String,
    },
  });
  
  const cardDom =ref(null);
  const emit = defineEmits(['update']);

  watch(cardDom, v => {
    nextTick(() => {
      emit('update', {dom: v, height: v.offsetHeight, width: v.offsetWidth});
    });
  });

</script>

<style lang="scss" scoped>
</style>
