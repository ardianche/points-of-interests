import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: HelloWorld
    }
  ]
})
