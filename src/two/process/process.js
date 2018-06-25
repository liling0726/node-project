//操作命令行参数
var args = {
    '-h':displayHelp,
    '-r':readFile
}

function displayHelp(){
    console.log('Argument processor:',args)
}

function readFile(file){
    console.log('Reading',file)
    require('fs').createReadStream(file).pipe(process.stdout)
}

if(process.argv.length>0){
    process.argv.forEach(function(arg,index){
        if(args[arg]){
            console.log(arg)
            args[arg].apply(this,process.argv.slice(index+1))
        }
       
    })
}