<script>
import IndexBanner from '../components/index-banner.vue';
import IndexSectionTitle from '../components/index-section-title.vue';

export default {
    data() {
        return {
            banner_obj: {
                url: './images/bene-banner.webp',
                hover: ['傲合福利', '好公司与好人才相互铸就，好团队期待你的加入', 'good company and good talents create each other, and a good team looks forward to your joining']
            },
            title_en: 'join us and be friends now',
            title_zh: '来了就是朋友',
            text: '每一位新成员的加入都是公司巨大的财富，我们时刻关注每一位朋友的成长，洞察朋友的需要，更多福利正在路上。',
            content: [{
                title: '工作在傲合',
                description: 'Work happily',
                url: './images/bene-img1.webp',
                benefits: [{
                    title: '每年调薪',
                    url: './images/icon-bene1.svg'
                }, {
                    title: '奖金提成',
                    url: './images/icon-bene2.svg'
                }, {
                    title: '全勤奖金',
                    url: './images/icon-bene3.svg'
                }, {
                    title: '年终奖金',
                    url: './images/icon-bene4.svg'
                }, {
                    title: '社会保险',
                    url: './images/icon-bene5.svg'
                }, {
                    title: '定时体检',
                    url: './images/icon-bene6.svg'
                }, {
                    title: '人才激励',
                    url: './images/icon-bene7.svg'
                }, {
                    title: '更多福利敬请期待...',
                    url: '',
                    type: 'merge'
                }]
            }, {
                title: '生活在傲合',
                description: 'Surprised life',
                url: './images/bene-img2.webp',
                benefits: [{
                    title: '工作午餐',
                    url: './images/icon-bene8.svg'
                }, {
                    title: '下午茶',
                    url: './images/icon-bene9.svg'
                }, {
                    title: '带薪假期',
                    url: './images/icon-bene10.svg'
                }, {
                    title: '生日会',
                    url: './images/icon-bene11.svg'
                }, {
                    title: '节日礼品',
                    url: './images/icon-bene12.svg'
                }, {
                    title: '团建活动',
                    url: './images/icon-bene13.svg'
                }, {
                    title: '更多福利敬请期待...',
                    url: '',
                    type: 'merge'
                }]
            }]
        }
    },
    components: {
        IndexBanner,
        IndexSectionTitle
    },
    mounted() { },
};
</script>

<template>
    <IndexBanner :banner_obj="banner_obj"></IndexBanner>

    <section id="bene">
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
                <div class="bot">
                    <img v-lazy="item.url" alt="">

                    <!-- 九宫格开始 -->
                    <div class="text_hover shadow" :class="{ retext_hover: index % 2 == 1 }">
                        <div class="grid">
                            <div class="grid_item" v-for="(_item, _index) in item.benefits" :key="_index"
                                :class="'grid_item_' + (_index + 1), { grid_item_merge: _item.type === 'merge' }">
                                <p class="grid_img" v-if="_item.url"><img :src="_item.url" alt=""></p>
                                <p class="grid_title">{{ _item.title }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- 九宫格结束 -->

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#bene {
    padding: 2vw 0 4vw;
    color: #666666;
}

#bene .text {
    font-size: 1.2rem;
    text-align: center;
    padding: 1vw 0 10vw;
}

#bene .bene_content:not(:last-child) {
    padding-bottom: 10vw;
}

#bene .bene_content .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 3vw;
    font-weight: bold;
}

#bene .bene_content .top.retop {
    flex-direction: row-reverse;
}

#bene .bene_content .top .left {
    position: relative;
    font-size: 3rem;
}

#bene .bene_content .top .right {
    font-size: 2.5rem;
}

#bene .bene_content .top .item_index {
    color: orange;
    font-size: 8rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.6;
    z-index: -1;
}

#bene .bene_content .top .item_title {
    color: #000;
}

#bene .bene_content .bot {
    position: relative;
}

.text_hover {
    width: 28vw;
    height: 28vw;
    background-color: #ffffff;
    position: absolute;
    top: 2vw;
    left: 2vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.text_hover.retext_hover {
    left: auto;
    right: 2vw;
}

.text_hover .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 86%;
    height: 86%;
}

.grid_item {
    border: 1px dotted #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.grid_item .grid_img {
    width: 40%;
    height: 40%;
    background-color: orange;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.grid_item .grid_img img {
    width: 72%;
    height: 72%;
}

.grid_item .grid_title {
    font-size: 0.8rem;
    font-weight: bold;
    /* color: #000000; */
    margin-top: 1.2vh;
}

.grid_item_1 {
    border-top: none;
    border-left: none;
}

.grid_item_2 {
    border-top: none;
}

.grid_item_3 {
    border-top: none;
    border-right: none;
}

.grid_item_4 {
    border-left: none;
}

.grid_item_6 {
    border-right: none;
}

.grid_item_7 {
    border-bottom: none;
    border-left: none;
}

.grid_item_8 {
    border-bottom: none;
}

.grid_item_9 {
    border-bottom: none;
    border-right: none;
}

.grid_item_merge {
    border-right: none;
    color: orange;
}

.grid_item_merge p {
    font-size: 1.2rem !important;
}

.grid_item_7.grid_item_merge {
    grid-column: 1 / span 3;
}

.grid_item_8.grid_item_merge {
    grid-column: 2 / span 2;
}

.grid_item_9.grid_item_merge {
    grid-column: 3 / span 1;
}

/* 媒体查询 */
@media (max-width: 750px) {
    #bene .bene_content .top {
        justify-content: center;
    }

    #bene .bene_content .top .right {
        display: none;
    }

    #bene .bene_content .top .item_index {
        display: none;
    }

    #bene .bene_content .top .item_title {
        font-size: 2rem;
        color: orange;
    }

    .text_hover {
        position: relative;
        left: 0;
        width: 96vw;
        height: 96vw;
    }

    .text_hover.retext_hover {
        right: 0;
    }

}
</style>