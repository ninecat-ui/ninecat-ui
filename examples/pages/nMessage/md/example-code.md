

```
<template>
  <n-message
    :show="show"
    :type="infoType"
    :message="infoMessage"
  />
</template>
<script>
import {Message} from 'ninecat-ui'
export default {
  data: () => {
    return {
      show: true,
      infoType: 'info',
      infoMessage: '一般的文字信息，默认左对齐，可以带图标。',
    }
  }
}
</script>

```