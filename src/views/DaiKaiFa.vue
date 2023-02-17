<template>
  <div>
    <!-- <nav>
      <MainHeader />
    </nav> -->

    <div class="daikaifa">
      <a-row class="daikaifa-home-row">
        <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
        <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="16">
          <div class="daikaifa-home-main">
            <strong>这里会做一个太空，所有星星聚集的地图</strong> <br>
            <strong>可以在星星上许下自己的愿望，祈福</strong>
          </div>
        </a-col>
        <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
      </a-row>
    </div>
    <!-- <MainCopyright /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
// import MainHeader from '@/components/MainHeader.vue';
// import MainCopyright from '@/components/MainCopyright.vue';

export default defineComponent({
  name: "DaiKaiFa",
  setup() {
    return {}
  },
  // components: {
  //   MainHeader,
  //   MainCopyright
  // },

})
</script>

<style lang="stylus" scoped>
@import "~@/until/mixin.styl";
.daikaifa 
  bg_color(background_color_main_header)
  font_color(font_color_main_header_channel)
  .daikaifa-home-row 
    text-align center
    .daikaifa-home-main 
      padding-top 200px
      min-height 500px
</style>
