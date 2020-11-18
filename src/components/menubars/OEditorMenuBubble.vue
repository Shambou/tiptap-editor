<template>
  <editor-menu-bubble :editor="editor" v-slot="editorContext">
    <section class="tiptap-menububble"
             :class="{ 'is-active': editorContext.menu.isActive &&
                                    selectedCellSize === 0 &&
                                    !(editorContext.isActive.image && editorContext.isActive.image()) &&
                                    !(editorContext.isActive.embed && editorContext.isActive.embed()) }"
             :style="`left: ${editorContext.menu.left}px; bottom: ${editorContext.menu.bottom + 8}px;`">
      <template v-for="(item, index) of toolbar">
        <hr role="separator" :key="index" aria-orientation="vertical" class="separator separator-vertical separator-vertical-inset" v-if="item==='separator'">

        <component :key="index"
                   :name="item"
                   :is="getName(item)"
                   :editor="editor"
                   v-bind="editorContext"
                   v-else-if="typeof item === 'string'" />
        <component :key="index"
                   :is="item"
                   :editor="editor"
                   v-bind="editorContext"
                   v-else />
      </template>
    </section>
  </editor-menu-bubble>
</template>

<script>
import { EditorMenuBubble } from 'tiptap'
import { CommandComponents } from '@/data/editor'

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

import OLinkBtn from '@/components/buttons/OLinkBtn'
import OPhotoBtn from '@/components/buttons/OPhotoBtn'
import OTableBtn from '@/components/buttons/OTableBtn'
import OTableGroup from '@/components/buttons/OTableGroup'

import OMenubarBtn from '@/components/buttons/OMenubarBtn'
import OSimpleCommandBtn from '@/components/buttons/OSimpleCommandBtn'
import OMetaInput from '@/components/common/OMetaInput'

export default {
  name: 'o-editor-menu-bubble',
  data () {
    return {
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
    },
    selectedCellSize: {
      type: Number,
      default: 0
    },
    imgSelected: {
      type: Boolean,
      default: false
    }
  },
  components: {
    EditorMenuBubble,
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
    OLinkBtn,
    OPhotoBtn,
    OTableBtn,
    OTableGroup
  },
  methods: {
    getName (item) {
      return CommandComponents[item] || 'o-simple-command-btn'
    },
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
