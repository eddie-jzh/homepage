<script>
import IndexSectionTitle from './index-section-title.vue';

export default {
    data() {
        return {
            title_en: 'company atmosphere',
            title_zh: '公司氛围',
            images_list: [{
                url: './images/index-atmo1.webp',
                type: '',
                link: '/story',
                hover: ['傲合故事', 'PMD Story']
            }, {
                url: './images/index-atmo2.webp',
                type: '',
                link: '/develop',
                hover: ['发展空间', 'Development Space'],
            }, {
                url: './images/index-atmo3.webp',
                type: '',
                link: '/benefit',
                hover: ['傲合福利', 'PMD Welfare'],
            }, {
                url: './images/index-atmo4.webp',
                type: '',
                link: '/workmate',
                hover: ['员工风采', 'Employee Demeanor'],
            }, {
                url: './images/index-atmo5.webp',
                type: 'full',
                link: '/contact',
                hover: ['多种类型岗位现已开放', '等你投递，现在就加入我们！', '立即加入'],
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
                <li v-for="(item, index) in images_list" :key="index" :class="item.type"
                    @click="this.$router.push(item.link)">
                    <img v-lazy="item.url" alt="">
                    <div class="img_hover">
                        <p v-for="(_item, _index) in item.hover" :key="_index">{{ _item }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
#atmosphere {
    padding: 2vw 0 4vw;
}

#atmosphere ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
}

#atmosphere ul li {
    width: calc(50% - 10px);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18vw;
    cursor: pointer;
    position: relative;
}

#atmosphere ul li img {
    height: 100%;
    filter: brightness(0.6);
}

#atmosphere ul li.full {
    width: 100%;
}

#atmosphere ul li .img_hover {
    width: 90%;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    position: absolute;
}

#atmosphere ul li .img_hover p:nth-child(2) {
    font-size: 1.5rem;
    font-weight: normal;
}

#atmosphere ul li.full .img_hover p:nth-child(2) {
    font-size: 1rem;
    padding: 1vw 0 2vw;
}

#atmosphere ul li.full .img_hover p:nth-child(3) {
    display: inline-block;
    border: 1px solid #ffffff;
    font-size: 1rem;
    padding: 10px 40px;
    transition: all 0.2s;
}

#atmosphere ul li.full:hover p:last-child {
    background-color: orange;
    border: 1px solid orange;
}

/* 媒体查询 */
@media (max-width: 750px) {
    #atmosphere ul {
        flex-direction: column;
        width: 100%;
    }

    #atmosphere ul li {
        width: 100%;
        height: 24vh;
        margin: 2vw 0;
        overflow: hidden;
    }
}
</style>
