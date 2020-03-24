# Upload
File selection upload and drag upload controls.

## When To Use
- Uploading is the process of publishing information (web pages, text, pictures, videos, etc.) to a remote server through a web page or upload tool.

- When you need to upload one or more files.

- When you need to show the progress of the upload.
T

- When you need to use drag and drop interaction.

## Examples

### Basic use

:::demo

```html
<template>
  <div>
    <n-upload :file-list="fileList">
      <n-button>
        Click Upload
      </n-button>
    </n-upload>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        fileList: []
      };
    },
  }
</script>
```
:::

### List of initialization files

:::demo

```html
<template>
  <div>
    <n-upload :file-list="fileList">
      <n-button>
        Click Upload
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

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| file-list | List of uploaded files, eg: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}] | Array | |