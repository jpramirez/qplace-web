<template>
    <v-container grid-list-lg >

  <div class="simpleUpload">
    <div class="upload">
      <ul>
        <li v-for="(file, index) in files" :key="file.id">
          <span>{{file.name}}</span> -
          <span v-if="file.error">{{file.error}}</span>
          <span v-else-if="file.success">success</span>
          <span v-else-if="file.active">active</span>
          <span v-else-if="file.active">active</span>
          <span v-else></span>
        </li>
      </ul>
      <div class="upload-btn">
        <file-upload
          class="btn btn-primary"
          post-action="https://api.epyphite.local/api/v1/process/split/upload"
          extensions="wav,mp3"
          accept="audio/vnd.wav,audio/mp4"
          :multiple="true"
          :size="1024 * 1024 * 10"
          v-model="files"
          @input-filter="inputFilter"
          @input-file="inputFile"
          ref="upload">
              Select files
        </file-upload>
        
                    <v-card-actions  v-if="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true">
                        <v-btn
                            outline
                            block
                            color="green"
                        >
                            Start Upload</v-btn
                        >
                    </v-card-actions>
                    <v-card-actions  class="btn btn-danger"  v-else @click.prevent="$refs.upload.active = false">
                        <v-btn
                            outline
                            block
                            color="green"
                        >
                            Stop Upload</v-btn
                        >
                    </v-card-actions>
      </div>
    </div>
  </div>
      </v-container>

</template>
<style>
.example-simple label.btn {
  margin-bottom: 0;
  margin-right: 1rem;
}
</style>

<script>
import FileUpload from 'vue-upload-component'
export default {
  components: {
    FileUpload,
  },

  data() {
    return {
      files: [],
    }
  },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
  methods: {
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前

        // Filter system files or hide files
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }

        // Filter php html js file
        // 过滤 php html js 文件
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent()
        }
      }
    },

    inputFile(newFile, oldFile) {
      if (newFile && !oldFile) {
        // add
        console.log('add', newFile)
      }
      if (newFile && oldFile) {
        // update
        console.log('update', newFile);
      }

      if (!newFile && oldFile) {
             // remove
            console.log('remove', oldFile);
           }
       }
    }
};
</script>
