process.stdin.resume()

process.on('SIGHUP',function(){
    console.log('Reloading configuration')
})
/* process.on('exit',function(code){
    console.log('将要退出程序',code)
})

process.exit(1) */
console.log('pID',process.pid)
