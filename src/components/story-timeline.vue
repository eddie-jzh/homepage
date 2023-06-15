<script>
export default {
    data() {
        return {
            title: 'since 2008',
            title_small: '2008年成立至今',
            bg: './images/story-line-bg.webp'
        }
    },
    methods: {},
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    props: {
        timeline: Array
    },
    components: {},
};
</script>

<template>
    <div id="timeline" :style="{ backgroundImage: 'url(' + bg + ')' }">
        <div class="timeline_title">
            <p>{{ title }}</p>
            <p>{{ title_small }}</p>
        </div>
        <ul class="timeline_body">
            <li v-for="(item, index) in timeline" :key="index" class="timeline_item"
                :class="index % 2 === 0 ? 'item_left' : 'item_right'">
                <template v-if="index % 2 === 0">
                    <div class="item_true">
                        <p>{{ item.year }}</p>
                        <p>{{ item.text }}</p>
                    </div>
                    <div></div>
                </template>
                <template v-else>
                    <div></div>
                    <div class="item_true">
                        <p>{{ item.year }}</p>
                        <p>{{ item.text }}</p>
                    </div>
                </template>
                <span class="item_img shadow">
                    <img :src="item.url" alt="">
                </span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
#timeline {
    margin-top: 2vw;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
}

.timeline_title {
    text-align: center;
}

.timeline_title>p:first-child {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 3rem;
}

.timeline_title>p:last-child {
    font-size: 1.4rem;
}

#timeline .timeline_body {
    padding-top: 3vw;
}

#timeline .timeline_item {
    width: 100%;
    display: flex;
    position: relative;
}

#timeline .timeline_item>div {
    width: 50%;
    height: 180px;
}

#timeline .timeline_item>div:nth-child(1) {
    border-right: 1px solid orange;
    text-align: right;
    padding-right: 3vw;
    align-items: flex-end;
}

#timeline .timeline_item>div:nth-child(2) {
    border-left: 1px solid orange;
    text-align: left;
    padding-left: 3vw;
    align-items: flex-start;
}

#timeline .timeline_item .item_true {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

#timeline .timeline_item .item_true::before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    border: 2px solid orange;
    border-radius: 50%;
    background-color: #fff;
}

#timeline .timeline_item .item_true::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    background-color: orange;
    border-radius: 50%;
}

#timeline .item_left .item_true::before {
    right: -11px;
}

#timeline .item_right .item_true::before {
    left: -11px;
}

#timeline .item_left .item_true::after {
    right: -6px;
}

#timeline .item_right .item_true::after {
    left: -6px;
}

#timeline .timeline_item .item_true p:first-child {
    font-size: 2rem;
    font-weight: bold;
}

#timeline .timeline_item .item_true p:last-child {
    font-size: 1.1rem;
    width: 40%;
}

#timeline .timeline_item .item_img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: absolute;
    top: 36px;
    overflow: hidden;
}

#timeline .item_left .item_img {
    left: 16%;
}

#timeline .item_right .item_img {
    right: 16%;
}

#timeline .timeline_item .item_img img {
    width: auto;
    height: 100%;
}

/* 媒体查询 */
@media (max-width: 750px) {
    #timeline {
        margin: 6vw 0;
    }

    #timeline .timeline_body {
        padding-top: 3vh;
    }

    #timeline .timeline_item>div:nth-child(1) {
        padding-right: 2vh;
    }

    #timeline .timeline_item>div:nth-child(2) {
        padding-left: 2vh;
    }

    #timeline .item_left .item_img {
        left: 60%;
    }

    #timeline .item_right .item_img {
        right: 60%;
    }

    #timeline .timeline_item .item_true p:last-child {
        width: 100%;
    }
}

@media (min-width: 750px) and (max-width: 1366px) {
    #timeline .item_left .item_img {
        left: 12%;
    }

    #timeline .item_right .item_img {
        right: 12%;
    }
}
</style>