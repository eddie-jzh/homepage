<script>
import IndexSectionTitle from './index-section-title.vue';

export default {
    data() {
        return {
            title_en: 'cooperative partner',
            title_zh: '合作伙伴',
            partner_list: [{
                name: 'amazon',
                url: './images/index-partner1.webp'
            }, {
                name: 'shopify',
                url: './images/index-partner2.webp'
            }, {
                name: 'aliexpress',
                url: './images/index-partner3.webp'
            }, {
                name: 'walmart',
                url: './images/index-partner4.webp'
            }]
        }
    },
    components: {
        IndexSectionTitle
    }
}
</script>

<template>
    <section id="partner">
        <div class="wrap">
            <IndexSectionTitle :title_en="title_en" :title_zh="title_zh"></IndexSectionTitle>

            <ul>
                <li v-for="(item, index) in partner_list" :key="index"><img v-lazy="item.url" :alt="item.name"></li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
#partner {
    background-color: #F5F5F5;
    padding: 2vw 0 4vw;
}

#partner ul {
    display: flex;
    justify-content: center;
    gap: 1vw;
}

#partner ul li {
    width: 10vw;
    height: 4vw;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 0.4vw 1.6vw;
}

/* 媒体查询 */
@media (max-width: 750px) {
    #partner ul {
        flex-wrap: wrap;
        gap: 2vw;
    }

    #partner ul li {
        width: 18%;
        height: auto;
    }
}
</style>
