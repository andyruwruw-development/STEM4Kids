import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Camp from './views/Camp.vue'
import Staff from './views/Staff.vue'
import Info from './views/Info.vue'
import Profile from './views/Profile.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/camp',
      name: 'camp',
      component: Camp
    },
    {
      path: '/staff',
      name: 'staff',
      component: Staff
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
