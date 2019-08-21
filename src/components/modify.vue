<template>
  <div class="newitem">
    <div class="item">

      <div >  
        <van-field
          class="title"
          v-model="title"
          
          type="textarea"
          placeholder="标题"
          rows='1'
          autosize
        />
      </div>   
      
  

      
      
      <hr/>
      
     
      <van-field
        class="content"
        v-model="content"
        
        type="textarea"
        placeholder="记事"
        rows='5'
        autosize
      />
  


    </div>



    <div class="btn">
      <van-button :disabled="disabled" class="vbtn" @click="save" type="primary" >保存</van-button>
    
      <van-button  class="vbtn" @click="deleteit" type="danger" >删除</van-button>
    </div>
    
  


  </div>
</template>

<script>
import Vue from 'vue';
import { Field, Dialog, Toast } from 'vant';
Vue.use(Field);
Vue.use(Toast);

export default {
  mounted(){
    console.log(this.storeitem);
    console.log(this.storeindex);
    //载入时检测是否可以修改数据
    if(this.$store.state.modify.canmodify==false){
      Toast("erro:不正常进入modify.vue");
      this.$router.push("/");
    }
  },
  beforeDestroy(){
    //页面关闭时，关闭修改开关
     this.$store.commit("canmodify",false);
  },
  data(){
    return{
      //从store中获取被点击修改的项目对象内容
      storeitem:this.$store.state.modify.item,
      storeindex: this.$store.state.modify.index,
      title: this.$store.state.modify.item.title,
      content: this.$store.state.modify.item.content,
      listuid: this.$store.state.modify.item.listuid,
      disabled:true,
    }
  },
  methods:{
    save(){
      // 把新增数据推到store中的list
      var c = new Date().getTime();

      this.$store.commit("modifyitem",{
        title:this.title,
        content:this.content,
        ctime:c,
        listuid:this.listuid
      })

      
    },
    deleteit(){
      Dialog.confirm({
        title: '确定删除？',
        message: '删除后内容不能恢复'
      }).then(() => {
        console.log("ok")
        // 触发store的删除item方法
        this.$store.commit("deleteit");
        this.$router.push("/");
      }).catch(() => {
        return false
      });
     
    }
  },
  watch:{
    // 监测有输入内容时才能保存
    title(){
      var strtitle = this.title.trim();
      var strcontent = this.content.trim();
      if(strtitle!=null && strtitle.length>0){
        this.disabled=false;
      }else if(strcontent!=null && strcontent.length>0){
        this.disabled=false;
      }else{
        this.disabled=true;
      }
    },
    content(){
      var strtitle = this.title.trim();
      var strcontent = this.content.trim();
      if(strtitle!=null && strtitle.length>0){
        this.disabled=false;
      }else if(strcontent!=null && strcontent.length>0){
        this.disabled=false;
      }else{
        this.disabled=true;
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.newitem{
  .item{
    margin: 8px ;
    
    .title{
      
      width: 100%;
      line-height: 30px;
      font-size: 24px; 
      font-weight: bold;
     
    }
    .content{
      font-size: 18px;
      margin-bottom: 50px;
    }
  }
  .btn{
    display: flex;
    justify-content: space-around;
    width: 100%;
    position:fixed;
    bottom: 0;
    .vbtn{
      width: 48%;
    }
    
  }
}
</style>
