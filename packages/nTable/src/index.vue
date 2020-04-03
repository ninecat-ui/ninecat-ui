<template>
  <div class="tabel-content">
    <table class="base-table">
      <thead>
        <tr>
          <th
            v-for="item in currentColumns"
            :key="item.dataIndex"
            :width="item.width+'px'"
            :style="{textAlign:item.align}"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(dataItem,index) in currentData"
          :key="index"
          @click="onClickRow(dataItem,$event)"
          @dblclick="onDbClickRow(dataItem,$event)"
        >
          <td
            v-for="(item,itemIndex) in dealTableData(dataItem,currentColumns)"
            :key="itemIndex"
            class="tabel-td"
            :style="{textAlign:currentColumns[itemIndex].align}"
          >
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'NTable',
  props: {
    columns: {
      type: Array,
      default: function () {
        return [];
      }
    },
    data: {
      type: Array,
      default: function () {
        return [];
      }
    },
    rowClick: {
      type: Function,
      default: null
    },
    rowDbclick: {
      type: Function,
      default: null
    }
  },
  data: function () {
    return {
      currentColumns: this.columns,
      currentData: this.data
    };
  },
  methods: {
    dealTableData (currentDataItem, currentColumns) {
      let res = [];
      currentColumns.forEach((item, index) => {
        res.push(currentDataItem[item.dataIndex]);
      });
      return res;
    },
    onClickRow (dataItem, e) {
      if (this.rowClick) {
        this.rowClick(dataItem, e);
      }
    },
    onDbClickRow (dataItem, e) {
      if (this.rowDbclick) {
        this.rowDbclick(dataItem, e);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .tabel-content{
    background: #FFFFFF;
    border-radius: 6px;
    margin: 0;
    padding-top:20px;
  }
  .ndoc-container .n-doc-content table{
    background: #FFFFFF;
    border: none;
    margin: 0;
  }
  .base-table{
    thead{
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #8E8E93;
      text-align: right;
      line-height: 20px;
      th{
        height: 20px;
        padding: 10px 0;
        border: none;
        background: #ffffff;
      }
    }
    tbody{
      tr{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #575757;
        height: 46px;
        border-top: 1px solid #F2F2F5;
        td{
          padding: 13px 0;
          border: none;
        }
      }
    }
  }
</style>
