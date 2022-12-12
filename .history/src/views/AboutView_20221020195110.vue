<template>
  <div>
    <!-- <nav>
      <MainHeader />
    </nav> -->

    <div class="about">
      <a-row class="about-row">
        <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
          <div class="about-main">
            <div class="about-future">
              <h3>本站说明：</h3>
              <strong>欢迎来到无咎易修，本站提供（茅山奇门排盘，玄空风水排盘）</strong>
              <strong>背后的逻辑+代码，由Ning站长提供。</strong>
            </div>
          </div>
        </a-col>
        <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
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
.about 
  margin-bottom 10px
  .about-row 
    .about-main 
      // padding-top 200px
      min-height 500px
      background-color #f1f1f1
      border-radius 6px
      padding 5px
      .about-future
        text-align left 
        font-weight bold
        h3 
          font-weight bold
        h4 
          font-weight bold
</style>
