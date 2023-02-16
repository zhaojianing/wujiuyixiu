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
                      <h4>公告：可以发布自己的文章啦</h4>
                    </div>
                    <div>
                      <h4>祝你拥有美好的一天~</h4>
                    </div>
                  </a-carousel>
                  <div class="article-list">
                    <div class="article-list-box" v-for="item in articleRecommendation" :key="item.id">
                      <router-link :to="`/article/`+item.article_uid">
                        <h3>{{ item.article_title }}</h3>
                        <hr>
                        <div class="article-list-box-left">
                          <img :src="item.article_cover" alt="image">
                        </div>
                      </router-link>
                      <div class="article-list-box-right">
                        <p>{{ item.article_container_text }}</p>
                      </div>
                      <hr>
                      <div class="article-list-box-bottom">
                        <user-outlined /> {{ item.article_userid_name }} &nbsp;<calendar-outlined /> {{ new Date(Number(item.date)).toLocaleString()
                        }}
                        &nbsp;<bar-chart-outlined /> {{ item.watch_number }}
                        &nbsp;<message-outlined /> {{ item.comment_number }}
                      </div>
                    </div>
                    <div class="article-list-pagination">
                      <a-pagination v-model:current="current" :total="totalpage" show-less-items
                        @change="getArticleRecommendation" />
                    </div>
                  </div>
                </div>
              </a-col>
              <a-col :xs="0" :sm="8" :md="8" :lg="8" :xl="8">
                <HomeMainRight />
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
import { defineComponent, ref } from 'vue';
import HomeMainRight from '@/components/home/HomeMainRight.vue';
import Axios from "@/until/axios";
import { message } from "ant-design-vue";
import {
  CalendarOutlined,
  BarChartOutlined,
  UserOutlined,
  MessageOutlined,
  // LikeOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  setup() {
    return {
      current: ref(1),
    };
  },
  components: {
    CalendarOutlined,
    BarChartOutlined,
    UserOutlined,
    MessageOutlined,
    HomeMainRight
    // LikeOutlined
  },
  data() {
    return {
      totalpage: 1,
      articleRecommendation: [{
        Comment: null,
        article_collect: "0",
        article_container_html: "<p><span style=\"color: rgb(53, 212, 199); font-size: 12px;\">文章可以发布啦</span></p>",
        article_container_text: "文章可以发布啦",
        article_cover: "http://wujiuyixiu.cn/img/logo.f4d62925.png",
        article_password: "0",
        article_title: "文章可以发布啦",
        article_uid: "16765334058728",
        article_userid: "b376bdac2c9ec5b68bff83de744bd17b",
        classification: "茅山奇门",
        comment_number: 0,
        date: "1676533405",
        id: 3,
        is_encryption: "0",
        like: 0,
        watch_number: 0,
        article_userid_name: "站长",
      }]
    }
  },
  mounted() {
    this.getArticleRecommendation()
  },
  methods: {
    getArticleRecommendation() {
      Axios.get('/article_recommendation?pagination=' + this.current).then((response) => {
        this.articleRecommendation = response.data
        this.totalpage = response.status
        // message.success('留言成功')
      }).catch((error) => {
        // console.log('失败')
        message.error("获取首页文章失败")
      })
    }
  }
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
    .article-list-pagination
      text-align center
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
