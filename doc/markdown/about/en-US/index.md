<h1>
Ninecat-ui
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


Ninecat-ui is a VUE UI component library based on <a href="https://rsuitejs.com/design/default" target="_blank">RSUITE</a> prototype design.

After some searching, We found the UI component library of RSUITE, so we started using VUE to build a UI component library.


## Supporting environment
 - Modern browsers and IE10 and above

## Install

Install using npm or yarn

We recommend using npm or yarn for development, not only for easy debugging in the development environment, but also for packaging and deployment in the production environment, and enjoy the many benefits brought by the entire ecosystem and toolchain.

`npm install ninecat-ui --S`

`yarn add ninecat-ui`

## Example

```
import Vue from 'vue'
import Ninecat from 'ninecat-ui'
// Introduce style files
import 'ninecat-ui/package/main.css'

Vue.use(Ninecat)

// or
import {
  Button
  // ...
} from 'ninecat-ui'

Vue.component(Button.name, Button)
```