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
        meta: {
            title:'首页'
        },
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
        meta: {
            title:'关于'
        },
        component: About,
        beforeEnter: (to, from, next) => {
            console.log('about beforeEnter')
            next()
        }
    },
    {
        path: '/user/:userId',
        meta: {
            title:'用户'
        },
        component: User
    },
    {
        path: '/profile',
        meta: {
            title:'profile'
        },
        component: Profile
    }
]

const router = new VueRouter({
    routes,
    // 用h5的history模式
    mode: 'history'
})

// 全局前置守卫
router.beforeEach((to, from, next)=>{
    // console.log(to)
    document.title = to.matched[0].meta.title
    // 可以判断用户是否登录，登录时调next()，未登录时调next('/')
    next()
})

// 全局后置钩子
router.afterEach((to,from) =>{
    // console.log('---------')
})

// 导出对象
export default router