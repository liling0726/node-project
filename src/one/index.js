var CountStream = require('./countStream')
var countStream = new CountStream()
var https = require('https')
//获取https:www.baidu.com中内容
https.get('https://www.baidu.com', function (res) {
    res.pipe(countStream)
})

countStream.on('total',function(count){
    console.log('total matches',count)
})