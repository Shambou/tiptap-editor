<template>
  <div @click="toggle" v-on-clickaway="away">
    <slot name="toggler">

    </slot>
    <slot/>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  name: 'app-dropdown',
  mixins: [clickaway],
  props: ['persistent'],
  provide () {
    return {
      sharedState: this.sharedState
    }
  },
  data () {
    return {
      sharedState: {
        active: false
      }
    }
  },
  methods: {
    toggle () {
      if (!this.persistent || !this.sharedState.active) {
        this.sharedState.active = !this.sharedState.active
      }

      if (this.sharedState.active) {
        this.$emit('show')
      }
    },
    away () {
      this.sharedState.active = false
    }
  }
}
</script>
