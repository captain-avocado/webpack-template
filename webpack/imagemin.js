const imageminWebpackPlugin = require('imagemin-webpack-plugin').default;
// const imageminJpeg = require('imagemin-jpegtran');

module.exports = function() {
    return {
        plugins: [
            new imageminWebpackPlugin({ 
                test: 'images/**',
                optipng: {
                    optimizationLevel: 7
                },
                jpegtran: {
                    progressive: true
                }
             })
        ]
    }
}