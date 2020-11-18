<template>
  <div>
    <app-dropdown class="o-line-height-dropdown">
      <template slot="toggler">
        <button class="o-menubar-btn button">
          <span class="btn-content">
            <i class="material-icons editor-icon">format_line_spacing</i>
          </span>
        </button>
      </template>
      <app-dropdown-content class="dropdown-content">
        <app-dropdown-item v-for="(item, index) of types"
                           :key="index"
                           :class="{ 'is-active': isActive(item.value) }"
                           @click.native="commands.lineHeight({lineHeight: item.value})">
          <span class="btn-content">
            {{ item.label }}
          </span>
        </app-dropdown-item>
      </app-dropdown-content>
    </app-dropdown>

<!--    <q-btn-dropdown icon="mdi-format-line-spacing" menu-anchor="bottom left" menu-self="top left" class="o-line-height-dropdown" content-class="o-menu o-line-height-dropdown-menu" dense flat>-->
<!--      <q-list>-->
<!--        <template v-for="(item, index) of types">-->
<!--          <q-separator :key="`s-${index}`" v-if="item.separator" />-->
<!--          <q-item :class="{ 'is-active': isActive(item.value) }" :key="index" clickable v-close-popup-->
<!--                  @click.native="commands.lineHeight({lineHeight: item.value})">-->
<!--            <q-item-section>{{item.label}}</q-item-section>-->
<!--            <q-item-section side>-->
<!--              <q-icon name="mdi-check" class="checked" />-->
<!--            </q-item-section>-->
<!--          </q-item>-->
<!--        </template>-->
<!--      </q-list>-->
<!--    </q-btn-dropdown>-->
<!--    <q-tooltip :delay="500">{{$o.lang.editor.lineHeight}}</q-tooltip>-->
  </div>
</template>

<script>
import { isNodeActive } from '@/utils/node'
export default {
  name: 'o-line-height-dropdown',
  data () {
    return {
      types: [
        { label: 'Default', value: '0' },
        { label: '1', value: '1', separator: true },
        { label: '1.15', value: '1.15' },
        { label: '1.5', value: '1.5' },
        { label: '2', value: '2' },
        { label: '2.5', value: '2.5' },
        { label: '3', value: '3' },
      ]
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
  methods: {
    isActive (lineHeight) {
      return isNodeActive(this.editor.state, 'lineHeight', lineHeight)
    }
  },
  computed: {
  }
}
</script>

<style lang="scss">
  .o-line-height-dropdown {

    .q-btn-dropdown__arrow {
      margin-left: 0;
    }
  }
</style>
