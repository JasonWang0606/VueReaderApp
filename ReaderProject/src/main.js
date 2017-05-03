// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import home from './components/home/home.vue'
import bookbacket from './components/bookbacket/bookbacket.vue'
import category from './components/category/category.vue'
import rank from './components/rank/rank.vue'
import male from './components/male/male.vue'
import female from './components/female/female.vue'

import './common/style/index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    {path: '/home', component: home},
    {path: '/bookbacket', component: bookbacket},
    {path: '/male', component: male},
    {path: '/female', component: female},
    {path: '/category', component: category},
    {path: '/rank', component: rank}
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
