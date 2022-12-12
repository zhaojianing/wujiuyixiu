<template>
    <div class="geiwoliuyan">
        <div class="geiwoliuyan-textarea">
            <a-textarea v-model:value="textarea" placeholder="textarea with clear icon" allow-clear />

        </div>
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
</style>