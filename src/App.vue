<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <tiptap-editor v-bind="options" @update="onUpdate"/>
  </div>
</template>

<script>
import TiptapEditor from './components/TiptapEditor'
import { RecommendedExtensions } from './extensions'

export default {
  name: 'App',
  components: {
    TiptapEditor
  },
  data () {
    return {
      options: {
        content: '',
        editable: true,
        // fileSelectorUrl: 'moderator/webinarImages/images',
        // fileUploadUrl: 'moderator/webinarImages/store',
        extensions: [
          ...RecommendedExtensions,
        ],
        toolbar: [
          'bold',
          'italic',
          'underline',
          'font-family',
          'strike',
          'code',
          'heading',
          'fore-color',
          'back-color',
          'format_clear',
          'align-dropdown',
          'indent',
          'outdent',
          'line-height',
          'horizontal',
          'bullet_list',
          'ordered_list',
          'blockquote',
          'link',
          'undo',
          'redo',
          'print',
          'photo',
          'table',
        ]
      },
      json: '',
      html: ''
    }
  },
  methods: {
    onUpdate ({ getJSON, getHTML }) {
      this.json = getJSON()
      this.html = getHTML()
      console.log('html', this.html)
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
