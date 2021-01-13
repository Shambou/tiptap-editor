<template>
  <section class="tiptap tiptap-editor">
    <!-- Main Toolbar -->
    <o-editor-menu-bar :editor="editor" :toolbar="editorMenuBar" v-if="showToolbar">
      <template slot="left">
        <slot name="toolbar-left" />
      </template>
      <template slot="right">
        <slot name="toolbar-right" />
      </template>
    </o-editor-menu-bar>
    <div>
      <editor-content class="editor__content" :editor="editor" />
      <slot name="footer"></slot>
    </div>
  </section>
</template>

<script>
import { Editor, EditorContent } from 'tiptap'
import {
  BulletList,
  CodeBlock,
  CodeBlockHighlight,
  HardBreak,
  ListItem,
  OrderedList,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  Placeholder,
  Focus,
  HorizontalRule,
  TrailingNode
  // Image
} from 'tiptap-extensions'

import java from 'highlight.js/lib/languages/java'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'

import {
  // OTitle,
  // ODoc,
  OParagraph,
  OBlockquote,
  OAlign,
  OAlignment,
  OIndent,
  OLineHeight,
  OBackColor,
  OForeColor,
  OFontFamily,
  OHeading,
  OIframe,
  OFormatClear,
  OPrint,
  OImage,
  OEmbed,
  OTodoItem,
  RecommendedExtensions
} from '../extensions'

import DynamicClass from '../extensions/dynamic'
import 'material-design-icons/iconfont/material-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import OEditorMenuBar from './menubars/OEditorMenuBar'
import OEditorMenuBubble from './menubars/OEditorMenuBubble'

import { DefaultToolbar, DefaultBubble } from '../data/editor'
import Vue from 'vue'
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)
export default {
  name: 'tiptap-editor',
  data () {
    return {
      editor: null,
      selectedCellSize: 0
    }
  },
  props: {
    content: {
      type: [String, Object],
      default: ''
    },
    fileSelectorUrl: {
      type: [String, Boolean],
      default: false
    },
    fileUploadUrl: {
      type: [String, Boolean],
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    showToolbar: {
      type: Boolean,
      default: true
    },
    showBubble: {
      type: Boolean,
      default: true
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    editorProps: {
      type: Object,
      default: function () {
        return {
        }
      }
    },
    extensions: {
      type: Array,
      default: function () {
        return []
      }
    },
    toolbar: {
      type: Array,
      default: function () {
        return []
      }
    },
    bubble: {
      type: Array,
      default: function () {
        return []
      }
    },
    pageView: {
      type: String,
      default: 'page'
    },
    options: {
      type: Object,
      default: function () {
        return {
        }
      }
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  components: {
    EditorContent,
    OEditorMenuBar,
    OEditorMenuBubble,
  },
  computed: {
    editorMenuBar () {
      return this.toolbar.length > 0 ? this.toolbar : DefaultToolbar
    },
    editorMenuBubble () {
      return this.bubble.length > 0 ? this.bubble : DefaultBubble
    }
  },
  methods: {
    initEditor () {
      const customExtensions = this.generateExtensions()

      const extensions = [
        // custom
        ...customExtensions,

        // required
        new HardBreak(),
        new History(),
        new Focus({
          className: 'has-focus',
          nested: true
        }),
        new TrailingNode({
          node: 'paragraph',
          notAfter: ['paragraph']
        }),
        new OAlign(),
        new Placeholder({
          emptyEditorClass: 'is-editor-empty',
          emptyNodeClass: 'is-empty',
          emptyNodeText: this.placeholder,
          showOnlyWhenEditable: true,
          showOnlyCurrent: true,
        }),
      ]

      this.editor = new Editor({
        fileSelectorUrl: this.fileSelectorUrl,
        fileUploadUrl: this.fileUploadUrl,
        editorProps: this.editorProps,
        extensions: extensions,
        autoFocus: true,
        editable: this.editable,
        content: this.getContent(),
        onInit: ({ state, view }) => {
          this.$emit('init', { state, view })
        },
        onFocus: ({ event, state, view }) => {
          this.$emit('focus', { event, state, view })
        },
        onBlur: ({ event, state, view }) => {
          this.$emit('blur', { event, state, view })
        },
        onUpdate: ({ getJSON, getHTML, state, transaction }) => {
          this.$emit('input', getHTML())
          this.$emit('update', { getJSON, getHTML, state, transaction })
        },
        onTransaction: ({ getJSON, getHTML, state, transaction }) => {
          const selectedCellElements = this.editor.view.dom.querySelectorAll('.selectedCell')
          this.selectedCellSize = selectedCellElements.length

          this.$emit('transaction', { getJSON, getHTML, state, transaction })
        }
      })
    },
    generateExtensions () {
      let extensions = []
      let localExtensions = this.extensions

      if (!this.extensions.length) {
        localExtensions = [...RecommendedExtensions]
      }

      for (let extension of localExtensions) {
        if (typeof extension === 'string') {
          if (!RecommendedExtensions.includes(extension)) {
            continue
          }

          switch (extension) {
            // tiptop
            case 'CodeBlockHighlight':
              extension = new CodeBlockHighlight({
                languages: { java, javascript, css }
              })
              break
            case 'Table':
              extension = new Table({
                resizable: true
              })
              extensions.push(extension)
              extensions.push(new TableHeader())
              extensions.push(new TableCell())
              extensions.push(new TableRow())
              continue

            case 'OTodoItem':
              extension = new OTodoItem({ nested: true })
              break
            case 'OHeading':
              extension = new OHeading({ levels: [1, 2, 3, 4, 5] })
              break
            default:
              try {
                extension = new DynamicClass(extension)
              } catch (e) {
                console.error(e.message, extension)
              }
              break
          }
        }
        extensions.push(extension)
      }

      return extensions
    },
    // content
    getContent () {
      let content = this.value
      if (content && content.type) {
        return content // parsed json
      }
      if (typeof content === 'string') {
        try {
          return JSON.parse(content) // json
        } catch (e) {
          return content // html
        }
      }
    },
    setContent () {
      this.editor.setContent(this.getContent(), true)

      // Focus
      this.editor.focus()
    },
    cleanContent () {
      this.editor.clearContent(false)
      this.editor.focus()
    },
    onScroll (scroll) {
      this.$emit('scroll', scroll)
    },
    showSidePanel () {},
    onSlideShow () {}
  },
  watch: {
    editable (to, from) {
      this.editor.options.editable = to
    },
    content (to, from) {
      this.setContent()
    },
    value (newVal, oldVal) {
      if (oldVal.length === 0) {
        this.editor.setContent(newVal, true)
      }
    }
  },
  mounted: function () {
    this.initEditor()
  },
  deactivated () {
  },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>

<style lang="scss">
  @import "../css/tiptap.scss";
  //@import '~material-design-icons';
  //@import '~@mdi';
</style>
