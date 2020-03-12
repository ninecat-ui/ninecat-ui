# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 代码演示

### 基本使用
头像有四种尺寸，两种形状可选。
:::demo

```html
<div>
  <div>
    <n-avatar size="lg">LG</n-avatar>
    <n-avatar size="md">MD</n-avatar>
    <n-avatar size="sm">SM</n-avatar>
    <n-avatar size="xs">XS</n-avatar>
  </div>
  <div style="padding-top:20px">
    <n-avatar size="lg" shape="circle">LG</n-avatar>
    <n-avatar size="md" shape="circle">MD</n-avatar>
    <n-avatar size="sm" shape="circle">SM</n-avatar>
    <n-avatar size="xs" shape="circle">XS</n-avatar>
  </div>
</div>
```
:::

### 类型
支持三种类型：图片、Icon 以及字符
:::demo
```html
<div>
  <div>
    <n-avatar>MD</n-avatar>
    <n-avatar src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"/>
    <n-avatar><n-icon name="icon-home" /></n-avatar>
  </div>  
</div>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| size | 尺寸大小，可选值`lg`,`md`,`sm`,`xs` | String | md |
| shape | 头像的形状，可选值`square`,`circle` | String | square |
| src    | 头像为图片时的src | String     |  |
