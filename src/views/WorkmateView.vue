<script>
import indexBanner from '../components/index-banner.vue';

export default {
    data() {
        return {
            banner_img: './images/work-banner.jpg',
            content: [{
                title: '2019/1十周年年会庆典',
                description: '为庆祝澎尼十周年，澎友们使出浑身解数。正是因为有这样的你们，才有在风雨中逐渐枝繁叶茂，长成十年大树的澎尼。感谢始终有你。',
                url: './images/work-img1.jpg',
                flag_hover: false
            }, {
                title: '2019/1十周年年会庆典',
                description: '为庆祝澎尼十周年，澎友们使出浑身解数。正是因为有这样的你们，才有在风雨中逐渐枝繁叶茂，长成十年大树的澎尼。感谢始终有你。',
                url: './images/work-img1.jpg',
                flag_hover: false
            }, {
                title: '2019/1十周年年会庆典',
                description: '为庆祝澎尼十周年，澎友们使出浑身解数。正是因为有这样的你们，才有在风雨中逐渐枝繁叶茂，长成十年大树的澎尼。感谢始终有你。',
                url: './images/work-img1.jpg',
                flag_hover: false
            }, {
                title: '2019/1十周年年会庆典',
                description: '为庆祝澎尼十周年，澎友们使出浑身解数。正是因为有这样的你们，才有在风雨中逐渐枝繁叶茂，长成十年大树的澎尼。感谢始终有你。',
                url: './images/work-img1.jpg',
                flag_hover: false
            }, {
                title: '2019/1十周年年会庆典',
                description: '为庆祝澎尼十周年，澎友们使出浑身解数。正是因为有这样的你们，才有在风雨中逐渐枝繁叶茂，长成十年大树的澎尼。感谢始终有你。为庆祝澎尼十周年，澎友们使出浑身解数。正是因为有这样的你们，才有在风雨中逐渐枝繁叶茂，长成十年大树的澎尼。感谢始终有你。为庆祝澎尼十周年，澎友们使出浑身解数。正是因为有这样的你们，才有在风雨中逐渐枝繁叶茂，长成十年大树的澎尼。感谢始终有你。',
                url: './images/work-img1.jpg',
                flag_hover: false
            }],
        }
    },
    methods: {
        handleImgHover(index) {
            this.content[index].flag_hover = !this.content[index].flag_hover
        }
    },
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    props: {},
    components: {
        indexBanner
    },
};
</script>

<template>
    <indexBanner :banner_img="banner_img"></indexBanner>

    <section id="workmate">
        <div class="wrap">
            <ul>
                <li v-for="(item, index) in content" :key="index">
                    <p class="item_img"><img :src="item.url" alt="" :class="{ hover_img: item.flag_hover }"
                            @mouseenter="handleImgHover(index)" @mouseleave="handleImgHover(index)"></p>
                    <p class="item_title">{{ item.title }}</p>
                    <p class="item_desc" :title="item.description">{{ item.description }}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
#workmate {
    padding: 2vw 0;
    color: #666666;
}

#workmate ul {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 3vw 1vw;
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
    -webkit-line-clamp: 2;
    overflow: hidden;

}

/* 媒体查询 */
@media (max-width: 750px) {
    #workmate ul {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1, 1fr);
        gap: 10vw 1vw;
    }
}
</style>