import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JetLayout from '../views/Jets/JetLayoutView.vue'
import Jets from '../views/Jets/JetsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jets',
      name: 'jets',
      component: JetLayout,
      children: [
        {
        path: '', 
        name: 'Jets',
        component: Jets,
        },
      ]
    },
    
  ],
})

export default router
