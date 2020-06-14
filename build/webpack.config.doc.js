const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = merge(baseConfig, {
  mode: 'production',
  entry: path.resolve(__dirname, '../doc/index.js'),
  output: {
    path: path.resolve(__dirname, '../docs'),
    publicPath: './',
    library: 'ninecat-doc',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals:{
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'highlight.js': 'hljs',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './doc/doc.html',
      filename: 'index.html',
      favicon:'./doc/favicon.ico',
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: './doc/404.html',
      filename: '404.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'ninecatdoc.min.css'
    })
  ]
})
