<template>
    <div id="sign">
        <a-row class="sign-row">
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
            <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
                <div class="sign-container">
                    <div class="sign-box">
                        a
                    </div>
                </div>
            </a-col>
            <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        </a-row>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
    name: "SignIn",
    setup() {
        return {}
    }
})
</script>
<style lang="stylus" scoped>
#sign
    width 100%
    height 100%
    background-color #424242
    color white
    .sign-row
        width 100%
        height 100%

</style>