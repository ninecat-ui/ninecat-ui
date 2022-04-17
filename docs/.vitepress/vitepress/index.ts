import NDemo from './components/nDemo/index'
import DocApp from './App.vue'

import type { Component } from 'vue'

export default DocApp;

export const globals: [string, Component][] = [
    ['NDemo', NDemo],
  ]