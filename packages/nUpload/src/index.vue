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
        <span class="nupload-list-item-title">
          <a
            :href="file.url"
            :download="file.name"
          >{{ file.name }}</a>
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
    margin-top: 10px;
    .nupload-list-item{
      line-height: 30px;
      height: 30px;
      width: 300px;
      background: #FFFFFF;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #575757;
      .nupload-list-item-title{
        padding-left: 10px;
        a{text-decoration:none;color: #575757;}
      }
    }
    :hover{
      background: #F7F7FA;
    }
  }
}

</style>
