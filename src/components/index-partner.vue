<script>
import IndexSectionTitle from './index-section-title.vue';

export default {
    data() {
        return {
            title_en: 'cooperative partner',
            title_zh: '合作伙伴',
            partner_list: [{
                name: 'shopify',
                url: './images/shopify.jpg'
            }, {
                name: 'shopify',
                url: './images/shopify.jpg'
            }, {
                name: 'shopify',
                url: './images/shopify.jpg'
            }, {
                name: 'shopify',
                url: './images/shopify.jpg'
            }, {
                name: 'shopify',
                url: './images/shopify.jpg'
            }, {
                name: 'shopify',
                url: './images/shopify.jpg'
            }]
        }
    },
    components: { IndexSectionTitle }
}
</script>

<template>
    <section id="partner">
        <IndexSectionTitle :title_en="title_en" :title_zh="title_zh"></IndexSectionTitle>

        <div class="wrap">
            <ul>
                <li v-for="(item, index) in partner_list" :key="index"><img :src="item.url" :alt="item.name"></li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
#partner {
    background-color: #F5F5F5;
    padding: 2vw 0;
}

#partner ul {
    display: flex;
    justify-content: center;
}

#partner ul li {
    width: 10vw;
    height: 4vw;
    margin: 0 0.2vw;
    overflow: hidden;
    display: flex;
    align-items: center;
}



/* 媒体查询 */
@media (max-width: 750px) {
    #partner ul {
        flex-wrap: wrap;
        justify-content: space-between;
    }

    #partner ul li {
        width: 32%;
        height: auto;
        margin: 1vw 0;
    }
}
</style>
