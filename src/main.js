import '/src/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

router.beforeEach((to, from, next) => {
    // 如果目标路由对象定义了 meta.title 属性，则将其作为页面的 title
    if (to.meta.title) {
        document.title = to.meta.title
    }

    // 继续路由导航
    next()
})

createApp(App).use(router).use(VueLazyload).mount('#app')
