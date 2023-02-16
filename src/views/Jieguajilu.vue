<template>
  <div>
    <a-row>
      <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
      <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="16">
        <div class="editor">
          hello
        </div>
      </a-col>
      <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "JieGuaJiLu",
  components: {
  },

  setup() {
    return {}
  },
  methods: {
  }
})
</script>
<style lang="stylus" scoped>
.editor
  min-height 500px
</style>