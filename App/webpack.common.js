const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: `${__dirname}`,

    node: {
        fs: 'empty',
    },

    entry: {
        app   : ['@babel/polyfill', './src/index.js'],
        vendor: ['react', 'react-dom'],
    },

    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, './'),
        ],
        extensions: ['.js', '.styl', '.json'],
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test  : /[\\/]node_modules[\\/]/,
                    name  : 'vendor',
                    chunks: 'all',
                },
            },
        },
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            // { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

            {
                test   : /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use    : {
                    loader : 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-classes',
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/plugin-syntax-class-properties',
                            '@babel/plugin-proposal-object-rest-spread',
                        ],
                    },
                },
            },

            {
                test: /\.styl$/,
                use : [
                    { loader: 'style-loader' }, // creates style nodes from JS strings
                    { loader: 'css-loader', options: { modules: true } }, // translates CSS into CommonJS
                    { loader: 'stylus-loader' }, // stylus
                ],
            },

            { test: /\.svg$/, loader: 'react-svg-loader' },

            // build templates
            { test: /\.hbs$/, use: [{ loader: 'handlebars-loader' }] },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title         : 'App',
            filename      : 'app.html',
            chunks        : ['vendor', 'common', 'app'],
            template      : `${__dirname}/templates/app.hbs`,
            chunksSortMode: 'manual',
            hash          : true,
        }),
        new CopyWebpackPlugin([{ from: `${__dirname}/public/fonts/Metropolis/*.otf`, to: 'dist' }], {}),
        new CopyWebpackPlugin([{ from: `${__dirname}/assets/images/**/*`, to: 'dist' }], {}),
        new CopyWebpackPlugin([{ from: `${__dirname}/assets/icons/**/*`, to: 'dist' }], {}),
    ],
};
