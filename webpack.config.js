const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    src: path.join(__dirname, 'src/'),
    dist: path.join(__dirname, 'dist/')
};

module.exports = {
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
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    }
};