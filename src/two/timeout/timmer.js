var date = new Date()
var timmerId = setTimeout(function(a,b){
    console.log('参数:',a,b)
    console.log('时间：',new Date()-date)
},10,3,4) 
//timmerId.unref()
//timmerId.ref()
console.log("timmerId",timmerId)
/* setInterval(function(){
    var date1= new Date()
    console.log(date1-date)
    date = date1
}) */
console.dir(process.memoryUsage())
