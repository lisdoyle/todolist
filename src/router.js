import Vue from 'vue'
import Router from 'vue-router'
import home from "@/views/Home.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/newitem',
      name: 'newitem',
      component: () => import(/* webpackChunkName: "newitem" */ '@/components/newitem.vue')
    },
    {
      path: '/modify',
      name: '/modify',
      component: () => import(/* webpackChunkName: "newitem" */ '@/components/modify.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
