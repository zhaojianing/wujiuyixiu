<template>
  <div>
    <!-- <nav>
      <MainHeader />
    </nav> -->

    <div class="home">
      <a-row class="home-row">
        <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
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
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import MainHeader from '@/components/MainHeader.vue';
// import MainCopyright from '@/components/MainCopyright.vue';

@Options({
  components: {
    HelloWorld,
    // MainHeader,
    // MainCopyright
  },
})
export default class HomeView extends Vue { }
</script>

<style lang="stylus" scoped>
.home 
  .home-row 
    .home-main 
      padding-top 200px
      min-height 500px
</style>
