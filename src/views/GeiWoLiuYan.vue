<template>
    <div class="geiwoliuyan">
        <a-row class="maoshanuser-row">
            <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
            <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="16">
                <div class="geiwoliuyan-textarea">
                    <a-textarea v-model:value="textarea" placeholder="想对我说的话~" allow-clear show-count
                        :maxlength="240" />
                    <a-button shape="round" size="large" class="geiwoliuyan-btn" @click="messageForMe">
                        给我留言
                    </a-button>
                </div>
                <!-- 分页 -->
                <div class="geiwoliuyan-pagination">
                    <div class="geiwoliuyan-pagination-card-box">
                        <div class="geiwoliuyan-pagination-cards" v-for="item in messageData" :key="item.id">
                            <p>{{ item.name }} : {{ item.date }}</p>
                            <p>{{ item.introduction }}</p>
                        </div>
                    </div>
                    <a-pagination v-model:current="current" :total="totalpage" show-less-items
                        @change="getMessageData" />
                </div>
            </a-col>
            <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
        </a-row>

    </div>
</template>
<script lang="ts">
import Axios from "@/until/axios";
import { defineComponent, ref } from "@vue/runtime-core";
import { message } from "ant-design-vue";
import qs from "qs";
export default defineComponent({
    name: "GeiWoLiuYan",
    setup() {
        const textarea = ref<string>('');

        // 分页

        return {
            textarea,
            current: ref(1),
        };
    },
    data() {
        return {
            totalpage: 1,
            messageData: [{ uid: '', name: '站长', date: '', introduction: '可以给我留言啦~', city: "", id: "" }]
        }
    },
    mounted() {
        this.getMessageData();
    },
    methods: {
        messageForMe() {
            if (this.$store.state.userData == '') {
                message.error('需要先登录账号！')
                return
            }
            if (this.textarea == "") {
                message.warning('要输入想对我说的话~')
                return
            }
            let response = {
                uid: this.$store.state.userData.uid,
                name: this.$store.state.userData.name,
                date: this.getTime(),
                introduction: this.textarea
            }
            console.log(response)
            Axios.post('/messageforme', qs.stringify(response)).then((response) => {
                message.success('留言成功')
                this.textarea = ""
                this.totalpage = 1
                this.getMessageData()
            }).catch((error) => {
                // console.log('失败')
                message.error(error)
            })
        },
        getTime() {
            var checkTime = function (i: any) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            }

            var nowdate = new Date();
            var year = nowdate.getFullYear(),
                month = nowdate.getMonth() + 1,
                date = nowdate.getDate(),
                day = nowdate.getDay(),
                week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                h = nowdate.getHours(),
                m = nowdate.getMinutes(),
                s = nowdate.getSeconds(),
                hh = checkTime(h),
                mm = checkTime(m),
                ss = checkTime(s);
            return year + "年" + month + "月" + date + "日" + week[day] + " " + hh + ":" + mm + ":" + ss;
        },
        getMessageData() {
            Axios.get('/messageforme?pagination=' + this.current).then((response) => {
                this.messageData = response.data
                this.totalpage = response.status
                // message.success('留言成功')
            }).catch((error) => {
                // console.log('失败')
                message.error("获取留言信息失败")
            })
        }
    }
})
</script>
<style lang="stylus" scoped>
@import "~@/until/mixin.styl";
.geiwoliuyan
    min-height 500px
    bg_color(background_color_main_header)
    .geiwoliuyan-pagination
        bg_color(bgColor_channel_a)
        border-radius 6px
        padding 5px
        margin-top 10px
        margin-bottom 10px
        text-align center
        .geiwoliuyan-pagination-cards
            margin-bottom 10px
            background-color #fff
            text-align left 
            padding 10px
    .geiwoliuyan-textarea
        bg_color(bgColor_channel_a)
        border-radius 6px
        padding 5px
        text-align center
        .geiwoliuyan-btn
            margin 10px 0
</style>