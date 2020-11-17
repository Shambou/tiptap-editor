<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <tiptap-editor v-bind="options" @update="onUpdate" />
  </div>
</template>

<script>
import TiptapEditor from './components/TiptapEditor'
import { RecommendedExtensions } from './extentions'

export default {
  name: 'App',
  components: {
    TiptapEditor
  },
  data () {
    return {
      options: {
        content: 'content',
        editable: true,
        extensions: [
          ...RecommendedExtensions,
          // other extensions
          // name string, or custom extension
        ],
        toolbar: [
          // 'add-more',
          // 'separator',
          'bold',
          'italic',
          'underline',
          // other toolbar buttons
          // name string
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
