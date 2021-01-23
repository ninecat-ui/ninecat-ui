<template>
  <div class="nupload">
    <div class="nupload-content">
      <slot />
      <input
        type="file"
        class="nfile"
        title=""
        @change="handleChange"
      >
    </div>

    <div class="nupload-list">
      <div
        v-for="(file,index) in nfileList"
        :key="index"
        class="nupload-list-item"
      >
        <img src="../../../assets/img/upload/attachment.svg">
        <span class="nupload-list-item-title">
          <a
            :href="file.url"
            :download="file.name"
          >{{ file.name }}</a>
        </span>
        <span
          class="nupload-close"
          @click="deleteFile(file,index)"
        >
          <img src="../../../assets/img/upload/close.svg">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NUpload',
  props: {
    url: {
      type: String,
      default: ''
    },
    headers: {
      type: Object,
      default: function () {
        return {};
      }
    },
    fileList: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  data: function () {
    return {
      nfileList: this.fileList
    };
  },
  methods: {
    handleChange (value) {
      this.nfileList.push(
        {
          name: value.target.files[0].name,
          size: value.target.files[0].size,
          type: value.target.files[0].type
        }
      );
    },
    deleteFile (file, index) {
      this.nfileList.splice(index, 1);
    }
  }
};
</script>

<style lang="scss">
@import './index.scss'
</style>
