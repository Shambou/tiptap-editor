<template>
  <app-dropdown-content>
    <app-dropdown-item @click.native="commands.paragraph" >
      <span>Paragraph</span>
    </app-dropdown-item>
    <app-dropdown-item v-for="(item, index) in headings"
                       :key="index"
                       :class="{ 'is-active': isActive(item.value) }"
                       @click.native="commands.heading({ level: item.value })">
      <span>{{ `H${item.value}` }} {{ item.label }}</span>
    </app-dropdown-item>
  </app-dropdown-content>

  <!--  <q-list class="o-heading-list">-->
  <!--    <q-item clickable v-close-popup @click.native="commands.paragraph">-->
  <!--      <q-item-section side><q-icon name="mdi-format-pilcrow" /></q-item-section>-->
  <!--      <q-item-section>{{$o.lang.editor.paragraph}}</q-item-section>-->
  <!--    </q-item>-->
  <!--    <q-separator />-->
  <!--    <q-item v-for="(item, index) in headings" :key="index"-->
  <!--            :class="{ 'is-active': isActive(item.value) }"-->
  <!--            @click.native="commands.heading({ level: item.value })" clickable v-close-popup>-->
  <!--      <q-item-section side>{{`H${item.value}`}}</q-item-section>-->
  <!--      <q-item-section>{{item.label}}</q-item-section>-->
  <!--      <q-item-section side>-->
  <!--        <q-icon name="mdi-check" class="checked" />-->
  <!--      </q-item-section>-->
  <!--    </q-item>-->
  <!--  </q-list>-->
</template>

<script>
import { isNodeActive } from '@/utils/node'

export default {
  name: 'o-heading-list',
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
    isActive (level) {
      return isNodeActive(this.editor.state, 'level', level)
    }
  },
  computed: {
    headings () {
      return [
        { label: 'Heading1', value: 1 },
        { label: 'Heading2', value: 2 },
        { label: 'Heading3', value: 3 },
        { label: 'Heading4', value: 4 },
        { label: 'Heading5', value: 5 },
      ]
    }
  }
}
</script>

<style lang="scss">
.o-heading-list {
}
</style>
