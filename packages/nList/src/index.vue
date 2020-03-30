<template>
  <ul
    class="n-list"
    :class="[borderedClass]"
  >
    <li
      v-for="(item,index) in data"
      :key="index"
      :class="[sizeClass,borderedClass,hoverClass]"
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
        return [];
      }
    },
    size: {
      type: String,
      default: 'md'
    },
    bordered: {
      type: [String, Boolean],
      default: function () {
        return false;
      }
    },
    hover: {
      type: [String, Boolean],
      default: function () {
        return false;
      }
    }
  },

  computed: {
    sizeClass () {
      const { size } = this;
      return size;
    },
    borderedClass () {
      const { bordered } = this;
      if (bordered || bordered === 'true') {
        return 'bordered';
      } else {
        return '';
      }
    },
    hoverClass () {
      const { hover } = this;
      if (hover || hover === 'true') {
        return 'hover';
      } else {
        return '';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.n-list{
  background: #ffffff;
  padding: 0;
  margin: 0;
  border-top: 1px solid  #E5E5EA;
  border-bottom: 1px solid  #E5E5EA;
  li{
    list-style-type: none;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #575757;
    border-bottom: 1px solid  #E5E5EA;
  }
  li:last-child{
    border-bottom: none;
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
  .bordered{
    padding-left: 20px;
    padding-right: 20px;
  }
  li.hover:hover{
    background: #F2FAFF;
  }
}
ul.bordered{
  border-radius: 6px;
  border-left: 1px solid  #E5E5EA;
  border-right: 1px solid  #E5E5EA;
}

</style>
