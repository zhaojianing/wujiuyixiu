<template>
    <a-row class="articleUid">
        <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
        <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="16">
            <div class="articleUidMain" style="box-shadow: #dbdbdb 0px 0px 6px 2px;border-radius: 6px; z-index: 1000;">
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
                <div class="articleUidMainEditor">
                    <Editor class="articleUidEditor" style="min-height: 300px; overflow-y: hidden;"
                        v-model="article.article_container_html" :defaultConfig="editorConfig" :mode="mode"
                        @onCreated="handleCreated" />
                </div>
            </div>

            <div class="articleUidMain-comment">
                <h3>评论</h3>
                <a-row>
                    <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="articleUidMain-useroutlined">
                        <a-avatar size="large">
                            <template #icon>
                                <div>
                                    <UserOutlined />
                                </div>
                            </template>
                        </a-avatar>
                    </a-col>
                    <a-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                        <div style="border: 1px solid #ccc">
                            <a-textarea v-model:value="textareaValue" :rows="4" />
                        </div>
                    </a-col>
                    <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                        <div class="articleUidMain-comment-put-btn" @click="updateComment">
                            <span>发布</span>
                        </div>
                    </a-col>
                </a-row>
                <hr>
                <div class="articleUidMain-comment-lists">
                    <div class="articleUidMain-comment-list">
                        <div class="articleUidMain-comment-list-author" v-for="comment in articleComment" :key="comment.id">
                            <a-row>
                                <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"
                                    class="articleUidMain-comment-list-useroutlined">
                                    <a-avatar size="large">
                                        <template #icon>
                                            <UserOutlined />
                                        </template>
                                    </a-avatar>
                                </a-col>
                                <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
                                    <span class="articleUidMain-comment-author">{{ comment.uid_name }}</span>
                                    <div class="articleUidMain-comment-list-author-comment"><span>{{ comment.uid_container
                                    }}</span>
                                        <div class="articleUidMain-comment-list-author-comment-alldata">
                                            <span>{{ new Date(Number(comment.date)).toLocaleString() }}</span>&nbsp;&nbsp;
                                            <!-- <span style="cursor:pointer;"><like-outlined /></span>  -->&nbsp;&nbsp;
                                            <span style="cursor:pointer;"
                                                @click="isReplyShow(comment.id, comment.uid,comment.uid_name)">回复</span>
                                        </div>
                                    </div>
                                    <div v-if="comment.is_article_comment_reply == '1'">
                                        <span  v-show="isShow != comment.id" style="cursor:pointer;"
                                            @click="getCommentReply(comment.id)">查看回复</span>
                                        <div v-show="isShow == comment.id">
                                            <div v-for="commentReply in articleCommentReply" :key="commentReply.id">
                                                <a-row>
                                                    <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                                                        <a-avatar size="small">
                                                            <template #icon>
                                                                <UserOutlined />
                                                            </template>
                                                        </a-avatar>
                                                    </a-col>
                                                    <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
                                                        <span class="articleUidMain-comment-author">{{ commentReply.uid_name }}@{{ commentReply.reply_user_uid_name }}</span>：<span>

                                                            {{ commentReply.uid_container }}
                                                        </span>
                                                        <div class="articleUidMain-comment-list-author-comment">
                                                            <div class="articleUidMain-comment-list-author-comment-alldata">
                                                                <span>{{ new Date(Number(commentReply.date)).toLocaleString() }}</span>&nbsp;&nbsp; 
                                                                <!-- <span style="cursor:pointer;"><like-outlined /></span> -->
                                                                &nbsp;&nbsp;
                                                                <span style="cursor:pointer;" @click="isReplyShow(comment.id, commentReply.uid,commentReply.uid_name)">回复</span>
                                                            </div>
                                                        </div>
                                                    </a-col>
                                                </a-row>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-else></div>

                                </a-col>
                            </a-row>
                            <!-- 回复评论 -->
                            <a-row v-show="active == comment.id" :class="{ active: active == comment.id }">
                                <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="articleUidMain-useroutlined">
                                    <a-avatar size="large">
                                        <template #icon>
                                            <div>
                                                <UserOutlined />
                                            </div>
                                        </template>
                                    </a-avatar>
                                </a-col>
                                <a-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                                    <a-textarea v-model:value="textareaValueReply" :rows="4" />
                                </a-col>
                                <a-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                                    <div class="articleUidMain-comment-put-btn" @click="commentReply">
                                        <span>回复@{{ call }}</span>
                                    </div>
                                </a-col>
                            </a-row>
                            <hr>
                        </div>
                    </div>

                </div>
            </div>
        </a-col>
        <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
