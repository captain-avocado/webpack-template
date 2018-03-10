const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};

module.exports = {
    entry: paths.src + '/index.js',
    output: {
        path: paths.build,
        filename: '[name].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Webpack app'
        })
    ]
};