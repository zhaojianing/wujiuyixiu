<template>
    <footer class="wujiu-footer">
        <section>
            <p>网站浏览：{{ totalPeople }}次{{globalConfig.HISTORY == 'LOCAL' ? "(本地开发版本)":""}},加载时间：{{ loadTime }}秒</p>
            <p>Posted by: Ning <a href="https://beian.miit.gov.cn">豫ICP备2022018869号</a></p>
        </section>
    </footer>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Axios from "./../until/axios";
import globalConfig from "./../until/globalConfig";
export default defineComponent({
    name: "MainCopyright",
    setup() {
        return {
            globalConfig
        }
    },
    data() {
        return {
            totalPeople: '',
            loadTime: 0,
        }
    },
    mounted() {
        // 计算页面加载时间
        let time = performance.now() + ""
        this.loadTime = parseInt(time) / 1000

        // 页面是否是初次加载
        if (this.$store.state.isFirstLoad) {
            // 更新页面访问人数
            this.getTotal()
            // 设置页面已经加载
            this.loadGet()
        } else {
            this.totalPeople = this.$store.state.totalPeople + ''
        }
    },
    methods: {
        getTotal() {
            Axios.get('/statistics').then((response) => {
                // console.log('成功')
                // console.log(response)
                this.totalPeople = response.data
                this.$store.state.totalPeople = response.data
            }).catch((error) => {
                // console.log('失败')
                console.error(error)
            })
        },
        loadGet() {
            this.$store.commit('load')
        }
    }
})
</script>
<style lang="stylus" scoped>
.wujiu-footer
    width 100%
    height: 100px
    background-color #f1f1f1
    padding 30px 0 30px 0
    text-align center
    section
        p 
            font-weight bold
            a
                color #2c3e50
            a:hover
                color blue
</style>