import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import Equipe from '@/pages/Equipe'
import Projets from '@/pages/Projets'
import Error from '@/pages/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/equipe',
      name: 'Equipe',
      component: Equipe
    },
    {
      path: '/projets',
      name: 'Projets',
      component: Projets
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})
