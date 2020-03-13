<p align="center">
  <a href="https://ninecat-ui.github.io">
    <img width="100" src="https://avatars3.githubusercontent.com/u/51054939?s=400&u=8d6342ba8bf5106086c26318ee290452501c6dff&v=4">
  </a>
</p>

<h1 align="center">ninecat-ui</h1>

<h3 align="center">一个 Vue 2.0 UI Web框架</h3>



<div align="center">

[![Build Status](https://travis-ci.com/ninecat-ui/ninecat-ui.svg?branch=master)](https://travis-ci.com/ninecat-ui/ninecat-ui)
[![codecov](https://codecov.io/gh/ninecat-ui/ninecat-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/ninecat-ui/ninecat-ui)
![](https://img.shields.io/badge/license-MIT-000000.svg)
![](https://img.shields.io/badge/webpack-4-blue.svg)
![](https://img.shields.io/badge/vue-2.6.10-green.svg)
![](https://img.shields.io/badge/npm-6.4.1-lightblue.svg)

</div>


![readme-en.png](https://github.com/ninecat-ui/ninecat-ui/blob/master/static/readme-en.png?raw=true)

简体中文 | [English](./README.md)


## 📦 安装

```bash
npm install ninecat-ui --S
```

```bash
yarn add ninecat-ui
```

## 🔨 快速开始

```javascript
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

## 🖥 浏览器支持

现代浏览器或者IE10以上

## 🔗 链接

- [主页](https://ninecat-ui.github.io)
- [贡献指南](./.github/CONTRIBUTING.zh-CN.md)

## ⌨️ 开发

本地Clone

```bash
$ git clone https://github.com/ninecat-ui/ninecat-ui.git
$ cd ninecat-ui
$ yarn install
$ yarn start
```

## ✅ Todo List

- [x] 自定义文档目录结构
- [x] 在线预览UI组件
- [x] 集成Travis CI实现自动化构建
- [x] 集成Codecov展示测试覆盖率
- [x] 自动构建发布文档 
- [x] 自动通过git tag 发布npm
- [x] 完成组件单元测试
- [x] 集成Docsearch
- [ ] 基本组件开发完善（进行中）
- [ ] 集成codepen完成在线编辑代码
- [ ] 自定义主题色
- [ ] 国际化
- [ ] Typescript 和 JavaScript混合开发


