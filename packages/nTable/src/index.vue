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
@import './index.scss'
</style>
