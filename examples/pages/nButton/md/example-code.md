
按钮有五种类型：默认按钮、主按钮、微妙按钮、幽灵按钮、链接按钮。主按钮在同一个操作区域最多出现一次。

```
<template>
   <n-button>Default</n-button>
    <n-button type="primary">
      Primary
    </n-button>
    <n-button type="link">
          Link
    </n-button>
    <n-button type="ghost">
          Ghost
    </n-button>
    <n-button type="delicate">
      Delicate
    </n-button>
    <n-button icon="icon-home" />
    <n-button loading />
    <n-button
      @click="handleClick"
    >
      Click
    </n-button>
    <n-button
      disabled
      @click="handleClick"
    >
      Disable
  </n-button>
</template>
<script>
import {Button} from 'ninecat-ui'
export default {
  methods: {
    handleClick () {
      alert('111')
    }
  }
}
</script>

```