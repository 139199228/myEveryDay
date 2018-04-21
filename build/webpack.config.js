const path = require("path")
const HTMLPlugin = require('html-webpack-plugin')
const config = {
    entry:{
        app:path.join(__dirname,"../src/app.js")
    },
    output:{
        path:path.join(__dirname,"../dist"),
        filename:"[name][hash].js",
        publicPath:""
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
    },
    plugins:[
        new HTMLPlugin()
    ]
}






module.exports = config