<template>
  <app-dropdown ref="photoPopover" class="o-fore-color-dropdown" :persistent="true" >
    <template slot="toggler">
      <button class="o-menubar-btn button">
          <span class="btn-content">
            <i class="material-icons editor-icon">photo</i>
          </span>
      </button>
    </template>

    <o-meta-input title="Photo" icon="image"
                  @primaryAction="insertImage(commands.image, $event)">
    </o-meta-input>
  </app-dropdown>

<!--  <o-menubar-btn icon="photo" class="o-photo-btn">-->
<!--    <app-dropdown ref="photoPopover">-->
<!--      <o-meta-input title="Photo" icon="image"-->
<!--                    @primaryAction="insertImage(commands.image, $event)">-->
<!--      </o-meta-input>-->
<!--    </app-dropdown>-->
<!--  </o-menubar-btn>-->

<!--  <o-menubar-btn icon="photo" :tooltip="$o.lang.editor.photo" class="o-photo-btn">-->
<!--    <q-menu ref="photoPopover" anchor="bottom middle" self="top middle" class="shadow-5">-->
<!--      <o-meta-input :title="$o.lang.editor.photo" icon="image"-->
<!--                    @primaryAction="insertImage(commands.image, $event)">-->
<!--      </o-meta-input>-->
<!--    </q-menu>-->
<!--  </o-menubar-btn>-->
</template>

<script>
import OMenubarBtn from '@/components/buttons/OMenubarBtn'
import OMetaInput from '@/components/common/OMetaInput'
export default {
  name: 'o-photo-btn',
  data () {
    return {
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
    OMetaInput
  },
  methods: {
    insertImage (command, src) {
      if (src) {
        command({ src })
      }

      this.$refs.photoPopover.hide()
    }
  },
  computed: {
  }
}
</script>

<style lang="scss">
  .o-photo-btn {
  }
</style>
