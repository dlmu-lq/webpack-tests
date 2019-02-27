const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry:{
        "polyfills":"./src/polyfills.js", // 此入口文件在html中可移除，加入判断浏览器逻辑是否使用
        "app":"./src/index.ts",
        "app2": "./src/index2.js",
    },
    // devtool: "inline-source-map",
    devtool: "source-map",
    resolve: {
        extensions: [".js",".ts"]
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.tsx?$/,
                use:["ts-loader"],
                exclude:/node_moudles/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"],{root:path.resolve(__dirname,"../")}), // 打包前清除dist
        new HtmlWebpackPlugin({}),  // 创建html并自动导入打包js
    ],
    // 将node_modules里的资源打包到一个vendor.bundle.js文件
    optimization: {
        splitChunks:{
            cacheGroups: {
                vendor:{
                    test:/node_modules/,
                    name:"vendor",
                    enforce:true,
                    chunks: "initial"
                }
            }
        }
    }
};
