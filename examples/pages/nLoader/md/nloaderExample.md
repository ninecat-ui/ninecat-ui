

 Loading加载数据时显示动效,可以的对大小进行改变。

```
<template>
  <n-loader
    :show="show"
    :size="xsSize"
  />
</template>
<script>
export default {
  data: () => {
    return {
      show: true,
      xsSize: 'xs',
    }
  }
}
</script>

```