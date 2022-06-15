import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home.vue'
import Login from './Login.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router