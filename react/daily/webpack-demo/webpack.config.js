const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            }

        ],
    },
    output: {
        path : path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: 'production'

}

// pr