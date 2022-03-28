import {createApp} from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from "vue-router";
import {setupLayouts} from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'


// 引入样式
import 'uno.css'

const router = createRouter({
    history: createWebHistory(),
    routes: setupLayouts(generatedRoutes)
})
createApp(App)
    .use(router)
    .mount('#app')
