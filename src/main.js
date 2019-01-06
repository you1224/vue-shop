import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://litc.pro:9999';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios;
// axios 拦截器
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('token');
  if(token){
    config.headers['Authorization'] = token;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 导入vant UI
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

import { Toast } from 'vant';
Vue.use(Toast);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
