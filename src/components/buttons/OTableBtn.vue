<template>
  <o-menubar-btn icon="table" tooltip="insert" class="o-table-btn">
    <app-dropdown ref="tablePopover" @hide="onHide" class="o-menu o-table-btn-menu">
      <o-table-grid :commands="commands" />
    </app-dropdown>

<!--    <q-menu ref="tablePopover" anchor="bottom middle" self="top middle" content-class="o-menu o-table-btn-menu" @hide="onHide">-->
<!--      <o-table-grid :commands="commands" />-->
<!--    </q-menu>-->
  </o-menubar-btn>
</template>

<script>
import OMenubarBtn from '@/components/buttons/OMenubarBtn'
import OTableGrid from '@/components/common/OTableGrid'
export default {
  name: 'o-table-btn',
  data () {
    return {
      rows: 5,
      columns: 5,
      selectedRows: 2,
      selectedColumns: 2
    }
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
    OMenubarBtn,
    OTableGrid
  },
  methods: {
    onHide () {
      this.rows = 5
      this.columns = 5
      this.selectedRows = 2
      this.selectedColumns = 2
    },
    select (row, col) {
      this.selectedRows = row
      this.selectedColumns = col

      if (this.rows === row && this.rows < 10) {
        this.rows += 1
      }
      if (this.columns === col && this.columns < 10) {
        this.columns += 1
      }
    },
    onSelected () {
      this.commands.createTable({ rowsCount: this.selectedRows, colsCount: this.selectedColumns, withHeaderRow: true })
    }
  },
  computed: {
  }
}
</script>

<style lang="scss">
.o-table-btn-menu {
  .grid {
    padding: 1rem;
    .cell {
      height: 20px;
      width: 20px;
      margin: 4px;
      border: solid 1px #ccc;
      border-radius: 2px;
    }
    .cell.selected {
      border: solid 1px #1976d2;
      background: rgba(25,118,210,0.2);
    }
  }
}

</style>
