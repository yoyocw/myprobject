import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

const merge = function () {
  return Array.prototype.concat.apply([], arguments);
};

import other from '@/test/routes'

// 全局路由
let routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
];

// 合并路由
routes = merge(routes,other);

const router = new Router({
  mode: 'history',
  routes
});
export default router;

