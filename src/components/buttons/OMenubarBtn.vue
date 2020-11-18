<template>
  <button class="o-menubar-btn button"
          :label="label" :to="to">
      <span class="btn-content">
        <i v-if='icon' class="material-icons editor-icon">{{icon}}</i>
      </span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'o-menubar-btn',
  data () {
    return {}
  },
  props: {
    to: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    icon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    tooltip: {
      type: String,
      default: ''
    },
    vtooltip: {
      type: String,
      default: ''
    },
    tipDelay: {
      type: Number,
      default: 500
    }
  },
  methods: {},
  mounted () {},
  computed: {}
}
</script>

<style lang="scss">
.o-menubar-btn {
  padding: 0;
  font-weight: 400;
  min-width: 30px;
  min-height: unset;
}

.o-menubar-btn.is-active {
  background: rgba(255, 255, 255, 0.2);
}
</style>
