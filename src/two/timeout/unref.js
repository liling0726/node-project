function monitor(){
    console.log(process.memoryUsage())
}
var id= setInterval(monitor,1000)
id.unref()

setTimeout(function(){
    console.log('Done')
},2000)
/* var timer1 = setInterval(function(){
    console.log(new Date, 1);
  }, 1000);
  // setInterval=>uv_timer_start(timer1)  active_handles = 1
  
  timer1.unref()
  // uv_unref(timer1) active_handles = 0
  
  var timer2 = setInterval(function(){
    console.log(new Date, 2);
  }, 1000);
  // setInterval=>uv_timer_start(timer2) active_handles = 1
  
  timer2.unref() */
  // uv_unref(timer2) active_handles = 0
  
  // ative_handles == 0 => exit process