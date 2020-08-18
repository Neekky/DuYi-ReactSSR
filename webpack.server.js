const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const clientConfig = {
    target: 'node',
    devtool: 'none',
    entry: './src/server',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            { test: /\.css$/, use: ['isomorphic-style-loader', 'css-loader?modules'] },
            {
                test: /\.(png)|(jpg)|(gif)|(jpeg)$/, use: [{
                    loader: 'file-loader',
                    options: {
                        name:'img/[name].[hash:5].[ext]',
                        emitFile: false
                    }
                }]
            }
        ]
    }
}

module.exports = merge(baseConfig, clientConfig)