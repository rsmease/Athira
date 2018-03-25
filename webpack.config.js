const path = require('path');
const webpack = require("webpack");

const plugins = []; // if using any plugins for both dev and production


module.exports = {
    context: __dirname,
    entry: './react/root.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    plugins: plugins,
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    devtool: 'source-map'
};