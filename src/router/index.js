import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        component: IndexView,
        meta: {
            title: '首页 - 傲合发展有限公司'
        }
    }, {
        path: '/story',
        component: () => import('../views/StoryView.vue'),
        meta: {
            title: '傲合故事 - 傲合发展有限公司'
        }
    }, {
        path: '/develop',
        component: () => import('../views/DevelopView.vue'),
        meta: {
            title: '发展空间 - 傲合发展有限公司'
        }
    }, {
        path: '/benefit',
        component: () => import('../views/BenefitView.vue'),
        meta: {
            title: '公司福利 - 傲合发展有限公司'
        }
    }, {
        path: '/workmate',
        component: () => import('../views/WorkmateView.vue'),
        meta: {
            title: '员工风采 - 傲合发展有限公司'
        }
    }, {
        path: '/contact',
        component: () => import('../views/ContactView.vue'),
        meta: {
            title: '加入我们 - 傲合发展有限公司'
        }
    }],
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { top: 0 }
    }
})

export default router