</a-row>
</template>
<script lang="ts">
import { defineComponent, ref, shallowRef } from "@vue/runtime-core"
import '@wangeditor/editor/dist/css/style.css'
import { Editor } from '@wangeditor/editor-for-vue'
import { message } from 'ant-design-vue'
import Axios from "@/until/axios"
import qs from "qs";
import {
    UserOutlined,
    // LikeOutlined
} from '@ant-design/icons-vue'

export default defineComponent({
    setup() {
        const textareaValue = ref("")
        const editorConfig = {
            scroll: false,
            readOnly: true
        }
        const editorRef = shallowRef()
        const handleCreated = (editor: any) => {
            editorRef.value = editor // 记录 editor 实例，重要！
        }

        return {
            editorConfig,
            mode: 'default',
            textareaValue,
            handleCreated
        }
    },
    components: { Editor, UserOutlined }, // LikeOutlined
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
            },
            articleComment: [{
                Reply: null,
                article_uid: "16765636682367",
                date: "1676619250387",
                id: 4,
                is_article_comment_reply: "1",
                uid: "b376bdac2c9ec5b68bff83de744bd17b",
                uid_container: "hello ",
                uid_like: 0,
                uid_name: "站长",
            }], // 一级评论数据
            active: 0,
            isReply: false,
            articleReply: {
                articleUid: "",
                replyUserUid: "",
                uid: "",
                uidContainer: "",
                uidLike: 0,
                uid_name: "",
                articleCommentId: 0,
                reply_user_uid_name: "",
            }, // 组装上传
            textareaValueReply: "",
            isShow: 0,
            articleCommentReply: [{
                article_comment_id: 5,
                article_uid: "16765636682367",
                date: "1676630499389",
                id: 1,
                reply_user_uid: "b376bdac2c9ec5b68bff83de744bd17b",
                uid: "b376bdac2c9ec5b68bff83de744bd17b",
                uid_container: "开心",
                uid_like: 0,
                uid_name: "站长",
                reply_user_uid_name: "站长"
            }], // 二级回复信息 
            call: "",
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
                this.getArticleComment()
            }).catch((error) => {
                // console.log('失败')
                message.error("获取文章失败")
            })
        },
        async getArticleUsereInfo(article_userid: string) {
            await Axios.get('/user/info?uid=' + article_userid).then((response) => {
                this.userInfo = response.data
                // console.log(this.userInfo)
            }).catch((error) => {
                // console.log('失败')
                message.error("获取信息失败")
            })
        },
        async updateComment() {
            if (this.$store.state.userData == '') {
                message.error('需要先登录账号！')
                return
            }
            if (this.textareaValue == "") {
                message.error('请输入评论内容~')
                return
            }
            let response = {
                articleUid: this.article.article_uid,
                uid: this.$store.state.userData.uid,
                uid_name: this.$store.state.userData.name,
                uidContainer: this.textareaValue,
                uidLike: 0,
            }
            await Axios.post('/article_comment', qs.stringify(response)).then((res) => {
                if (res.data == "success") {
                    message.success("评论成功")
                    // 刷新一级评论数据
                    this.getArticleComment()
                }
            }).catch((error) => {
                // console.log('失败')
                message.error("获取信息失败")
            })
        },
        async getArticleComment() {
            await Axios.get('/article_comment?article_uid=' + this.article.article_uid).then((res) => {
                // this.userInfo = res.data
                // console.log("this.article.article_uid", this.article.article_uid)
                // console.log("一级评论数据", res)
                this.articleComment = res.data
            }).catch((error) => {
                // console.log('失败')
                message.error("获取信息失败")
            })
        },
        isReplyShow(id: number, uid: string, uidname:string) {
            this.textareaValueReply = ""
            this.call = uidname
            // if (this.active == id) {
            //     this.active = 0
            //     return
            // }
            this.active = id
            this.articleReply.articleCommentId = id
            // console.log(this.articleReply.articleCommentId)
            this.articleReply.replyUserUid = uid
            this.articleReply.reply_user_uid_name = uidname
        },
        async commentReply() {
            if (this.$store.state.userData == '') {
                message.error('需要先登录账号！')
                return
            }
            if (this.textareaValueReply == "") {
                message.error('请输入评论内容~')
                return
            }
            this.articleReply.articleUid = this.article.article_uid
            this.articleReply.uid = this.$store.state.userData.uid
            this.articleReply.uid_name = this.$store.state.userData.name
            this.articleReply.uidContainer = this.textareaValueReply

            // console.log(this.articleReply)
            await Axios.post('/article_comment_reply', qs.stringify(this.articleReply)).then((res) => {
                // console.log(res)
                message.success("评论成功")
                // 刷新一级评论数据
                this.getArticleComment()
                // 刷新二级评论
                this.getCommentReply(this.articleReply.articleCommentId)
            }).catch((error) => {
                // console.log('失败')
                message.error("发送回复失败")
            })
        },
        async getCommentReply(id: number) {
            
            this.articleReply.articleCommentId = id
            await Axios.get('/article_comment_reply?articleCommentId=' + this.articleReply.articleCommentId + "&articleUid=" + this.article.article_uid).then((res) => {
                this.articleCommentReply = res.data
                this.isShow = id
                this.textareaValueReply = ""
            }).catch((error) => {
                // console.log('失败')
                message.error("获取回复失败")
            })
        }
    }
    
})
</script>
<style lang="stylus" scoped>
@import "~@/until/mixin.styl";
.articleUid
    bg_color(background_color_main_header)
    .articleUidMain
        padding 10px
        bg_color(bgColor_channel_a)
        font_color(font_color_main_header_channel)
        h1 
            font_color(font_color_main_header_channel)
        .articleUidMainEditor
            .w-e-text-container
                .w-e-scroll
                    min-height 300px
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

