<template>
  <div>
    <a-row>
      <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
        <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="16">
        <!-- <button @click="getJsonString">GetDataToJson</button> -->
        <div class="editor" v-if="editor">
          <menu-bar class="editor__header" :editor="editor" />
          <editor-content :editor="editor" />
        </div>
      </a-col>
      <a-col :xs="2" :sm="2" :md="2" :lg="2" :xl="4"></a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from '../components/MenuBar.vue'
import '../until/editor.stylus'
// import Highlight from '@tiptap/extension-highlight'
// import TaskItem from '@tiptap/extension-task-item'
// import TaskList from '@tiptap/extension-bullet-list'
import BulletList from '@tiptap/extension-bullet-list'
const CustomBulletList = BulletList.extend({
  addKeyboardShortcuts() {
    return {
      'Mod-l': () => this.editor.commands.toggleBulletList(),
    }
  },
})

export default defineComponent({
  name: "JieGuaJiLu",
  components: {
    EditorContent,
    MenuBar
  },

  setup() {
    const editor = useEditor({
      content: '<p>🎉</p><p>在测试呢~去看看别的</p><p>🎉</p>',
      extensions: [
        StarterKit,
        CustomBulletList,
      ],
    })

    return { editor }
  },
  methods: {
    getJsonString() {
      const json = this.editor?.getJSON()
      console.log(json)
    },
  }
})
</script>
<style lang="stylus" scoped>
.editor
  min-height 500px
</style>