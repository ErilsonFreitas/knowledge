import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/components/home/Home.vue'
import AdminPages from '@/components/admin/AdminPages.vue'
import Auth from '@/components/Auth/Auth.vue'

const routes = [
    { name:'home',path: '/', component: Home },
    { name:'adminPages',path: '/admin', component: AdminPages },
    { name:'auth',path: '/auth', component: Auth }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;