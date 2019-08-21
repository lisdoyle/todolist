import Vue from 'vue'
import Vuex from 'vuex'
import { Toast } from 'vant';

Vue.use(Toast);

Vue.use(Vuex)

const module_listdata={
  state:{
    //todolist的列表数据 给v-for渲染
    list:[
      {
        title:"下班去买菜",
        content:"苹果 香蕉 猪肉 青菜苹果 香蕉 猪肉 青菜苹果 香蕉 猪肉 青菜苹果 香蕉 猪肉 青菜苹果 香蕉 猪肉 青菜",
        ctime:"2019-08-09 16:53",
        done:1,
        listuid:0
      },
      {
        title:"点击修改内容",
        content:"苹果 香蕉 猪肉 青菜苹果 香蕉 猪肉 青菜苹果 香蕉 猪肉 青菜苹果 香蕉 猪肉 青菜苹果 香蕉 猪肉 青菜",
        ctime:"2019-08-10 17:53",
        done:1,
        listuid:1
      },
      {
        title:"长按标记完成",
        content:"长按标记完成，出现“Done”图标",
        ctime:"2019-08-09 16:53",
        done:0,
        listuid:2
      }
    ],

  },
  mutations:{
    saveitem(state,payload){
      // 把newitem.vue传入的数据，组织成新的item新增到list中
      var obj = {
        title:payload.title,
        content:payload.content,
        ctime:payload.ctime,
        done:0,
        listuid:payload.listuid
      };
      state.list.unshift(obj);
    },
  },
  actions:{

  }
}

// 修改项目内容
const module_modifyitem = { 
  state: { 
    item:{},//保存获取到的item对象，里面有listuid
    index:'', //保存传过来要替换的item的索引
    canmodify:false
  }, 
  mutations: { 
    //打开可修改的开关
    canmodify(state,payload){
      state.canmodify=payload;
    },

    // 获取项目索引 方便修改后替换
    getmodifyindex(state,payload){
      state.index = payload;
    },
    // 获取list.vue中点击修改的item对象。
    getmodifyitem(state,payload){
      state.item = payload;
    },
    //获取修改内容，替换原本list中的数据
    modifyitem(state, payload,){
      if(state.index == null || state.index.length <= 0){
        //若index为空 则不执行下面的操作
        Toast("index为空，不合法提交")
        return false
      }
      var obj = {
        title:payload.title,
        content:payload.content,
        ctime:payload.ctime,
        done:0,
        listuid:payload.listuid
      };
      //判断要修改的对象是否 对应正确的索引
      if(this.state.listdata.list[state.index].listuid == obj.listuid){
        //把修改好的item 替换原list中的数据
        this.state.listdata.list[state.index]=obj;
        state.item = obj; 
        Toast("保存成功")
      }else{
        //如果索引不对应 寻找对的索引再替换
        this.state.listdata.list.forEach(function(item, index){
          if(item.listuid == obj.listuid){
            this.state.listdata.list[index]=obj;
            state.item = obj; 
            Toast("保存成功")
          }
        })
      }
      
    },
    // 删除项目 接收传入的index
    deleteit(state){
      if(state.index == null || state.index.length <= 0){
        //若index为空 则不执行下面的操作
        return false
      }
      //splice(index,len,[item]) 注释：该方法会改变原始数组。
      this.state.listdata.list.splice(state.index,1);
      //删除成功后 清空本模块的数据 防止重复操作
      state.item={};
      state.index='';
      console.log(state.index);
    }
   
  }, 
  actions: {

  },
}


export default new Vuex.Store({
  
  modules: {
  
    listdata: module_listdata,
    modify:module_modifyitem,
  }
})
