const start=document.querySelector(".start")
const stopbtn=document.querySelector(".stop")
const reset=document.querySelector(".reset")

 let hrs=mins=sec=ms=0,starttimer;
start.addEventListener("click",()=>{
   
starttimer=setInterval(()=>{
    ms++
    if(ms==100){
        sec++
        ms=0
    }
    if(sec==60){
        mins++
        sec=0
    }
    if(mins==60){
        hrs++
        mins=0
    }
 
    updatedisplay()
},10)


})

stopbtn.addEventListener("click",()=>{
    clearInterval(starttimer)



})


reset.addEventListener("click",()=>{
    hrs=mins=sec=ms=0

    updatedisplay()

})

function updatedisplay(){
    phrs=hrs<10?"0"+hrs:hrs
    pmins=mins<10?"0"+mins:mins
    psec=sec<10?"0"+sec:sec
    pms=ms<10?"0"+ms:ms


    document.querySelector(".hrs").innerText=hrs
    document.querySelector(".mins").innerText=mins
    document.querySelector(".sec").innerText=sec
    document.querySelector(".ms").innerText=ms

}