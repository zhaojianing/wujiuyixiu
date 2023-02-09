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
            <strong>正在编写...</strong> <br>
            <strong>（茅山排盘，关于本站，可以查看）</strong><br>
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
.daikaifa 
  .daikaifa-home-row 
    .daikaifa-home-main 
      padding-top 200px
      min-height 500px
</style>
