

 Loading加载数据时显示动效,可以的对大小进行改变。

```
<template>
  <n-loader
    :show="show"
  />
</template>
<script>
import {Loader} from 'ninecat-ui'
export default {
  data: () => {
    return {
      show: true,
    }
  }
}
</script>

```