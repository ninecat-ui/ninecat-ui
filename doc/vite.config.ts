import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const path = require('path');
const fs = require('fs');
import markdownPlugin from './plugins/md-plugin'


const vuePlugin = createVuePlugin({ include: [/\.vue$/, /\.md$/] })

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    markdownPlugin(),
    vuePlugin,
    vueJsx({})
  ]
})
