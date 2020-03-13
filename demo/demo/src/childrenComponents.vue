<template>
  <div>
    <div>
        <n-table
          :columns="columns"
          :data="userList"
        />
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          align: 'center',
          width: 100
        },
        {
          title: '年龄',
          dataIndex: 'age'
        },
        {
          title: '性别',
          dataIndex: 'sex'
        },
        {
          title: '住址',
          dataIndex: 'address'
        }
      ],
      list: []
    }
  },
  props: {
    userList: Object
  }
}
</script>

<style lang="scss" scoped>

</style>
