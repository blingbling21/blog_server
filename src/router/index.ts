import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Index from '@/views/Index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/article',
    name: 'article',
    component: ()=>import('@/views/article/Article.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
