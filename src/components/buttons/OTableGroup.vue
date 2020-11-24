<template>
  <section class="tiptap-row o-table-group">
    <o-menubar-btn mdi-icon="mdi-table-remove"
                   v-tooltip="'Remove table'"
                   @click.native.prevent="commands.deleteTable"/>

    <o-menubar-btn mdi-icon="mdi-table-column-plus-before"
                   v-tooltip="'Insert Column Left'"
                   @click.native.prevent="commands.addColumnBefore"/>
    <o-menubar-btn mdi-icon="mdi-table-column-plus-after"
                   v-tooltip="'Insert Column Right'"
                   @click.native.prevent="commands.addColumnAfter"/>
    <o-menubar-btn mdi-icon="mdi-table-column-remove"
                   v-tooltip="'Remove Columns'"
                   @click.native.prevent="commands.deleteColumn"/>

    <o-menubar-btn mdi-icon="mdi-table-row-plus-before"
                   v-tooltip="'Insert Row Up'"
                   @click.native.prevent="commands.addRowBefore"/>
    <o-menubar-btn mdi-icon="mdi-table-row-plus-after"
                   v-tooltip="'Insert Row Down'"
                   @click.native.prevent="commands.addRowAfter"/>
    <o-menubar-btn mdi-icon="mdi-table-row-remove"
                   v-tooltip="'Remove Rows'"
                   @click.native.prevent="commands.deleteRow"/>

    <o-menubar-btn mdi-icon="mdi-table-merge-cells"
                   v-tooltip="'Merge cells'"
                   @click.native.prevent="commands.toggleCellMerge"/>
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
