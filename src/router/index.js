import { createRouter, createWebHistory } from 'vue-router'

//components to be routed
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'

//create routes for navigation
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
]

//initialize router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router