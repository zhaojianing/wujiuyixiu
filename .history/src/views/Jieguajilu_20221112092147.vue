<template>
    <editor-content :editor="editor" />
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default defineComponent({
    name: "JieGuaJiLu",
    components: {
    EditorContent,
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