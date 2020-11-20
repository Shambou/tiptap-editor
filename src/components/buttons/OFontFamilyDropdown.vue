<template>
  <div>
    <app-dropdown class="o-font-family o-dropdown" v-tooltip="'Font Family'">
      <template slot="toggler">
        <button class="o-menubar-btn button">
          <span class="btn-content">
            <i class="material-icons editor-icon">text_format</i>
          </span>
        </button>
      </template>
      <app-dropdown-content class="dropdown-content">
        <app-dropdown-item v-for="(item, index) of fontFamilies"
                           :key="index"
                           :class="{ 'is-active': isActive(item.value) }"
                           @click.native="commands.fontFamily({fontFamily: item.value})">
          <span :style="`font-family: ${item.value}`">{{ item.label }}</span>
        </app-dropdown-item>
      </app-dropdown-content>
    </app-dropdown>
  </div>
</template>

<script>
import { findActiveMarkAttribute } from '../../utils/mark'
import { AppDropdown, AppDropdownContent, AppDropdownItem } from '../index'
export default {
  name: 'o-font-family-dropdown',
  components: { AppDropdown, AppDropdownContent, AppDropdownItem },
  data () {
    return {
      fontFamilies: [
        { label: 'default', value: 'inherit' },
        { label: 'Arial', value: 'Arial', separator: true },
        { label: 'Arial Black', value: 'Arial Black' },
        { label: 'Georgia', value: 'Georgia' },
        { label: 'Impact', value: 'Impact' },
        { label: 'Helvetica', value: 'Helvetica' },
        { label: 'Roboto', value: 'Roboto' },
        { label: 'Tahoma', value: 'Tahoma' },
        { label: 'Times New Roman', value: 'Times New Roman' },
        { label: 'Verdana', value: 'Verdana' },
        { label: 'Courier New', value: 'Courier New', separator: true },
        { label: 'Monaco', value: 'Monaco' },
        { label: 'Monospace', value: 'monospace' },
      ]
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
  methods: {
    isActive (value) {
      let active = findActiveMarkAttribute(this.editor.state, 'fontFamily')
      return value === active
    }
  },
  computed: {}
}
</script>

<style lang="scss">
.o-font-family {
  padding: 0px;

  .dropdown-content {
    background: #fff;
    padding: 5px 10px;
    border: 1px solid #ccc;
    position: relative;
    z-index: 1000;
    a {
      display: block;
    }
  }

}
</style>
