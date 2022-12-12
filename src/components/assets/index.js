import { createRouter, createWebHistory } from 'vue-router'
import Login_view from '../views/login_view.vue'
import detail_karya from '../views/detail_karya_view.vue'
import uploadkarya from '../views/upload_karya.vue'
import dashboard from '../views/dashboard_view.vue'
import register from '../views/register_view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login_view
    },
    {
      path: '/detail_karya',
      name: 'detail_karya',
      component: detail_karya
    },
    {
      path: '/uploadkarya',
      name: 'uploadkarya',
      component: uploadkarya
    },
    {
      path: '/dashboard',
      name: 'dashboard',
     component: dashboard
    },
    {
      path: '/register',
      name: 'register',
     component: register
    }
  ]
})

export default router
