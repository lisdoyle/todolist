<template>
  <div id="app">
    
    <div class="nav">
      <!-- 导航 -->
      <navbar></navbar>
    </div>
    
    <div class="view">
      <!-- 路由显示区 -->
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import navbar from "@/views/navbar.vue"

export default {
  components:{
    "navbar":navbar,
  },
}
</script>


<style scoped>
*{
  margin: 0;
  padding: 0;

}
.nav{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
}
.view{
  margin-top:54px; 
}
</style>
