<template>
  <div>
      <Modal ref="modal" @onConfirm="addCommand" />

      <button class="o-menubar-btn button" @click="openModal(commands.image)">
          <span class="btn-content">
            <i class="material-icons editor-icon">photo</i>
          </span>
      </button>
  </div>
</template>

<script>
import OMenubarBtn from '@/components/buttons/OMenubarBtn'
import OMetaInput from '@/components/common/OMetaInput'
import Modal from '@/components/custom/Modal'
export default {
  name: 'o-photo-btn',
  data () {
    return {
      src: ''
    }
  },
  props: {
    editor: {
      type: Object
    },
    commands: {
      type: Object
    },
    isActive: {
      type: Object
    }
  },
  components: {
    OMenubarBtn,
    OMetaInput,
    Modal
  },
  methods: {
    openModal (command) {
      this.$refs.modal.showModal(command)
    },
    addCommand (data) {
      if (data.command !== null) {
        data.command(data.data)
      }
    },
    onShow () {
      try {
        this.src = this.editor.state.selection.node.attrs.src
      } catch (e) {
        this.src = ''
      }
    },
    insertImage (command, src) {
      console.log(src)
      if (src) {
        command({ src })
        this.src = src
      }
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
