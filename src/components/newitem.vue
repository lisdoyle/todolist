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
        rows='10'
        autosize
      />
  


    </div>



    <div class="btn">
      <van-button :disabled="disabled" class="vbtn" @click="save" type="primary" size="large" >保存</van-button>
    
     
    </div>
    
  


  </div>
</template>

<script>
import Vue from 'vue';
import { Field } from 'vant';
Vue.use(Field);

export default {
  data(){
    return{
      title:'',
      content:'',
      disabled:true,
    }
  },
  methods:{
    save(){
      // 把新增数据推到store中的list
      var c = new Date().getTime();

      this.$store.commit("saveitem",{
        title:this.title,
        content:this.content,
        ctime:c,
        listuid:c
      })

      this.$router.push("/");
    },
    cancel(){
      console.log('btn');
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

    
  }
}
</style>
