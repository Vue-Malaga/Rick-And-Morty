import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Characters from '../components/Characters.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'',
      component:Home
    },
    {
      path:'/characters',
      component: Characters
    },
    {
      path:'/:pathMatch(.*)*',
      redirect:''
    }
  ]
})

export default router
