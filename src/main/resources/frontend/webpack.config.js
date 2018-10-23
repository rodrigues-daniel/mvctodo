
var path = require('path');


module.exports = [{
    name:"devlocal",
    entry: {
        index: './assets/js/index.js',
        bootstrap: './assets/js/bootstrap.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'../public/static/js')
    },module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    }
         
},{

    name:"devservidor",
    entry: {
        index: './assets/js/index.js',
        bootstrap: './assets/js/bootstrap.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'./dist/js')
},module: {
    rules: [
        {
            test: path.join(__dirname, '.'),
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }]
        }
    ]
}}];