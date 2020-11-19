<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <h1>Add image</h1>
      <header class="tab-header">
        <button @click.prevent="tab = 1;" :class="{ active: tab == 1 }">Link</button>
        <button v-if="fileUploadUrl" @click.prevent="tab = 0;" :class="{ active: tab == 0 }">
          Upload (Drag 'n' Drop)
        </button>
        <button @click.prevent="loadFileSelector" v-if="fileSelectorUrl" :class="{ active: tab == 2 }">
          File selector
        </button>
      </header>

      <div v-if="tab == 1" class="tab-content">
        <p>Here is a test image URL</p>
        <pre>https://i.imgur.com/0ogkTp7.jpg</pre>
        <label for="url">Image URL:</label>
        <input v-model="imageSrc" id="url" class="form-input" style="margin:0"/>
      </div>
      <div v-if="tab == 2" class="tab-content">
        <div class="d-flex flex-row flex-wrap">
          <img
            v-for="(img, i) in images"
            :key="'img-' + i"
            alt=""
            :src="img"
            class="ma-2 selectable"
            style="max-height:100px; max-width: 100px"
            @click.prevent="insertImage(img)"
          />
        </div>
      </div>
      <div v-if="tab == 0" class="tab-content">
        <vue-dropzone
          ref="myVueDropzone"
          id="dropzone"
          @vdropzone-success="vfileUploaded"
          :options="dropzoneOptions"
        >
        </vue-dropzone>
      </div>

      <footer class="modal-footer">
        <button
          @click.prevent="insertImage(null)"
          class="button primary"
          :title="validImage ? '' : 'Image URL needs to be valid'"
          :disabled="!validImage"
        >
          Add Image
        </button>
        <button @click.prevent="show = false;" class="button danger">Close modal</button>
      </footer>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import axios from 'axios'

export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data () {
    return {
      imageSrc: '',
      command: null,
      show: false,
      tab: 1,
      fileSelectorUrl: false,
      fileUploadUrl: false,
      images: [],
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 200,
        dictDefaultMessage: 'UPLOAD A FILE'
      }
    }
  },
  computed: {
    validImage () {
      return (
        this.imageSrc.match(/unsplash/) !== null ||
        this.imageSrc.match(/\.(jpeg|jpg|gif|png)$/) != null
      )
    }
  },
  methods: {
    loadFileSelector () {
      this.tab = 2

      if (this.fileSelectorUrl) {
        axios.get(this.fileSelectorUrl).then(res => {
          console.log(res.data)
        })
      }
    },
    showModal (command, options) {
      // Add the sent command
      this.command = command
      this.fileSelectorUrl = options.fileSelectorUrl
      this.fileUploadUrl = options.fileUploadUrl

      this.show = true
    },
    vfileUploaded (file) {
      this.imageSrc = file
    },
    fileChange (e) {
      const file = this.$refs.file.files[0]

      let formData = new FormData()

      formData.append('file', this.file)

      console.log('Uploading...')

      axios.post(this.fileUploadUrl).then(data => {
        this.imageSrc = data.data
      })
    },
    insertImage (img = null) {
      if (img) {
        this.imageSrc = img
      }

      const data = {
        command: this.command,
        data: {
          src: this.imageSrc
          // alt: 'image',
          // title: "YOU CAN ADD TITLE"
        }
      }

      this.$emit('onConfirm', data)
      this.closeModal()
    },

    closeModal () {
      this.show = false
      this.imageSrc = ''
      this.tab = 1
    }
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  width: 90%;
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;

}

.modal-footer {
  margin-top: 10px;
}

label {
  display: block;
  margin: 0.25em 0;
}

button:disabled {
  opacity: 0.3;
}

button + button {
  margin-left: 10px;
}

.tab-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #999;
}

.tab-header button {
  color: #222;
  background: none;
  border: 0;
  flex: 1;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 20px;
}

.tab-header button.active {
  background-color: #ccc;
  color: #111;
}

.tab-content {
  padding: 10px 5px;
}
</style>
