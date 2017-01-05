// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

import './common/stylus/index.styl';

Vue.use(VueRouter);

// let app = Vue.extend(App);

let routes = [
  {path: '/', redirect: '/goods'},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];

let router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
});

/* eslint-disable */
let apps = new Vue({
  router: router,
  template: '<App/>',
  components: { App }
}).$mount('#app');
