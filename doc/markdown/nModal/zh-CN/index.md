# Modal 对话框

模态对话框。

## 何时使用
需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。


## 代码演示
:::demo
```html
<template>
  <n-button 
    @click.native="openModal">
    Open Modal
  </n-button>
  <n-modal
    :show.sync="modalShow"
    :title="modalTitle"
    :confirm="confirm"
    :cancel="cancel"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </n-Modal>
</template>
<script>
  export default{
    data:function(){
      return {
        modalShow: false,
        modalTitle: '这是标题'
      }
    },
    methods:{
      openModal () {
        this.modalShow = true
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
| show | 是否展示对话框 | Boolean | false |
| title | 对话框标题 | String |  |
| confirm    | 确认按钮按下的回调函数 | Function     |  |
| cancel    | 取消按钮按下的回调函数 | Function     |  |