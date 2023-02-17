<template>
  <div>
    <!-- <nav>
      <MainHeader />
    </nav> -->

    <div class="about">
      <a-row class="about-row">
        <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
        <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="16">
          <div class="about-main">
            <div class="about-future">
              <h3>本站说明：</h3>
              <strong>欢迎来到无咎易修，本站提供（茅山奇门排盘，玄空风水排盘）</strong> <br>
              <strong>背后的逻辑+代码，由Ning站长提供。</strong> <br>
              <strong>希望你在这里玩的开心</strong> <br>
              <strong>未来会编写关于周易更好玩的东西~</strong> <br>
              <strong>期待未来~</strong> <br>
              <!-- <a-image-preview-group>
                <a-image :width="200" src="/img/weixin.jpg" />
                <a-image :width="200" src="/img/zhifubao.jpg" />
              </a-image-preview-group>
              <br><br>
              <h3>本站未来：</h3>
              <h4>第一步V1.0+：</h4>
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;肯定是先完善主页模块</strong><br> <br>
              <h4>第二步V2.0+：</h4>
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;1. 添加注册用户功能，方便存储记录的卦</strong> <br>
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;2. 添加打印记录卦的功能（有人喜欢纸张存放）</strong><br>
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;3. 添加断卦记录，方便再回来看卦，知道思路</strong><br>
              <strong>&nbsp;&nbsp;&nbsp;&nbsp;4. 添加全页截图，方便发送给朋友自己的卦</strong> <br><br>
              <h3>已完成记录：</h3>
              <a-timeline>
                <a-timeline-item>
                  <strong>V0.2版本</strong><br>
                  <strong>完成玄空风水，紫白飞星排盘</strong>
                </a-timeline-item>
              </a-timeline>
              <a-timeline>
                <a-timeline-item>
                  <strong>V0.1版本</strong><br>
                  <strong>完成茅山奇门（刘文元茅山奇门在线网络排盘）,主站建立等</strong>
                </a-timeline-item>
              </a-timeline> -->
            </div>
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
.about 
  padding-bottom 10px
  bg_color(background_color_main_header)
  .about-row 
    h3 
      font_color(font_color_main_header_channel)
    .about-main 
      // padding-top 200px
      min-height 500px
      bg_color(bgColor_channel_a)
      font_color(font_color_main_header_channel)
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
