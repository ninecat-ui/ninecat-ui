<template>
  <div>
    <ul>
      <li><a>&laquo;</a></li>
      <li><a>&lsaquo;</a></li>
      <li
        v-for="(item,index) in nPageKeyMap"
        :key="index"
        :class="size"
        @click="handClickPage(item.value)"
      >
        <a :class="{active: item.value === nCurrent}">{{ item.value }}</a>
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
    },
    size: {
      type: String,
      default: 'sm'
    },
    onChangePgae: {
      type: Function,
      default: function () {}
    }
  },
  data: function () {
    return {
      nTotal: this.total,
      nPageSize: this.pageSize,
      nCurrent: this.current,
      nPageKeyMap: [],
      itemStatus: ''
    };
  },
  mounted () {
    this.getPageKeyMap(this.nTotal, this.nPageSize);
  },

  methods: {
    getPageKeyMap (total, pageSize) {
      const pageKeyMap = [];
      const page = Math.ceil(total / pageSize);
      for (let i = 1; i <= page; i += 1) {
        pageKeyMap.push({
          key: i,
          value: i
        });
      }
      this.nPageKeyMap = pageKeyMap;
      return pageKeyMap;
    },
    handClickPage (page) {
      this.nCurrent = page;
      this.onChangePgae(page);
    }
  }
};
</script>

<style lang="scss" scoped>
 ul{
  display: inline-block;
  li{
    text-align: center;
    list-style-type:none;
    display: inline-block;
    cursor:pointer;
    a{
      font-family: Avenir-Book;
      color: #575757 !important;
    }
  }
  :hover{
    background: #F7F7FA;
    border-radius: 6px;
    border-radius: 6px;
  }
  .xs{
    height: 18px;
    width: 18px;
    font-size: 12px;
    line-height: 18px;
  }
  .sm{
    height: 24px;
    width: 24px;
    font-size: 12px;
    line-height: 24px;
  }
  .md{
    height: 32px;
    width: 32px;
    font-size: 16px;
    line-height: 32px;
  }
  .lg{
    height: 36px;
    width: 36px;
    font-size: 18px;
    line-height: 36px;
  }
  .active{
    color: #1675E0 !important;
  }
}
</style>
