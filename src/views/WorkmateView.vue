<script>
import indexBanner from '../components/index-banner.vue';

export default {
    data() {
        return {
            banner_obj: {
                url: './images/work-banner.webp',
                hover: ['员工风采', '汇集全体傲合人梦想，齐心积跬步，致千里之遥程', 'WITH JOINT EFFORTS, EVERY SMALL STEP COUNTS TOWARDS A LONG JOURNEY']
            },
            content: [{
                title: '2022/11 大麦运动会',
                description: '大麦运动会是 “黑五网一”前的全员热身趣味运动会，为迎接大促给大家加油打气，让我们以斗志昂扬的姿态，迎接市场的挑战，迎接消费者的到来，为他们提供周到的服务，更贴心的产品。再创佳绩，业绩节节高。',
                url: './images/work-img1.webp',
                flag_hover: false
            }, {
                title: '2021/10 生日会',
                description: '与祖国母亲一起过生日，有国才有家，有家才有我们，祝傲合大家庭永远繁荣昌盛。',
                url: './images/work-img2.webp',
                flag_hover: false
            }, {
                title: '2021/02 新春嘉年华',
                description: '回首2020，公司和每一位员工携手抗疫，一起度过了安全，健康的一年！起航2021，我们将同心同行，共创未来。',
                url: './images/work-img3.webp',
                flag_hover: false
            }, {
                title: '2021/02 新春嘉年华',
                description: '嘉年华是欢乐轻松的时刻，美食美酒给大家带来味觉盛宴，好玩的游戏和欢乐的抽奖给大家带来视听的盛宴。让大家全年都收获多多，干劲慢慢。',
                url: './images/work-img4.webp',
                flag_hover: false
            }, {
                title: '2020/11 生日会',
                description: '生日的日子当然要大家一起庆祝，笑脸是最好的祝福，被无限的祝福包围，感受这无限的欣喜吧。',
                url: './images/work-img5.webp',
                flag_hover: false
            }, {
                title: '2019/12 跨年活动',
                description: '新年伊始，万象更新，新目标，新征程，在跨年夜这个特别的时刻，我们在一起，用我们最好的姿态迎接新的一年。',
                url: './images/work-img6.webp',
                flag_hover: false
            }, {
                title: '2019/10 团建活动',
                description: '在宜人的自然风景区，回归自然，返璞归真，通过团队挑战活动陶冶，放松大家的身心，心与心的交流，让我们彼此更加贴心，在工作中更能高效协助互动。',
                url: './images/work-img7.webp',
                flag_hover: false
            }],
        }
    },
    methods: {
        handleImgHover(index) {
            this.content[index].flag_hover = !this.content[index].flag_hover
        }
    },
    components: {
        indexBanner
    },
    mounted() {
        window.scrollTo(0, 0)
    },
};
</script>

<template>
    <indexBanner :banner_obj="banner_obj"></indexBanner>

    <section id="workmate">
        <div class="wrap">
            <ul>
                <li v-for="(item, index) in content" :key="index">
                    <p class="item_img">
                        <img v-lazy="item.url" alt="" :class="{ hover_img: item.flag_hover }"
                            @mouseenter="handleImgHover(index)" @mouseleave="handleImgHover(index)">
                    </p>
                    <p class="item_title">{{ item.title }}</p>
                    <p class="item_desc" :title="item.description">{{ item.description }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
#workmate {
    padding: 2vw 0 4vw;
    color: #666666;
}

#workmate ul {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 2vw 1vw;
}

#workmate ul li .item_img {
    overflow: hidden;
    cursor: pointer;
}

#workmate ul li .item_img img {
    transition: all 0.5s ease;
    transform: scale(1.01);
}

#workmate ul li .item_img img.hover_img {
    transform: scale(1.1);
}

#workmate ul li .item_title {
    font-size: 1.4rem;
    color: orange;
    font-weight: bold;
    padding: 0.6vw 0;
}

#workmate ul li .item_desc {
    font-size: 0.9rem;
    line-height: 22px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;

}

/* 媒体查询 */
@media (max-width: 750px) {
    #workmate ul {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1, 1fr);
        gap: 10vw 1vw;
    }

    #workmate ul li .item_desc {
        -webkit-line-clamp: 5;
    }
}
</style>