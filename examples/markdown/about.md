

`Ninecat-ui` 是基于[RSUITE](https://rsuitejs.com/design/index.html)设计的VUE UI组件库。

经过一番搜寻，找到了RSUITE的UI元件库，于是开始用VUE来构建一个UI组件库。

## 支持环境
 - 现代浏览器和 IE10及以上

## 安装

使用 npm 或 yarn 安装

我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

`npm install ninecat-ui --S`
`yarn add antd`

## 示例

```
import Vue from 'vue'
import Ninecat from 'ninecat-ui'
import 'ninecat-ui/package/main.css'

Vue.use(Ninecat)

// or
import {
  Button
  // ...
} from 'ninecat-ui'

Vue.component(Button.name, Button)
```