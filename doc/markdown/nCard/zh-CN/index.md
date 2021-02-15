
# Card 

将信息在卡片容器中展示。

## 何时使用

需要介绍某种事物时使用。

## 代码演示

### 基本使用

:::demo
```html
<template>
  <n-card :src="src" :description="description" title="ninecat-ui"/>
</template>
<script>
  export default {
    data () {
      return {
        src: 'https://github.com/ninecat-ui/ninecat-ui/raw/master/static/Screenshot_en_new.png?raw=true',
        description:'ninecat-ui,一个清爽的Vue 3.0 UI Web框架'
      }
    }
  }
</script>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| src | 图片地址| String |  |
| title | 卡片标题 | String |  |
| description    | 介绍内容 | String     |  |
