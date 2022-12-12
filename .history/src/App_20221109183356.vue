<template>
  <nav>
    <MainHeader />
  </nav>
  <router-view />
  <MainCopyright />
  <div id="components-back-top-demo-custom">
    <a-back-top>
      <div class="ant-back-top-inner">↑</div>
    </a-back-top>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import MainHeader from '@/components/MainHeader.vue';
import MainCopyright from '@/components/MainCopyright.vue';

export default defineComponent({
  name: "App",
  metaInfo: {
    title: '无咎易修', // set a title
    meta: [{                 // set meta
      name: '无咎易修',
      content: '这是一个可以免费刘文元茅山奇门排盘，玄空风水，紫白飞星排盘的网站'
    }]
  },
  setup() {
    window.onload = function () {
      var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
      console.log('Page load time is ' + loadTime);
    }
    console.log(
      `%c bilibili: %c 无咎易修 %c`,
      'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
      'background:transparent'
    )
    console.log(
      `%c youtube: %c 无咎易修 %c`,
      'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
      'background:transparent'
    )
    console.log(
      `%c 西瓜视频: %c 无咎易修 %c`,
      'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
      'background:transparent'
    )

    return {}
  },
  components: {
    MainHeader,
    MainCopyright
  },

})
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  width 100%
  height 100%
  ul,li
    list-style none
  p 
    margin 0
    padding 0

#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}
#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #4c4c4c;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
.notification-custom-class {
  color: red;
}

</style>
