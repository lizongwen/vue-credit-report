import '@babel/polyfill'
import Vue from 'vue'
import Antd from 'ant-design-vue'
import router from '@/router'
import store from '@/store'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import VueParticles from 'vue-particles'  

import { VueAxios } from './utils/request'


Vue.use(VueParticles)
Vue.config.productionTip = false;
Vue.use(Antd)
Vue.use(VueAxios)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
