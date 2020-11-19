<template>
  <section class="o-align-group">
    <o-menubar-btn v-for="(item, index) in alignments" :key="index"
                   :icon="`format_align_${item.value}`"
                   :tooltip="item.label"
                   :class="{ 'is-active': isActive(item.value) }"
                   @click.native="item.command({ textAlign: item.value })" />
  </section>
</template>

<script>
import OMenubarBtn from './OMenubarBtn'
import { isNodeActive } from '../../utils/node'
export default {
  name: 'o-align-group',
  data () {
    return {
    }
  },
  props: {
    editor: {
      type: Object
    },
    commands: {
      type: Object
    }
  },
  components: {
    OMenubarBtn
  },
  methods: {
    isActive (alignment) {
      return isNodeActive(this.editor.state, 'textAlign', alignment)
    }
  },
  computed: {
    alignments () {
      return [
        { label: 'Left', value: 'left', command: this.commands.alignment },
        { label: 'Center', value: 'center', command: this.commands.alignment },
        { label: 'Right', value: 'right', command: this.commands.alignment },
      ]
    }
  }
}
</script>

<style lang="scss">
  .o-align-group {
  }
</style>
