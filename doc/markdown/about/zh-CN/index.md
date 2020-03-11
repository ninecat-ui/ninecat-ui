<h1>
ninecat-ui
</h1>
    <h1>
      <img
        class="logo"
        src="https://avatars3.githubusercontent.com/u/51054939?s=400&u=8d6342ba8bf5106086c26318ee290452501c6dff&v=4"
      >
      <img src="https://travis-ci.com/ninecat-ui/ninecat-ui.svg?branch=master">
      <img src="https://codecov.io/gh/ninecat-ui/ninecat-ui/branch/master/graph/badge.svg">
      <img src="https://img.shields.io/badge/license-MIT-000000.svg">
      <img src="https://img.shields.io/badge/webpack-4-blue.svg">
      <img src="https://img.shields.io/badge/vue-2.6.10-green.svg">
      <img src="https://img.shields.io/badge/npm-6.4.1-lightblue.svg">
</h1>


`ninecat-ui` 是基于<a href="https://rsuitejs.com/design/default" target="_blank">RSUITE</a>原型设计的VUE UI组件库。

## 支持环境
 - 现代浏览器和 IE 10 及以上

## 安装

我们推荐使用 npm 或 yarn 的方式进行安装，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```shell
npm install ninecat-ui -S
yarn add ninecat-ui
```

## 示例

```
import Vue from 'vue'

// 全局引入
import Ninecat from 'ninecat-ui'
// 引入样式文件
import 'ninecat-ui/package/main.css'
Vue.use(Ninecat)

// 或部分引入
import {
  Button
  // ...
} from 'ninecat-ui'
Vue.component(Button.name, Button)
```