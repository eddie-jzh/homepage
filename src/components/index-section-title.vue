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
        <div class="wrap">
            <p class="title_en">{{ title_en }}</p>
            <p class="title_zh">{{ title_zh }}</p>
            <div class="gap_line">
                <div class="gap_dot"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.section_title {
    text-align: center;
    margin-top: 2vw 0;
    padding: 3vw 0 2vw;
}

.section_title p {
    margin: 0.6vw 0;
}

.section_title .title_en {
    text-transform: uppercase;
    font-size: 2.4rem;
    font-weight: bold;
    color: orange;
}

.section_title .title_zh {
    font-size: 1.2rem;
    font-weight: bold;
}
</style>
