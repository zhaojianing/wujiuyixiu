<template>
    <div class="photography">
        <a-row class="photography-row">
            <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
            <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="16">
                <div class="photography-row-div" v-for="item in imageData" :key="item.id">
                    <a-card hoverable class="photography-row-div-card">
                        <template #cover>
                            <a-image :width="300" :alt="item.alt" :src="item.src"
                                fallback="data:image/png;base64,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" />
                        </template>
                        <!-- <template #actions>
                            <setting-outlined key="setting" />
                            <edit-outlined key="edit" />
                            <ellipsis-outlined key="ellipsis" />
                        </template> -->
                        <a-card-meta title="站长" :description="item.description">
                            <template #avatar>
                                <a-avatar src="https://joeschmoe.io/api/v1/random" />
                            </template>
                        </a-card-meta>
                    </a-card>
                </div>
                <div style="margin-bottom: 10px;cursor: pointer;">
                    <strong v-show="loadText != ''" @click="loadMoreImage()">{{ loadText }}</strong>
                </div>
            </a-col>
            <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
        </a-row>
    </div>
</template>
<script lang="ts">
// import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
    name: "PhotographyImage",
    setup() {
        return {}
    },
    data() {
        return {
            allImageData: [
                {
                    id: '1',
                    alt: '家门口的风景',
                    src: '/img/DSC01065.JPG',
                    description: '家门口的风景'
                },
                {
                    id: '2',
                    alt: '[北京]发小给流浪猫洗澡，2021年12月11日，12:52:18',
                    src: '/img/DSC00745.JPG',
                    description: '[北京]发小给流浪猫洗澡，2021年12月11日，12:52:18'
                },
                {
                    id: '3',
                    alt: '路边随手拍',
                    src: '/img/DSC01017.JPG',
                    description: '路边随手拍'
                },
                {
                    id: '4',
                    alt: '路边随手拍',
                    src: '/img/DSC01020.JPG',
                    description: '路边随手拍'
                },
                {
                    id: '5',
                    alt: '小清新',
                    src: '/img/DSC01024.JPG',
                    description: '小清新'
                },
                {
                    id: '6',
                    alt: '朋友的核桃',
                    src: '/img/DSC00900.jpg',
                    description: '朋友的核桃'
                },
                {
                    id: '7',
                    alt: '未完工的小楼',
                    src: '/img/DSC01003.JPG',
                    description: '未完工的小楼'
                }
            ],
            imageData: [{
                id: '1',
                alt: '家门口的风景',
                src: '/img/DSC01065.JPG',
                description: '家门口的风景'
            }],
            loadText: "",
            startNum: 0,
            endNum: 4,
        }
    },
    mounted() {
        // 初始化
        this.imageData = []
        // 如果总数据小于10，结束就等于总图片数量
        if (this.allImageData.length < 4) {
            this.endNum = this.allImageData.length
            this.loadText = ""
        }
        this.loadMoreImage()
    },
    methods: {
        loadMoreImage() {
            // this.imageData = [...this.imageData, ...this.allImageData.splice(start, end)]
            for (let i = this.startNum; i < this.endNum; i++) {
                this.imageData.push(this.allImageData[i])
            }
            // 查看是否还有更多图片
            this.setStartEnd()
        },
        setStartEnd() {
            if (this.endNum > this.allImageData.length) {
                this.endNum = this.allImageData.length;
                this.startNum += 4
                this.loadText = "加载更多"
            } else if (this.endNum == this.allImageData.length) { //  && this.imageData.length != this.allImageData.length
                this.loadText = ""
            } else {
                this.endNum += 4
                this.startNum += 4
                this.loadText = "加载更多"
                // 如果结束加完比总数大，就直接等于总数
                if (this.endNum >= this.allImageData.length) {
                    this.endNum = this.allImageData.length
                }
            }
        }
    },
    components: {
        // SettingOutlined,
        // EditOutlined,
        // EllipsisOutlined,
    },
})
</script>
<style lang="stylus" scoped>
@import "~@/until/mixin.styl";
.photography
    min-height 500px
    text-align center
    bg_color(background_color_main_header)
    .photography-row-div
        margin-bottom 10px
        bg_color(background_color_main_header)
        font_color(font_color_main_header_channel)
        // text-align left
        .photography-row-div-card
            min-width 300px
            padding-top 10px
            bg_color(background_color_main_header)
            font_color(font_color_main_header_channel)
</style>