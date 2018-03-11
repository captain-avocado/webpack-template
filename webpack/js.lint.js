module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                }
            ]
        }
    };
};