.articleUidMain-comment
    box-shadow:  #dbdbdb 0px 0px 6px 2px
    border-radius 6px
    padding 10px
    margin 20px 0 10px 0px
    bg_color(bgColor_channel_a)
    font_color(font_color_main_header_channel)
    h3 
        font_color(font_color_main_header_channel)
    .articleUidMain-useroutlined
        height 100px
        text-align center
        line-height 100px
        margin 0 auto
    .articleUidMain-comment-lists
        .articleUidMain-comment-list
            .articleUidMain-comment-list-author
                .articleUidMain-comment-author
                        font-weight 500
                        margin-right 5px
                        color #61666d
                        cursor pointer
            .articleUidMain-comment-preview
                // .github-markdown-body
                display inline-block
                padding 0
                font-size 12px
            .articleUidMain-comment-list-useroutlined
                height 40px
                text-align center
                line-height 40px
                margin 0 auto
                // height 100px
                // text-align center
                // line-height 100px
                // margin 0 auto
            .articleUidMain-comment-list-author-comment
                .articleUidMain-comment-list-author-comment-alldata
                    display flex
                    align-items center
                    position relative
                    margin-top 2px
                    font-size 13px
                    color #9499a0
.articleUidMain-comment-put-btn
    display flex
    align-items:center
    justify-content:center
    width 100%
    height 100%
    // border 1px solid blue
    border-radius 4px
    color white
    background-color #7ec1ff
    height 100px
.articleUidMain-comment-put-btn:hover
    background-color #1890ff
    cursor pointer
    height 100px

    .github-markdown-body
      padding 0
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
        color #ccc
</style>