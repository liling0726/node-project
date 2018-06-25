/* console.log('__dirname',__dirname)
console.log('__filename',__filename) */

var path = require('path')

// 格式化路径
console.log('normalization : ' + path.normalize('../test/test1//2slashes/1slash/./tab/'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash','tab','../..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('./a','test.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));

//是否是绝对路径
console.log('isAbsolute',path.isAbsolute(path.resolve('./a','test.js')))

//返回路径中代表文件夹的部分，同 Unix 的dirname 命令类似
console.log('dirname',path.dirname('/test/test1//2slashes/1slash/main.js'))