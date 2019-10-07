<template>
  <div>
    <example
      :introduction="introduction"
      :api="api"
      :example-code="exampleCode"
    >
      <slot>
        <n-table
          :columns="columns"
          :data="data"
        />
      </slot>
    </example>
  </div>
</template>

<script>
import introduction from './md/introduction.md'
import api from './md/api.md'
import exampleCode from './md/example-code.md'
import example from '../components/example'
export default {
  components: {
    example
  },
  data: () => {
    return {
      introduction,
      exampleCode,
      api,
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
      data: [
        { name: '张三', age: '11', sex: '男', address: '上海路' },
        { name: '李四', age: '12', sex: '男', address: '北京路' },
        { name: '李花', age: '12', sex: '女', address: '天津路' }
      ]
    }
  }

}
</script>
