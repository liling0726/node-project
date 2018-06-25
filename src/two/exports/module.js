//只是将属性/方法挂载在module.exports./exports.上时，取决于顺序，最后的覆盖前面的
//只要exports和module.exports再次赋值，则解绑之间的关系
//exports = {}
exports.id='通过exports导出id'

exports.test=function(){
    console.log('exports方法test')
}
module.exports.test=function(){
    console.log('module.exports方法test')
}

module.exports.test1=function(){
    console.log('module.exports方法test1')
}
exports.test1=function(){
    console.log('exports方法test1')
}

//先前所有的exports和module.exports无效
/* module.exports={
    id:'module.exports属性',
    test1:module.exports.test1,
} */
//module.exports.id='再次修改，module.exports属性'
//exports.id='通过exports导出id'
