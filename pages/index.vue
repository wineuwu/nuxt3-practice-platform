<template>
  <div class="min-h-screen  w-full grid py-10 gap-y-5 gap-x-8 grid-cols-4 ma ">

    <Card  
      v-for="(i,idx) in cardList"
     :key="idx"
     :imgSrc="i.imgSrc" :cardTitle="i.title"
     @update="getDomList"  
     />
  </div>
</template>

<script setup>
  import GG from '~/assets/images/gg.png';
  import Face from '~/assets/images/wu.jpg';
  import Face2 from '~/assets/images/face2.png';
  import Face3 from '~/assets/images/face3.png';
  import P51 from '~/assets/images/p51.png';
  const cardList = [
    {
      imgSrc: Face,
      title: 'Card 1',
    },
    {
      imgSrc: GG,
      title: 'Card 2',
    },
    {
      imgSrc: Face2,
      title: 'Card 3',
    },
    {
      imgSrc: Face3,
      title: 'Card 4',
    },
    {
      imgSrc: P51,
      title: 'Card 5',
    }
  ];
  let domList = ref([]);

  let getDomList = (dom) => { domList.value.push(dom)}
  
  console.log(domList.value)
    // function cascadeDisplay() {
  // const photosContainerWidth = photosContainer.offsetWidth
  // const photoWidth = photos[0].offsetWidth
  // // 計算一列最多有幾欄
  // const columnsCount = parseInt((photosContainerWidth) / ( photoWidth + gap ))
  // const fistRowPhotosHeightArray = []
  // // 進行照片排序
  // for (let i = 0; i < photos.length; i++) {
  //   // 放上第一列的照片
  //   if (i < columnsCount) {
  //     photos[i].style.top = 0
  //     photos[i].style.left = (photoWidth + gap) * i + 'px'
  //     // 紀錄第一列的照片高
  //     fistRowPhotosHeightArray.push(photos[i].offsetHeight)
  //   } else {
  //     // 放上第二列開始的照片
  //     // 找出第一列的最小高度
  //     let minHeight = Math.min(...fistRowPhotosHeightArray)
  //     // 紀錄最小高度的index，以取得對應到第一列的位置，來決定left要移動多少
  //     let index = fistRowPhotosHeightArray.indexOf(minHeight)
  //     // 調整接續的photo位置，放到目前最小高度的地方
  //     photos[i].style.top = minHeight + gap + 'px'
  //     // 取得對應到第一列photo的left位置
  //     photos[i].style.left = photos[index].offsetLeft + 'px'
  //     // 最後!!再把原本儲存在陣列裡面為最小高度的值，更新上最新的高度(原本的高度+新的高度+間隔)
  //     fistRowPhotosHeightArray[index] = fistRowPhotosHeightArray[index] + photos[i].offsetHeight + gap
  //   }
  // }

  // }

  
</script>

<style  scoped>
.ma {
  /* grid-auto-rows: 0; 預設高度為 0 */
  grid-auto-flow: dense; /* 使用 dense 模式，讓元素自動填充空白區域 */
}
</style>
