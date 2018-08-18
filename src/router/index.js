import Vue from 'vue'
import Router from 'vue-router'
import Mainpage from '@/components/Mainpage/Mainpage'
import LeftMainpage from '@/components/LeftMainpage/LeftMainpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mainpage',
      component: Mainpage
    },
    {
      path: '/test',
      name: 'Testpage',
      component: LeftMainpage
    }
  ]
})
