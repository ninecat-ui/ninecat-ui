# Upload 上传
文件选择上传和拖拽上传控件。

## 何时使用
上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。

- 当需要展现上传的进度时。

- 当需要使用拖拽交互时。

## 代码演示

:::demo

```html
<template>
  <div>
    <n-upload :file-list="fileList">
      <n-button>
        点击上传
      </n-button>
    </n-upload>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        fileList: [{
          name: 'food1.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg'
        }]
      };
    },
  }
</script>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| file-list | 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}] | Array | |