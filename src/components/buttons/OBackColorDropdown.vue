<template>
  <div>
    <app-dropdown class="o-back-color-dropdown o-dropdown">
      <template slot="toggler">
        <button class="o-menubar-btn button">
          <span class="btn-content">
            <i class="material-icons editor-icon">palette</i>
          </span>
        </button>
      </template>

      <div class="indicator" v-if="hex" :style="`background: ${hex}`"></div>

      <o-color-board :active-color="activeColor" @select="onSelect"/>
    </app-dropdown>
  </div>
</template>

<script>
import OColorBoard from '@/components/common/OColorBoard'
import { findActiveMarkAttribute } from '@/utils/mark'

export default {
  name: 'o-back-color-dropdown',
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
    }
  },
  components: {
    OColorBoard
  },
  methods: {
    onSelectCurrent () {
      this.onSelect(this.hex)
    },
    onSelect (color) {
      this.closable = true
      this.hex = color
      this.commands.backColor({ backColor: color })
    }
  },
  computed: {
    activeColor () {
      let active = findActiveMarkAttribute(this.editor.state, 'backColor')
      return active
    }
  }
}
</script>

<style lang="scss">
.o-back-color-dropdown {
  .indicator {
    width: 14px;
    height: 3px;
    margin-top: -3px;
  }
}

.o-back-color-menu {
  .q-color-picker {
    min-width: 250px;
    max-width: 280px;
  }

  .q-color-picker__palette-rows {
    padding: 8px;
  }

  .q-color-picker__cube {
    margin: 3px;
    width: calc(10% - 6px) !important;
    padding-bottom: calc(10% - 6px) !important;
    border-radius: 2px;

    &:hover {
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }
}

</style>
