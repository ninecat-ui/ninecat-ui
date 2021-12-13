const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueLoaderPlugin = require('vue-loader/dist/plugin').default;
const HOST = 'localhost'
const PORT = 8083

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './doc/main.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          }
        ],
      },
      {
        test: /\.scss$/i,
        exclude: /\.variables\.scss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "icss",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      // --------
      // SCSS MODULES
      {
        test: /\.variables\.scss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "local",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.ts','.js', '.vue', '.json', '.tsx'],
    alias: {
      'vue': '@vue/runtime-dom'
    }
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `
          You application is running here http://${HOST}:${PORT}
          Build：npm run prod
          Publish npm:npm publish
          `
        ],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      onErrors: function (severity, errors) {
        // You can listen to errors transformed and prioritized by the plugin
        // severity can be 'error' or 'warning'
      },
      // should the console be cleared between each compilation?
      // default is true
      clearConsole: true,
      // add formatters and transformers (see below)
      additionalFormatters: [],
      additionalTransformers: []
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    compress: true,
    host: HOST,
    port: PORT,
    open: true,
    overlay: { warnings: false, errors: true },
    quiet: true,
    disableHostCheck: true
  },
}