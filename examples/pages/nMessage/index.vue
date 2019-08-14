<template>
  <div>
    <example
      :introduction="introduction"
      :api="api"
    >
      <section class="message-demo">
        <n-message
          :show="show"
          :type="infoType"
          :message="infoMessage"
        />
      </section>
      <!-- <section class="message-demo">
        <n-message
          :show="show"
          :type="successType"
          :message="successMessage"
        />
      </section>
      <section class="message-demo">
        <n-message
          :show="show"
          :type="warningType"
          :message-title="warningMessageTitle"
          :message="warningMessage"
        />
      </section>
      <section class="message-demo">
        <n-message
          :show="show"
          :type="errorType"
          :message="errorMessage"
        />
      </section> -->
    </example>
  </div>
</template>
<script>
import example from '../components/example'
import introduction from './md/introduction.md'
import api from './md/api.md'
export default {
  components: {
    example
  },
  data: function () {
    return {
      introduction: introduction,
      api: api,
      show: true,
      infoType: 'info',
      infoMessage: '一般的文字信息，默认左对齐，可以带图标。',
      successType: 'success',
      successMessage: '这是一条成功的消息，并且可以手动关闭',
      warningMessage: '信息内容可以带有标题',
      warningType: 'warning',
      warningMessageTitle: '警告信息',
      errorMessage: '错误消息，这里是文案',
      errorType: 'error'
    }
  }
}
</script>

<style lang="scss" scoped>
  .message-demo{
    margin-bottom: 10px;
  }
</style>
