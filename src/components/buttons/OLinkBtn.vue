<template>
  <o-menubar-btn icon="link" class="o-link-btn">
    <app-dropdown ref="linkPopover" @show="onShow">
      <o-meta-input :val="href" title="Hyperlink" icon="link"
                    @primaryAction="insertLink(commands.link, $event)">
      </o-meta-input>
    </app-dropdown>
  </o-menubar-btn>
</template>

<script>
import OMenubarBtn from '@/components/buttons/OMenubarBtn'
import OMetaInput from '@/components/common/OMetaInput'

export default {
  name: 'o-link-btn',
  data () {
    return {
      href: ''
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
    OMetaInput
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
