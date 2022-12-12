<template>
    <footer class="wujiu-footer">
        <section>
            <p>Posted by: Ning 网站浏览：{{ totalPeople }}次,网站加载时间：{{ loadTime }}秒</p>
            <p>Copyright: 无咎易修 All rights reserved <a href="https://beian.miit.gov.cn">豫ICP备2022018869号</a></p>
        </section>
    </footer>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Axios from "./../until/axios";
export default defineComponent({
    name: "MainCopyright",
    setup() {
        return {}
    },
    data() {
        return {
            totalPeople: '',
            loadTime: 0,
        }
    },
    mounted() {
        debugger
        let loadT = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart
        this.loadTime =  loadT / 1000
        if (this.$store.state.isFirstLoad) {
            this.getTotal()
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
    section
        p 
            font-weight bold
            a
                color #2c3e50
            a:hover
                color blue
</style>