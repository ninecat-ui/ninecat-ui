const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: {
    'ninecat-ui': './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, '../package'),
    publicPath: '/package/',
    library: 'ninecat-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // 此处就不需要使用style-loader了
      },
      {
        test: /\.scss$/i,
        exclude: /\.variables\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
      {
        test: /\.variables\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css'
    }),
    new CompressionPlugin({
      test: /\.(css|js)$/, // 正则进行压缩匹配
      minRatio: 0.8, // 压缩比例，满足的才会进行压缩。压缩后/压缩前，默认0.8。
    }),
  ],
}
