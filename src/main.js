import Vue from 'vue'
import Antd from 'ant-design-vue'
import router from '@/router'
import store from '@/store'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
Vue.config.productionTip = false;
Vue.use(Antd)

//acb
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
