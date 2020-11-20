<template>
  <o-menubar-btn :icon="config.icon"
                 v-tooltip="`${config.tooltip}`"
                 :class="{ 'is-active': config.isActive }"
                 @click.native.prevent="config.command" />
</template>

<script>
import OMenubarBtn from './OMenubarBtn'

export default {
  name: 'o-simple-command-btn',
  data () {
    return {
    }
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    commands: {
      type: Object
    },
    isActive: {
      type: Object
    }
  },
  components: {
    OMenubarBtn
  },
  methods: {
    command () {
      if (this.name === 'table') {
        this.config.command()
      } else {
        this.config.command()
      }
    }
  },
  computed: {
    configs () {
      return {
        bold: { icon: 'format_bold', tooltip: 'Bold', isActive: this.isActive.bold(), command: this.commands.bold },
        italic: { icon: 'format_italic', tooltip: 'Italic', isActive: this.isActive.italic(), command: this.commands.italic },
        strike: { icon: 'format_strikethrough', tooltip: 'Strikethrough', isActive: this.isActive.strike(), command: this.commands.strike },
        underline: { icon: 'format_underline', tooltip: 'Underline', isActive: this.isActive.underline(), command: this.commands.underline },
        code: { icon: 'code', tooltip: 'Code', isActive: this.isActive.code(), command: this.commands.code },
        code_block: { icon: 'developer_mode', tooltip: 'CodeBlock', isActive: this.isActive.code_block(), command: this.commands.code_block },
        horizontal: { icon: 'remove', tooltip: 'Hr', isActive: false, command: this.commands.horizontal_rule },
        bullet_list: { icon: 'format_list_bulleted', tooltip: 'Unordered List', isActive: this.isActive.bullet_list(), command: this.commands.bullet_list },
        ordered_list: { icon: 'format_list_numbered', tooltip: 'Ordered List', isActive: this.isActive.ordered_list(), command: this.commands.ordered_list },
        todo_list: { icon: 'mdi-check-box-outline', tooltip: 'Todo List', isActive: this.isActive.todo_list(), command: this.commands.todo_list },
        blockquote: { icon: 'format_quote', tooltip: 'Blockquote', isActive: this.isActive.blockquote(), command: this.commands.blockquote },
        table: { icon: 'mdi-table', tooltip: 'Table', isActive: false, command: this.commands.createTable },
        undo: { icon: 'undo', tooltip: 'Undo', isActive: false, command: this.commands.undo },
        redo: { icon: 'redo', tooltip: 'Redo', isActive: false, command: this.commands.redo },
        indent: { icon: 'format_indent_increase', tooltip: 'Indent', isActive: false, command: this.commands.indent },
        outdent: { icon: 'format_indent_decrease', tooltip: 'Outdent', isActive: false, command: this.commands.outdent },
        format_clear: { icon: 'format_clear', tooltip: 'Remove Format', isActive: false, command: this.commands.formatClear },
        print: { icon: 'print', tooltip: 'Print', isActive: false, command: this.commands.print },
      }
    },
    config () {
      let config = {
        icon: '',
        isActive: false,
        command: function () {
        }
      }
      config = this.configs[this.name] || config
      return config
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss">
  .o-simple-command-btn {
  }
</style>
