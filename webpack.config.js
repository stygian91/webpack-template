const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
    new ExtractTextPlugin('bundle.css')
];

const isDev = process.env.NODE_ENV !== 'production';

if (!isDev) {
    plugins.push(new UglifyJSPlugin());
}

const devtool = isDev ? 'eval' : false;

module.exports = {
    entry: [
        'babel-polyfill',
        './js/bootstrap.js'
    ],

    output: {
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            require('@babel/plugin-proposal-object-rest-spread'),
                            require('@babel/plugin-proposal-class-properties'),
                        ],
                    }
                }
            },

            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },

    plugins,

    devtool,
}
