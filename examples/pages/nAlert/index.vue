<template>
  <div>
    <example
      :introduction="introduction"
      :api="api"
      :example-code="exampleCode"
    >
      <section class="alert-demo">
        <n-alert
          :show="show"
          message="Message"
          type="info"
        />
      </section>
    </example>
  </div>
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
      show: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .alert-demo{
    margin-bottom: 10px;
  }
</style>
