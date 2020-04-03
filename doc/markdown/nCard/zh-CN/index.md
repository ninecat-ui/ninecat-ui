
# Card 

将信息在卡片容器中展示。

## 何时使用

需要介绍某种事物时使用。

## 代码演示

### 基本使用

:::demo
```html
<template>
  <n-card :src="src" :description="description" title="鸟"/>
</template>
<script>
  export default {
    data () {
      return {
        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585736912147&di=b569099e49bb8d6216841e4819d98222&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F21%2F09%2F01200000026352136359091694357.jpg',
        description:'鸟，又称作鸟儿。定义：体表被覆羽毛的卵生脊椎动物，鸟的主要特征是：身体呈流线型（纺锤型或梭形），大多数飞翔生活。'
      }
    }
  }
</script>
```
:::

## API

| 参数 | 说明 | 类型 | 
| :--- | :--- | :--- | :--- |
| src | 图片地址 | String | 
| title | 卡片标题 | String |  
| description | 介绍内容 | String |  



