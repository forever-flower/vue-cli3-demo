import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/home/Home')
  },
  {
    path: '/category',
    component: () => import('views/category/Category')
  },
  {
    path: '/cart',
    component: () => import('views/cart/Cart')
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile')
  },
  {
    path: '/detail/:iid',
    component: () => import('views/detail/Detail')
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router