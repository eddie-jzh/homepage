<script>
export default {
    data() {
        return {
            banner_url: null,
            banner_scroll: false,
            banner_icon: './images/icon-page-down.svg'
        }
    },
    props: {
        banner_obj: {
            type: Object,
            default: null
        }
    },
    methods: {
        // initSwiper() {
        //     var mySwiper = new Swiper('.swiper', {
        //         direction: 'horizontal',
        //         loop: true,
        //         grabCursor: true,
        //         autoplay: {
        //             delay: 7000,
        //         },
        //         pagination: {
        //             el: '.swiper-pagination',
        //             clickable: true,
        //             type: 'bullets',
        //         },
        //         navigation: {
        //             nextEl: '.swiper-button-next',
        //             prevEl: '.swiper-button-prev',
        //         },
        //     })
        // },
    },
    mounted() {
        // this.banner_url = this.banner_img
        // if (typeof this.banner_url === 'string') {
        //     this.banner_scroll = false
        // } else {
        //     this.banner_scroll = true
        // }

        // this.$nextTick(() => {
        //     this.initSwiper()
        // })
    }
}
</script>

<template>
    <section id="banner">
        <!-- swiper轮播开始 -->
        <!-- <div v-if="banner_scroll" class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in banner_url" :key="index">
                    <img :src="item" alt="">
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-pagination"></div>
        </div> -->
        <!-- swiper轮播结束 -->

        <div v-if="!banner_scroll" class="noswiper">
            <img :src="banner_obj.url" alt="" :class="{ img_blur: !banner_obj.hover_img }">
            <div class="img_hover" v-if="banner_obj.hover_img">
                <img :src="banner_obj.hover_img" alt="">
                <p v-for="( item, index ) in  banner_obj.hover " :key="index">{{ item }}</p>
            </div>

            <div class="text_hover" v-if="!banner_obj.hover_img">
                <p v-for="( item, index ) in  banner_obj.hover " :key="index" :class="'text_hover_p' + (index + 1)">{{
                    item }}
                </p>
                <div class="text_hover_next">
                    <img :src="banner_icon" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.swiper {
    --swiper-theme-color: orange;
}

.swiper,
.noswiper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vw;
    max-height: 800px;
    overflow: hidden;
    position: relative;
}

.noswiper .img_hover,
.noswiper .text_hover {
    width: 70%;
    text-align: center;
    font-weight: bold;
    position: absolute;
}

.noswiper .img_hover {
    font-style: italic;
    color: #f18a15;
    font-size: 3rem;
}

.noswiper .img_hover>img {
    width: 20%;
    display: inline-block;
}

.noswiper .text_hover {
    color: #fff;
    font-size: 2rem;
    text-transform: uppercase;
}

.noswiper .text_hover .text_hover_p1 {
    font-size: 3rem;
    padding-bottom: 40px;
    position: relative;
}

.noswiper .text_hover .text_hover_p1::after {
    display: block;
    content: '';
    width: 100px;
    height: 6px;
    background-color: #fff;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
}

.noswiper .text_hover .text_hover_p2 {
    padding-top: 40px;
}

.noswiper .text_hover .text_hover_p3 {
    font-size: 1.6rem;
    font-weight: normal;
    padding-bottom: 40px;
}

.noswiper .text_hover .text_hover_next {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: none;
}

.noswiper .text_hover .text_hover_next img {
    width: 70%;
    height: 70%;
    margin: 15% auto 0;
}

.swiper img {
    height: 100%;
}

.swiper .swiper-button-prev {
    left: 30px;
}

.swiper .swiper-button-next {
    right: 30px;
}

.swiper-pagination .swiper-pagination-bullet {
    width: 12px !important;
    height: 12px !important;
    margin: 0 8px !important;
}

/* 媒体查询 */
@media (max-width: 750px) {

    .swiper .swiper-button-prev,
    .swiper .swiper-button-next,
    .swiper-pagination {
        display: none;
    }

    .swiper,
    .noswiper {
        height: 30vh;
    }

    .noswiper img {
        height: 100%;
    }

    .noswiper .img_hover {
        font-size: 1.6rem;
        width: 90%;
    }

    .noswiper .img_hover img {
        width: 26%;
    }

    .noswiper .text_hover {
        width: 80%;
    }

    .noswiper .text_hover .text_hover_p1 {
        font-size: 1.6rem;
        padding-bottom: 20px;
    }

    .noswiper .text_hover .text_hover_p2 {
        font-size: 1.2rem;
        padding-top: 20px;
        padding-bottom: 10px;
    }

    .noswiper .text_hover .text_hover_p3 {
        padding-bottom: 20px;
        font-size: 0.8rem;
        line-height: 1rem;
    }
}
</style>
