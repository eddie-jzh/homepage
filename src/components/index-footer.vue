<script>
export default {
    data() {
        return {
            footer_list: ['首页', '灏力故事', '发展空间', '公司福利', '员工风采', '加入我们'],
            footer_text: '© 2023 香港灏力国际有限公司广州代表处'
        }
    }
}
</script>

<template>
    <footer>
        <ul>
            <li v-for="(item, index) in footer_list" :key="index" :class="{ active: index == 0 }"><a href="#">{{ item }}</a>
            </li>
        </ul>
        <p>{{ footer_text }}</p>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    height: 5vw;
    min-height: 90px;
    background-color: #454545;
    color: #D9D9D9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
}

footer ul {
    display: flex;
    margin-bottom: 1vw;
    margin-bottom: 0.6vw;
}

footer ul a {
    color: #D9D9D9;
}

footer ul li {
    padding: 0 1vw;
    position: relative;
}

footer ul li:not(:last-child)::after {
    content: '';
    display: block;
    width: 1px;
    height: 60%;
    background-color: #D9D9D9;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
</style>
