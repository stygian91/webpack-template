const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
    new ExtractTextPlugin('bundle.css')
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(new UglifyJSPlugin());
}

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
                        presets: ['es2015'],
                        plugins: [require('babel-plugin-transform-object-rest-spread')]
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

    plugins
}
