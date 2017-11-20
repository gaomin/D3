// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router/router.js';

console.log(router);

Vue.config.productionTip = false;

Vue.use(VueRouter);


new Vue({
  el: '#app',
  router,  // 注入到根实例中
  render: h => h(App)
})
