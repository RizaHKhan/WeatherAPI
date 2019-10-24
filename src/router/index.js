import Vue from 'vue'
import VueRouter from 'vue-router'
import Weather from '../components/Weather.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/weather',
    name: 'weather',
    component: Weather
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
