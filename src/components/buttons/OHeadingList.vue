<template>
  <app-dropdown-content class="dropdown-content">
    <app-dropdown-item @click.native="commands.paragraph" >
      <span>Paragraph</span>
    </app-dropdown-item>
    <app-dropdown-item v-for="(item, index) in headings"
                       :key="index"
                       :class="{ 'is-active': isActive(item.value) }"
                       @click.native="commands.heading({ level: item.value })">
      <span>{{ `H${item.value}` }}</span>
    </app-dropdown-item>
  </app-dropdown-content>
</template>

<script>
import { isNodeActive } from '../../utils/node'

export default {
  name: 'o-heading-list',
  data () {
    return {}
  },
  props: {
    editor: {
      type: Object
    },
    commands: {
      type: Object
    }
  },
  methods: {
    isActive (level) {
      return isNodeActive(this.editor.state, 'level', level)
    }
  },
  computed: {
    headings () {
      return [
        { label: 'Heading1', value: 1 },
        { label: 'Heading2', value: 2 },
        { label: 'Heading3', value: 3 },
        { label: 'Heading4', value: 4 },
        { label: 'Heading5', value: 5 },
      ]
    }
  }
}
</script>

<style lang="scss">
.o-heading-list {
}
</style>
