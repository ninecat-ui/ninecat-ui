<template>
  <div>
    <n-message
      :show="show"
      :type="infoType"
      :message="infoMessage"
    />
    <n-message
      :show="show"
      :type="successType"
      :message="successMessage"
    />
    <n-message
      :show="show"
      :type="warningType"
      :message-title="warningMessageTitle"
      :message="warningMessage"
    />
    <n-message
      :show="show"
      :type="errorType"
      :message="errorMessage"
    />
  </div>
</template>
<script>
export default {
  data: function () {
    return {
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
