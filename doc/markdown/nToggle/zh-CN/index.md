
# Toggle 开关
开关，用于表示开关状态。

## 何时使用
需要表示开关状态的时候使用。

## 代码演示

### 基本使用
:::demo

```html
<template>
  <div>
    <n-toggle v-model="isOn" />
    <n-toggle :disabled="isDisabled"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOn: true,
        isDisabled: true
      }
    }
  }
</script>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| checked (v-model) | 开关状态（双向绑定） | Boolean | false |
| disabled | 是否为禁用开关 | Boolean | false |

*注：请不要在disabled状态下修改checked属性。*
