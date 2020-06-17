import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book'
import PageOne from "../views/PageOne"
import PageTwo from "../views/PageTwo"
import Index from "../views/Index"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '导航',
        component: Index,
        redirect: "/queryBook",
        children: [
            {
                path: '/queryBook',
                name: '查询图书',
                component: PageOne
            },
            {
                path: '/addBook',
                name: '添加图书',
                component: PageTwo
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
