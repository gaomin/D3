import Vue from "vue";
import VueRouter from "vue-router";
import catalogue from '../components/catalogue.vue';

console.log(catalogue);

const routers = [
  { path: '/', component: catalogue},
];

const router = new VueRouter({
  // ES6缩写语法，相当于routes:routes
  routes: routers  
});

export default router;