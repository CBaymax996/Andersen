import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        alias: ['/home', '/index'],
        component: Home,

    },
    {
        path: '/pass',
        name: 'PassMe',
        meta: {title: "Pass Me"},
        alias: ['/passMe'],
        component: function () {
            return import("@/views/PassMe.vue")
        },
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if ("meta" in to && "title" in to.meta) {
        window.document.title = to.meta.title
    }
    next()
})

export default router
