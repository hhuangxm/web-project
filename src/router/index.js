import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/apps/home/index'
import System from '@/apps/system/index'
import Base from '@/apps/base/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/system',
      name: 'System',
      component: System
    }, {
      path: '/base',
      name: 'Base',
      component: Base
    }
  ]
})
