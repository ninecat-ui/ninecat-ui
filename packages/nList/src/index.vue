<template>
  <ul class="n-list">
    <li
      v-for="(item,index) in data"
      :key="index"
      :class="[sizeClass]"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'NList',

  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    size: {
      type: String,
      default: 'md'
    }
  },

  computed: {
    sizeClass () {
      const { size } = this
      return size
    }
  }
}
</script>

<style lang="scss" scoped>
.n-list{
  background: #ffffff;
  padding: 0;
  margin: 0;
  li{
    list-style-type: none;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #575757;
    border-bottom: 1px solid  #E5E5EA;
  }
  li:first-child{
    border-top: 1px solid  #E5E5EA;
  }
  .sm{
    padding: 8px 0;
  }
  .md{
    padding: 13px 0;
    line-height: 20px;
  }
  .lg{
    padding: 20px 0;
  }
}
</style>
