<template>
    <div class="photography">
        <a-row class="photography-row">
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
            <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
                <div class="photography-row-div">
                    photography
                </div>
            </a-col>
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        </a-row>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
    name: "PhotographyImage",
    setup() {
        return {}
    }
})
</script>
<style lang="stylus" scoped>
.photography
    min-height 500px
</style>