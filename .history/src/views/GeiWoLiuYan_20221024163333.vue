<template>
    <div class="geiwoliuyan">
        <a-row class="maoshanuser-row">
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
            <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
                <div class="geiwoliuyan-textarea">
                    <a-textarea v-model:value="textarea" placeholder="textarea with clear icon" allow-clear show-count
                        :maxlength="240" />
                    <a-button shape="round" size="large" class="geiwoliuyan-btn">
                        给我留言
                    </a-button>
                </div>
                <!-- 分页 -->
                <div class="geiwoliuyan-pagination">

                    <a-pagination v-model:current="current" :total="50" show-less-items />
                </div>
            </a-col>
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        </a-row>

    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
export default defineComponent({
    name: "GeiWoLiuYan",
    setup() {
        const textarea = ref<string>('');

        // 分页

        return {
            textarea,
            current: ref(1),
        };
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
    .geiwoliuyan-textarea
        background-color #f1f1f1
        border-radius 6px
        padding 5px
        .geiwoliuyan-btn
            margin 10px 0
</style>