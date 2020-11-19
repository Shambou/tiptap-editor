<template>
  <div>
    <app-dropdown class="o-heading-dropdown o-dropdown">
      <template slot="toggler">
        <button class="o-menubar-btn button">
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
import OHeadingList from '@/components/buttons/OHeadingList'
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
    }
  },
  components: {
    OHeadingList
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="scss">
  .o-heading-dropdown {
    padding: 0;

  }
</style>
