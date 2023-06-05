<script>
export default {
    data() {
        return {
            scroll_icon: './images/icon-page-scrolltop.svg',
            scroll_flag: false
        }
    },
    methods: {
        handleScrollTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    },
    computed: {},
    watch: {},
    created() { },
    mounted() {
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop >= 500) {
                this.scroll_flag = true
            } else {
                this.scroll_flag = false
            }
        })
    },
    props: {},
    components: {},
};
</script>

<template>
    <transition>
        <div id="scrollTop" @click="handleScrollTop" v-show="scroll_flag">
            <img :src="scroll_icon" alt="">
        </div>
    </transition>
</template>

<style scoped>
#scrollTop {
    width: 40px;
    height: 40px;
    background-color: orange;
    border-radius: 50%;
    position: fixed;
    right: 40px;
    bottom: 40px;
    z-index: 9999;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

#scrollTop img {
    width: 60%;
    height: 60%;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>