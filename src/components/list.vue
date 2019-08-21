<template>
  <div class="list">
    
    <!-- <div class="item">
      <div class="abstract">
        <h1 class="title">下班去买菜</h1>
        <p class="subtitle">苹果 香蕉 猪肉 青菜苹果 香蕉 猪肉 青菜苹果 香蕉 猪肉 青菜苹果 香蕉 猪肉 青菜苹果 香蕉 猪肉 青菜</p>
      </div>
      <div class="operate">
        <p class="done">Done</p>
      </div>
    </div>

    <div class="item">
      <div class="abstract">
        <h1 class="title">下班去买菜 班去买菜 班去买菜 班去买菜 班去买菜</h1>
        <p class="subtitle">青果 青菜 菜 苹果 青菜</p>
      </div>
      <div class="operate notdone">
        <p class="done">Done</p>
      </div>
    </div> -->

    


    <!-- list v-for 渲染 -->
    <div class="item" v-for="(item, index) in list" :key="index" v-longpress="changestate(item)" @click="modify(index)">
      <div class="abstract">
        <h1 class="title">{{ item.title }}</h1>
        <p class="content">{{ item.content }}</p>
      </div>
      <div :class="{operate:true , notdone:!item.done}">
        <p class="done">Done</p>
      </div>
    </div>
    <!-- 渲染结束 -->


  </div>
</template>

<script>
import Vue from 'vue'
//长按事件方法 v-longpress="函数体"
Vue.directive('longpress', {
  bind: function (el, binding, vNode) {
      // Make sure expression provided is a function
      if (typeof binding.value !== 'function') {
          // Fetch name of component
          const compName = vNode.context.name
          // pass warning to console
          let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be`
          if (compName) { warn += `Found in component '${compName}' ` }

          console.warn(warn)
      }

      // Define variable
      let pressTimer = null

      // Define funtion handlers
      // Create timeout ( run function after 1s )
      let start = (e) => {

          if (e.type === 'click' && e.button !== 0) {
              return;
          }

          if (pressTimer === null) {
              pressTimer = setTimeout(() => {
                  // Run function
                  handler()
              }, 600) //长按计时器的时长 600毫秒反应
          }
      }

      // Cancel Timeout
      let cancel = () => {
          // Check if timer has a value or not
          if (pressTimer !== null) {
              clearTimeout(pressTimer)
              pressTimer = null
          }
      }
      // Run Function
      const handler = (e) => {
          binding.value(e)
      }

      // Add Event listeners
      el.addEventListener("mousedown", start);
      el.addEventListener("touchstart", start);
      // Cancel timeouts if this events happen
      el.addEventListener("click", cancel);
      el.addEventListener("mouseout", cancel);
      el.addEventListener("touchend", cancel);
      el.addEventListener("touchcancel", cancel);
  }
})

export default {
  data(){
    return {
      // 获取store中的list数据
      // list:this.$store.state.listdata.list,
      
    }
  },
  methods:{
    // 改变项目状态done 或undone
    changestate(item){
      // item.done=!item.done;
      //v-longpress只接收函数体，所以放回一个函数出去
      return function(){
        item.done=!item.done;
      }
    },
    //修改item数据,根据index获取到item对象
    modify(index){
      //更具index获取item
      var item = this.$store.state.listdata.list[index];

      // 把这个项目对象传给store管理，修改后替换原来list的数据
      this.$store.commit("getmodifyitem",item);
      //把index索引传给store管理，方便修改后替换
      this.$store.commit("getmodifyindex",index);

      //打开可修改store的开关
      this.$store.commit("canmodify",true);
      //跳转到modify.vue修改页面
      this.$router.push("/modify");
    }
    
  },
  computed:{
    list:function(){
      return this.$store.state.listdata.list;
    }
  }
    
 

};
</script>

<style lang="scss" >
*{
  margin: 0;
  padding: 0;
}
.list{
 
  .item{
    border-radius: 7px;
    box-shadow: 0 0 2px rgba(99, 99, 99, 0.7);
    margin: 8px;
    user-select: none;
    display: flex;
    // flex-wrap: wrap;
    justify-content:space-between;
    height: 81px; //flex布局父级元素要设宽高 子元素才能获取
    overflow: hidden;

    .abstract{
      margin: 5px 16px;

      .title{
        max-height: 24px;
        word-break:break-all;
        overflow: hidden;
        font-size: 18px;
        font-weight: bold;
        margin: 6px 0;
      }
      .content{
        word-break:break-all;
        font-size: 16px;
        line-height: 35px;
        max-height: 35px;
        overflow: hidden;
      }
    }
    .operate{
      display: flex;
      align-items: center;
      justify-content: center;
      background: #07c160;
      width: 20%;
      height: 100%;
      flex-shrink:0;

      .done{
        font-family:Arial, Helvetica, sans-serif;
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
        
        
        
      }
      
      
    }
    .notdone{
      display: none;
    }
    
  }
}

</style>
