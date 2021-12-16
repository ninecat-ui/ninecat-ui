const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/dist/plugin').default;
const WebpackBar = require('webpackbar');
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const prodConfig = require(path.resolve(__dirname, './webpack.config.prod.js'))
const devConfig = require(path.resolve(__dirname, './webpack.config.dev.js'))

// commonConfig
const commonConfig = {
    optimization: {
        usedExports: true, // 标记出没有使用过的代码
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: true,
            })
        ],
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.md$/,
                use: [{
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
                    'babel-loader',
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
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 9 * 1024 // 默认8kb
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3ha|wav|flac|aac)(\?.*)?$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 9 * 1024 // 默认8kb
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json', '.tsx'],
        alias: {
            'vue': '@vue/runtime-dom'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            favicon: './doc/favicon.ico',
            inject: true,
        }),
        new WebpackBar(),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new VueLoaderPlugin(),
    ]
}

module.exports = (env = {}) => {
    const isProduction = env === 'production';
    console.log(env, '<===', isProduction, devConfig.entry);
    const config = isProduction ? prodConfig : devConfig
    const mergeConfig = merge(commonConfig, config)

    return smp.wrap(mergeConfig)
}