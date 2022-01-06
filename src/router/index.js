import Vue from 'vue';
import vueRouter from 'vue-router';
import home from '../pages/home.vue';
import boardApp from '../pages/board-app.vue';
import login from '../pages/login.vue'

Vue.use(vueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  // {
  //   path: '/',
  //   name: 'Board-App',
  //   component: boardApp,
  // },
  {
    path: '/board',
    name: 'Board-App',
    component: boardApp,
  },
  {
    path: '/board/:boardId',
    name: 'Board-App',
    component: boardApp,
  },
  {
    path: '/board/:boardId/:cardId',
    name: 'Board-App',
    component: boardApp,
  },
];

const router = new vueRouter({
  routes,
  boardApp,
  login
});

export default router;
