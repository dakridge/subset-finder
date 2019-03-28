const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',

    devServer: {
        contentBase     : `${__dirname}/dist`,
        index           : 'app.html',
        port            : 9000,
        disableHostCheck: true,
        headers         : {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        historyApiFallback: {
            rewrites: [
                { from: /./, to: '/app.html' },
            ],
        },
    },

    plugins: [
        new WebpackBuildNotifierPlugin({
            suppressSuccess: false,
            sound          : 'Purr',
            title          : 'Simpledip',
            logo           : path.resolve('.assets/images/logo/logo.png'),
        }),
        new webpack.DefinePlugin({ PRODUCTION: JSON.stringify(false) }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    output: {
        publicPath: '/',
        filename  : '[name].min.js',
        path      : path.resolve(__dirname, 'dist'),
    },
});
