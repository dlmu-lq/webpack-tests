const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common,{
    mode:"production",
    output: {
        filename: "[name].[chunkhash].js", // 注意 HMR 与 chunkhash不可同时使用 chunkhash使同一个chunk不同文件的hashid相同
        path: path.resolve(__dirname,"../dist")
    },
    plugins:[
        new webpack.HashedModuleIdsPlugin(), // 未改动的资源打包成功的文件名字hashid不变
    ]
});
