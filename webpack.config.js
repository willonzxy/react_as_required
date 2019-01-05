/*
 * @Author: willon 
 * @Date: 2019-01-05 14:40:46 
 * @Last Modified by: wilon
 * @Last Modified time: 2019-01-05 14:55:51
 */
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    mode:'production', // 不写默认是prod
    entry:'./index.js',
    output:{
        filename:'[name].js',
        chunkFilename:'[name].js', //我不写这个chunkFilename 也是会生成一个chunk 1.js
        publicPath:'./dist/' // 设置基础路径 否则1.js 的加载路径会出错
    },
    plugins:[
        new CleanWebpackPlugin(['./dist'])
    ]
}