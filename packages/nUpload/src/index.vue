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
        return {}
      }
    },
    fileList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data: function () {
    return {
      nfileList: this.fileList
    }
  },
  methods: {
    handleChange (value) {
      this.nfileList.push(
        {
          name: value.target.files[0].name
        }
      )
    },
    deleteFile (file, index) {
      this.nfileList.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
.nupload{
  position: relative;
  display: inline-block;
  text-align: left;
  cursor: pointer;
  outline: none;
  .nupload-content{
      .nfile{
      position: absolute;
      width: 110px;
      height: 36px;
      left: 0;
      top: 0;
      opacity: 0;
      filter: alpha(opacity=0);
      cursor: pointer;
    }
  }

  .nupload-list{
    .nupload-list-item{
      margin-top: 10px;
      vertical-align:middle;
      width: 300px;
      background: #FFFFFF;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #575757;
      img{
        padding: 7px 0 7px 10px;
        vertical-align:middle;
      }
      .nupload-list-item-title{
        padding: 5px;
        line-height: 20px;
        a{
          text-decoration:none;
          color: #575757;
        }
      }
      .nupload-close{
        position: absolute;
        right:10px;
      }
    }
    :hover{
      background: #F7F7FA;
    }
  }
}

</style>
