import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Card = () => import("../views/card/Card")
const Profile = () => import("../views/profile/Profile")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/card',
      component: Card
    },
    {
      path: '/profile',
      component: Profile
    },
  ],
  mode:"history"
})
