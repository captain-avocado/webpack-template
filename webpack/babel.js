const path = require('path');

module.exports = function() {
    return {
        module: {
            rules: [
              {
                test: /\.js$/,
                exclude: path.join(__dirname, 'node_modules/'),
                use: {
                  loader: 'babel-loader',
                  options: {
                    cacheDirectory: path.join(__dirname,'node_modules/.cache/babel-loader'),
                    presets: ['babel-preset-env'],
                  }
                }
              }
            ]
          }
    };
};