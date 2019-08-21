import Vue from 'vue'
import { Button, NavBar, } from 'vant'
Vue.use(Button).use(NavBar);
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  
  router,
  store,
  render: h => h(App)
}).$mount('#app')

