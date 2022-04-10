
# Tag 标签

进行标记和分类的小标签

## 何时使用

用于标记事物的属性和维度。

进行分类。

## 代码演示

### 基本使用

:::demo
```html
<template>
  <n-tag >Tag 1</n-tag>
  <n-tag >
    <a target="_blank" href="https://github.com/ninecat-ui/ninecat-ui">
      Link
    </a>
  </n-tag>
  <n-tag color="orange">Orange</n-tag>
  <n-tag closable>Closable</n-tag>
</template>
```
:::

## API

| 参数 | 说明 | 类型 |默认值 |
| :--- | :--- | :--- | :--- |
| type | 类型 | String | `normal` |
| color | 颜色 | String | `blue` |
| closable | 是否可关闭 |  |  |


