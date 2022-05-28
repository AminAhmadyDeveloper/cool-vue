import { createRouter, createWebHistory } from 'vue-router'
import AboutProject from '@/components/AboutProject'
import AppCounter from '@/components/AppCounter'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Counter',
      component: AppCounter
    },
    {
      path: '/about',
      name: 'About',
      component: AboutProject
    }
  ]
})

router.beforeEach((to, _, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`
  next()
})

export default router
