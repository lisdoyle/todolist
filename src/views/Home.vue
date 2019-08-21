<template>
  <div class="home">
    

    <!-- todo清单组件 -->
    <list class="list"></list>
   
    <!-- 底部按钮 -->

    <van-button class="vbtn" type="primary" size="large" @click="goto">
    添加事件
    </van-button>
    
    
  </div>
</template>


<script>

import list from "@/components/list.vue"

export default {
  components:{
    "list":list
  },
  methods:{
    goto(){
      this.$router.push("/newitem");
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  .list{
    
    margin-bottom:58px ;

  }
  .vbtn{
    position:fixed;
    bottom: 0px;
  } 
}

</style>