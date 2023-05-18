<script>
export default {
    props: {
        router_list: String
    },
    data() {
        return {
            header_logo: './images/logo.png',
            header_icon_nav: './nav.svg',
            header_icon_close: './close.svg',
            nav_flag: false
        }
    },
    methods: {
        toggleNav() {
            this.nav_flag = !this.nav_flag
        }
    },
}
</script>

<template>
    <header>
        <div class="wrap">
            <div class="logo">
                <a href="#">
                    <img :src="header_logo" alt="">
                </a>
            </div>
            <ul class="nav_pc">
                <li v-for="(item, index) in router_list" :key="index">
                    <RouterLink :to="item.path" active-class="active">{{ item.text }}</RouterLink>
                </li>
            </ul>
            <div class="nav_icon" @click="toggleNav"><img :src="header_icon_nav" alt=""></div>
            <transition name="side-fade">
                <div class="mask" v-show="nav_flag" @click.self="toggleNav">
                    <transition name="side-move">
                        <div class="nav_mobi" v-show="nav_flag">
                            <img :src="header_icon_close" alt="" @click.stop="toggleNav">
                            <ul>
                                <li v-for="(item, index) in router_list" :key="index">
                                    <RouterLink :to="item.path" active-class="active_mobi">{{ item.text }}</RouterLink>
                                </li>
                            </ul>
                        </div>
                    </transition>
                </div>
            </transition>
        </div>
    </header>
</template>

<style scoped>
.side-fade-enter-active,
.side-fade-leave-active {
    transition: all 0.5s ease;
}

.side-fade-enter-from,
.side-fade-leave-to {

    opacity: 0;
}

.side-move-enter-active,
.side-move-leave-active {
    transition: all 0.5s ease;
}

.side-move-enter-from,
.side-move-leave-to {
    transform: translateX(50%);
}



header {
    width: 100%;
    height: 7vw;
    min-height: 60px;
}

header .wrap {
    display: flex;
    justify-content: space-between;
}

header .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9vw;
    min-width: 72px;
}

header .nav_pc {
    display: flex;
    align-items: center;
}

header .nav_pc li {
    padding: 1.25vw;
    font-weight: bold;
}

header .nav_icon {
    display: none;
}

header .nav_icon img {
    width: 32px;
    height: 32px;
}

header .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
}

header .mask .nav_mobi {
    width: 60%;
    height: 100%;
    background-color: orange;
    position: absolute;
    top: 0;
    right: 0;
}

header .mask .nav_mobi img {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 2vw;
    right: 2vw;
}

header .mask .nav_mobi ul {
    margin: 60px 7vw;
}

header .mask .nav_mobi li:not(:last-child) {
    border-bottom: solid 1px rgba(0, 0, 0, 0.125);
}

header .mask .nav_mobi li a {
    color: #fff;
    line-height: 50px;
}

header .mask .nav_mobi li {
    position: relative;
}

header .mask .nav_mobi a.active_mobi::before {
    display: block;
    content: '';
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
}



/* 媒体查询 */
@media (max-width: 750px) {
    header .nav_pc {
        display: none;
    }

    header .nav_icon {
        display: flex;
        justify-content: center;
        align-items: center;
    }

}
</style>
