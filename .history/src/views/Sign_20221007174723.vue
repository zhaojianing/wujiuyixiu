<template>
    <div id="sign">
        <a-row class="sign-row">
            <a-col :xs="0" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
            <a-col :xs="24" :sm="16" :md="16" :lg="14" :xl="14">
                <div class="sign-container">
                    <h3>注册/登录</h3>
                    <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }"
                        autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
                        <a-form-item label="Username" name="username"
                            :rules="[{ required: true, message: 'Please input your username!' }]">
                            <a-input v-model:value="formState.username" />
                        </a-form-item>

                        <a-form-item label="Password" name="password"
                            :rules="[{ required: true, message: 'Please input your password!' }]">
                            <a-input-password v-model:value="formState.password" />
                        </a-form-item>

                        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                        </a-form-item>

                        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                            <a-button type="primary" html-type="submit">Submit</a-button>
                        </a-form-item>
                    </a-form>
                </div>
            </a-col>
            <a-col :xs="0" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        </a-row>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive  } from "@vue/runtime-core";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

export default defineComponent({
    name: "SignIn",
    setup() {
        const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
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
            height 100%
            margin auto
            background-color #ccc

</style>