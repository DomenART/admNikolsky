const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const version = require('./package.json').version;
const env = process.env.WEBPACK_ENV;
var HtmlWebpackPlugin = require('html-webpack-plugin')

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
            // exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        },{
            test: /\.s[a|c]ss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: {
                        minimize: env === 'production' ? true : false
                    }
                }, {
                    loader: "sass-loader"
                }]
            })
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
        }]
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            minimize: env === 'production' ? true : false
        }),
        new webpack.DefinePlugin({
            BUNDLED: true,
            VERSION: `'${version}'`,
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.source + '../index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            chunks: ['contacts'],
            template: PATHS.source + '../contacts.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'government.html',
            chunks: ['government'],
            template: PATHS.source + '../government.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'appeals.html',
            chunks: ['appeals'],
            template: PATHS.source + '../appeals.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'gallery.html',
            chunks: ['gallery'],
            template: PATHS.source + '../gallery.html'
        })
    ]

};