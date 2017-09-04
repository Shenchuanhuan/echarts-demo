const path = require('path');
const webpack = require('webpack');
const HtmlWwbpackPlugin = require('html-webpack-plugin');
const BASE_PATH = path.join(__dirname, 'src');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: ['babel-loader']
            }, {
                test: /\.(css|scss|less)$/,
                use: ['css-loader', 'style-loader', 'sass-loader']
            }, {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new HtmlWwbpackPlugin({
            title: 'echarts-demo',
            inject: true,
            teplate: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
            Image: path.resolve(__dirname, `${BASE_PATH}/image`),
            Component: path.resolve(__dirname, `${BASE_PATH}/component`),
            Container: path.resolve(__dirname,`${BASE_PATH}/container`)
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 8060,
        hot: true
    }
}