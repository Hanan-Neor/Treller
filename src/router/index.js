import Vue from 'vue'
import vueRouter from 'vue-router'
import home from '../pages/home.vue'
import boardApp from '../pages/board-app.vue'

Vue.use(vueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/board',
    name: 'Board-App',
    component: boardApp
  },
]

const router = new vueRouter({
  routes,
  boardApp
})

export default router
