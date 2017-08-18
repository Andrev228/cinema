var webpack = require('webpack');

module.exports = {
    entry: "./client/src/main.jsx",
    output: {
        path: __dirname + '/public/javascripts/custom/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /public/]
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader',
                exclude: [/node_modules/, /public/]
            }, {
                test: /\.gif$/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            }, {
                test: /\.jpg$/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            }, {
                test: /\.png$/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            }, {
                test: /\.svg/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            }, {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /public/],
                query : {
                    presets:['react']
                }
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
};