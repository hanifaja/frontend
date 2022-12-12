import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home_view.vue'
import programing from '../views/programing_view.vue'
import dimensi from '../views/3D_view.vue'
import ilustrasi from '../views/ilustrasi_view.vue'
import presentasi from '../views/presentasi_view.vue'
import detail_karya from '../views/detail_karya_view.vue'
import login from '../views/login_view.vue'
import gallery from '../views/gallery_view.vue'
import dashboard from '../views/dashboard_view.vue'
import register from '../views/register_view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about_view.vue')
    },
    {
      path: '/programing',
      name: 'programing',
      component: programing
    },
    {
      path: '/3D',
      name: 'dimensi',
      component: dimensi
    },
    {
      path: '/ilustrasi',
      name: 'ilustrasi',
      component: ilustrasi
    },
    {
      path: '/presentasi',
      name: 'presentasi',
      component: presentasi
    },
    {
      path: '/detail-karya',
      name: 'detail-karya',
      component: detail_karya
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery
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
  ],
    scrollBehavior() {
       document.getElementById('app').scrollIntoView({behavior:'smooth'});
    }
})

export default router
