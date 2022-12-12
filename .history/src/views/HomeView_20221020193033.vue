<template>
  <div>
    <!-- <nav>
      <MainHeader />
    </nav> -->

    <div class="home">
      <a-row class="home-row">
        <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
        <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
          <a-carousel :after-change="onChange">
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
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
    const onChange = (current: number) => {
      console.log(current);
    };

    return {
      onChange,
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
      min-height 500px
</style>
