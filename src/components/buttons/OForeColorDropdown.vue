<template>
  <div>
    <app-dropdown class="o-fore-color-dropdown o-dropdown">
      <template slot="toggler">
        <button class="o-menubar-btn button">
          <span class="btn-content">
            <i class="material-icons editor-icon">format_paint</i>
          </span>
        </button>
      </template>

      <div class="indicator" v-if="hex" :style="`background: ${hex}`"></div>

      <o-color-board :active-color="activeColor" @select="onSelect"/>
    </app-dropdown>
  </div>
</template>

<script>
import OColorBoard from '../common/OColorBoard'
import { findActiveMarkAttribute } from '../../utils/mark'
import { AppDropdown } from '../index'
export default {
  name: 'o-fore-color-dropdown',
  data () {
    return {
      hex: false,
      closable: false
    }
  },
  props: {
    editor: {
      type: Object
    },
    commands: {
      type: Object
    },
    getMarkAttrs: {
      type: Function
    }
  },
  components: {
    OColorBoard,
    AppDropdown
  },
  methods: {
    onSelectCurrent () {
      this.onSelect(this.hex)
    },
    onSelect (color) {
      this.closable = true
      this.hex = color
      this.commands.foreColor({ foreColor: color })
    }
  },
  computed: {
    activeColor () {
      let active = findActiveMarkAttribute(this.editor.state, 'foreColor')
      return active
    }
  }
}
</script>

<style lang="scss">
.o-fore-color-dropdown {
  .indicator {
    width: 14px;
    height: 3px;
    margin-top: -3px;
  }
}
.o-fore-color-menu {
  .q-color-picker {
    min-width: 250px;
  }
}
</style>
