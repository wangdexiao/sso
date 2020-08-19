import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login'
import XEUtils from "xe-utils/methods";
import store from "../store";

Vue.use(VueRouter);

const routes = [

  {
    path: '/login',
    name: 'login',
    component: Login,

  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
  },

];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
});


router.beforeResolve((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    // console.log('用户信息:' + store.getters.getUserInfo)
    if (!XEUtils.isEmpty(store.getters.getUserInfo)) {  // 通过vuex state获取当前的token是否存在
      next();
    } else {
      router.replace("/login");
    }
  }
  else {
    next();
  }
});

export default router
