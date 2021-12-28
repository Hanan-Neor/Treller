import Vue from 'vue';
import app from './app.vue';
import router from './router';
import store from './store';
import TextareaAutosize from 'vue-textarea-autosize';
import './assets/styles/main.scss';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrello } from '@fortawesome/free-brands-svg-icons'
import { faStar, faBell, faTrashAlt, faClock, faCopy, faUser, faChartBar, faWindowMaximize, faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faPager,faHome, faPen, faPencilAlt, faEllipsisH, faPlus, faArrowRight, faChevronLeft, faTag, faUserPlus, faPaperclip, faSearch, faListUl} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrello,faPager,faStar,faBell, faHome,faPen,faPencilAlt,faEllipsisH,faPlus,faTrashAlt,faClock,faCopy,faArrowRight,faChevronLeft,faUser, faTag,faChartBar, faWindowMaximize, faUserPlus, faPaperclip, faCheckSquare,faSearch, faListUl)
Vue.component('font-awesome-icon', FontAwesomeIcon)
moment().format();
Vue.use(ElementUI);
Vue.use(TextareaAutosize);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(app),
}).$mount('#app');
