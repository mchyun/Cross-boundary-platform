import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/home.vue'),
    },
    {
      /** for whatever unmatched routes */
      path: '/*',
      redirect: { name: 'home' },
    },
  ]
})
