<p align="center">
  <a href="https://ninecat-ui.github.io">
    <img width="100" src="https://avatars3.githubusercontent.com/u/51054939?s=400&u=8d6342ba8bf5106086c26318ee290452501c6dff&v=4">
  </a>
</p>

<h1 align="center">ninecat-ui</h1>

<h3 align="center">A Vue.js 2.0 Web UI Toolkit.</h3>



<div align="center">

[![Build Status](https://travis-ci.com/ninecat-ui/ninecat-ui.svg?branch=master)](https://travis-ci.com/ninecat-ui/ninecat-ui)
[![codecov](https://codecov.io/gh/ninecat-ui/ninecat-ui/branch/master/graph/badge.svg)](https://codecov.io/gh/ninecat-ui/ninecat-ui)
![](https://img.shields.io/badge/license-MIT-000000.svg)
![](https://img.shields.io/badge/webpack-4-blue.svg)
![](https://img.shields.io/badge/vue-2.6.10-green.svg)
![](https://img.shields.io/badge/npm-6.4.1-lightblue.svg)

</div>


![readme-zh.png](https://github.com/ninecat-ui/ninecat-ui/blob/master/static/readme-zh.png?raw=true)

English | [简体中文](./README-zh_CN.md)


## 📦 Install 

```bash
npm install ninecat-ui --S
```

```bash
yarn add ninecat-ui
```

## 🔨 Quick Start

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

## 🖥  Browser Support
Modern browsers and Internet Explorer 10+.

## 🔗 Links

- [Home page](https://ninecat-ui.github.io)
- [Contribution Guide](./.github/CONTRIBUTING.en-US.md)

## ⌨️ Development

Clone locally

```bash
$ git clone https://github.com/ninecat-ui/ninecat-ui.git
$ cd ninecat-ui
$ yarn install
$ yarn start
```

## ✅ Todo List

- [x] Document directory custom configuration.
- [x] Preview demo online.
- [x] Integrate Travis CI.
- [x] Integrate codecov.
- [x] Building documents automatically. 
- [x] Tag to build npm packages automatically.
- [x] Component unit testing. 
- [x] Integrate docsearch.(Some problems,need fix.)
- [ ] Common component develop.(Doing)
- [ ] Integrate codepen.
- [ ] Color theme customization.
- [ ] Globalization.
- [ ] Mixed develop with typescript and JavaScript.


