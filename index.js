/*
 * @Author: willon 
 * @Date: 2019-01-05 14:41:35 
 * @Last Modified by: wilon
 * @Last Modified time: 2019-01-05 14:58:38
 */
const btn = document.getElementById('btn');
console.log(`this is main.js log`)
btn.onclick = function(){
    import(/* webpackChunkName: "foo" */'./foo.js').then(module=>{ // 注释添加chunkname
        const foo = module.default;
        console.log(foo())
    })
}