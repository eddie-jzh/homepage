<script>
import storyTimeline from '../components/story-timeline.vue';

export default {
    data() {
        return {
            page_logo: './images/story-logo.webp',
            page_title: '企业介绍',
            slogan: 'Passion Makes Distinction 激情造就卓越',
            content: [{
                title: '傲合精神：Think More，Move Fast，Make History',
                description: '傲合发展有限公司是多渠道跨境出口的贸易公司。\n总部位于广州，在香港、深圳、宁波、美国加州等地设有办公室，拥有一批优秀的、专业的技能人才和积极向上的80/90后。是一支富有理想和激情的团队，具有积极创新和开拓进取的精神。深耕Amzaon平台，同时涉及自建站等其他平台，致力于开拓海外市场，覆盖欧美日本、新加坡、澳大利亚、印度、中东等绝大多数发达国家及地区的消费者。傲合坚持深耕供应链，通过自主研发新产品，聚焦核心品类，开发新品，打造优势品牌，不断提出产品带给用户的体验活动用户对我们品牌的认可和超预期的购物体验。\n在企业发展历程努力实习高效业务运作，快速的数据处理能力，成熟可复制的项目方案，高效准确的数据报表分析，协助业务决策。在提升客户购物体验方便，公司组建客服团队在线服务，支持英语、法语、德语日语、中文等多种语言服务，已经邮件、社交聊天等多种服务渠道。未来，傲合将一如既往坚定“中国自主研发品牌领头羊”的使命，把中国的优质商品、优质供应链带到全世界，继续耕耘多渠道跨境出口贸易领域，披荆斩棘，乘风破浪。',
                style: {
                    color: 'orange'
                }
            }, {
                title: '公司发展历程',
                description: '一家与众不同而又低调的跨境电商大卖。拥有亚马逊中国卖家前二十的账号，每一个账号的销售额不低于五千万人民币。 一家人效比超过1000万的电商公司，在所涉及的类目都是以做爆款为目的的头部卖家，爆款SKU年销售可以达到一亿人民币。拥有深厚的传统外贸经验，积累了优质的供应链资源。 深谙生意的本质，以产品和服务为导向，辅以超大力度的推广支持，想不成功都很难！ 公司的销售额连续多年100%增长，成为Amazon品类领头羊，并且在2019年跻身于亚马逊出口跨境品牌TOP 100之列。公司敢为天下先，业务涉及亚马逊几乎所有的站点，在2019年荣获“亚马逊年度最具全球视野卖家”的殊荣。'
            }],
            timeline: [{
                year: '2008-2013',
                text: '深耕外贸行业',
                url: './images/story-line1.webp'
            }, {
                year: '2014',
                text: '成立第一家亚马逊店铺',
                url: './images/story-line2.webp'
            }, {
                year: '2015',
                text: '拓展欧洲、澳洲等市场',
                url: './images/story-line3.webp'
            }, {
                year: '2016',
                text: '销售额突破亿',
                url: './images/story-line4.webp'
            }, {
                year: '2017',
                text: '成立海外仓库',
                url: './images/story-line5.webp'
            }, {
                year: '2019年',
                text: '亚马逊出海品牌TOP10，并荣获“亚马逊年度最具全球视野卖家”的殊荣',
                url: './images/story-line6.webp'
            }, {
                year: '2020年',
                text: '入驻平台超7个',
                url: './images/story-line7.webp'
            }, {
                year: '2022年',
                text: '销售额突破十亿',
                url: './images/story-line8.webp'
            },]
        }
    },
    components: {
        storyTimeline
    },
    mounted() { },
}
</script>

<template>
    <section id="intro">
        <div class="wrap">
            <div class="intro">
                <div class="left">
                    <img v-lazy="page_logo" alt="">
                </div>
                <div class="right">
                    <p class="slogan">{{ slogan }}</p>
                    <div class="content" v-for="(item, index) in content" :key="index">
                        <p :style="item.style">{{ item.title }}</p>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>

            <storyTimeline :timeline="timeline"></storyTimeline>
        </div>
    </section>
</template>

<style scoped>
#intro {
    padding: 2vw 0 4vw;
}

#intro .intro {
    display: flex;
    justify-content: space-between;
}

#intro .left {
    flex: 1;
    padding: 6vw 0;
}

#intro .right {
    flex: 2.2;
    padding: 0 2vw;
}

#intro .right p {
    color: #666666;
    font-size: 0.9rem;
    line-height: 30px;
    margin-bottom: 1vw;
}

#intro .right .slogan {
    color: #000;
    font-size: 2rem;
    font-weight: bold;
    line-height: 40px;
}

#intro .right .content p:first-child {
    font-weight: bold;
    font-size: 1rem;
}

#intro .right .content p:last-child {
    white-space: pre-wrap;
}

/* 媒体查询 */
@media (max-width: 750px) {
    #intro .intro {
        flex-direction: column;
    }
}
</style>