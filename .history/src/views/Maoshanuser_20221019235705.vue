<template>
    <div class="maoshanuser">
        <a-row class="maoshanuser-row">
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
            <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
                <a-tabs v-model:activeKey="activeKey" type="card">
                    <a-tab-pane key="1" tab="茅山存卦">茅山存卦</a-tab-pane>
                    <a-tab-pane key="2" tab="玄空存卦（未写）">玄空存卦还没有写~</a-tab-pane>
                </a-tabs>
            </a-col>
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        </a-row>
    </div>

</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
export default defineComponent({
    name: "MaoShanUser",
    setup() {
        return {
            activeKey: ref('1'),
        };
    }
})
</script>
<style lang="stylus" scoped>
.maoshanuser
    min-height 500px
</style>