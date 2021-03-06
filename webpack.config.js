const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/main.js'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: 'pre',
                include: path.resolve('src'),
                use: [
                    'eslint-loader'
                ]
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.(jpg|png|gif|svg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    quiet: true
                }
            }
        })
    ]
}
