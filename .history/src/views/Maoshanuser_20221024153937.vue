<template>
    <div class="maoshanuser">
        <a-row class="maoshanuser-row">
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
            <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
                <a-tabs v-model:activeKey="activeKey" type="card">
                    <a-tab-pane key="1" tab="茅山存卦">
                        <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 4, xxl: 4, xxxl: 4 }"
                            :data-source="maoShanUserData">
                            <template #renderItem="{ item }">
                                <a-list-item>
                                    <a-card :title="item.title">
                                        <h3>{{item.time}}</h3>
                                        <p>{{item.introduction}}</p>
                                    </a-card>
                                </a-list-item>
                            </template>
                        </a-list>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="玄空存卦" @tabClick="xuankongDataClick">
                        <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 2, xl: 4, xxl: 4, xxxl: 4 }"
                            :data-source="xuankongUserData">
                            <template #renderItem="{ item }">
                                <a-list-item>
                                    <a-card :title="item.title">
                                        <h3>{{item.time}}</h3>
                                        <p>{{item.introduction}}</p>
                                    </a-card>
                                </a-list-item>
                            </template>
                        </a-list>
                    </a-tab-pane>
                </a-tabs>
            </a-col>
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        </a-row>
    </div>

</template>
<script lang="ts">
import Axios from "@/until/axios";
import { defineComponent, ref } from "@vue/runtime-core";
import { message } from "ant-design-vue";
export default defineComponent({
    name: "MaoShanUser",
    setup() {

        return {
            activeKey: ref('1'),
        };
    },
    data() {
        return {
            maoShanUserData: [],
            xuankongUserData: [],
        }
    },
    mounted() {
        let uid = this.$store.state.userData.uid
        Axios.get('/user/save_maoshanuser?uid=' + uid).then((res) => {
            this.maoShanUserData = res.data
        }).catch((error) => {
            message.error(error)
        })
    },
    methods: {
        xuankongDataClick() {
            let uid = this.$store.state.userData.uid
            Axios.get('/user/save_xuankonguser?uid=' + uid).then((res) => {
                this.xuankongUserData = res.data
            }).catch((error) => {
                message.error(error)
            })
        }
    }
})
</script>
<style lang="stylus" scoped>
.maoshanuser
    min-height 500px
</style>