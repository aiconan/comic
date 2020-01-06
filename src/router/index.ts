import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const title = " | AiComic"

const routes = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页' + title
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/search/:query?',
    name: 'search',
    meta: {
      title: '搜索' + title
    },
    component: () => import('../views/Search.vue')
  },
  {
    path: '/detail/:id?',
    name: 'detail',
    meta: {
      title: '详情' + title
    },
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/view/:comic_id?/:chapter_index?',
    name: 'view',
    meta: {
      title: '阅读' + title
    },
    component: () => import('../views/View.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于' + title
    },
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    redirect: '/search'
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
