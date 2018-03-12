const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract')
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images'); 
const lintCSS = require('./webpack/css.lint');
const lintJS = require('./webpack/js.lint');
const babel = require('./webpack/babel');
const provideJS = require('./webpack/js.provide'); 
const fonts = require('./webpack/fonts');
const html = require('./webpack/html');

const paths = {
    src: path.join(__dirname, 'src/'),
    dist: path.join(__dirname, 'dist/')
};

const common = merge([
    {
        entry: {
            'index': paths.src + 'pages/index/index.js',
            'blog': paths.src + 'pages/blog/blog.js',
            'works': paths.src + 'pages/works/works.js',
            'about': paths.src + 'pages/about/about.js'
        },
        output: {
            path: paths.dist,
            filename: 'js/[name].js'
        },
        plugins: [
            new cleanWebpackPlugin('dist'),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
        ]
    },
    html(paths),
    provideJS(),
    pug(),
    images(),
    fonts(),
    lintCSS(),
    lintJS()
]);

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS(),
            babel(),
            uglifyJS(),
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