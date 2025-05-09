
const clock=document.querySelector(".clock")

function runclock(){
  var time=new Date()
  var hours=time.getHours()
  var minutes=time.getMinutes()
  var secounds=time.getSeconds()
  var weeks=time.getDay()
  var text="AM"
  if(hours>12){
    hours=hours-12
    text="PM"

  }
  else if(hours==0){
    hours=12
    text="AM"
  }
 

  hours=hours<10?"0"+hours:hours
  minutes=minutes<10?"0"+minutes:minutes
  secounds=secounds<10?"0"+secounds:secounds



  clock.innerHTML=`${hours} : ${minutes} :${secounds} : ${text}  : ${weeks}`
}
runclock()
setInterval(runclock,1000)