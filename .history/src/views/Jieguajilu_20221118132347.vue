<template>
  <div>
    <a-row>
      <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
      <a-col :xs="20" :sm="16" :md="16" :lg="14" :xl="14">
        <div class="editor" v-if="editor">
          <menu-bar class="editor__header" :editor="editor" />
          <editor-content :editor="editor" />
        </div>
      </a-col>
      <a-col :xs="2" :sm="4" :md="4" :lg="5" :xl="5"></a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from '../components/MenuBar.vue'
import '../until/editor.stylus'

export default defineComponent({
  name: "JieGuaJiLu",
  components: {
    EditorContent,
    MenuBar
  },

  setup() {
    const editor = useEditor({
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
      ],
    })

    return { editor }
  },
})
</script>
<style lang="stylus" scoped>

</style>