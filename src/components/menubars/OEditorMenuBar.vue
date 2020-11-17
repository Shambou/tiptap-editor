<template>
  <editor-menu-bar :editor="editor" v-slot="editorContext">
    <section class="row col-12 justify-between items-center bg-light tiptap-menubar">

      <!-- Toolbar: left -->
      <section class="row q-px-xs menubar is-hidden" :class="{ 'is-focused': editorContext.focused }">
        <!-- Table -->
        <template v-if="editorContext.isActive.table && editorContext.isActive.table()">
          <template v-for="(item, index) of tableToolbar">

            <hr role="separator" :key="index" aria-orientation="vertical" class="separator separator-vertical separator-vertical-inset" v-if="item==='separator'">

            <component :key="index"
                       :name="item"
                       :is="getName(item)"
                       :editor="editor"
                       v-bind="editorContext"
                       v-else-if="typeof item === 'string'" />
            <component :key="index"
                       :name="item.name"
                       :is="getName(item.name)"
                       :opt="item.options"
                       :editor="editor"
                       v-bind="editorContext"
                       v-else-if="typeof item === 'object' && item.type === 'menu'" />
            <component :key="index"
                       :is="item"
                       :editor="editor"
                       v-bind="editorContext"
                       v-else />
            <o-table-group v-bind="editorContext" :key="`table-${index}`" v-if="item==='table'" />
          </template>
        </template>

        <!-- Normal -->
        <template v-else>
          <template v-for="(item, index) of toolbar">
            <hr role="separator" :key="index" aria-orientation="vertical" class="separator separator-vertical separator-vertical-inset" v-if="item==='separator'">
            <component :key="index"
                       :name="item"
                       :is="getName(item)"
                       :editor="editor"
                       v-bind="editorContext"
                       v-else-if="typeof item === 'string'" />
            <component :key="index"
                       :name="item.name"
                       :is="getName(item.name)"
                       :opt="item.options"
                       :editor="editor"
                       v-bind="editorContext"
                       v-else-if="typeof item === 'object' && item.type === 'menu'" />
            <component :key="index"
                       :is="item"
                       :editor="editor"
                       v-bind="editorContext"
                       v-else />
          </template>
        </template>

        <!-- Extra -->
        <slot name="left" />
      </section>

      <!-- Toolbar: right -->
      <section class="row q-px-xs">
        <slot name="right" />
      </section>
    </section>
  </editor-menu-bar>
</template>

<script>
import { EditorMenuBar } from 'tiptap'
import { CommandComponents, TableToolbar } from '@/data/editor'

import OForeColorDropdown from '@/components/buttons/OForeColorDropdown'
import OBackColorDropdown from '@/components/buttons/OBackColorDropdown'
import OFontFamilyDropdown from '@/components/buttons/OFontFamilyDropdown'
import OAlignDropdown from '@/components/buttons/OAlignDropdown'
import OAlignGroup from '@/components/buttons/OAlignGroup'
import OLineHeightDropdown from '@/components/buttons/OLineHeightDropdown'
import OHeadingDropdown from '@/components/buttons/OHeadingDropdown'
import OHeadingList from '@/components/buttons/OHeadingList'
import OListDropdown from '@/components/buttons/OListDropdown'
import OIndentDropdown from '@/components/buttons/OIndentDropdown'
import OTextFormatDropdown from '@/components/buttons/OTextFormatDropdown'

import OPhotoBtn from '@/components/buttons/OPhotoBtn'
import OLinkBtn from '@/components/buttons/OLinkBtn'
import OTableBtn from '@/components/buttons/OTableBtn'
import OTableGroup from '@/components/buttons/OTableGroup'

import OMenubarBtn from '@/components/buttons/OMenubarBtn'
import OSimpleCommandBtn from '@/components/buttons/OSimpleCommandBtn'
import OMetaInput from '@/components/common/OMetaInput'

export default {
  name: 'o-editor-menu-bar',
  data () {
    return {
      tableToolbar: TableToolbar,
      pageView: 'page',
      isSlideShow: false
    }
  },
  props: {
    editor: {
      type: Object
    },
    toolbar: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: {
    EditorMenuBar,
    OMenubarBtn,
    OSimpleCommandBtn,
    OMetaInput,
    OForeColorDropdown,
    OBackColorDropdown,
    OFontFamilyDropdown,
    OAlignDropdown,
    OAlignGroup,
    OLineHeightDropdown,
    OHeadingDropdown,
    OHeadingList,
    OListDropdown,
    OIndentDropdown,
    OTextFormatDropdown,
    OPhotoBtn,
    OLinkBtn,
    OTableBtn,
    OTableGroup
  },
  methods: {
    getName (item) {
      return CommandComponents[item] || 'o-simple-command-btn'
    },
    showSidePanel () {},
    onSlideShow () {}
  },
  mounted () {
  },
  deactivated () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="scss">
</style>
