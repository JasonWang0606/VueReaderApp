// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import home from './components/home/home.vue'
import bookbacket from './components/bookbacket/bookbacket.vue'

import './common/style/index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    {path: '/home', component: home},
    {path: '/bookbacket', component: bookbacket}
  ],
  linkActiveClass: 'active'
})

router.push('/home')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
