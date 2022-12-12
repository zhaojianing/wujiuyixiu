<template>
    <div id="sign">
        <a-row class="sign-row">
            <a-col :xs="0" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
            <a-col :xs="24" :sm="16" :md="16" :lg="14" :xl="14">
                <div class="sign-container">
                    <h3>注册/登录</h3>
                    <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }"
                        autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
                        <a-form-item label="昵称" name="username" :rules="[{ required: true, message: '请输入昵称~' }]"
                            v-show="isCreate">
                            <a-input v-model:value="formState.username" placeholder="起个好听的~" />
                        </a-form-item>
                        <a-form-item label="账号" name="account" :rules="[{ required: true, message: '忘了输入账号~' }]">
                            <a-input v-model:value="formState.account" placeholder="用于修改密码" />
                        </a-form-item>

                        <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入密码' }]">
                            <a-input-password v-model:value="formState.password" placeholder="密码加密，并且不可逆" />
                        </a-form-item>
                    </a-form>
                    <div>
                        <a-button type="primary" html-type="submit" v-on:click="login">{{ uText[0] + uText[1] }}
                        </a-button>
                        <u class="sign-u" @click="changeLogin">{{ uText[2] + uText[3] }}</u>
                        <!-- <a-button type="primary" html-type="submit">回到主页</a-button> -->
                    </div>

                </div>
            </a-col>
            <a-col :xs="0" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        </a-row>

    </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core";
import md5 from "js-md5";

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
        const onFinish = (values: any) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };
        return {
            formState,
            onFinish,
            onFinishFailed,
        };
    },
    data() {
        return {
            isCreate: false,
            uText: "登录注册"
        }
    },
    methods: {
        login() {
            console.log(md5(this.formState.password).toString())
            if (this.isCreate) {
                // 注册逻辑
                let response = {
                    account: this.formState.account,
                    password: md5(this.formState.password),
                    username: this.formState.username,
                    uid: md5(this.formState.account),
                }
                console.log(response)
            } else {
                // 登录逻辑
                console.log(this.formState)
            }
        },
        changeLogin() {
            this.uText = this.uText.slice(2, 4) + this.uText.slice(0, 2)
            this.uText[0] + this.uText[1] == "注册" ? this.isCreate = true : this.isCreate = false
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
</style>