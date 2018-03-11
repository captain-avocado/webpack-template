const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract')
const uglifyJS = require('./webpack/js.uglify');

const paths = {
    src: path.join(__dirname, 'src/'),
    dist: path.join(__dirname, 'dist/')
};

const common = merge([
    {
        entry: {
            'index': paths.src + 'pages/index/index.js',
            'blog': paths.src + 'pages/blog/blog.js'
        },
        output: {
            path: paths.dist,
            filename: 'js/[name].js'
        },
        plugins: [
            new htmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: paths.src + 'pages/index/index.pug'
            }),
            new htmlWebpackPlugin({
                filename: 'blog.html',
                chunks: ['blog', 'common'],
                template: paths.src + 'pages/blog/blog.pug'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    pug()
]);

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS(),
            uglifyJS()
        ]);
    } 
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass(),
            css()
        ])
    }
};