// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/js/font.js'
import './assets/js/jquery-1.7.2.js'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$http=axios
Vue.config.productionTip = false
require('./assets/css/base.css')
require('./assets/css/animate.css')
/* eslint-disable no-new */

// 请求拦截器
axios.interceptors.request.use((config)=>{
	store.dispatch('loadingshow');
	return config
},(err)=>{
	console.log(err)
	return Promise.reject(error);
});
//相应拦截器
axios.interceptors.response.use((res)=>{
	store.dispatch('loadinghide')
	return res
},(err)=>{
	console.log(err)
	return Promise.reject(error)
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
