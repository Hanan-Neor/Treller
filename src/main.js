import Vue from 'vue';
import app from './app.vue';
import router from './router';
import store from './store';
import TextareaAutosize from 'vue-textarea-autosize';
import './assets/styles/main.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(TextareaAutosize);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(app),
}).$mount('#app');
