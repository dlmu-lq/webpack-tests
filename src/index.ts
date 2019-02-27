import _ from "lodash"

function test() {
    console.log(_.join(["index"],2));
    let button = document.createElement("button");
    button.innerHTML = "Lazy Loading";
    button.onclick = e => {
        import("./util/print.js").then(module=>{
            module.default("import from Lazy Loading button.");
        })
    };
    document.body.appendChild(button);
}
test();
