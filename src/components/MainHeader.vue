<template>
    <div class="wujiu-header">
        <!-- banner -->
        <div class="wujiu-header-banner">
            <a-row class="wujiu-header-bar">
                <a-col :xs="10" :sm="8" :md="8" :lg="6" :xl="4">
                    <router-link to="/" @click="reload()">主站</router-link>
                </a-col>
                <a-col :xs="4" :sm="8" :md="8" :lg="12" :xl="16">&nbsp;</a-col>
                <a-col :xs="10" :sm="8" :md="8" :lg="6" :xl="4">
                    <ul>
                        <div class="wujiuyixiu-zhuti">
                            <label class="switch">
                                <input type="checkbox" @click="handleClick">
                                <!-- v-model="isDone" -->
                                <span class="slider"></span>
                            </label>
                        </div>
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
                                            <a href="javascript:;">我的文章（未写）</a>
                                        </a-menu-item>
                                        <a-menu-item>
                                            <router-link to="/maoshanuser" @click="active = ''">存卦管理</router-link>
                                        </a-menu-item>
                                        <hr>
                                        <a-menu-item>
                                            <a href="javascript:;" @click="loginOut">退出登录</a>
                                        </a-menu-item>
                                    </a-menu>
                                </template>

                            </a-dropdown>

                        </li>
                        
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
            <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
            <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="16">
                <div class="channel-items-container">
                    <div class="channel-items">
                        <router-link :to="item.toUrl" v-for="item in channelList" :key="item.name"
                            :class="{ active: active == item.name }" @click="selected(item.name)">{{ item.name }}
                        </router-link>
                    </div>
                </div>
            </a-col>
            <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
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
                    name: '摄影记录',
                    toUrl: '/photography',
                },
                {
                    name: '玄空排盘',
                    toUrl: '/xuankongpaipan',
                },
                {
                    name: '关于本站',
                    toUrl: '/about',
                },
                {
                    name: '今日宜忌',
                    toUrl: '/jieguajilu',
                },
                {
                    name: '留言墙板',
                    toUrl: '/geiwoliuyan',
                },
                {
                    name: '星之所愿',
                    toUrl: '/daikaifa',
                },
                {
                    name: '发布文章',
                    toUrl: '/postarticle',
                },
            ],
            active: '',
            isDone: false,
        }
    },
    setup() {
        return {}
    },
    watch: {
        // isDone: {
        //     immediate: true,
        //     handler(newValue, oldValue) {
        //         // console.log(newValue, oldValue);
        //         this.handleClick()
        //     }
        // }
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
            this.active = ''
            this.$store.commit("clearUserData")
            localStorage.removeItem("userData")
        },
        handleClick() {
            this.isDone = !this.isDone;
            this.isDone ? window.document.documentElement.setAttribute('data-theme', "dark") : window.document.documentElement.setAttribute('data-theme', "bright")
        }
    },
    components: {
        DownOutlined,
    },
})
</script>
<style lang="stylus" scoped>
@import "~@/until/mixin.styl";
.wujiu-header
    height 360px
    width 100%

    a 
        font_color(font_color_main_header)



    .channel-items-row
        width 100%
        height 100px
        bg_color(background_color_main_header)
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
                    font_color(font_color_main_header_channel)
                    border: 1px solid #f1f1f1
                    border-radius: 6px
                    bg_color(bgColor_channel_a)
                    text-align: center
                    font-weight: 400
                    transition: #61666d .3s,color .3s
                a:hover
                    bg_color(bgColor_channel_a_hover)
                a:active{  
                    bg_color(bgColor_channel_a_hover)
                } 
                .active 
                    bg_color(bgColor_channel_a_hover)


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
            text-align center
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


.wujiuyixiu-zhuti
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin-right 6px
.switch 
/* --moon-mask: ; */
    font-size: 12px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
    input
        opacity: 0;
        width: 0;
        height: 0;
    .slider
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #f4f4f5;
        transition: .4s;
        border-radius: 30px; 
    .slider:before
        position: absolute;
        content: "";
        height: 1.4em;
        width: 1.4em;
        border-radius: 20px;
        left: 0.3em;
        bottom: 0.3em;
        background: linear-gradient(40deg,#ff0080,#ff8c00 70%);
        transition: .4s;
    input:checked + .slider
        background-color: #303136;
    input:checked + .slider:before
        transform: translateX(1.5em);
        background: #303136;
        box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -5px 0 0 #a3dafb;             
</style>