<template>
  <div>
    <van-nav-bar
      title="TODO"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast);

export default {
  methods: {
    //vant-ui方法
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast('surprise！');
    }
  }
}
</script>

<style>

</style>
