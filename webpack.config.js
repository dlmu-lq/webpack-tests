const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    // mode:"production", // 默认即压缩
    mode:"development",
    entry:{
        "app":"./src/index.js",
        "app2": "./src/index2.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    // devtool: "inline-source-map",
    devtool: "source-map",
    devServer: {
        contendBase:'',
        hot:true
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin("dist"), // 打包前清除dist
        new HtmlWebpackPlugin({}),  // 创建html并自动导入打包js
        new webpack.NamedModulesPlugin(), // 热更新显示名字
        new webpack.HotModuleReplacementPlugin(), // 热更新替换
    ],
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
