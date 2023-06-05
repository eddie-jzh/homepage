<script>
export default {
    data() {
        return {
            about_title_en: 'about us',
            about_title_zh: '关于我们',
            about_description: ['傲合发展有限公司是多渠道跨境出口的贸易公司。', '总部位于广州，在香港、深圳、宁波、美国加州等地设有办公室，拥有一批优秀的、专业的技能人才和积极向上的80/90后。', '深耕Amzaon平台，同时涉及自建站等其他平台，致力于开拓海外市场，覆盖欧美日本、新加坡、澳大利亚、印度、中东等绝大多数发达国家及地区的消费者。傲合坚持深耕供应链，通过自主研发新产品，聚焦核心品类，开发新品，打造优势品牌，不断提出产品带给用户的体验活动用户对我们品牌的认可和超预期的购物体验。'],
            about_img: {
                url: './images/index-about.webp',
                hover: 'Think More\nMove Fast\nMake History'
            },
            about_more: '更多 > >'
        }
    }
}
</script>

<template>
    <section id="about">
        <div class="wrap">
            <div class="left shadow">
                <p class="title_en">{{ about_title_en }}</p>
                <p class="title_zh">{{ about_title_zh }}</p>
                <div class="gap_line">
                    <div class="gap_dot"></div>
                </div>
                <p class="desc" v-for="(item, index) in about_description" :key="index">{{ item }}</p>
                <p class="more" @click="this.$router.push('/story')">{{ about_more }}</p>
            </div>
            <div class="right">
                <img v-lazy="about_img.url" alt="">
                <span>{{ about_img.hover }}</span>
            </div>
        </div>
    </section>
</template>

<style scoped>
#about {
    padding: 2vw 0 4vw;
}

#about .wrap {
    display: flex;
    justify-content: space-between;
}

#about .wrap>div {
    width: 49%;
    min-height: 300px;
    overflow: hidden;
}

#about .left>p {
    margin: 0.6vw 3vw;
}

#about .left>p:last-child {
    margin-bottom: 2vw;
}

#about .left .title_en {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: bold;
    color: orange;
}

#about .left .title_zh {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
}

#about .left .desc {
    line-height: 28px;
}

#about .left .more {
    display: block;
    padding: 8px 30px;
    border-radius: 30px;
    background-color: orange;
    color: #fff;
    float: right;
    cursor: pointer;
}

#about .right {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

#about .right img {
    height: 100%;
}

#about .right span {
    position: absolute;
    font-size: 3rem;
    text-align: center;
    width: 80%;
    -webkit-text-stroke: 2px #ffffff;
    color: #ffffff;
    font-weight: bold;
    font-style: italic;
    white-space: pre-wrap;
}

/* 媒体查询 */
@media (max-width: 750px) {
    #about .wrap {
        flex-direction: column;
    }

    #about .wrap>div {
        width: auto;
        flex: 1;
        margin: 2vw 0;
        min-height: auto;
    }

    #about .left {
        padding-top: 3vw;
    }

    #about .left>p {
        margin: 1vw 3vw;
    }

    #about .left>p:last-child {
        margin-bottom: 6vw;
    }
}
</style>
