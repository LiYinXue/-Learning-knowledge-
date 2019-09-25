import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Home from '@/view/Home'
import Flower from '@/view/home/flower'
import Botany from '@/view/home/botany'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: 'botany',
          name: 'Botany',
          component: Botany
        },
        {
          path: 'flower',
          name: 'Flower',
          component: Flower
        },
      ]
    }
  ]
})
