<template>
    <a-row class="post-article">
        <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
        <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="16">
            <div style="border: 1px solid #ccc; z-index: 1000;">
                <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
                    :mode="mode" />
                <a-input :style="{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }" v-model:value="title"
                    size="large" placeholder="请输入标题" />
                <Editor class="post-article-editor" style="min-height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
                    :mode="mode" @onCreated="handleCreated" />
            </div>
            <div class="post-article-setting">
                <h3>发布设置</h3>
                <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }"
                    autocomplete="off">
                    <a-form-item label="封面" name="username">
                        <a-upload v-model:file-list="fileList" list-type="picture-card"
                            class="avatar-uploader" :show-upload-list="false"
                             :before-upload="beforeUpload"
                             :customRequest="handleUpdateImg"
                            @change="handleChange">
                            <img style="width: 100%;height: 100%;" v-if="imageUrl" :src="imageUrl" alt="avatar" />
                            <div v-else>
                                <loading-outlined v-if="loading"></loading-outlined>
                                <plus-outlined v-else></plus-outlined>
                                <div class="ant-upload-text">封面上传</div>
                            </div>
                        </a-upload>
                        <p>支持上传图片格式：JPEG,PNG,JPG。</p>
                    </a-form-item>
                    <a-form-item label="标签" name="password" :wrapper-col="{ offset: 0, span: 8 }">
                        <a-input v-model:value="label" />
                    </a-form-item>
                    <a-form-item :wrapper-col="{ offset: 2, span: 16 }">
                        <a-button type="primary" html-type="submit" @click="postArticle">发布</a-button>
                    </a-form-item>
                </a-form>
            </div>
        </a-col>
        <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
    </a-row>
</template>
<script lang="ts">
import { defineComponent, onBeforeUnmount, ref, shallowRef, onMounted, reactive } from "@vue/runtime-core";
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import type { UploadChangeParam, UploadProps } from 'ant-design-vue';
import GLOBALCONFIG from '../until/globalConfig'
import Axios from "@/until/axios";
import qs from "qs";
import axios from "axios";

function getBase64(img: Blob, callback: (base64Url: string) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
}
export default defineComponent({
    name: "PostArticle",
    components: { Editor, Toolbar, LoadingOutlined, PlusOutlined, },
    setup() {
        // 编辑器实例，必须用 shallowRef
        const editorRef = shallowRef()
        // 内容 HTML
        // const valueHtml = ref('<p>hello</p>')
        const valueHtml = ref('')
        // 模拟 ajax 异步获取内容
        onMounted(() => {
            // setTimeout(() => {
            //     valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
            // }, 1500)
        })
        const toolbarConfig = {}
        //配置编辑器
        const editorConfig = { 
            placeholder: '请输入内容...(暂时不支持上传文档图片，视频)',
            scroll: false
        }
        // 组件销毁时，也及时销毁编辑器
        let isupdate = false
        onBeforeUnmount(() => {
            const editor = editorRef.value
            if (editor == null) return
            editor.destroy()
        })
        const handleCreated = (editor: any) => {
            editorRef.value = editor // 记录 editor 实例，重要！
        }

        // 标题
        const title = ref<string>('');

        // 上传图片
        const fileList = ref([]);
        const loading = ref<boolean>(false);
        const imageUrl = ref<string>('');
        let img_url = ""
        const handleChange = (info: UploadChangeParam) => {
            if (info.file.status === 'uploading') {
                loading.value = true;
                return;
            }
            if (info.file.status === 'done') {
                // Get this url from response in real world.
                getBase64(info.file.originFileObj!, (base64Url: string) => {
                    imageUrl.value = base64Url;
                    loading.value = false;
                });
            }
            if (info.file.status === 'error') {
                loading.value = false;
                message.error('upload error');
            }
        };
        const beforeUpload = (file: { type: string; size: number;uid: string; lastModified: number; name: string; }) => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
            if (!isJpgOrPng) {
                message.error('你需要上传JPEG,PNG,JPG格式的图片');
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                message.error('你的图片过大,最大上传2MB!');
            }
            return isJpgOrPng && isLt2M;
        };

        return {
            editorRef,
            valueHtml,
            mode: 'default', // 或 'simple'
            toolbarConfig,
            editorConfig,
            handleCreated,
            title,
            fileList,
            loading,
            imageUrl,
            handleChange,
            beforeUpload,
            GLOBALCONFIG,
            img_url,
            isupdate,
        };
    },
    data() {
        return {
            label: "",
            
        }
    },
    methods: {
        handleUpdateImg(data: any) {
            if (this.imageUrl != "") {
                this.deleteImg()
            }
            //添加请求头
            const headers = {
                "Content-Type": "multipart/form-data",
            };
            //配置头
            const request = axios.create({
                headers: headers,
            });
            request.post(GLOBALCONFIG.GLOBAL.vue_http_api+'update_cover', data).then((response) => {
                this.imageUrl = GLOBALCONFIG.GLOBAL.vue_http_api+response.data.data
                // qs.stringify(
                this.img_url = response.data
            }).catch((error) => {
                message.error("上传图片失败")
            })
        },
        deleteImg() {
            Axios.delete('/update_cover?img_name=' + this.imageUrl).then((response) => {
                console.log("图片更新成功")
            }).catch((error) => {
                // console.log('失败')
                console.log("图片更新删除失败")
            })
        },
        postArticle() {
            this.isupdate = true
            if (this.$store.state.userData == '') {
                message.error('需要先登录账号！')
                return
            }
            if (this.isEmpty() == null) {
                return
            }

            let response = {
                title: this.title,
                html: this.valueHtml,
                text: this.editorRef.getText(),
                article_user_id: this.$store.state.userData.uid,
                article_cover: this.imageUrl,
                is_encryption: "0",
                article_password: "0",
                article_collect: "0",
                like: 0,
                watch_number: 0,
                comment_number: 0,
                classification: this.label,
                username: this.$store.state.userData.name
            }
            Axios.post('/article', qs.stringify(response)).then((res) => {
                if (res.data == null) {
                    message.error('文章上传失败')
                    return
                }
                message.success('文章上传成功')
            }).catch((error) => {
                // console.log('失败')
                message.error('文章上传失败')
            })
        },
        isEmpty() {
            if (this.title == "") {
                message.error('请输入标题')
                return null
            } else if (this.editorRef.getText().length < 10) {
                message.error('内容不得小于10个字')
                return null
            } else if (this.imageUrl == "") {
                message.error('请上传封面')
                return null
            }
            return 1
        }
    }
})
</script>
<style lang="stylus" scoped>
@import "~@/until/mixin.styl";
.components-input-demo-size .ant-input {
  margin 10px 8px 8px 10px
}

.post-article .ant-input-lg {
    font-size 30px
    font-weight bold
}
.post-article {
    bg_color(background_color_main_header)
    padding-bottom 10px
    .post-article-setting {
        padding 0 10px
        border 1px solid #ccc
        border-top none
        bg_color(bgColor_channel_a)
    }
}
</style>