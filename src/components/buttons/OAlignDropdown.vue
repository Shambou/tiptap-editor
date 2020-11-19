<template>
  <div>
    <app-dropdown class="o-align-dropdown o-dropdown">
      <template slot="toggler">
        <button class="o-menubar-btn button">
          <span class="btn-content">
            <i class="material-icons editor-icon">format_align_center</i>
          </span>
        </button>
      </template>
      <app-dropdown-content class="dropdown-content">
        <app-dropdown-item v-for="(item, index) in alignments"
                           :key="index"
                           :class="{ 'is-active': isActive(item.value) }"
                           @click.native="item.command({ textAlign: item.value })">
          <span class="btn-content">
            <i class="material-icons editor-icon">{{ `format_align_${item.value}` }}</i> {{ item.label }}
          </span>
        </app-dropdown-item>
      </app-dropdown-content>
    </app-dropdown>
  </div>
</template>

<script>
import { isNodeActive } from '../../utils/node'
import { AppDropdown, AppDropdownContent, AppDropdownItem } from '../index'

export default {
  name: 'o-align-dropdown',
  components: { AppDropdown, AppDropdownContent, AppDropdownItem },
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
        { label: 'Justify', value: 'justify', command: this.commands.alignment },
      ]
    }
  }
}
</script>

<style lang="scss">
.o-align-dropdown {
  padding: 0;
}

</style>
