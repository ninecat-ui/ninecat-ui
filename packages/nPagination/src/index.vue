<template>
  <div>
    <ul>
      <li><a>&laquo;</a></li>
      <li><a>&lsaquo;</a></li>
      <li
        v-for="(item,index) in pageKeyMap"
        :key="index"
      >
        <a>{item.value}</a>
      </li>
      <li><a>&rsaquo;</a></li>
      <li><a>&raquo;</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NPagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  data: () => {
    return {
      total: this.total,
      pageSize: this.pageSize,
      current: this.current,
      pageKeyMap: []
    }
  },
  mounted () {
    console.log(this.total, this.pageSize)
    this.getPageKeyMap(this.total, this.pageSize)
  },
  methods: {
    getPageKeyMap (total, pageSize) {
      const pageKeyMap = []
      const page = Math.ceil(total / pageSize)
      for (let i = 1; i <= page; i += 1) {
        pageKeyMap.push({
          key: i,
          value: i
        })
      }
      this.pageKeyMap = pageKeyMap
      return pageKeyMap
    }
  }
}
</script>

<style lang="scss">
  @import './index.scss'
</style>
