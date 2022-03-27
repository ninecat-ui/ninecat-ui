import NDemo from './components/NDemo/index'
import DocApp from './App'

import type { Component } from 'vue'

export default DocApp;

export const globals: [string, Component][] = [
    ['NDemo', NDemo],
  ]