<script>
export default {
    data() {
        return {
            banner_list: 'src/assets/images/banner.jpg'
        }
    },
    methods: {
        
    },
}
</script>

<template>
    <section id="banner">
        <div>
            <img :src="banner_list" alt="">
        </div>
    </section>
</template>

<style scoped>
    banner div {
        width: 100%;
        height: 40vw;
    }
</style>
