<template>
  <div>
    <!-- <nav>
      <MainHeader />
    </nav> -->

    <div class="home">
      <a-row class="home-row">
        <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
          <a-carousel autoplay :dots="false" effect="fade">
            <div>
              <h4>公告：可以注册、保存奇门排盘啦~</h4>
            </div>
            <div>
              <h4>祝你拥有美好的一天~</h4>
            </div>
          </a-carousel>
          <div class="home-main">
            <strong>无咎易修</strong> <br>
            <strong>借易修行，以易养德</strong><br>
          </div>
        </a-col>
        <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
      </a-row>
    </div>
    <!-- <MainCopyright /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  setup() {
    return {
    };
  },
  components: {
    // HelloWorld,
  },
});

</script>

<style lang="stylus" scoped>
.home 
  .home-row 
    .home-main 
      padding-top 200px
      min-height 450px
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 40px;
  line-height: 30px;
  // background: #364d79;
  // overflow: hidden;
  background-color #f1f1f1
  border-radius 6px
  padding 5px
  margin-top 10px
}

.ant-carousel :deep(.slick-slide h3) {
  color black
}
</style>
