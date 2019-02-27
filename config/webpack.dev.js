const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common,{
    mode:"development",
    output: {
        filename: "[name].[hash].js", // 注意 HMR 与 chunkhash 不可同时使用 开发模式下使用hash
        path: path.resolve(__dirname,"dist")
    },
    // devtool: "inline-source-map",
    devtool: "source-map",
    devServer: {
        port:90,
        // contendBase:'./dist', // ?
        hot:true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(), // 热更新显示名字
        new webpack.HotModuleReplacementPlugin(), // 热更新替换
    ]
});
