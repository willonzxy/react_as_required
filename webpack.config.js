/*
 * @Author: willon 
 * @Date: 2019-01-05 14:40:46 
 * @Last Modified by: wilon
 * @Last Modified time: 2019-01-05 18:38:49
 */
/* const CleanWebpackPlugin = require('clean-webpack-plugin'); */
const path = require('path');
module.exports = {
    mode:'development', // 不写默认是prod
    entry:'./index.js',
    output:{
        filename:'[name].js',
        chunkFilename:'[name].js', //我不写这个chunkFilename 也是会生成一个chunk 1.js
        publicPath:'./dist/' // 设置基础路径 否则1.js 的加载路径会出错
    },
    module:{
        rules:[
            {
                test:/(\.js|\.jsx)$/,
                use:'babel-loader?cacheDirectory',
                exclude:path.resolve(__dirname,'node_modules')
            }
        ]
    },
    plugins:[
/*         new CleanWebpackPlugin(['./dist']) */
    ]
}