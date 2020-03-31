import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import About from '../views/About.vue'
import Status from '../views/Status.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/meny',
    name: 'Meny',
    component: () => import('../views/Meny.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/status',
    name: 'Status',
    component: Status
  }



  // {
  //   path: '',
  //   name: '',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
