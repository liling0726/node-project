
process.stdin.on('end', function() {
    process.stdout.write('end');
});

process.stdin.setEncoding('utf8');
//输入进入流模式（flowing-mode，默认关闭，需用resume开启），注意开启后将无法read到数据
process.stdin.resume();
process.stdin.on('data', function(chunk) {
    //var chunk = process.stdin.read();
    chunk=chunk.slice(0,-1);
    if(!chunk) {
        process.stdin.emit('end')
        return 
    }
    process.stdout.write('输入的内容为:'+chunk);
    
});
process.stdout.write('开始输入：');