var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './GHRC.js',
    ],
    output: {
        path: '.', filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets:['react','es2015']
                }
            },
            {
                test: /(\.scss|\.css)$/,
                loaders: [
                    require.resolve('style-loader'),
                    require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    require.resolve('sass-loader') + '?sourceMap'
                ]
            }
        ]
    }
};
