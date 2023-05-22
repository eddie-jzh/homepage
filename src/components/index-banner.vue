<script>
export default {
    data() {
        return {
            banner_list: './images/index-banner.jpg'
        }
    },
    props: {
        banner_img: {
            type: String,
            default: null
        }

    },
    computed: {
        handleBannerUrl() {
            return this.banner_img || this.banner_list
        }
    }
}
</script>

<template>
    <section id="banner">
        <div>
            <img :src="handleBannerUrl" alt="">
        </div>
    </section>
</template>

<style scoped>
banner div {
    width: 100%;
    height: 40vw;
}
</style>
