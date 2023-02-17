<template>
  <div class="jieguajilu">
    <a-row>
      <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
      <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="16">
        <HomeMainRight />
      </a-col>
      <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import HomeMainRight from '@/components/home/HomeMainRight.vue';

export default defineComponent({
  name: "JieGuaJiLu",
  components: {
    HomeMainRight
  },
  setup() {
    return {}
  },
  methods: {
  }
})
</script>
<style lang="stylus" scoped>
@import "~@/until/mixin.styl";
.jieguajilu
  bg_color(background_color_main_header)
.editor
  min-height 500px
</style>