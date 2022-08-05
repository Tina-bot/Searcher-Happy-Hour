import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "list" */'../views/ListView.vue')
  },
  {
    path: '/details/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */'../views/DetailView.vue')
  },
  {
    path: '/filter/:filter',
    name: 'filter',
    component: () => import(/* webpackChunkName: "filter" */'../views/FilterView.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
