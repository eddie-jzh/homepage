<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title_en: String,
        title_zh: String
    }
}
</script>

<template>
    <div class="section_title">
        <p class="title_en">{{ title_en }}</p>
        <p class="title_zh">{{ title_zh }}</p>
        <div class="gap_line">
            <div class="gap_dot"></div>
        </div>
    </div>
</template>

<style scoped>
.section_title {
    text-align: center;
    padding-bottom: 2vw;
}

.section_title p {
    margin: 0.6vw 0;
}

.section_title .title_en {
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: bold;
    color: orange;
}

.section_title .title_zh {
    font-size: 1.2rem;
    font-weight: bold;
}

/* 媒体查询 */
@media (max-width: 750px) {
    .section_title {
        padding-bottom: 4vw;
    }

    .section_title p {
        margin: 2vw 0;
    }
}
</style>
