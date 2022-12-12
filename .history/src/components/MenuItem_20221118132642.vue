<template>
    <button class="menu-item" :class="{ 'is-active': isActive ? isActive() : null }" @click="action" :title="title">
        <svg class="remix">
            <use :xlink:href="require('remixicon/fonts/remixicon.symbol.svg') + `#ri-${icon}`" />
            <!-- <use :xlink:href="`${remixiconUrl}#ri-${icon}`" /> -->
        </svg>
    </button>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
// import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'
import '../until/editor.stylus'
export default defineComponent({
    name: "menuItem",
    setup() {
        return {}
    },
    props: {
        icon: {
            type: String,
            required: true,
        },

        title: {
            type: String,
            required: true,
        },

        action: {
            type: Function,
            required: true,
        },

        isActive: {
            type: Function,
            default: null,
        },
    },

    data() {
        return {
            // remixiconUrl,
        }
    },
})
</script>
<style lang="stylus" scoped>

</style>