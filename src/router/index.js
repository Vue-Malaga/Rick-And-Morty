import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Characters from '../components/Characters.vue'
import CharacterInfo from '../components/CharacterInfo.vue'

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
