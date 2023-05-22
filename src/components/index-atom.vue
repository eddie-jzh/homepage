<script>
import IndexSectionTitle from './index-section-title.vue';

export default {
    data() {
        return {
            title_en: 'company atmosphere',
            title_zh: '公司氛围',
            images_list: [{
                url: './images/index-list.jpg',
                type: ''
            }, {
                url: './images/index-list.jpg',
                type: ''
            }, {
                url: './images/index-list.jpg',
                type: ''
            }, {
                url: './images/index-list.jpg',
                type: ''
            }, {
                url: './images/index-list-full.jpg',
                type: 'full'
            }]
        };
    },
    components: {
        IndexSectionTitle
    }
}
</script>

<template>
    <section id="atmosphere">
        <div class="wrap">
            <IndexSectionTitle :title_en="title_en" :title_zh="title_zh"></IndexSectionTitle>

            <ul>
                <li v-for="(item, index) in images_list" :key="index" :class="item.type"><img :src="item.url" alt=""></li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
#atmosphere {
    padding: 2vw 0;
}

#atmosphere ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

#atmosphere ul li {
    width: calc(50% - 10px);
    margin-bottom: 20px;
    display: flex;
}

#atmosphere ul li.full {
    width: 100%;
}



/* 媒体查询 */
@media (max-width: 750px) {
    #atmosphere ul {
        flex-direction: column;
    }

    #atmosphere ul li {
        width: auto;
        flex: 1;
        margin: 2vw 0;
        overflow: hidden;
    }
}
</style>
