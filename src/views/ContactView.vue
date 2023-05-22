<script>
export default {
    data() {
        return {
            page_title: '联系我们',
            information: [{
                key: '电话',
                value: '12345678910'
            }, {
                key: '邮箱',
                value: '1234565@mail.com'
            }, {
                key: '地址',
                value: '广州市番禺区南村镇汉溪大道东390号四海城商业广场3栋21楼'
            },],
            map_img: './images/contact-img.jpg'
        }
    },
    methods: {},
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    props: {},
    components: {},
};
</script>

<template>
    <section id="contact">
        <div class="wrap">
            <div class="left">
                <p class="title">{{ page_title }}</p>
                <p v-for="(item, index) in information" :key="index">
                    <span>{{ item.key }}</span>
                    <span>{{ item.value }}</span>
                </p>
            </div>
            <div class="right"><img :src="map_img" alt=""></div>
        </div>
    </section>
</template>

<style scoped>
#contact {
    padding: 2vw 0;
}

#contact .wrap {
    display: flex;
    justify-content: space-between;
}

#contact .left {
    width: 38%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.2rem;
}

#contact .left .title {
    font-size: 1.6rem;
}

#contact .left p {
    padding: 0.8vw 0;
    display: flex;
    line-height: 30px;
}

#contact .left span:first-child {
    width: 15%;
}

#contact .left span:last-child {
    width: 80%;
}

#contact .right {
    width: 60%;
    height: 24vw;
    overflow: hidden;
}



/* 媒体查询 */
@media (max-width: 750px) {
    #contact .wrap {
        flex-direction: column;
    }

    #contact .wrap>div {
        width: 100%;
    }

    #contact .wrap .right {
        height: auto;
    }
}
</style>