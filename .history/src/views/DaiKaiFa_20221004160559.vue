<template>
  <div>
    <nav>
      <MainHeader />
    </nav>

    <div class="daikaifa">
      <a-row class="daikaifa-home-row">
        <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
          <div class="daikaifa-home-main">
            <strong>正在编写...</strong> <br>
            <strong>（茅山排盘，关于本站，可以查看）</strong><br>
          </div>
        </a-col>
        <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
      </a-row>
    </div>
    <MainCopyright />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import MainHeader from '@/components/MainHeader.vue';
import MainCopyright from '@/components/MainCopyright.vue';

export default defineComponent({
  name: "DaiKaiFa",
  setup() {
    return {}
  },
  components: {
    MainHeader,
    MainCopyright
  },

})
</script>

<style lang="stylus" scoped>
.daikaifa 
  .daikaifa-home-row 
    .daikaifa-home-main 
      padding-top 200px
      min-height 500px
</style>
