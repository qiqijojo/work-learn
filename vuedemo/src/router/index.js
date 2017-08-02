import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Other from '@/views/Other'
import StoreTest from '@/views/StoreTest'
import Error from '@/views/Error'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/other/:pageParam',
      name: 'other',
      component: Other
    },
    {
      path: '/storeTest',
      name: 'storeTest',
      component: StoreTest
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})
