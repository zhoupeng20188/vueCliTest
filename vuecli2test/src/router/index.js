import VueRouter from 'vue-router'
import Vue from 'vue'
// // 导入组件
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
// 路由懒加载写法
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

// 使用路由
Vue.use(VueRouter)

const routes = [
    {
        path: '',
        // component: Home
        // 重定向 默认路径
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '',
                // component: Home
                // 重定向 默认路径
                redirect: 'news'
            },
            {
                path: 'news',
                component: HomeNews
            },
            {
                path: 'message',
                component: HomeMessage
            },
        ]
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user/:userId',
        component: User
    },
    {
        path: '/profile',
        component: Profile
    }
]

const router = new VueRouter({
    routes,
    // 用h5的history模式
    mode: 'history'
})

// 导出对象
export default router