<script>
import IndexBanner from '../components/index-banner.vue';
import indexSectionTitle from '../components/index-section-title.vue';

export default {
    data() {
        return {
            banner_obj: {
                url: './images/deve-banner.webp',
                hover: ['发展空间', '付出必有回报，给你看得见的未来', 'DEFINITE REWARDS AND A DEFINITE FUTURE FOR YOUR EFFORT']
            },
            tab_content: {
                left: [{
                    title_en: '晋升通道',
                    rank: './images/deve-img1.webp'
                }],
                right: [{
                    title_en: '新员工 -- 培训措施',
                    balls: [{
                        title: '入职培训规范要求',
                        url: './images/icon-deve1.svg'
                    }, {
                        title: '导师跟踪指导提升',
                        url: './images/icon-deve2.svg'
                    }, {
                        title: '新人任务卡助力融入',
                        url: './images/icon-deve3.svg'
                    }, {
                        title: '试用期访谈及时反馈',
                        url: './images/icon-deve4.svg'
                    }]
                }, {
                    title_en: '老员工 -- 培训措施',
                    balls: [{
                        title: '内训分享在集体中成长',
                        url: './images/icon-deve5.svg'
                    }, {
                        title: '行业交流捕捉大趋势',
                        url: './images/icon-deve6.svg'
                    }, {
                        title: '技能培训提高专业水平',
                        url: './images/icon-deve7.svg'
                    }, {
                        title: '基中高层培训夯实力量',
                        url: './images/icon-deve8.svg'
                    }]
                }]
            },
        }
    },
    components: {
        IndexBanner,
        indexSectionTitle
    },
    mounted() {
        window.scrollTo(0, 0)
    },
};
</script>

<template>
    <IndexBanner :banner_obj="banner_obj"></IndexBanner>

    <section id="deve">
        <div class="tab">
            <div class="tab_left active_tab">晋升通道</div>
            <div class="tab_right">培养措施</div>
        </div>
        <div class="tab_content">
            <div class="tab_content_left wrap">
                <div class="tab_content_item" v-for="(item, index) in tab_content.left" :key="index">
                    <indexSectionTitle :title_en="item.title_en"></indexSectionTitle>
                    <img :src="item.rank" alt="">
                </div>
            </div>

            <div class="tab">
                <div class="tab_left">晋升通道</div>
                <div class="tab_right active_tab">培养措施</div>
            </div>

            <div class="tab_content_right wrap">
                <div class="tab_content_item" v-for="(item, index) in tab_content.right" :key="index">
                    <indexSectionTitle :title_en="item.title_en"></indexSectionTitle>
                    <ul>
                        <li v-for="(_item, _index) in item.balls" :key="_index">
                            <p class="ball_img"><img :src="_item.url" alt=""></p>
                            <p class="ball_title">{{ _item.title }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#deve {
    padding-bottom: 4vw;
}

#deve .tab {
    display: flex;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    background-color: #f3f3f3;
}

#deve .tab>div {
    padding: 1.2vw 4vw;
    font-size: 1.4rem;
    color: #666666;
    background-color: #eeeeee;
}

#deve .tab>div.active_tab {
    background-color: orange;
    color: #f3f3f3;
}

#deve .tab_content .tab_content_item {
    width: 100%;
    background-color: #f3f3f3;
    margin-top: 2vw;
    padding: 1.2vw 0 3vw;
}

#deve .tab_content_left .tab_content_item {
    padding: 1.2vw 0 0;
}

.tab_content_item ul {
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 3vw;
    font-weight: bold;
}

.tab_content_item ul li {
    width: 10vw;
}

.tab_content_item ul li .ball_img {
    background-color: orange;
    border-radius: 50%;
    width: 10vw;
    height: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to left top, #ff8c00, #ffa600);

}

.tab_content_item ul li .ball_img img {
    width: 46%;
}

.tab_content_item ul li .ball_title {
    margin-top: 1.5vw;
    color: #666666;
}

/* 媒体查询 */
@media (max-width: 750px) {
    #deve .tab>div {
        font-size: 1rem;
        padding: 2vw 4vw;
    }

    .tab_content_item ul li {
        width: 10vh;
    }

    .tab_content_item ul li .ball_img {
        width: 10vh;
        height: 10vh;
    }

    .tab_content_item ul li .ball_title {
        font-size: 0.8rem;
        line-height: 1rem;
    }
}
</style>