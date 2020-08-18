const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const clientConfig = {
    target: 'node',
    devtool: 'none',
    entry: './src/server',
    output: {
        filename: 'server.js',
        path:path.resolve(__dirname,'./dist')
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            { test: /\.css$/, use: ['isomorphic-style-loader','css-loader?modules'] }
        ]
    }
}

module.exports = merge(baseConfig, clientConfig)