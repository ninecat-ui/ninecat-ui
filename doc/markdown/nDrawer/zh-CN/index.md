# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 何时使用

一个从页面边缘滑动出来的浮层，可以替代 Modal 放更多内容。

## 代码演示
:::demo
```html
<template>
  <n-button 
    @click.native="openDrawer">
    打开抽屉
  </n-button>
  <n-drawer
    :show.sync="drawerShow"
    :title="drawerTitle"
    :confirm="confirm"
    :cancel="cancel"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </n-drawer>
</template>
<script>
  export default{
    data: function() {
      return {
        drawerShow: false,
        drawerTitle: '抽屉标题'
      }
    },
    methods: {
      openDrawer () {
        this.drawerShow = true
      },
      confirm () {
        console.log('confirm')
      },
      cancel () {
        console.log('cancel')
      }
    }
  }
</script>

```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| show | 是否展示抽屉 | Boolean | false |
| title | 抽屉的标题 | String |  |
| confirm    | 确认按钮点击的回调函数 | Function     |  |
| cancel    | 取消按钮点击的回调函数 | Function     |  |