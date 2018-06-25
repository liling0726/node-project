process.stdin.resume()

process.on('SIGHUP',function(){
    console.log('Reloading configuration')
})
console.log('pID',process.pid)