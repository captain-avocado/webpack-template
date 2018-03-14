module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(otf|ttf|woff|woff2)$/,
                    loader: 'file-loader',
                    options: {
                        path: '../../assets/fonts/**/[name].[ext]',
                        name: 'fonts/[name].[ext]',
                    }
                }
            ]
        }
    };
};