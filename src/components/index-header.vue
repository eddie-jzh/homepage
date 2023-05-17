<script>
export default {
    data() {
        return {
            header_logo: './images/logo.png',
            header_list: ['首页', '灏力故事', '发展空间', '公司福利', '员工风采', '加入我们']
        }
    }
}
</script>

<template>
    <header>
        <div class="wrap">
            <div class="logo">
                <img :src="header_logo" alt="">
            </div>
            <ul>
                <li v-for="(item, index) in header_list" :key="index" :class="{ active: index == 0 }"><a href="#">{{ item
                }}</a></li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 7vw;
    /* background-color: #ddd; */
}

header .wrap {
    display: flex;
    justify-content: space-between;
}

header .logo {
    display: flex;
    justify-content: center;
    align-items: center;
}

header ul {
    display: flex;
    align-items: center;
}

header ul li {
    padding: 1.25vw;
    font-weight: bold;
}
</style>
