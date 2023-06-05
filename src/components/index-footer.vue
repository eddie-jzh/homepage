<script>
export default {
    props: {
        router_list: Array
    },
    data() {
        return {
            footer_text: '©copyright 2023 傲合发展有限公司'
        }
    }
}
</script>

<template>
    <footer id="footer">
        <ul>
            <li v-for="(item, index) in router_list" :key="index">
                <RouterLink :to="item.path" active-class="active">{{ item.text }}</RouterLink>
            </li>
        </ul>
        <p>{{ footer_text }}</p>
    </footer>
</template>

<style scoped>
#footer {
    width: 100%;
    height: 5vw;
    min-height: 90px;
    background-color: #454545;
    color: #D9D9D9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.84rem;
}

#footer ul {
    display: flex;
    margin-bottom: 1vw;
    margin-bottom: 0.6vw;
}

#footer ul a {
    color: #D9D9D9;
}

#footer ul li {
    padding: 0 1vw;
    position: relative;
}

#footer ul li:not(:last-child)::after {
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

/* 媒体查询 */
@media (max-width: 750px) {
    #footer {
        gap: 2vw;
    }

    #footer ul li {
        padding: 0 1.8vw;
        position: relative;
    }
}
</style>
