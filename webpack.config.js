const webpack = require('webpack');
const path = require('path');
const version = require('./package.json').version;
const env = process.env.WEBPACK_ENV;

const PATHS = {
    source: path.join(__dirname, 'src/'),
    build: path.join(__dirname, 'dist/')
}

// Main Settings config
module.exports = {
    entry: {
        main: PATHS.source + 'index.js'
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader'
        }, {
            test: /\.s[a|c]ss$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].css'
                }
            }, {
                loader: 'extract-loader'
            }, {
                loader: "css-loader",
                options: {
                    minimize: env === 'production' ? true : false
                }
            }, {
                loader: "sass-loader"
            }]
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'img/'
                }
            }]
        }, {
            test: /\.(eot|woff|ttf|otf)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'fonts/'
                }
            }]
        }, {
            test: /\.html$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }, {
                loader: 'extract-loader'
            }, {
                loader: 'html-loader'
            }]
        }]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: env === 'production' ? true : false
        }),
        new webpack.DefinePlugin({
            BUNDLED: true,
            VERSION: `'${version}'`,
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]

};