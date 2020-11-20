<template>
  <app-dropdown-content class="o-meta-input dropdown-content">
    <div class="title">{{title}}</div>
    <div class="fields">
      <input class="form-input" v-model="value" ref="input" type="text" @keyup.enter="onConfirm" placeholder="Link Address" />
    </div>
    <div class="actions tiptap-row justify-between">
      <button class="button primary" style="margin-right: 10px" @click.prevent="onConfirm">Ok</button>
    </div>
  </app-dropdown-content>
</template>

<script>
import { AppDropdownContent } from '../index'
export default {
  name: 'o-meta-input',
  components: { AppDropdownContent },
  data () {
    return {
      value: ''
    }
  },
  props: {
    val: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'link'
    },
    icon: {
      type: String,
      default: 'link'
    },
    secondIcon: {
      type: String,
      default: ''
    },
    secondLabel: {
      type: String,
      default: ''
    }
  },
  methods: {
    onConfirm () {
      this.$emit('primaryAction', this.value)
      this.value = ''
    }
  },
  watch: {
    val (to, from) {
      this.value = to
    }
  },
  mounted () {
    this.value = this.val
  }
}
</script>

<style lang="scss">
.o-meta-input {
  min-width: 500px;
  padding: 15px;
  .title {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  .fields {
    padding: 10px 0;
    .q-field--focused {
      .q-field__control {
        box-shadow: unset !important;
      }
    }
    .q-field--float {
      .q-field__control {
        box-shadow: unset !important;
      }
    }
    .hint {
      font-size: 0.8rem;
    }
  }
  .actions {
    padding-top: 10px;
    .q-btn {
      min-width: 100px;
    }
  }
}
</style>
