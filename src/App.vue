<script>
import IndexHeader from './components/index-header.vue';
import IndexFooter from './components/index-footer.vue';
import { RouterLink, RouterView } from 'vue-router'

export default {
    data() {
        return {
            router_list: [{
                text: '首页',
                path: '/'
            }, {
                text: '傲合故事',
                path: '/about'
            }, {
                text: '发展空间',
                path: '/develop'
            }, {
                text: '公司福利',
                path: '/benefit'
            }, {
                text: '员工风采',
                path: '/workmate'
            }, {
                text: '加入我们',
                path: '/contact'
            }]
        }
    },
    components: {
        IndexHeader,
        IndexFooter
    }
}
</script>

<template>
    <IndexHeader :router_list="router_list"></IndexHeader>
    <div id="page_container">
        <RouterView></RouterView>
    </div>
    <IndexFooter :router_list="router_list"></IndexFooter>
</template>

<style scoped></style>
