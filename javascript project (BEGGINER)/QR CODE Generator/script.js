


let imgBox=document.querySelector(".imgBox")
let QRimg=document.querySelector(".QRimg")
let QRtext=document.querySelector(".input-text")

function generateQR(){

    if(QRtext.value.length > 0){
        QRimg.src="  https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+QRtext.value

        imgBox.classList.add("show-img")
      }
      else{
QRtext.classList.add("error")
setTimeout(()=>{
    
QRtext.classList.remove("error")
},1000)
      }
    }
