# Sidenav 侧边菜单
侧边菜单用于展示菜单。

## 何时使用
多个页面展示。

## 代码演示

### 侧边菜单嵌套
:::demo 侧边菜单有三种标签：主菜单标签、展开菜单标签、子标签。
```html
<template>
  <nSidenav>
    <nSidenavItem head disabled name="壹级菜单壹"></nSidenavItem>
    <nSubSidenav head name="壹级菜单贰">
      <nSidenavItem  name="二级菜单"></nSidenavItem>
      <nSidenavItem  name="二级菜单"></nSidenavItem>
      <nSidenavItem  name="二级菜单"></nSidenavItem>
    </nSubSidenav>
  </nSidenav>
</template>

<script>
export default {
  methods: {
    
  }
}
</script>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| head | 菜单类型，壹级菜单（没有子菜单） | Boolean | false |
| children | 菜单类型，叁级菜单(没有head和children时是二级菜单) | Boolean | false |
| name    | 菜单名 | String     |  |
| disabled    | 禁用状态 | Boolean     | false |