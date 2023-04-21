<template>
  
    <div class="border rounded-xl object-cover border-[#f1f1f1] shadow w-[240px] overflow-hidden h-auto" ref="cardDom">
        <img :src="imgSrc">
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
      emit('update', v);
    });
  });

</script>

<style lang="scss" scoped>
</style>
