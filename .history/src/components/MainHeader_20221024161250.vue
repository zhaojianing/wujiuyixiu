<template>
    <div class="wujiu-header">
        <!-- banner -->
        <div class="wujiu-header-banner">
            <a-row class="wujiu-header-bar">
                <a-col :xs="8" :sm="8" :md="8" :lg="6" :xl="4">
                    <router-link to="/" @click="reload()">主站</router-link>
                </a-col>
                <a-col :xs="8" :sm="8" :md="8" :lg="12" :xl="16">&nbsp;</a-col>
                <a-col :xs="8" :sm="8" :md="8" :lg="6" :xl="4">
                    <ul>
                        <li v-if="$store.state.userData == ''">
                            <a-dropdown>
                                <a class="ant-dropdown-link" @click.prevent>
                                    <router-link to="/sign">登录</router-link>
                                </a>
                            </a-dropdown>
                        </li>
                        <li v-if="$store.state.userData != ''">
                            <a-dropdown>
                                <a class="ant-dropdown-link" @click.prevent>
                                    {{ $store.state.userData == "" ? "" : $store.state.userData.name }}
                                    <DownOutlined />
                                </a>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item>
                                            <a href="javascript:;">个人中心（未写）</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <router-link to="/maoshanuser">存卦管理</router-link>
                                        </a-menu-item>
                                        <hr>
                                        <a-menu-item>
                                            <a href="javascript:;" @click="loginOut">退出登录</a>
                                        </a-menu-item>
                                    </a-menu>
                                </template>

                            </a-dropdown>
                             <!-- &nbsp;&nbsp;<span style="color: white">|</span>&nbsp;&nbsp;
                            <a class="ant-dropdown-link" @click.prevent>
                                <router-link to="/sign">存卦管理</router-link>
                            </a> -->
                        </li>
                        <!-- <li><router-link to="/about">赞赏</router-link></li> -->
                    </ul>
                </a-col>
            </a-row>
            <div class="header-banner-inner">
                <picture class="img-xs-sm-md">
                    <source media="(min-width:650px)" srcset="./../../public/img/logo.png">
                    <source media="(min-width:465px)" srcset="./../../public/img/logo.png">
                    <img src="./../../public/img/logo.png" alt="Flowers">
                </picture>
            </div>
        </div>
        <a-row class="channel-items-row">
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
            <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
                <div class="channel-items-container">
                    <div class="channel-items">
                        <router-link :to="item.toUrl" v-for="item in channelList" :key="item.name"
                            :class="{ active: active == item.name }" @click="selected(item.name)">{{ item.name }}
                        </router-link>
                    </div>
                </div>
            </a-col>
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        </a-row>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    name: "MainHeader",
    data() {
        return {
            channelList: [
                {
                    name: '茅山排盘',
                    toUrl: '/maoshanpaipan',
                },
                {
                    name: '解卦记录',
                    toUrl: '/daikaifa',
                },
                {
                    name: '玄空排盘',
                    toUrl: '/xuankongpaipan',
                },
                {
                    name: '生活随笔',
                    toUrl: '/daikaifa',
                },
                {
                    name: '摄影记录',
                    toUrl: '/daikaifa',
                },
                {
                    name: '古书解析',
                    toUrl: '/daikaifa',
                },

                {
                    name: '关于本站',
                    toUrl: '/about',
                },
                {
                    name: '给我留言',
                    toUrl: '/geiwoliuyan',
                }
            ],
            active: '',
        }
    },
    setup() {
        return {}
    },
    methods: {
        selected(name: string) {
            this.active = name
        },
        reload() {
            // 清除选中样式
            this.active = ''
            // 前往主页
            // this.$router.push({name:'/home',"params":{}})
            this.$router.go(1)
        },
        loginOut() {
            this.$store.commit("clearUserData")
            localStorage.removeItem("userData")
        }
    },
    components: {
        DownOutlined,
    },
})
</script>
<style lang="stylus" scoped>
.wujiu-header
    height 360px
    width 100%

    a 
        color white



    .channel-items-row
        width 100%
        height 100px
        background-color white
        padding 0px 0px 6px 0px
        display: flex
        align-items: center

        .channel-items-container
            height 100%
            width 100%
            display flex
            justify-content space-between
            .channel-items 
                height 100%
                width 100%
                display grid
                width 100%
                grid-auto-flow column
                // grid-column span 4
                grid-gap 10px
                grid-template-rows repeat(2,1fr)
                // border-right 1px solid var(--line_regular)
                a 
                    height 30px
                    line-height 30px
                    display: inline-block
                    box-sizing: content-box
                    width: 100%
                    height: 100%
                    color: #303030
                    border: 1px solid #f1f1f1
                    border-radius: 6px
                    background-color: #f1f1f1
                    text-align: center
                    font-weight: 400
                    transition: #61666d .3s,color .3s
                a:hover
                    background-color: #cdcdcd
                a:active{  
                    background-color: #cdcdcd  
                } 
                .active 
                    background-color #cdcdcd  


    .wujiu-header-banner
        height 260px
        width 100%
        overflow hidden
        .wujiu-header-bar
            display flex
            position absolute
            height 64px
            width 100%
            line-height 64px
            z-index 1000
            ul,li 
                display: flex;
                align-items: center;
                flex-shrink: 0;
        .header-banner-inner
            height 100%
            // background-color #424242
            picture
                display inline-block
                vertical-align middle
                width 100%
                height 100%
                img 
                    display block
                    width 100%
                    max-width 100%
                    height 100%
                    object-fit: cover;
                    
</style>