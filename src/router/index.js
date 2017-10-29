import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/pages/dashboard'
import Statistics from '@/components/pages/statistics'
import Modules from '@/components/pages/modules'
import System from '@/components/pages/system'
import Wireless from '@/components/pages/wireless'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Dashboard
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/modules',
      name: 'Modules',
      component: Modules
    },
    {
      path: '/system',
      name: 'System',
      component: System
    },
    {
      path: '/wireless',
      name: 'Wireless',
      component: Wireless
    }
  ]
})
