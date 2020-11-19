<template>
  <app-dropdown class="o-fore-color-dropdown o-dropdown" :persistent="persistent" @show="onShow">
    <template slot="toggler">
      <button class="o-menubar-btn button">
          <span class="btn-content">
            <i class="material-icons editor-icon">link</i>
          </span>
      </button>
    </template>

    <o-meta-input style="width: 350px" :val="href" title="Hyperlink" icon="link" @primaryAction="insertLink(commands.link, $event)">
    </o-meta-input>
  </app-dropdown>
</template>

<script>
import OMenubarBtn from './OMenubarBtn'
import OMetaInput from '../common/OMetaInput'
import { AppDropdown } from '../index'
export default {
  name: 'o-link-btn',
  data () {
    return {
      href: '',
      persistent: true,
    }
  },
  props: {
    commands: {
      type: Object
    },
    isActive: {
      type: Object
    },
    getMarkAttrs: {
      type: Function
    }
  },
  components: {
    OMenubarBtn,
    OMetaInput,
    AppDropdown
  },
  methods: {
    onShow () {
      this.href = ''

      let link = this.getMarkAttrs('link')
      if (link) {
        this.href = link.href
      }
    },
    insertLink (command, href) {
      command({ href })
    }
  },
  computed: {}
}
</script>

<style lang="scss">
.o-photo-btn {
}
</style>
