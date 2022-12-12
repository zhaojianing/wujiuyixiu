<template>
    <div class="geiwoliuyan">
        <a-row class="maoshanuser-row">
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
            <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
                <div class="geiwoliuyan-textarea">
                    <a-textarea v-model:value="textarea" placeholder="textarea with clear icon" allow-clear show-count
                        :maxlength="240" />
                    <a-button shape="round" size="large" class="geiwoliuyan-btn" @click="messageForMe">
                        给我留言
                    </a-button>
                </div>
                <!-- 分页 -->
                <div class="geiwoliuyan-pagination">
                    <div class="geiwoliuyan-pagination-card-box">
                        <div class="geiwoliuyan-pagination-cards" v-for="item in messageData" :key="item">
                            <p>{{item.name}}</p>
                            <p>contion</p>
                        </div>
                    </div>
                    <a-pagination v-model:current="current" :total="totalpage" show-less-items />
                </div>
            </a-col>
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
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
            totalpage: 0,
            messageData: []
        }
    },
    mounted() {
        Axios.get('/messageforme?pagination=' + this.current).then((response) => {
            this.messageData = response.data
            console.log(response)
            // message.success('留言成功')
        }).catch((error) => {
            // console.log('失败')
            message.error(error)
        })
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
        }
    }
})
</script>
<style lang="stylus" scoped>
.geiwoliuyan
    min-height 500px
    .geiwoliuyan-pagination
        background-color #f1f1f1
        border-radius 6px
        padding 5px
        margin-top 10px
        .geiwoliuyan-pagination-cards
            margin-bottom 10px
            background-color #fff
            text-align left 
            padding 10px
    .geiwoliuyan-textarea
        background-color #f1f1f1
        border-radius 6px
        padding 5px
        .geiwoliuyan-btn
            margin 10px 0
</style>