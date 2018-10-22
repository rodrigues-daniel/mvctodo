
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
}}];