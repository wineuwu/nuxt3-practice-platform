// auth-> https://fufong79570.medium.com/%E4%B8%B2%E6%8E%A5google-%E7%AC%AC%E4%B8%89%E6%96%B9%E7%99%BB%E5%85%A5-%E5%AF%A6%E4%BD%9C-node-js-b750821cde90

import { defineStore } from "pinia";

// 將其命名為useXXXStore，就像vue3的composable一樣
const useStore = defineStore("main", {
  state: () => {
    return {
      memberInfo: null,
      isLogin: false,
    };
  },
  actions: {
    updateMemberData(res) {
      const $store = this;
      $store.memberInfo = {...res};
      $store.isLogin = true;
      console.log('store', $store.memberInfo)
    }
  },
  getters: {},
});

export default useStore;
