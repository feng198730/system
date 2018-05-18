import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Login from '@/pages/login'


Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'login',
            component: Login,
            desc: '登录'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
    beforeEnter(to, from, next) {
        console.log(to, from)
            //next()
    },
    beforeRouteUpdate(to, from, next) {
        console.log(to, from)
    }
})

export default router