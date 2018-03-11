const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');

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
            filename: '[name].js'
        },
        plugins: [
            new htmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: paths.src + 'pages/index/index.pug'
            }),
            new htmlWebpackPlugin({
                filename: 'blog.html',
                chunks: ['blog'],
                template: paths.src + 'pages/blog/blog.pug'
            })
        ]
    },
    pug()
]);

module.exports = function(env) {
    if (env === 'production') {
        return common;
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