import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 完整引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import XEUtils from 'xe-utils'
import VXEUtils from 'vxe-utils'

// use:
Vue.use(VXEUtils, XEUtils, { mounts: ['cookie'] });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
