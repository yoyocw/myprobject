// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  VueResource from 'vue-resource'
import '@/lib/Bootstrap/css/bootstrap.css'
import '@/lib/js/jquery-3.1.1.js'
import '@/lib/js/bootstrap.min.js'


Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
