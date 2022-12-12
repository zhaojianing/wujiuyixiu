<template>
    <div class="geiwoliuyan">
        <a-row class="maoshanuser-row">
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
            <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
                <div class="geiwoliuyan-textarea">
                    <a-textarea v-model:value="textarea" placeholder="textarea with clear icon" allow-clear />

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

        return {
            textarea,
        };
    }
})
</script>
<style lang="stylus" scoped>
.geiwoliuyan
    min-height 500px
    .geiwoliuyan-textarea
        background-color #f1f1f1
        border-radius 6px
        padding 5px
</style>