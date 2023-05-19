<script>
import IndexBanner from '../components/index-banner.vue';
import IndexSectionTitle from '../components/index-section-title.vue';

export default {
    data() {
        return {
            banner_img: './images/bene-banner.jpg',
            title_en: 'join us and be friends now',
            title_zh: '来了就是朋友',
            text: '每一位新成员的加入都是公司巨大的财富，我们时刻关注每一位朋友的成长，洞察朋友的需要，更多福利正在路上。',
            content: [{
                title: '工作在傲合',
                description: 'Work happily',
                url: './images/bene-img1.jpg'
            }, {
                title: '生活在傲合',
                description: 'Surprised life',
                url: './images/bene-img2.jpg'
            }]
        }
    },
    components: {
        IndexBanner,
        IndexSectionTitle
    },
};
</script>

<template>
    <IndexBanner :banner_img="banner_img"></IndexBanner>

    <section id="benefit">
        <div class="wrap">
            <IndexSectionTitle :title_en="title_en" :title_zh="title_zh"></IndexSectionTitle>

            <p class="text">{{ text }}</p>
            <div v-for="(item, index) in content" :key="index" class="bene_content">
                <div class="top" :class="{ retop: index % 2 == 1 }">
                    <div class="left">
                        <p class="item_index">{{ index < 9 ? '0' + (index + 1) : index + 1 }}</p>
                                <p class="item_title">{{ item.title }}</p>
                    </div>
                    <div class="right">{{ item.description }}</div>
                </div>
                <div class="bot"><img :src="item.url" alt=""></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#benefit {
    padding: 2vw 0;
    color: #666666;
}

#benefit .text {
    font-size: 1.2rem;
    text-align: center;
    padding: 1vw 0 10vw;
}

#benefit .bene_content {
    padding-bottom: 10vw;
}

#benefit .bene_content .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 3vw;
    font-weight: bold;
}

#benefit .bene_content .top.retop {
    flex-direction: row-reverse;
}

#benefit .bene_content .top .left {
    position: relative;
    font-size: 3rem;
}

#benefit .bene_content .top .right {
    font-size: 2.5rem;
}

#benefit .bene_content .top .item_index {
    color: orange;
    font-size: 8rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.4;
    z-index: -1;
}

#benefit .bene_content .top .item_title {
    color: #000;
}



/* 媒体查询 */
@media (max-width: 750px) {
    #benefit .bene_content .top .right {
        display: none;
    }

    #benefit .bene_content .top .item_index {
        display: none;
    }

    #benefit .bene_content .top .item_title {
        font-size: 2rem;
    }
}
</style>