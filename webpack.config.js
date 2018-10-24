const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src/client");

var config = {
    output: {
        path: DIST_DIR,
        filename: "main.min.js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: SRC_DIR + "/index.html"
        })
    ]
};

module.exports = config;