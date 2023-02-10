<template>
  <div>
    <!-- <nav>
      <MainHeader />
    </nav> -->

    <div class="home">
      <a-row class="home-row">
        <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
        <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="16">
          <div class="home-main">
            <!-- 分为pc,ipad,phone三端展示,主要为phone+pc -->
            <a-row class="home-row-main">
              <a-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
                <div class="article-lists">
                  <a-carousel autoplay :dots="false" effect="fade" :style="{ marginTop: '0' }">
                    <div>
                      <h4>公告：可以注册、保存奇门排盘啦~</h4>
                    </div>
                    <div>
                      <h4>祝你拥有美好的一天~</h4>
                    </div>
                  </a-carousel>
                  <div class="article-list">
                    <div class="article-list-box">
                      <h3>标题</h3>
                      <hr>
                      <div class="article-list-box-left">
                        <img src="http://wujiuyixiu.cn/img/logo.f4d62925.png" alt="image">
                      </div>
                      <div class="article-list-box-right">
                        <p>
                          hello world ! hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world ! hello world ! hello world ! hello world ! hello
                          world !
                          hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world ! hello world ! hello world ! hello world ! hello
                          world !
                          hello world ! hello world ! hello world !! hello world ! hello world ! hello world ! hello
                          world !
                          hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world ! hello world ! hello world ! hello world ! hello
                          world !
                          hello world ! hello world ! hello world !
                        </p>
                      </div>
                      <hr>
                      <div class="article-list-box-bottom">
                        <user-outlined /> 站长 &nbsp;<calendar-outlined /> 2023-1-11 &nbsp;<bar-chart-outlined /> 999
                        &nbsp;<message-outlined /> 9
                      </div>
                    </div>
                    <div class="article-list-box">
                      <h3>标题</h3>
                      <hr>
                      <div class="article-list-box-left">
                        <img src="http://wujiuyixiu.cn/img/logo.f4d62925.png" alt="image">
                      </div>
                      <div class="article-list-box-right">
                        <p>
                          hello world ! hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world ! hello world ! hello world ! hello world ! hello
                          world !
                          hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world ! hello world ! hello world ! hello world ! hello
                          world !
                          hello world ! hello world ! hello world !! hello world ! hello world ! hello world ! hello
                          world !
                          hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world ! hello world ! hello world ! hello world ! hello
                          world !
                          hello world ! hello world ! hello world !
                        </p>
                      </div>
                      <hr>
                      <div class="article-list-box-bottom">
                        <user-outlined /> 站长 <calendar-outlined /> 2023-1-11 <bar-chart-outlined /> 999
                        <message-outlined />
                        9
                      </div>
                    </div>
                    <div class="article-list-box">
                      <h3>标题</h3>
                      <hr>
                      <div class="article-list-box-left">
                        <img src="http://wujiuyixiu.cn/img/logo.f4d62925.png" alt="image">
                      </div>
                      <div class="article-list-box-right">
                        <p>
                          hello world ! hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world ! hello world ! hello world ! hello world ! hello
                          world !
                          hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world ! hello world ! hello world ! hello world ! hello
                          world !
                          hello world ! hello world ! hello world !! hello world ! hello world ! hello world ! hello
                          world !
                          hello world ! hello world ! hello world !
                          hello world ! hello world ! hello world ! hello world ! hello world ! hello world ! hello
                          world !
                          hello world ! hello world ! hello world !
                        </p>
                      </div>
                      <hr>
                      <div class="article-list-box-bottom">
                        <user-outlined /> 站长 <calendar-outlined /> 2023-1-11 <bar-chart-outlined /> 999
                        <message-outlined />
                        9
                      </div>
                    </div>
                  </div>
                </div>
              </a-col>
              <a-col :xs="0" :sm="8" :md="8" :lg="8" :xl="8">
                <HomeMainRight/>
              </a-col>
            </a-row>
            <!-- <strong>无咎易修</strong> <br>
            <strong>借易修行，以易养德</strong><br> -->
          </div>
        </a-col>
        <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
      </a-row>
    </div>
    <!-- <MainCopyright /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeMainRight from '@/components/home/HomeMainRight.vue';
import {
  CalendarOutlined,
  BarChartOutlined,
  UserOutlined,
  MessageOutlined,
  // LikeOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  setup() {
    return {};
  },
  components: {
    CalendarOutlined,
    BarChartOutlined,
    UserOutlined,
    MessageOutlined,
    HomeMainRight
    // LikeOutlined
  },
});

</script>

<style lang="stylus" scoped>
.home 
  .home-row 
    .home-main 
      min-height 450px

/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 40px;
  line-height: 30px;
  background-color #f1f1f1
  border-radius 6px
  padding 5px
}

.ant-carousel :deep(.slick-slide h3) {
  color black
}
.article-lists
  // margin 0 0 0 10px
  // text-align left
  .article-list
    margin-top 10px
    .article-list-box
      width 100%
      margin-bottom 10px
      background-color #fff
      border-radius 6px
      padding 5px
      margin 0 0 10px 0px
      box-shadow: 0px 0px 6px 2px #00000014
      .article-list-box-bottom
        line-height 20px
        max-height 60px
        text-align right
        color #666666
      .article-list-box-phone-left
        width 100%
        vertical-align middle
        img
          width 100%
          height 100%
          border-radius 10px
          padding 5px
      .article-list-box-left
        width 40%
        display inline-block
        vertical-align middle
        img
          width 100%
          height 100%
      .article-list-box-phone-right
        width 100%
        padding-left 10px
        // overflow hidden
        // text-overflow ellipsis
        display -webkit-inline-box
        -webkit-box-orient vertical
        // -webkit-line-clamp 3
        overflow hidden
        vertical-align middle
        p
          position relative
          line-height 20px
          max-height 120px
          overflow: hidden
          color #666666
      .article-list-box-right
        width 60%
        display inline-block
        padding-left 10px
        // overflow hidden
        // text-overflow ellipsis
        display -webkit-inline-box
        -webkit-box-orient vertical
        // -webkit-line-clamp 3
        overflow hidden
        vertical-align middle
        p
          position relative
          line-height 20px
          max-height 120px
          overflow: hidden
          color #666666
</style>
