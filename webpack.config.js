const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        path: "./src/index.jsx"
    },
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test:/\.jsx?/, 
                exclude: /node_modules/,     
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    }    
};