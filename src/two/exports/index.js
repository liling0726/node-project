
//默认存在 var exports = module.exports = {};
// 每个js文件一创建，都有一个var exports = module.exports = {};，使exports和module.exports都指向一个空对象。
// module是全局内置对象，exports是被var创建的局部对象。
// module.exports和exports所指向的内存地址相同

/* console.log(exports)
console.log(module.exports)
console.log(exports == module.exports)
console.log(exports === module.exports) */

var module = require('./module')

//var fs = require('fs')
console.log(module.id)
module.test1()
module.test()


//console.log(require.resolve('fs'))
