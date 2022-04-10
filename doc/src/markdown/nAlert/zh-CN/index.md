
# Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

当某个页面需要向用户显示警告的信息时。
 
## 代码演示
### 基本用法
:::demo 最简单的用法，适用于简短的警告提示，四肢颜色，支持是否关闭按钮，支持是否显示辅助图标。
```html
<template>
  <div >
    <n-alert
      v-model:show="show1"
      message="Message"
      type="info"
    />
    <n-alert
      v-model:show="show2"
      message="Message"
      type="success"
    />
    <n-alert
      v-model:show="show3"
      message="Message"
      type="warning"
      closable
    />
    <n-alert
      v-model:show="show4"
      message="Message"
      type="error"
      :showIcon="true"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
    }
  }
}
</script>

```
:::

### 自定义关闭
:::demo 可以自定义关闭，自定义的文字会替换原先的关闭 Icon。
```html
<template>
  <div >
    <n-alert
      closable
      v-model:show="show"
      message="Message"
      type="info"
      close-text="Close now"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: true,
    }
  }
}
</script>

```
:::

### 含有辅助性文字介绍
:::demo 含有辅助性文字介绍的警告提示。
```html
<template>
  <div >
    <n-alert
      v-model:show="show"
      message="Success Text"
      type="success"
      description="Success Description Success Description Success Description"
    />
    <n-alert
      closable
      v-model:show="show"
      message="Warning Text"
      type="warning"
      :showIcon="true"
      description="Warning Description Warning Description Warning Description"
    />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: true,
    }
  }
}
</script>

```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| show | 是否展示 | Boolean | false |
| closable | 是否可关闭 | Boolean | false |
| message | 提示内容 | String |  |
|description |	警告提示的辅助性文字介绍 |	String| |
| type    | 提示类型，可选值`info`,`success`,`warning`,`error` | String | info |
| closeText | 自定义关闭文案 | String |  |
| showIcon | 是否展示辅助性图标 | Boolean | flase |

