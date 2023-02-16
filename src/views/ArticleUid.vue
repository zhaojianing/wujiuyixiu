<template>
    <a-row class="articleUid">
        <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
        <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="16">
            <div class="articleUidMain" style="border: 1px solid #ccc; z-index: 1000;">
                <h1>{{ article.article_title }}</h1>
                <div class="articleUidMain-author">
                    <div class="articleUidMain-author-avatar-left">
                        <a-avatar :size="64">
                            <template #icon>
                                <UserOutlined />
                            </template>
                        </a-avatar>
                    </div>
                    <div class="articleUidMain-author-xinxi-right">
                        <p>{{ userInfo.name }}</p>
                        <p class="articleUidMain-author-xinxi-right-bottom">
                            {{ new Date(Number(article.date)).toLocaleString() }} ·
                            阅读 {{ article.watch_number }}
                        </p>
                    </div>
                </div>
                <Editor class="articleUidEditor" style="min-height: 500px; overflow-y: hidden;"
                    v-model="article.article_container_html" :defaultConfig="editorConfig" :mode="mode" />
            </div>
        </a-col>
        <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
</a-row>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import '@wangeditor/editor/dist/css/style.css'
import { Editor } from '@wangeditor/editor-for-vue'
import { message } from 'ant-design-vue'
import Axios from "@/until/axios"

export default defineComponent({
    setup() {
        const editorConfig = {
            scroll: false,
            readOnly: true
        }
        return {
            editorConfig,
            mode: 'default',
        }
    },
    components: { Editor },
    data() {
        return {
            article: {
                Comment: null,
                article_collect: "0",
                article_container_html: "<p>测试测试测试测试测试测试测试测试测试测试测试</p>",
                article_container_text: "测试测试测试测试测试测试测试测试测试测试测试",
                article_cover: "http://localhost:4863/static/img/16765373947490.png",
                article_password: "0",
                article_title: "测试",
                article_uid: "16765373965135",
                article_userid: "b376bdac2c9ec5b68bff83de744bd17b",
                classification: "测试测试",
                comment_number: 0,
                date: "1676537396392",
                id: 7,
                is_encryption: "0",
                like: 0,
                watch_number: 0,
            },
            userInfo: {
                Date: "2023-02-16T00:00:00+08:00",
                account: "wujiuyixiu",
                article_num: 0,
                avatar_url: "",
                dynamic_num: 0,
                email: "",
                fan_num: 0,
                id: 1,
                martial_art: "",
                name: "站长",
                password: "",
                signature: "",
                start_num: 0,
                uid: "b376bdac2c9ec5b68bff83de744bd17b",
            }
        }
    },
    mounted() {
        this.getArticle()
    },
    methods: {
        async getArticle() {
            await Axios.get('/article?article_uid=' + this.$route.params.uid).then((response) => {
                this.article = response.data
                this.getArticleUsereInfo(response.data.article_userid)
            }).catch((error) => {
                // console.log('失败')
                message.error("获取文章失败")
            })
        },
        async getArticleUsereInfo(article_userid: string) {
            await Axios.get('/user/info?uid=' + article_userid).then((response) => {
                this.userInfo = response.data
                console.log(this.userInfo)
            }).catch((error) => {
                // console.log('失败')
                message.error("获取信息失败")
            })
        }
    }
})
</script>
<style lang="stylus" scoped>
.articleUid
    .articleUidMain
        padding 10px
        .articleUidMain-author
            margin-bottom 10px
            .articleUidMain-author-avatar-left
                display inline-block
                vertical-align middle
                padding 0
            .articleUidMain-author-xinxi-right
                display inline-block
                vertical-align middle
                padding-left 10px
                .articleUidMain-author-xinxi-right-bottom
                    color #8a919f
</style>