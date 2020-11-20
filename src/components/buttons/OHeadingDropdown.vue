<template>
  <div>
    <app-dropdown class="o-heading-dropdown o-dropdown" v-tooltip="'Heading'">
      <template slot="toggler">
        <button class="o-menubar-btn button" :class="{ 'is-active': active }">
          <span class="btn-content">
            <i class="material-icons editor-icon">title</i>
          </span>
        </button>
      </template>

      <o-heading-list :editor="editor" :commands="commands" />
    </app-dropdown>
  </div>
</template>

<script>
import OHeadingList from './OHeadingList'
import { AppDropdown } from '../index'
export default {
  name: 'o-heading-dropdown',
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
    },
    isActive: {
      type: Object
    }
  },
  components: {
    OHeadingList,
    AppDropdown
  },
  methods: {
  },
  computed: {
    active () {
      return this.isActive.heading()
    }
  }
}
</script>

<style lang="scss">
  .o-heading-dropdown {
    padding: 0;

  }
</style>
