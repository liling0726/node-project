var date = new Date()
var timmerId = setTimeout(function(a,b){
    console.log(a,b)
    console.log(new Date()-date)
},0,3,4) 
console.log(timmerId)
/* setInterval(function(){
    var date1= new Date()
    console.log(date1-date)
    date = date1
}) */
