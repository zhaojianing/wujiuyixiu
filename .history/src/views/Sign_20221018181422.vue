<template>
    <div id="sign">
        <a-row class="sign-row">
            <a-col :xs="0" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
            <a-col :xs="24" :sm="16" :md="16" :lg="14" :xl="14">
                <div class="sign-container">
                    <h3>注册/登录</h3>
                    <a-form :model="formState" name="custom-validation" :label-col="{ span: 8 }"
                        :wrapper-col="{ span: 16 }" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed"
                        :rules="rules" @validate="handleValidate">
                        <a-form-item label="昵称" name="username" :rules="[{ required: true, message: '请输入昵称~' }]"
                            v-show="isCreate">
                            <a-input v-model:value="formState.username" placeholder="起个好听的~" />
                        </a-form-item>
                        <a-form-item label="账号" name="account" :rules="[{ required: true, message: '忘了输入账号~' }]">
                            <a-input v-model:value="formState.account" placeholder="请输入英文+数字的账号" />
                        </a-form-item>

                        <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
                            <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
                        </a-form-item>
                    </a-form>
                    <a-button type="primary" html-type="submit" @click.prevent="login">{{ uText[0] + uText[1] }}
                    </a-button>
                    <u class="sign-u" @click="changeLogin">{{ uText[2] + uText[3] }}</u>
                    <p class="sign-warning">{{ warning }}</p>
                    <!-- <a-button type="primary" html-type="submit">回到主页</a-button> -->
                </div>
            </a-col>
            <a-col :xs="0" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        </a-row>

    </div>
</template>
<script lang="ts">
import md5 from "js-md5";
import { defineComponent, reactive, computed, toRaw } from "@vue/runtime-core";
import type { Rule } from 'ant-design-vue/es/form';
import Axios from "@/until/axios";
import qs from 'qs'
import { string } from "vue-types";

interface FormState {
    account: string;
    password: string;
    username: string;
    uid: string;

    //   remember: boolean;
}

export default defineComponent({
    name: "SignIn",
    setup() {
        const formState = reactive<FormState>({
            account: '',
            password: '',
            username: '',
            uid: '',
            //   remember: true,
        });
        let validateaccount = async (_rule: Rule, value: string) => {

            if (value === '') {
                return Promise.reject('请输入账号哦~');
            } else {
                return Promise.resolve();
            }

        };
        let validatePass = async (_rule: Rule, value: string) => {
            if (value === '') {
                return Promise.reject('请输入密码哦~');
            } else {
                return Promise.resolve();
            }
        };
        let validateName = async (_rule: Rule, value: string) => {
            if (value === '') {
                return Promise.reject('请输入昵称哦~');
            } else {
                return Promise.resolve();
            }
        };
        const rules: Record<string, Rule[]> = {
            account: [{ required: true, validator: validateaccount, trigger: 'change' }],
            password: [{ required: true, validator: validatePass, trigger: 'change' }],
            username: [{ required: true, validator: validateName, trigger: 'change' }],

        };
        const onFinish = (values: any) => {
            // console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo: any) => {
            // console.log('Failed:', errorInfo);
        };
        const handleValidate = (...args: any[]) => {
            // console.log(args);
        };
        return {
            formState,
            onFinish,
            onFinishFailed,
            rules,
            handleValidate,
        };
    },
    data() {
        return {
            isCreate: false,
            uText: "登录注册",
            warning: "",
        }
    },
    methods: {
        login() {
            // console.log(md5(this.formState.password).toString())
            if (this.isCreate) {
                // 注册逻辑
                this.ruleAccount()
                if (this.formState.account == "" || this.formState.password == "" || this.formState.username == "") {
                    this.warning = "请填写完整！！！"
                } else {
                    this.warning = ""
                    let response = {
                        account: this.formState.account,
                        password: md5(this.formState.password),
                        username: this.formState.username,
                        uid: md5(this.formState.account),
                    }
                    // console.log(response)
                    Axios.post('/user/sign_up', qs.stringify(response)).then((response) => {
                        this.warning = "注册成功"
                    }).catch((error) => {
                        // console.log('失败')
                        console.error(error)
                    })
                }

            } else {
                // 登录逻辑
                if (this.formState.account == "" || this.formState.password == "") {
                    this.warning = "请填写完整！！！"
                } else {
                    this.warning = ""
                    let response = {
                        account: this.formState.account,
                        password: md5(this.formState.password)
                    }
                    Axios.get('/user/sign_in?' + qs.stringify(response)).then((res) => {
                        // console.log(res)
                        if (res.data != null) {
                            this.warning = ""
                            // 存储vuex
                            this.$store.state.userData = res.data
                            // 永久存储浏览器（除非手动删除）
                            localStorage.setItem("userData", JSON.stringify(res.data))
                            let localData = localStorage.getItem("userData")
                            // localData = typeof localData == "string" ? localData : ""
                            // console.log(JSON.parse(localData))
                            // 改变头部key，使其刷新
                            // this.$store.commit("changeHeaderKey")
                            this.$router.push('/')
                        } else {
                            this.warning = "密码错误！"
                        }
                    }).catch((error) => {
                        console.error(error)
                    })
                }
            }
        },
        changeLogin() {
            this.uText = this.uText.slice(2, 4) + this.uText.slice(0, 2)
            this.uText[0] + this.uText[1] == "注册" ? this.isCreate = true : this.isCreate = false
            this.warning = ""
        },
        ruleAccount() {
            // 账号禁止输入中文验证
            var ruleAcc = ""
            for (var i = 0; i < this.formState.account.length; i++) {
                if (this.formState.account.charCodeAt(i) > 0 && this.formState.account.charCodeAt(i) < 255) {
                    ruleAcc += this.formState.account.charAt(i)
                    // console.log(ruleAcc)
                } else {
                    this.formState.account = ""
                }
            }
        }
    }
})
</script>
<style lang="stylus" scoped>
#sign
    width 100%
    height 100%
    background-color #424242
    color white
    .sign-row
        width 100%
        height 100%
        .sign-container
            width 100%
            // height 100%
            margin auto
            top 50%
            padding 20px 100px
            background-color #ccc
            border-radius 6px
            .sign-u
                text-align right
                position absolute
                right 20%
                cursor pointer
                // vertical-align bottom
            .sign-warning
                color red
</style>