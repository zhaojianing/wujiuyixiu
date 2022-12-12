<template>
  <div class="editor" v-if="editor">
    <menu-bar class="editor__header" :editor="editor" />
    <editor-content class="editor__content" :editor="editor" />
    <div class="editor__footer">
      <div :class="`editor__status editor__status--${status}`">
        <template v-if="status === 'connected'">
          {{ editor.storage.collaborationCursor.users.length }} user{{ editor.storage.collaborationCursor.users.length
              === 1 ? '' : 's'
          }} online in {{ room }}
        </template>
        <template v-else>
          offline
        </template>
      </div>
      <!-- <div class="editor__name">
        <button @click="setName">
          {{ currentUser.name }}
        </button>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useEditor, EditorContent, Editor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

// import { HocuspocusProvider } from '@hocuspocus/provider'
// import CharacterCount from '@tiptap/extension-character-count'
// import Collaboration from '@tiptap/extension-collaboration'
// import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
// import Highlight from '@tiptap/extension-highlight'
// import TaskItem from '@tiptap/extension-task-item'
// import TaskList from '@tiptap/extension-task-list'
// import StarterKit from '@tiptap/starter-kit'
// import { Editor, EditorContent } from '@tiptap/vue-3'
// import * as Y from 'yjs'

import MenuBar from './MenuBar.vue'

// const getRandomElement = list => {
//   return list[Math.floor(Math.random() * list.length)]
// }

// const getRandomRoom = () => {
//   return getRandomElement([
//     'rooms.50',
//     'rooms.51',
//     'rooms.52',
//   ])
// }

export default defineComponent({
  name: "JieGuaJiLu",
  components: {
    EditorContent,
    MenuBar
  },

  setup() {
    const editor = new Editor({
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
      ],
    })

    return { editor }
  },

  data() {
    return {
      // currentUser: JSON.parse(localStorage.getItem('currentUser')) || {
      //   name: this.getRandomName(),
      //   color: this.getRandomColor(),
      // },
      provider: null,
      editor: null,
      status: 'connecting',
      // room: getRandomRoom(),
    }
  },

  mounted() {
    // const ydoc = new Y.Doc()

    // this.provider = new HocuspocusProvider({
    //   url: 'wss://connect.hocuspocus.cloud',
    //   parameters: {
    //     key: 'write_bqgvQ3Zwl34V4Nxt43zR',
    //   },
    //   name: this.room,
    //   document: ydoc,
    // })

    // this.provider.on('status', event => {
    //   this.status = event.status
    // })

    // this.editor = new Editor({
    //   extensions: [
    //     StarterKit.configure({
    //       history: false,
    //     }),
    //     Highlight,
    //     TaskList,
    //     TaskItem,
        // Collaboration.configure({
        //   document: ydoc,
        // }),
        // CollaborationCursor.configure({
        //   provider: this.provider,
        //   user: this.currentUser,
        // }),
        // CharacterCount.configure({
        //   limit: 10000,
        // }),
      // ],
    // })

    // localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
  },

  methods: {
    // setName() {
    //   const name = (window.prompt('Name') || '')
    //     .trim()
    //     .substring(0, 32)

    //   if (name) {
    //     return this.updateCurrentUser({
    //       name,
    //     })
    //   }
    // },

    // updateCurrentUser(attributes) {
    //   this.currentUser = { ...this.currentUser, ...attributes }
    //   this.editor.chain().focus().updateUser(this.currentUser).run()

    //   localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    // },

    // getRandomColor() {
    //   return getRandomElement([
    //     '#958DF1',
    //     '#F98181',
    //     '#FBBC88',
    //     '#FAF594',
    //     '#70CFF8',
    //     '#94FADB',
    //     '#B9F18D',
    //   ])
    // },

    // getRandomName() {
    //   return getRandomElement([
    //     'Lea Thompson', 'Cyndi Lauper', 'Tom Cruise', 'Madonna', 'Jerry Hall', 'Joan Collins', 'Winona Ryder', 'Christina Applegate', 'Alyssa Milano', 'Molly Ringwald', 'Ally Sheedy', 'Debbie Harry', 'Olivia Newton-John', 'Elton John', 'Michael J. Fox', 'Axl Rose', 'Emilio Estevez', 'Ralph Macchio', 'Rob Lowe', 'Jennifer Grey', 'Mickey Rourke', 'John Cusack', 'Matthew Broderick', 'Justine Bateman', 'Lisa Bonet',
    //   ])
    // },
  },

  beforeUnmount() {
    // this.editor.destroy()
    // this.provider.destroy()
  },
})
</script>
<style lang="stylus" scoped>
</style>