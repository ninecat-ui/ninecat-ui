<h1>
ninecat-ui
</h1>
    <h1>
      <svg t="1585320705791" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2999" width="128" height="128"><path d="M1024 182.857143l-292.571429-73.142857-109.714285-109.714286v365.714286h-62.464C351.378286 365.714286 182.857143 554.020571 182.857143 786.285714c0 6.144 0.402286 12.178286 0.621714 18.285715H128a18.541714 18.541714 0 0 1-18.285714-18.285715v-146.285714c0-25.453714 17.627429-68.059429 35.657143-86.052571l61.147428-61.184c48.164571-48.128 53.174857-128.036571 11.300572-181.906286L134.729143 204.032a54.857143 54.857143 0 0 0-86.601143 67.364571l83.053714 106.788572c7.68 9.874286 6.582857 28.196571-2.230857 37.010286l-61.147428 61.147428C29.147429 514.962286 0 585.325714 0 640v146.285714C0 856.868571 57.417143 914.285714 128 914.285714h72.740571a440.32 440.32 0 0 0 48.128 109.714286H475.428571l36.571429-146.285714 293.851429-142.226286L877.714286 1024h146.285714l-146.505143-658.285714C987.428571 365.714286 1024 256 1024 182.857143" fill="#E67E22" p-id="3000"></path><path d="M402.285714 658.285714a218.331429 218.331429 0 0 0-73.142857 12.763429V1024h236.361143A218.258286 218.258286 0 0 0 621.714286 877.714286a219.428571 219.428571 0 0 0-219.428572-219.428572" fill="#D35400" p-id="3001"></path><path d="M621.714286 877.714286h-73.142857a219.428571 219.428571 0 0 0-219.428572-219.428572v365.714286h438.857143a146.285714 146.285714 0 0 0-146.285714-146.285714" fill="#E67E22" p-id="3002"></path><path d="M804.571429 182.857143a36.571429 36.571429 0 1 1 0 73.142857 36.571429 36.571429 0 1 1 0-73.142857" fill="#FFFFFF" p-id="3003"></path></svg>
      <img src="https://travis-ci.com/ninecat-ui/ninecat-ui.svg?branch=master">
      <img src="https://codecov.io/gh/ninecat-ui/ninecat-ui/branch/master/graph/badge.svg">
      <img src="https://img.shields.io/npm/dt/ninecat-ui">
      <img src="https://img.shields.io/badge/license-MIT-000000.svg">
      <img src="https://img.shields.io/badge/webpack-4-blue.svg">
      <img src="https://img.shields.io/badge/vue-2.6.10-green.svg">
</h1>


`ninecat-ui` 是基于<a href="https://rsuitejs.com/design/default" target="_blank">RSUITE</a>原型设计的VUE UI组件库。

## 支持环境
 - 现代浏览器和 IE 10 及以上

## 安装

我们推荐使用 npm 或 yarn 的方式进行安装，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```shell
// 使用npm
npm install ninecat-ui -S

// 使用yarn
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

## 开发指南

- [Vue](https://cn.vuejs.org/index.html)
- [贡献指南](https://github.com/ninecat-ui/ninecat-ui/blob/master/.github/CONTRIBUTING.zh-CN.md)