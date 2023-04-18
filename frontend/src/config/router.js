import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/components/home/Home.vue'
import AdminPages from '@/components/admin/AdminPages.vue'
import Auth from '@/components/Auth/Auth.vue'
import {userKey} from '@/global'

const routes = [
    { name:'home',path: '/', component: Home },
    { name:'adminPages',path: '/admin', component: AdminPages, requiresAdmin: true },
    { name:'auth',path: '/auth', component: Auth }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
//CRIAR UM SERVIÇO DE VALIDAÇÃO NO BACKEND PRA VALIDAR SE O USER É OU NÃO ADIMN (DENTRO DO MODULO AUTH)
router.beforeEach((to, from, next) => {
  const json = localStorage.getItem(userKey)

  if (to.name == 'adminPages'){
    const user = JSON.parse(json)
    user && user.admin ? next() :next({ name: 'home' })
  } 
  else next()
})

// router.beforeResolve(async (to,from,next)=>{
//   const json = localStorage.getItem(userKey)

//   if(to.matched.some(record => record.meta.requiresAdmin)){
//     const user = JSON.parse(json)
//     user && user.admin ? next(): next({path:'/'})
//   }else{
//     next()
//   }
//})

export default router;