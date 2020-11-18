<template>
  <div>
    <app-dropdown>
      <template slot="toggler">
        <button class="o-menubar-btn button">
          <span class="btn-content">
            <i class="material-icons editor-icon">text_format</i>
          </span>
        </button>
      </template>
      <app-dropdown-content>
        <app-dropdown-item v-for="(item, index) of fontFamilies"
                           :key="index"
                           :class="{ 'is-active': isActive(item.value) }"
                           @click.native="commands.fontFamily({fontFamily: item.value})">
          <span :style="`font-family: ${item.value}`">{{ item.label }}</span>
        </app-dropdown-item>
      </app-dropdown-content>
    </app-dropdown>

<!--    <q-btn-dropdown icon="mdi-format-font" menu-anchor="bottom left" menu-self="top left" class="o-font-family"-->
<!--                    content-class="o-menu o-align-dropdown-menu" dense flat>-->
<!--      <q-list>-->
<!--        <template v-for="(item, index) of fontFamilies">-->
<!--          <q-separator :key="index" v-if="item.separator"/>-->
<!--          <q-item :key="index"-->
<!--                  :class="{ 'is-active': isActive(item.value) }"-->
<!--                  @click.native="commands.fontFamily({fontFamily: item.value})" clickable v-close-popup v-else>-->
<!--            <q-item-section :style="`font-family: ${item.value}`">{{ item.label }}</q-item-section>-->
<!--            <q-item-section side>-->
<!--              <q-icon name="mdi-check" class="checked"/>-->
<!--            </q-item-section>-->
<!--          </q-item>-->
<!--        </template>-->
<!--      </q-list>-->
<!--    </q-btn-dropdown>-->
  </div>
</template>

<script>
import { findActiveMarkAttribute } from '@/utils/mark'

export default {
  name: 'o-font-family-dropdown',
  data () {
    return {
      fontFamilies: [
        { label: 'default', value: 'Roboto' },
        { label: 'Arial', value: 'Arial', separator: true },
        { label: 'Arial Black', value: 'Arial Black' },
        { label: 'Georgia', value: 'Georgia' },
        { label: 'Impact', value: 'Impact' },
        { label: 'Helvetica', value: 'Helvetica' },
        { label: 'Roboto', value: 'Roboto' },
        { label: 'Tahoma', value: 'Tahoma' },
        { label: 'Times New Roman', value: 'Times New Roman' },
        { label: 'Verdana', value: 'Verdana' },
        { label: 'Courier New', value: 'Courier New', separator: true },
        { label: 'Monaco', value: 'Monaco' },
        { label: 'Monospace', value: 'monospace' },
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
    isActive (value) {
      let active = findActiveMarkAttribute(this.editor.state, 'fontFamily')
      return value === active
    }
  },
  computed: {}
}
</script>

<style lang="scss">
.o-font-family {
  padding: 4px;

  .q-btn-dropdown__arrow {
    margin-left: 0;
  }
}
</style>
