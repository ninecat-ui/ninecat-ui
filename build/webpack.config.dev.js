const path = require('path')
const utils = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default;
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HOST = 'localhost'
const PORT = 8081
const babelConfig = {
  cacheDirectory: true,
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 versions',
            'Firefox ESR',
            '> 1%',
            'ie >= 9',
            'iOS >= 8',
            'Android >= 4',
          ],
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'ninecat',
        libraryDirectory: '', // default: lib
        style: true,
      },
    ],
    ['@vue/babel-plugin-jsx', { mergeProps: false }],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-class-properties',
  ],
};

module.exports = (env = {}) => ({
  mode: env.prod ? 'production' : 'development',
  devtool: 'cheap-module-source-map',
  entry: path.resolve(__dirname, '../doc/main.ts'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          {
            loader: path.resolve(__dirname, './md-loader/index.js')
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
            limit: 10000,
            name: '[name].[hash:7].[ext]'
        }
     },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.ts','.js', '.vue', '.json', '.tsx'],
    alias: {
      'vue': '@vue/runtime-dom'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      favicon:'./doc/favicon.ico',
      inject: true,
    }),
    new VueLoaderPlugin(),
    new WebpackBar(),
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
  ],
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    compress: true,
    host: HOST,
    port: PORT,
    open: true,
    overlay: { warnings: false, errors: true },
    quiet: true
  },
})