import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mainpage from '@/components/Mainpage/Mainpage'
import BoardingPage from '@/components/BoardingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'Mainpage',
      component: Mainpage
    },
    {
      path: '/boarding',
      name: 'Boarding',
      component: BoardingPage
    }
  ]
})
