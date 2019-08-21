# 这是一个用VUE-cli搭建的todolist例子

## 主要文件结构如下：
```
>app.vue ：
  主导航组件 <navbar>
  路由显示区 <router-view>

>home.vue:
  路由地址 "/"
  清单列表组件 <list>
  添加事件按钮 <van-button>

>list.vue:
  清单列表 v-for
  长按标记"done"
  短按修改item内容
  
>newitem.vue:
  路由地址 "/newitem"
  标题输入、内容输入
  保存按钮 </van-button>

>modify.vue:
  路由地址 "/modify"
  标题输入、内容输入
  保存按钮、删除按钮
```
## 实现逻辑
### app.vue
>1. app.vue作为根组件，展示主导，因为导航一直存在所以，放在根组件
>2. 路由显示区，默认显示home.vue 组件。

### home.vue
>1. 路径为“/”
>2. <list> 组件 :列表清单通过computed 监控 store 中的 list 数据，再v-for 渲染出来的。可以保持数据实时更新。
>3. 添加按钮 直接跳转路由到 “/newitem” ,显示 <newitem> 组件。

### newitem.vue
>1. 路径为“/newitem”
>2. 双向绑定获取输入的内容：标题 和 正文
>3. 保存按钮：把title、content、ctime、listuid编辑成obj对象，传给store，然后把 obj 插入到store清单列表的最前面，这时 list.vue 会更新项目item

### list.vue
>1. 通过computed 从 store 中获取清单列表数据，然后 v-for 渲染页面
>2. 每个清单项目item 有两个事件，长按“标记done”、短按“进入modify.vue”
>3. 长按：通过计时器计算clickdown的时长，达到时长触发函数，切换css样式为“done”
>4. 短按：触发 modify(index) 函数，打开可修改的开关“canmodify”， 把要修改的item项目的 内容 和 索引 传给store，然后跳转路由 “/modify”

### modify.vue
>1. mounted周期：监测“canmodify”是否为true 可以这显示组件，否则，跳转home.vue
>2. beforeDestroy: 要把“canmodify”改为false，关闭可修改标签，防止，不是通过点击list.vue的item获取index的情况下进入modify组件，误修改了store中的数据
>3. 从store中获取，通过list.vue短按方法传递的item和index，把item的标题和内容渲染在页面上，给作者修改
>4. 修改后，可点击保存，会把修改好的内容编辑成obj床给store，替换原来的数据
>5. 删除按钮：触发store中的删除函数，根据 index 寻找list 中的项目删除

## 长按事件
>1. 通过.directive("命令名"{bind:方法函数})，创建v-longpress命令


```javascript
//长按事件方法 v-longpress="函数体"
Vue.directive('longpress', {
  //el为长按对象（事件源）
　//binding 事件处理函数
  bind: function (el, binding, vNode) {
      // 确保命令绑定的表达式 是一个 函数
      if (typeof binding.value !== 'function') {
          // 获取组件名称
          const compName = vNode.context.name
          // 将警告传递给控制台
          let warn = `[longpress:] provided expression '${binding.expression}' is not a function, but has to be`
          if (compName) { warn += `Found in component '${compName}' ` }

          console.warn(warn)
      }

      // 定义计时器的初始值
      let pressTimer = null

      // 定义函数处理程序start
      // 创建计时器（ xx秒后执行函数 ）
      let start = (e) => {
          //判断事件是否为click，e.button=0，则为左键，如果是click事件，或者不是按的左键（右键有默认行为），则直接return
          if (e.type === 'click' && e.button !== 0) {
              return;
          }

          if (pressTimer === null) {
              pressTimer = setTimeout(() => {
                  // 执行事件处理函数
                  handler()
              }, 600) //长按计时器的时长 600毫秒反应
          }
      }

      // 取消计时器
      let cancel = () => {
          // 检查计时器是否有值
          if (pressTimer !== null) {
              clearTimeout(pressTimer)
              pressTimer = null
          }
      }
      // 运行函数
      const handler = (e) => {
          // 执行传递给指令的方法
          binding.value(e)
      }

      // 添加事件监听器
      el.addEventListener("mousedown", start);
      el.addEventListener("touchstart", start);
      // 取消计时器
      el.addEventListener("click", cancel);
      el.addEventListener("mouseout", cancel);
      el.addEventListener("touchend", cancel);
      el.addEventListener("touchcancel", cancel);
  }
})
```