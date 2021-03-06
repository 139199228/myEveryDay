const path = require("path")
const server = {
    target:"node",
    entry:{
        app:path.join(__dirname,"../src/server-entry.js")
    },
    output:{
        path:path.join(__dirname,"../dist"),
        filename:"server-entry.js",
        publicPath:"/public/",
        libraryTarget:"commonjs2"
    },
    module:{
        rules:[
            {
                test:/.(js)$/,
                loader:'babel-loader',
                exclude:[
                    path.join(__dirname,"../node_modules")
                ]
            },
            {
                test:/.jsx$/,
                loader:"babel-loader"
            }
        ]
    }
}
module.exports = server