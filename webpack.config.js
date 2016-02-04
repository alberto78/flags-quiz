require('babel-polyfill');

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: __dirname + '/src/app.js',
    output: {
        path: 'dist',
        filename: 'app.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {presets: ['es2015']}
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css')
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                loader: 'file?name=font/[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.min.css'),
        new webpack.optimize.UglifyJsPlugin({
            mangle:false,
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = config;
