<script>
import IndexBanner from '../components/index-banner.vue';

export default {
    data() {
        return {
            banner_img: './images/develop-banner.jpg',
            tab_img: {
                left: ['./images/develop-img1.jpg'],
                right: ['./images/develop-img2.jpg']
            },
            tab_flag: true
        }
    },
    components: {
        IndexBanner
    },
};
</script>

<template>
    <IndexBanner :banner_img="banner_img"></IndexBanner>

    <section id="develop">
        <div class="tab">
            <div class="tab_left" :class="{ active_tab: tab_flag }" @click="tab_flag = true">晋升通道</div>
            <div class="tab_right" :class="{ active_tab: !tab_flag }" @click="tab_flag = false">培养措施</div>
        </div>
        <div class="tab_content">
            <div class="tab_content_left" v-show="tab_flag">
                <img v-for="(item, index) in tab_img.left" :key="index" :src="item" alt="">
            </div>
            <div class="tab_content_right" v-show="!tab_flag">
                <img v-for="(item, index) in tab_img.right" :key="index" :src="item" alt="">
            </div>
        </div>
    </section>
</template>

<style scoped>
#develop .tab {
    display: flex;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    background-color: #eee;
}

#develop .tab>div {
    padding: 1.2vw 4vw;
    font-size: 1.4rem;
}

#develop .tab>div.active_tab {
    background-color: orange;
    color: #fff;
}
</style>