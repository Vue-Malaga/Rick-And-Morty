import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Characters from '../views/Characters.vue'
import CharacterInfo from '../views/CharacterInfo.vue'

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
      name:'characterInfo',
      path:'/characters/:id',
      component: CharacterInfo,
      props:true
    },
    {
      path:'/:pathMatch(.*)*',
      redirect:''
    }
  ]
})

export default router
