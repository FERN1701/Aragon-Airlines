import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JetLayout from '../views/Jets/JetLayoutView.vue'
import Jets from '../views/Jets/JetsView.vue'
import JetDescription from '../views/Jets/JetDescription.vue'
import Admin from '../views/admin/AdminLayout.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import Units from '../views/admin/Units.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/fleets',
      name: 'jets',
      component: JetLayout,
      children: [
        {
        path: '', 
        name: 'Jets',
        component: Jets,
        },
        {
        path: ':id/details', 
        name: 'JetsDetails',
        component: JetDescription,
        },
      ]
    },
    {
      path: '/administrator',
      name: 'admin',
      component: Admin,
      children: [
        {
        path: '', 
        name: 'Jetsdetails',
        component: Dashboard,
        },
        {
        path: 'units', 
        name: 'units',
        component: Units,
        },
      ]
    },
    
  ],
})

export default router
