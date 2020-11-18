<template>
  <div>
    <app-dropdown class="o-align-dropdown">
      <template slot="toggler">
        <button class="o-menubar-btn button">
          <span class="btn-content">
            <i class="material-icons editor-icon">format_align_center</i>
          </span>
        </button>
      </template>
      <app-dropdown-content class="dropdown-content">
        <app-dropdown-item v-for="(item, index) in alignments"
                           :key="index"
                           :class="{ 'is-active': isActive(item.value) }"
                           @click.native="item.command({ textAlign: item.value })">
          <span class="btn-content">
            <i class="material-icons editor-icon">{{ `format_align_${item.value}` }}</i> {{ item.label }}
          </span>
        </app-dropdown-item>
      </app-dropdown-content>
    </app-dropdown>

<!--    <q-btn-dropdown icon="format_align_center" menu-anchor="bottom left" menu-self="top left" class="o-align-dropdown"-->
<!--                    content-class="o-menu o-align-dropdown-menu" dense flat>-->
<!--      <q-list>-->
<!--        <q-item v-for="(item, index) in alignments" :key="index"-->
<!--                :class="{ 'is-active': isActive(item.value) }"-->
<!--                @click.native="item.command({ textAlign: item.value })" clickable v-close-popup>-->
<!--          <q-item-section side>-->
<!--            <q-icon :name="`format_align_${item.value}`"/>-->
<!--          </q-item-section>-->
<!--          <q-item-section>{{ item.label }}</q-item-section>-->
<!--          <q-item-section side>-->
<!--            <q-icon name="mdi-check" class="checked"/>-->
<!--          </q-item-section>-->
<!--        </q-item>-->
<!--      </q-list>-->
<!--    </q-btn-dropdown>-->
<!--    <q-tooltip :delay="500">{{ $o.lang.editor.align }}</q-tooltip>-->
  </div>
</template>

<script>
import { isNodeActive } from '@/utils/node'

export default {
  name: 'o-align-dropdown',
  data () {
    return {}
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
    isActive (alignment) {
      return isNodeActive(this.editor.state, 'textAlign', alignment)
    }
  },
  computed: {
    alignments () {
      return [
        { label: 'Left', value: 'left', command: this.commands.alignment },
        { label: 'Center', value: 'center', command: this.commands.alignment },
        { label: 'Right', value: 'right', command: this.commands.alignment },
        { label: 'Justify', value: 'justify', command: this.commands.alignment },
      ]
    }
  }
}
</script>

<style lang="scss">
.o-align-dropdown {
  padding: 0;
}

</style>
