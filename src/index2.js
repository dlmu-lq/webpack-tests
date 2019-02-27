import _ from "lodash"

console.log(_.join(["a","b"],"c"));

// 不同入口文件懒加载，与index.js
setTimeout(()=>{
    import("./util/print.js").then(module=>{
        module.default("import print from index2");
    })
},2005);
