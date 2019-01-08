import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Personal',
      component: () => import('@/views/personal')
    },
    {
      path: '/company',
      name: 'Company',
      component: () => import('@/views/company')
    }
  ]
})
