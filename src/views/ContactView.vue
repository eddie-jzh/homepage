<script>
export default {
    data() {
        return {
            page_title: '联系我们',
            information: [{
                key: '电话',
                value: '020-89626263'
            }, {
                key: '邮箱',
                value: 'pengqing@holistic-ltd.com'
            }, {
                key: '地址',
                value: '广州市番禺区南村镇汉溪大道东390号四海城商业广场3栋21楼'
            }],
            form_title: 'Contact Us',
            target_email: 'pengqing@holistic-ltd.com',
            contact_name: '',
            contact_mail: '',
            contact_msg: '',
            text_name: '请输入姓名',
            text_mail: '请输入邮箱',
            text_msg: '请输入内容',
            text_submit: '提&nbsp;&nbsp;&nbsp;&nbsp;交',
            text_reset: '重&nbsp;&nbsp;&nbsp;&nbsp;置'
        }
    },
    methods: {
        handleEmpty() {
            if (!this.contact_name) {
                return this.text_name
            } else if (!this.contact_mail) {
                return this.text_mail
            } else if (!this.contact_msg) {
                return this.text_msg
            }
        },
        handleSubmit() {
            if (this.handleEmpty()) {
                alert(this.handleEmpty())
                return
            }
            location.href = `mailto:${this.target_email}?subject=${this.contact_name}  ${this.contact_mail}&body=${this.contact_msg}`;
        },
        handleReset() {
            this.contact_name = ''
            this.contact_mail = ''
            this.contact_msg = ''
        }
    },
    mounted() { },
};
</script>

<template>
    <section id="contact">
        <div class="wrap">
            <div class="left">
                <p class="title">{{ page_title }}</p>
                <p v-for="(item, index) in information" :key="index">
                    <span>{{ item.key }}</span>
                    <span>{{ item.value }}</span>
                </p>
            </div>
            <div class="right">
                <p class="title">{{ form_title }}</p>
                <form method="post" action="#" id="contact-form">
                    <p>
                        <input type="text" name="contact-name" id="contact-name" :placeholder="text_name"
                            v-model="contact_name">
                        <input type="text" name="contact-mail" id="contact-mail" :placeholder="text_mail"
                            v-model="contact_mail">
                    </p>
                    <p>
                        <textarea name="contact-msg" id="contact-msg" :placeholder="text_msg"
                            v-model="contact_msg"></textarea>
                    </p>
                    <p>
                    <div id="submit" @click="handleSubmit" v-html="text_submit"></div>
                    <div id="reset" @click="handleReset" v-html="text_reset"></div>
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
#contact {
    padding: 2vw 0 4vw;
}

#contact .wrap {
    display: flex;
    justify-content: space-between;
}

#contact .left,
#contact .right {
    width: 38%;
    font-size: 1.2rem;
}

#contact .left .title,
#contact .right .title {
    font-size: 1.6rem;
}

#contact .left p,
#contact .right p {
    padding: 0.8vw 0;
    display: flex;
    line-height: 30px;
}

#contact .left span:first-child {
    width: 15%;
}

#contact .left span:last-child {
    width: 80%;
}

#contact .right {
    width: 60%;
    overflow: hidden;
}

#contact #contact-form p:first-child,
#contact #contact-form p:last-child {
    display: flex;
    justify-content: space-between;
    gap: 1vw;
}

#contact .right #contact-name,
#contact .right #contact-mail {
    width: 50%;
    height: 50px;
    padding: 0 10px;
}

#contact .right #contact-msg {
    width: 100%;
    height: 200px;
    padding: 10px;
}

#contact .right #submit,
#contact .right #reset {
    padding: 0 50px;
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(133, 133, 133);
    background-color: rgb(133, 133, 133);
    color: #fff;
    border-radius: 2px;
    user-select: none;
    cursor: pointer;
    transition: all 0.2s;
}

#contact .right #submit {
    background-color: orange;
    border-color: orange;
}

#contact .right #submit:hover,
#contact .right #reset:hover {
    filter: opacity(0.8);
}

/* 媒体查询 */
@media (max-width: 750px) {
    #contact .wrap {
        flex-direction: column;
    }

    #contact .wrap>div {
        width: 100%;
    }

    #contact .wrap .right {
        height: auto;
    }

    #contact #contact-form p:first-child,
    #contact #contact-form p:last-child {
        flex-direction: column;
    }

    #contact .right #contact-name,
    #contact .right #contact-mail,
    #contact .right #submit,
    #contact .right #reset {
        width: auto;
    }
}
</style>