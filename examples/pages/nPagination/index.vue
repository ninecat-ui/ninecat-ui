<template>
  <example
    :introduction="introduction"
    :api="api"
    :example-code="exampleCode"
  >
    <section class="message-demo">
      <n-pagination
        :total="total"
        :page-size="pageSize"
        :current="current"
        :on-change-pgae="onChangePgae"
      />
    </section>
  </example>
</template>

<script>
import example from '../components/example'
import introduction from './md/introduction.md'
import api from './md/api.md'
import exampleCode from './md/example-code.md'
export default {
  components: {
    example
  },
  data: function () {
    return {
      introduction: introduction,
      api: api,
      exampleCode: exampleCode,
      total: 100,
      pageSize: 10,
      current: 1
    }
  },
  methods: {
    onChangePgae (page) {
      console.log(page)
    }
  }
}
</script>
