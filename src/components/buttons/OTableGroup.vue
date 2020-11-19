<template>
  <section class="tiptap-row o-table-group">
    <o-menubar-btn mdi-icon="mdi-table-remove"
                   tooltip="Remove"
                   @click.native="commands.deleteTable"/>

    <o-menubar-btn mdi-icon="mdi-table-column-plus-before"
                   tooltip="insertColumnLeft"
                   @click.native="commands.addColumnBefore"/>
    <o-menubar-btn mdi-icon="mdi-table-column-plus-after"
                   tooltip="insertColumnRight"
                   @click.native="commands.addColumnAfter"/>
    <o-menubar-btn mdi-icon="mdi-table-column-remove"
                   tooltip="removeColumns"
                   @click.native="commands.deleteColumn"/>

    <o-menubar-btn mdi-icon="mdi-table-row-plus-before"
                   tooltip="insertRowUp"
                   @click.native="commands.addRowBefore"/>
    <o-menubar-btn mdi-icon="mdi-table-row-plus-after"
                   tooltip="insertRowDown"
                   @click.native="commands.addRowAfter"/>
    <o-menubar-btn mdi-icon="mdi-table-row-remove"
                   tooltip="removeRows"
                   @click.native="commands.deleteRow"/>

    <o-menubar-btn mdi-icon="mdi-table-merge-cells"
                   tooltip="merge"
                   @click.native="commands.toggleCellMerge"/>
  </section>
</template>

<script>
import OMenubarBtn from './OMenubarBtn'

export default {
  name: 'o-table-group',
  data () {
    return {}
  },
  props: {
    commands: {
      type: Object
    },
    isActive: {
      type: Object
    }
  },
  components: {
    OMenubarBtn
  },
  methods: {},
  computed: {}
}
</script>

<style lang="scss">
.o-table-group {
  height: 40px;
}
</style>
