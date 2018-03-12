const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(paths) {
    return {
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
            new htmlWebpackPlugin({
                filename: 'works.html',
                chunks: ['works', 'common'],
                template: paths.src + 'pages/works/works.pug'
            }),
            new htmlWebpackPlugin({
                filename: 'about.html',
                chunks: ['about', 'common'],
                template: paths.src + 'pages/about/about.pug'
            }),
        ]
    };
};